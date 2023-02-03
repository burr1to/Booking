import "./css/layout.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <span
          className='logo'
          onClick={() => {
            nav("/");
          }}
        >
          Hotels and Hoes
        </span>
        <div className='navItems'>
          <button className='navButton'>Register</button>
          <button className='navButton'>Login</button>
        </div>
      </div>
    </div>
  );
}
