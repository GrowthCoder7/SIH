import Image from "next/image";
import PanelTop from "./components/PanelTop"

export default function () {
  return( 
  <>
    <div className="main min-h-screen min-w-full">
      <div className="hero-image h-[35rem] flex relative rounded-md">
        <Image src={'/image1.png'} className="rounded-md opacity-70 object-cover w-full h-full" width={1000} height={1500}/>
        <div className="absolute w-screen text-center font-extrabold my-[13rem] text-white text-6xl">
          <h1>Algae  Based</h1>
          <h1>Photo Reactor</h1>
        </div>
      </div>
      
      <div className="graphs w-full px-10 mt-5 gap-3 h-[40.5rem]">
        <div className="flex font-semibold justify-between px-8">
        <div className="AQI text-center h-[15rem] w-[16rem]">
          <Image src={"/image3.jpg"} className="object-cover w-full h-full" width={302} height={256} />
          <h3>Air Quality Index</h3>
        </div>
        
        <div className="ratio text-center h-[282px] w-[408px]">
          <Image src={"/img6.png"} className="object-contain w-full h-full" width={1000} height={1000} />
          <h3>CO2 intake and Output Ratio</h3>
        </div>
        </div>

        <div className="density font-semibold border-2 mt-8 mx-auto h-[15.5rem] w-[25.5rem] text-center">
          <Image src={"/image5.png"} width={452} height={310}/>
          <h3>Algae Density</h3>
        </div>
      </div>
      <div className="info border-2 my-5 px-3 border-red-600">
      
      </div>
    </div>
    <PanelTop/>
  </>);
}
