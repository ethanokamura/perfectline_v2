"use client"

import { Section } from "@/src/interfaces/section";
import Link from "next/link";
import style from "./section-list.module.css";
import { usePathname } from "next/navigation";

type Props = {
  course: string;
  sections: Section[];
};

export default function SectionList({ course, sections }: Props) {
  const pathname = usePathname();
  return (
    <nav className={style.nav}>
      <ul className={style.links}>
        {sections.map((section) => {
          const isActive = pathname === `/courses/${course}/${section.slug}`;
          return (
            <li key={section.slug} className={`${isActive ? style.active : ''}`}>
              <Link href={`/courses/${course}/${section.slug}`} className="block p-2 hover:bg-gray-700">
                {section.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
