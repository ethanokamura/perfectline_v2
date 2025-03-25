import { notFound } from 'next/navigation';
import { getInfoPageBySlug } from '@/src/lib/api';
import { SectionHeader } from '@/src/app/_components/markdown/section-header';
import { SectionBody } from '@/src/app/_components/markdown/section-body';

export default async function AboutPage() {
  const page = await getInfoPageBySlug("about");
  if (!page) {
    return notFound();
  }
  return (
    <main >
      {/* Header */}
      <SectionHeader title={page.title} description={page.description} />
      <hr/>
      {/* Body */}
      <SectionBody content={page.content} />
    </main>
  );
}
