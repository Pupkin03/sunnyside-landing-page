import firstImg from "../assets/image-graphic-design.jpg";
import secImg from "../assets/image-photography.jpg";

const Forthbar = () => {
  return (
    <div className="flex h-screen">
        <div className="bg-cover w-screen" style={{backgroundImage: `url(${firstImg})`}}>
    <p className="justify-center flex text-3xl font-bold font-mono pt-96 text-center">
    Graphic Design</p>
    <br/>
    <br/>
    <p className="justify-center text-l flex  text-center">
    Great design you memorable. We deliver <br/>
    artwork that underscores your brand message <br/>
    and captures potential clients attention.</p>
        </div>
        <div className=" bg-cover w-screen pl-36" style={{backgroundImage: `url(${secImg})`}}>
        <p className="justify-center flex text-3xl font-bold font-mono pt-96 text-center">
    Photography</p>
    <br/>
    <br/>
    <p className="justify-center text-l flex  text-center">
    Increase your credibility by getting the most<br/>
    stunning, high-quality photos that improve your<br/>
    business image</p>
        </div> 
    </div>
  )
}

export default Forthbar


