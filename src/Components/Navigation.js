import { Link } from "react-router-dom";
import './Navlink.css';

const Navigation=()=> {

  const icon_style = {
    height:35,
  }
  // defining style for the navbar and using the defined const anywhere in this page within {} curly bracket.
  return (
    <>
      <nav className="container mx-auto flex item-center justify-between py-4">
        <Link to="/">
        {/* <img style={{ height:45 }} src="Icon/logo.png" alt="Logo" /> */}
        {/* another way to use the css by putting in double curly bracket. */}
        <img className="bg-white" style={icon_style} src="Icon/images.jpg" alt="Logo" />
        </Link>
        <ul className="navigation">
          <li><Link to="/">Home</Link></li>
          <li className="navleft"><Link to="/About">About</Link></li>
          <li className="navleft"><Link to="/ContactUs">ContactUs</Link></li>
        </ul>
      </nav>
    </>
  );
}
export default Navigation;
