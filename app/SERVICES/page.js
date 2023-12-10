import Card from "./../(components)/Card-services/card";

export default function SERVICES() {
  return (
    <>
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
    </>
  );
}
