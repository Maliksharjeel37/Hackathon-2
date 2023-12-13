import Header from "./(components)/Header/header"
import Card from "./(components)/Card-services/card"
import Blogcard from "./(components)/blogCard/blogCard"
import AppointmentBtn from "./(components)/Appoinmentbtn/appoin";

function Home() {
  return (
    <div>
    <Header heading="We Are Committed " heading2="To Your Health" />
     
    






      {/* services page start */}
      <div className="main-div">
     
      <div className="section-1 flex  mt-32 ">
        <div>
          <h1 className=" text-black text-5xl" style={{padding:'110px', marginLeft:"200px"}}>
            We Are Providing Madical services
          </h1>
        </div>
        
      </div>
      <div className="card-section flex">
<Card heading={"Online  Monitoring"} imgsrc={"/images/service-1.png"} />
<Card heading={"Holter Heart Surgery"} imgsrc="/images/service-2.png"/>
<Card heading={"Diagnose & Research"} imgsrc="/images/service-3.png"/>

      </div>
      <div className="card-section flex">
<Card heading={"Online  Monitoring"} imgsrc={"/images/service-4.png"} />
<Card heading={"Diagnose & Research"} imgsrc="/images/service-5.png"/>
<Card heading={"Holter Heart Surgery"} imgsrc="/images/service-6.png"/>


      </div>
      </div>
      {/* service page end */}



{/* About page start */}

<section class="text-gray-600 body-font">
<h1 className=" text-black text-7xl text-center p-10" >
            About Us
          </h1>
        <div class="container mx-auto flex px-5 pb-24 pt-12 md:flex-row flex-col items-center">

          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              width={500}
              height={500}
              src="/images/service-4.png"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              We Are here for easy medication
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quas autem hic aperiam molestiae voluptatem error
              ullam sint, quibusdam recusandae sed! Tenetur voluptatibus
              nostrum, ad inventore eveniet aliquam repudiandae expedita.
            </p>
            <p class="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage.
            </p>
            <div class="flex justify-center">
              <AppointmentBtn/>
            </div>
          </div>
        </div>
      </section>

{/* About page end */}

      {/* blogs page start */}
      <div>
    <h1 className=" text-black text-7xl text-center p-5" >
            OUR BLOGS
          </h1>
<div className=' secssion-1 flex '>
<Blogcard imgsrc={"/images/blog-1.jpg"} heading="Telehealth Services Are Ready To Help Your family"/>
<Blogcard imgsrc={"/images/blog-2.jpg"} heading="Doccure – Making Your Clinic Painless Visit"/>
<Blogcard imgsrc={"/images/blog-3.jpg"} heading="What Are The Benefits Of Online Doctor Booking"/>

</div>
<div className=' secssion-2 flex '>
<Blogcard imgsrc={"/images/blog-7.jpg"} heading="Doccure – Making Your Clinic Painless Visit"/>

<Blogcard imgsrc={"/images/blog-1.jpg"} heading="Telehealth Services Are Ready To Help Your family"/>
<Blogcard imgsrc={"/images/blog-2.jpg"} heading="What Are The Benefits Of Online Doctor Booking"/>

</div>
<div className=' secssion-1 flex '>
<Blogcard imgsrc={"/images/blog-3.jpg"} heading="What Are The Benefits Of Online Doctor Booking"/>
<Blogcard imgsrc={"/images/blog-5.jpg"} heading="Telehealth Services Are Ready To Help Your family"/>
<Blogcard imgsrc={"/images/blog-7.jpg"} heading="Doccure – Making Your Clinic Painless Visit"/>

</div>

    </div>
    {/* blogs page end */}
    {/* blogDetails page start  */}
    <div>
      <div>
      <img
              class="object-cover object-center rounded"
              alt="hero"
              width={1700}
              height={100}
              src="/images/blog-3.jpg"
            />
      </div>
      <div>
      {/* heading  start*/}
<div>
<h1 className=' font-bold text-6xl' style={{padding:"20px"}}>
Precious Tips To Help You Get Better.
</h1>
<p  className=' font-bold text-lg ml-3' style={{padding:"20px"}}>
Dramatically syndicate alternative infrastructures through backward-compatible web-readiness. Completely predom inate economically sound information without maintainable alignments. Compellingly generate resource maximizing imperatives through cooperative best practices Collaboratively syndicate
</p>
<p  className=' font-bold text-lg ml-3' style={{padding:"20px"}}>
through cooperative best practices. Collaboratively syndicate world-class information after principle- centered web-readiness. Collaboratively network bricks-and-clicks best practices via economically sound.
</p>
<p  className=' font-bold text-lg ml-3' style={{padding:"20px"}}>
Dramatically syndicate alternative infrastructures through backward-compatible web-readiness. Completely predom inate economically sound information without maintainable alignments. Compellingly generate resource maximizing imperatives through cooperative best practices Collaboratively syndicate
</p>
</div>
 {/* heading end */}
<div className=' flex p-2'>
<img
              
              alt="hero"
              width={50}
              height={50}
              src="/images/check-img.png"
            />
            <h1 className=' p-5 text-lg '>Dramatically syndicate alternative infrastructures through backward-compatible.</h1>
</div>
<div className=' flex p-2'>
<img
              class="object-cover object-center rounded"
              alt="hero"
              width={50}
              height={50}
              src="/images/check-img.png"
            />
            <h1 className=' p-5 text-lg '>economically sound information without maintainable alignments</h1>
</div>
<div className=' flex p-2'>
<img
              class="object-cover object-center rounded"
              alt="hero"
              width={50}
              height={50}
              src="/images/check-img.png"
            />
            <h1 className=' p-5 text-lg '>Collaboratively syndicate world-class information after principle- centered.</h1>
</div>
<div className=' flex p-2'>
<img
              class="object-cover object-center rounded"
              alt="hero"
              width={50}
              height={50}
              src="/images/check-img.png"
            />
            <h1 className=' p-5 text-lg '>Collaboratively network bricks-and-clicks best practices via economically sound.</h1>
</div>
<div className=' flex p-2'>
<img
              class="object-cover object-center rounded"
              alt="hero"
              width={50}
              height={50}
              src="/images/check-img.png"
            />
            <h1 className=' p-5 text-lg '>Compellingly generate resource maximizing imperatives through.</h1>
</div>
<div className=' flex p-2'>
<img
              class="object-cover object-center rounded"
              alt="hero"
              width={50}
              height={50}
              src="/images/check-img.png"
            />
            <h1 className=' p-5 text-lg '>Collaboratively network bricks-and-clicks best practices via economically sound.</h1>
</div>
<div>
<p  className=' font-bold text-lg ml-3' style={{padding:"20px"}}>
through cooperative best practices. Collaboratively syndicate world-class information after principle- centered web-readiness. Collaboratively network bricks-and-clicks best practices via economically sound
</p>
<p  className=' font-bold text-lg ml-3' style={{padding:"20px"}}>
Dramatically syndicate alternative infrastructures through backward-compatible web-readiness. Completely predom inate economically sound information without maintainable alignments. Compellingly generate resource maximizing imperatives through cooperative best practices Collaboratively syndicate
</p>

</div>
<div className=' p-14'>
<AppointmentBtn/>
</div>
    </div>
    </div>
    {/* blogDetails page end */}
    {/* Contect page start */}
<div>
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
{/* contect page end */}
     
    </div>
  );
}
export default Home;
