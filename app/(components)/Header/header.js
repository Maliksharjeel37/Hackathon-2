import Navber from "../navber";
import Button from "../button";
import Image from "next/image";
export default function header() {
  return (
    <div className=" bg-lime-100">
        <div><Navber /></div>
        <div className="flex">
        <div className="mt-56 mx-32 my-52 mb-3.5">
<h1 className= " text-justify  , font-bold   text-7xl ">We Are Committed</h1>
<h1 className=", text-justify   , font-bold text-7xl ">
To Your Health
</h1>
<p className=" , text-justify , font-medium , mt-10 mb-12 text-xl">
It is a established fact that a reader will be<br/> distracted by the content of a page when looking at this layout
</p>
<Button text={"Meet a Doctor"}/>
</div>
<div>
<Image
className=" p-5 mt-20"
    src="/images/header-img.png"
    alt="About Image"
    width={520}
    height={520}
 
  />
</div>
        </div>
    </div>
  );
}





