import Image from "next/image";
import AppointmentBtn from "../Appoinmentbtn/appoin";
export default function card(props) {
  return (
    <div  className="card bg-white mx-5 border-4 text-center border-white mt-2 mb-3 hover:scale-95 shadow-2xl hover:bg-cyan-500">
<div className=' border-solid rounded-full'>
<Image src={props.imgsrc} width={1200} height={50}  />
</div>
      <div>
      <h1 className='text-center text-3xl font-bold mt-5 '>
        {props.heading}
        </h1>
    <h2 style={{padding:'10px'}}>{props.heading2}</h2>
    <h1 style={{padding:'10px'}}>
    MBBS, FCPS, FRCS</h1>
<div style={{padding:'10px'}}>
<AppointmentBtn/>

</div> 
     </div>
    </div>
  );
}

