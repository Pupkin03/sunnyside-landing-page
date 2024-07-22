import "./Nav.css";
import bgImg1 from '../assets/image-header.jpg';
import { GoArrowDown } from "react-icons/go";





const Navbar = () => {
return (
<div>        
    <div className="bg-cover h-screen" style={{backgroundImage: `url(${bgImg1})`}}>
        <ul className="">
            <li className="suntext">sunnyside</li>
            <div className="navtext">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li className="context">CONTACT</li>
            </div>
        </ul>
        <p className="wetext">WE ARE CREATIVES</p>
        <p className="arrow"><GoArrowDown /></p> 
    </div>
</div>

)
}

export default Navbar

