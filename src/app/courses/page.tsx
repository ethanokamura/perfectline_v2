import Link from "next/link.js";
import { formatCourses } from "@/lib/formatter";
import { Course } from "@/src/interfaces/course";
import Card from "../_components/card";
import style from "./course-list.module.css";
import CourseListHeader from "./course-list-header";

async function getCourses(): Promise<Course[]> {
  const data = await fetch('http://localhost:3000/api/courses').then((res) => res.json());
  return data.courses; // Extract courses array
}

export default async function CourseListPage() {
  const courses: Course[] = await getCourses();
  const formattedCourses = formatCourses(courses);

  return (
    <main className={style.main}>
      <CourseListHeader title="PerfectLine" subtitle="Courses" description="A list of courses we offer:" />
      <div className={style.courseList}>
        {formattedCourses.map((course: Course) => (
          <Card course={course} />
        ))}
      </div>
    </main>
  );
}