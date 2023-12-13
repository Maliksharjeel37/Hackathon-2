import Header from "./../(components)/Header/header"

export default function page() {
  return (
<div>
<Header heading=" content Us"/>
<h1 className=" text-black text-7xl text-center p-10" >
           Contect Us 
          </h1>
<div className=" flex p-40">

      <div>
      <img
              className="object-cover object-center rounded mt-10"
              alt="hero"
              width={500}
              height={500}
              src="/images/service-1.png"
            />
      </div>
    <div>
    <div className=" flex ml-36">
     <div  className=" p-10">
      <input type="text" placeholder="Full Name" className="input "></input>
      </div>
      <div className=" p-10">
      <input type="text" placeholder="Email Address" className="input "></input>
      </div>
     </div>
     <div className=" flex ml-36">
     <div  className=" p-10">
      <input type="text" placeholder="Phon Number" className="input "></input>
      </div>
      <div className=" p-10">
      <input type="text" placeholder="Subject" className="input "></input>
      </div>
     </div>
     <div className=" flex ml-36">
     <div  className=" p-10">
      <input type="text" placeholder="Services" className="input "></input>
      </div>
      
     </div>
     <div>
      <textarea className="Textarea" placeholder="Message"></textarea>
      
    </div>
    <div className=" ml-48 mt-10">
      <button class=" text-center , bg-blue-500 , text-gray-50 , w-36 , h-10 mb-10 rounded-3xl hover:bg-white hover:text-black">Submit</button>
    </div>
    </div>
    
     
    </div>
</div>
  )
}
