import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import { FaCommentDots } from "react-icons/fa";
import { PiHeartStraightFill } from "react-icons/pi";
import { FaShareAlt } from "react-icons/fa";
// import kugjy from ""
export default function card(props) {
  return (
    <div  className="card bg-white mx-5 border-4 text-center border-white mt-2 mb-32 hover:bg-emerald-300 hover:scale-95 shadow-2xl">
<div className=' border-solid rounded-full'>
<div>
<Image src={props.imgsrc}  width={550} height={500}  />

</div>
<div className="icons flex">
<div className=" flex mt-10">
<FaUser className=" mx-3" />
<h1 className=" text-lg">Admin</h1>
</div>
<div className=" flex mt-10">
<CgCalendarDates className=" mx-2 " />
<h1 className=" text-lg">22 june 2023</h1>
</div>
</div>
</div>
      <div>
      <h1 className='text-center text-3xl font-bold mt-5 '>
        {props.heading}
        </h1>
      <p className=' mt-5 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            mollitia
            ad, non reiciendis sit natus,
            sint commodi illo eligendi et repellendus 
            fuga!</p>
            
      </div>
      <div className="flex">
      <div className=" p-5">
      <a  href="./../../BLOGDETAILS" style={{backgroundColor:'blue',padding:'12px', borderRadius:"50px", color:'white', fontSize:'15px',}} >Read More {"->"} </a>

      </div>
      <div className=" flex ml-32">
      <FaCommentDots />
      <h1 className=" ml-2">5</h1>
      <PiHeartStraightFill className=" ml-2" />
      <h1 className=" ml-2">30</h1>
      <FaShareAlt className=" ml-2" />
      <h1 className=" ml-2">50</h1>
      </div>


      </div>
    </div>
  );
}

