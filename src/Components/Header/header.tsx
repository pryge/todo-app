import searchIcon from "../../assets/icons/magnifying-glass-light.svg";
import logoIcon from "../../assets/icons/evernote.png"
import { getFormattedDate } from "../../utils/utils";
import  "./header.style.scss";

function Header() {
  const { day, full } = getFormattedDate();

  return (
    <div className="header">
      <div className="header__logo">
        <img src={logoIcon} />
      </div>
      <div className="header__search">
        <input type="text" className="header__search--input" placeholder="Search your todo here..."></input>
        <button className="header__search--button">
          <img src={searchIcon} />
        </button>
      </div>
      <div className="header__date">
        <div className="header__date--day">{day}</div>
        <div className="header__date--full">{full}</div>
      </div>
    </div>
  );
}

export default Header;
