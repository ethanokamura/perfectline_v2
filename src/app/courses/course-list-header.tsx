import styles from "./course-list.module.css"

type Props = {
  title: string;
  subtitle: string;
  description: string;
};

export default async function CourseListHeader({ title, subtitle, description }: Props) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>{description}</h3>
    </header>
  );
}

