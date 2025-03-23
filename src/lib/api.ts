import { Page } from "@/src/interfaces/page";
import { Section } from "@/src/interfaces/section";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "content", "courses");

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

export function getPageBySlug(course: string, section: string): Page | null {
  const fullPath = join(postsDirectory, course, `${section}.md`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: `${course}/${section}`, content } as Page;
}

export function getAllPages(): Page[] {
  const slugs = getPageSlugs();

  return slugs
    .map((slug) => {
      const [course, section] = slug.split("/");
      if (!course || !section) return null;
      return getPageBySlug(course, section);
    })
    .filter((page): page is Page => page !== null) // Type guard to remove null values
    .sort((a, b) => (a.order > b.order ? -1 : 1));
}

export function getCourseSections(course: string): Section[] {
  const slugs = getPageSlugs();

  return slugs
    .filter((slug) => slug.startsWith(`${course}/`)) // Keep only sections for this course
    .map((slug) => {
      const section = slug.split("/")[1]; // Extract section name
      const page = getPageBySlug(course, section);
      if (!page) return null;

      return {
        title: page.title || section, // Use metadata title or fallback to section name
        slug: section,
        order: page.order,
      } as Section;
    })
    .filter((section) => section !== null)
    .sort((a:Section, b:Section) => a.order - b.order)
    .map((section) => section  as Section)
}
