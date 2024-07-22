import { FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";

const Lastbar = () => {
  return (
    <div className="bg-emerald-200">
        <div className="pt-20 flex justify-center text-lime-950 text-4xl font-semibold font-mono ">sunnyside</div>
        <div className="flex justify-center gap-20 text-lime-950 font-semibold mt-7">
            <p>About</p>
            <p className="lastp">Services</p>
            <p>Projects</p>
        </div>
        <div className="flex justify-center gap-4 mt-20 pb-10">
        <FaInstagram />
        <ImFacebook2 />
        <FaTwitterSquare />
        <FaPinterestSquare />
        </div>
    </div>
  )
}

export default Lastbar