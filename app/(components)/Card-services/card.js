import Image from "next/image";
export default function card(props) {
  return (
    <div  className="card bg-white mx-5 border-4 text-center border-white mt-2 mb-32 hover:bg-emerald-300 hover:scale-95 shadow-2xl">
<div className=' border-solid rounded-full'>
<Image src={props.imgsrc}  width={550} height={500}  />
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
      <div className=" mb-10">
      <a  href="./../../DetailsServices" style={{backgroundColor:'blue',padding:'15px', borderRadius:"50px", color:'white', fontSize:'15px',}} >Read More {"->"} </a>
      </div>
    </div>
  );
}

