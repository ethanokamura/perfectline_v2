import React from 'react';
import { Course } from '@/src/interfaces/course'; // Assuming Course interface
import Card from '../_components/card';
import style from './course-list.module.css';
import Header from '../_components/header';

async function getCourses() {
  const data = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/courses', {
    cache: "no-cache",
  }).then((res) => res.json());
  if (data == null) {
    throw new Error('Failed to fetch courses');
  }
  return data.courses;
}

export default async function CourseListPage() {
  const courses: Course[] = await getCourses();

  return (
    <main className={style.main}>
      <Header title="PerfectLine" subtitle="Courses" description="A list of courses we offer:" />
      <div className={style.courseList}>
        {courses.map((course: Course) => (
          <Card course={course} key={course.course} />
        ))}
      </div>
    </main>
  );
}
