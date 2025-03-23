import style from './loader.module.css';

type Props = {
  show: boolean;
};

// Loading Spinner
export default function Loader({ show } : Props) {
  return show ? <div className={style.loader}></div> : null;
}
