import { notFound } from 'next/navigation';
import { getPageBySlug, getCourseSections } from '@/src/lib/api';
import SectionList from "@/src/app/_components/markdown/section-list";
import { SectionHeader } from '@/src/app/_components/markdown/section-header';
import { SectionBody } from '@/src/app/_components/markdown/section-body';

export default async function SectionPage({ params }: { params: Promise<{ course: string, section: string }> }) {
  const { course, section } = await params;
  const page = await getPageBySlug(course, section);
  const sections = await getCourseSections(course);
  if (!page) {
    return notFound();
  }
  return (
    <main >
      {/* List of pages */}
      <SectionList course={course} sections={sections}/>
      {/* Header */}
      <SectionHeader title={page.title} description={page.description} />
      <hr/>
      {/* Body */}
      <SectionBody content={page.content} />
    </main>
  );
}
