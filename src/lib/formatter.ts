import { Course } from "@/interfaces/course";

export function formatCourses(courses: Course[]) {
  return courses
    .filter((course) => course.published)
    .sort((a, b) => a.order - b.order);
}
