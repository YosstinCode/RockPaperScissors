import Score from "../score/Score";
import style from "./Header.module.css"

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.headerTitle}>
        <span className="header__title__rock">Rock</span>
        <span className="header__title__paper">Paper</span>
        <span className="header__title__scissors">Scissors</span>
      </h1>
      <Score />
    </header>
  );
};

export default Header;
