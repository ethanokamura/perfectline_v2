import style from './loading.module.css';

// Loading Spinner
export default function Loading() {
  return <div className={style.container}><div className={style.loader}></div></div>;
}
