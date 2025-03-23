import styles from './markdown-styles.module.css';

type Props = {
  title: string;
  description: string;
};

export function SectionHeader({ title, description }: Props) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}