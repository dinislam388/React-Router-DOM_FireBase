import { NavLink } from "react-router-dom";
import logo from "./logo (2).png"
import "./NavBar.css"
const NavBar = () => {
    return (
        <div>
            <>
            <div>
            <div className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
                <div className="navBar">
                    <ul>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/users'>Users</NavLink>
                        <NavLink to='/resume'>Resume</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                        <NavLink to='/login'>LogIn</NavLink>
                        <NavLink to='/signup'>SignUp</NavLink>
                    </ul>
                </div>
           </div>
            </div>
        </>
        </div>
    );
};

export default NavBar;
