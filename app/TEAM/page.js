import React from 'react'
import Header from "./../(components)/Header/header"
import Teamcard from '../(components)/Teamcard/teamcard'
export default function team() {
  return (
   <div>
   <Header heading="OUR TEAM "/>
     <div className="flex">
      <Teamcard imgsrc={"/images/team-1.png"} heading="Dr. Sharjeel" heading2="Neurology"/>
      <Teamcard imgsrc={"/images/team-2.png"} heading="Dr.AYesha" heading2="Cardiology"/>
      <Teamcard imgsrc={"/images/team-3.png"} heading="Dr.Farhan Ali" heading2="Ophthalmology"/>
    </div>
    <div className="flex">
      <Teamcard imgsrc={"/images/team-4.png"} heading="Dr.AYesha" heading2="Cardiology"/>
      <Teamcard imgsrc={"/images/team-3.png"} heading="Dr.Farhan Ali" heading2="Ophthalmology"/>
      <Teamcard imgsrc={"/images/team-1.png"} heading="Dr. Sharjeel" heading2="Neurology"/>

    </div>
    <div className="flex">
    <Teamcard imgsrc={"/images/team-1.png"} heading="Dr. Sharjeel" heading2="Neurology"/>
    <Teamcard imgsrc={"/images/team-3.png"} heading="Dr.Farhan Ali" heading2="Ophthalmology"/>

      <Teamcard imgsrc={"/images/team-2.png"} heading="Dr.AYesha" heading2="Cardiology"/>
    </div>
   </div>
  )
}
