import Topbar from "./components/Topbar";
import Image from "next/image";

export default function () {
  return( 
  <>
    <div className="main min-h-screen min-w-full">
      <Topbar/>
      <div className="hero-image border-2 border-black h-[35rem] rounded-r-md">
        <Image src={'/image.png'} className="object-cover w-screen h-[34rem] pt-2" width={1000} height={1000}/>
      </div>
      <div className="graphs grid grid-cols-2 w-screen px-5 mt-5 gap-3 align-center h-52 border-black border-2">
        <div className="AQI border-2 border-purple-600 text-center w-1/2">aqi</div>
        <div className="ratio border-2 border-purple-600 text-center w-1/2">ratio</div>
        <div className="density border-2 border-purple-600 text-center">density</div>
      </div>
      <div className="info border-2 my-5 px-3 border-red-600">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tenetur beatae laboriosam!</p>
      </div>
    </div>
  </>);
}
