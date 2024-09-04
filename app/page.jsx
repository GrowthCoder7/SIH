import Image from "next/image";

export default function () {
  return( 
  <>
    <div className="main min-h-screen min-w-full">
      <div className="hero-image h-[35rem] flex relative rounded-md">
        <Image src={'/image1.png'} className="rounded-md opacity-70 object-cover w-full h-full" width={1000} height={1500}/>
        <div className="absolute font-extrabold ml-[33rem] my-[13rem] text-white text-6xl">
          <h1 className="align-center">Algae  Based</h1>
          <h1>Photo Reactor</h1>
        </div>
      </div>
      <div className="graphs grid grid-cols-2 w-screen px-5 mt-5 gap-3 align-center min-h-[260px] border-black border-2">
        <div className="AQI border-2 border-purple-600 text-center w-1/2">
          <Image src={"/image3.jpg"} className="object-cover w-full h-full" width={302} height={256} />
        </div>
        
        <div className="ratio border-2 border-purple-600 text-center w-1/2">
          <Image src={"/image4.jpg"} className="object-cover w-[1024px] h-full" width={302} height={256} />
        </div>

        <div className="density border-2 border-purple-600 text-center">
          <Image src={"/image5.png"} width={452} height={290}/>
        </div>
      </div>
      <div className="info border-2 my-5 px-3 border-red-600">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tenetur beatae laboriosam!</p>
      </div>
    </div>
  </>);
}
