import { notFound } from 'next/navigation';
import { getPageBySlug, getCourseSections } from '@/src/lib/api';
import SectionList from "@/src/app/_components/section-list";
import { SectionHeader } from '@/src/app/_components/section-header';
import SectionBody from '@/src/app/_components/section-body';

export default async function Page({ params }: { params: Promise<{ course: string, section: string }> }) {
  const { course, section } = await params;
  let page = getPageBySlug(course, section);
  const sections = getCourseSections(course);
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
