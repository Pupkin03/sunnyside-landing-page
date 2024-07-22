import photo1 from "../assets/image-emily.jpg";
import photo2 from "../assets/image-thomas.jpg";
import photo3 from "../assets/image-jennie.jpg";

const Fifthbar = () => {
return (
    <div>
        <div>
            <h1 className="flex justify-center pt-32 pr-12 text-2xl font-light drop-shadow-lg">CLIENT TESTIMONIALS</h1>
    </div>
        <div className="flex gap-72 mt-20 justify-center pr-14">
            <img className="rounded-full w-16" src={photo1}></img>
            <img  className="rounded-full w-16" src={photo2}></img>
            <img  className="rounded-full w-16" src={photo3}></img>
        </div>
        <div className="mt-10 flex gap-10 justify-center pr-8">
        <div className=" flex-col text-center">We put our trust in Sunnyside and they <br/>
        delivered, making sure our needd were met <br/>
        and deadlines were always hit.
        <h1 className="mt-9 font-bold">Emily R.</h1>
        <p className="mt-3 text-xs">Marketing Director</p>
        </div>    
        <div className="text-center">Sunnyside's enthusiasm coupled with their<br/>
        keen interest in our brand's success made it<br/>
        a satisfying and enjoyable experience.
        <h1 className="mt-9 font-bold">Thomas S.</h1>
        <p className="mt-3 text-xs">Chief Operating officer</p>
        </div>
        <div className="text-center">Incredible end result! Our sales increased <br/>
        over 400% when we worked with Sunnyside.<br/>
        Highly recomended!
        <h1 className="mt-9 font-bold">Jennie F.</h1>
        <p className="mt-3 text-xs">Business Owner</p>
        </div>
        </div>
    </div>
    
)
}

export default Fifthbar