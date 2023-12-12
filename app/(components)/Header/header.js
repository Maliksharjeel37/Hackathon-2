import Navber from "../navber";

import Image from "next/image";

export default function header(props) {
  return (
    <div className=" bg-lime-100">
        <div><Navber /></div>
        <div className="flex">
        <div className="mt-56 mx-32 my-52 mb-3.5">
<h1 className= " text-justify  , font-bold   text-7xl ">{props.heading}</h1>
<h1 className=", text-justify   , font-bold text-7xl ">
{props.heading2}
</h1>
<p className=" , text-justify , font-medium , mt-10 mb-12 text-xl">
It is a established fact that a reader will be<br/> distracted by the content of a page when looking at this layout
</p>
<a  href="./../../TEAM" style={{backgroundColor:'blue',padding:'20px', borderRadius:"50px", color:'white', fontSize:'20px'}} >Meet a Doctor </a>
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





