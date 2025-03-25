import { Page } from "@/src/interfaces/page";
import { InfoPage } from "@/src/interfaces/info-page";
import { Section } from "@/src/interfaces/section";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { markdownToHtml } from "./markdownToHtml";

const postsDirectory = join(process.cwd(), "content", "courses");
const infoDirectory = join(process.cwd(), "content", "info");

export function getPageSlugs(): string[] {
  function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      const fullPath = join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        getAllFiles(fullPath, arrayOfFiles);
      } else if (file.endsWith(".md")) {
        arrayOfFiles.push(fullPath.replace(`${postsDirectory}/`, "").replace(".md", ""));
      }
    });

    return arrayOfFiles;
  }

  return getAllFiles(postsDirectory);
}

export async function getInfoPageBySlug(slug: string): Promise<InfoPage | null> {
  const fullPath = join(infoDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  const htmlContent = await markdownToHtml(content);

  return { ...data, slug: slug, content: htmlContent } as InfoPage;
}


export async function getPageBySlug(course: string, section: string): Promise<Page | null> {
  const fullPath = join(postsDirectory, course, `${section}.md`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  const htmlContent = await markdownToHtml(content);

  return { ...data, slug: `${course}/${section}`, content: htmlContent } as Page;
}

export async function getCourseSections(course: string): Promise<Section[]> {
  const slugs = await getPageSlugs();

  // Filter only sections belonging to the given course
  const filteredSlugs = slugs.filter((slug) => slug.startsWith(`${course}/`));

  // Fetch all sections asynchronously
  const sections = await Promise.all(
    filteredSlugs.map(async (slug) => {
      const section = slug.split("/")[1]; // Extract section name
      const page = await getPageBySlug(course, section);
      if (!page) return null;

      return {
        title: page.title || section, // Use metadata title or fallback to section name
        slug: section,
        order: page.order,
      } as Section;
    })
  );

  // Remove null values, sort by order, and return
  return sections
    .filter((section): section is Section => section !== null) // Type guard to remove nulls
    .sort((a, b) => a.order - b.order);
}
