import Account from "../Account/Account";
import SearchModal from "../SearchModal/SearchModal";
import { useStateContext } from "../../HBOProvider";
import Link from "next/link";

const Header = (props) => {
  const globalState = useStateContext();

  return (
    <header
      className={`top-header ${
        globalState.accountMenuOpen || globalState.sideNavOpen
          ? "top-header--menu-open"
          : ""
      }`}
    >
      <div className="top-header__left-side">
        <div
          onClick={() => globalState.setSideNavOpen(true)}
          className="top-header__menu-btn"
        >
          <i className="fas fa-bars" />
        </div>
        <div
          onClick={() => globalState.setSearchOpen(true)}
          className="top-header__search-btn"
        >
          <i className="fas fa-search" />
        </div>
      </div>
      <Link href="/">
        <a>
          <div className="top-header__logo"></div>
        </a>
      </Link>

      <div
        onClick={() =>
          globalState.setAccountMenuOpen(!globalState.accountMenuOpen)
        }
        className="top-header__account"
      >
        <img
          src="https://images.generated.photos/B7CJLWXHEhr73EmhhiWyTK-WT39VwobNNqwknL-vwUg/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/NzY1NDcuanBn.jpg"
          alt=""
          className="top-header__user-img"
        />
        <div className="top-header___user-name">Alessya</div>
      </div>
      <Account />
      <SearchModal />
    </header>
  );
};

export default Header;
