import Header from "./(components)/Header/header"
import About from "./ABOUT/about"
import Card from "./(components)/Card-services/card"
import Blogcard from "./(components)/blogCard/blogCard"
// import PORTFOLIO from "./PORTFOLIO/page";
// import TEAM from "./TEAM/page";
// import PRICING from "./PRICING/page";
function Home() {
  return (
    <div>
    <Header heading="We Are Committed " heading2="To Your Health" />
      <About/>
    






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
     
    </div>
  );
}
export default Home;
