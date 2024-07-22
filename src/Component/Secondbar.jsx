import "./Second.css";
import eggImage from '../assets/image-transform.jpg';

const Secondbar = () => {
    return(
        <div className='flex'>
        <div className='eggtext'>
            <h1 className="text-3xl font-bold font-mono ">Transform your <br/> brand</h1>
            <br/>
            <h4 className="text-xs">We are a full-service creative agency specializing in<br/>
            helping brands grow fast. Engage your client through<br/>
            compelling visuals that do most of the marketing for you</h4>
            <br/>
            <p className="border-b-yellow-600">LEARN MORE</p>
        </div>
            <img className="egg" src={eggImage}/>
        </div>
    )
} 

export default Secondbar

