import Link from "next/link";
import { Course } from "@/src/interfaces/course";
import style from "./card.module.css";
import Image from "next/image";

type Props = {
  course: Course
};

export default async function Card({ course }: Props) {
  return (
    <div className={style.card}>
      <Link href={`/courses/${course.course}/intro`}>
        <Image 
          src={course.img}
          width={320}
          height={180}
          alt="PerfectLine Logo"
        />
        <div className={style.data}>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
        </div>
      </Link>
    </div>
  );
}
