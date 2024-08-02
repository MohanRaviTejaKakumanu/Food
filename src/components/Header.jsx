import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="head">
      <img className="logo-img" src={LOGO_URL}></img>
      <div className="navigation">
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
