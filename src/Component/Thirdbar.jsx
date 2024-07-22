import cupImage from "../assets/image-stand-out.jpg";

const Thirdbar = () => {
  return (
    <div className="flex">
        <img className="cup" src={cupImage}/>
       <div className="pl-40 pt-40">
        <h1 className="text-3xl font-bold font-mono">Stand out to the right <br/> audience</h1>
        <br/>
        <h4 className="text-xs">Using a collaborative formula of designers, researchers, <br/>
        photographers, videographers and copywriters, we`ll <br/>
        build and extend your brand in digital places.</h4>
        <br/>
        <p>LEARN MORE</p>
       </div>
    </div>
  )
}

export default Thirdbar