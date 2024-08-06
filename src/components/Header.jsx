import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="head">
      <img className="logo-img" src={LOGO_URL}></img>
      <div className="navigation">
        <div className="nav-items">
          <ul className="link">
            <li>
              <Link to={"/"} className="link">
                Home
              </Link>
            </li>

            <li>
              <Link to={"/about"} className="link">
                About
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="link">
                Contact
              </Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
