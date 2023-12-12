import React from 'react'
import Header from "./../(components)/Header/header"
import Appoinmetbtn from "./../(components)/Appoinmentbtn/appoin"
export default function page() {
  return (
    <div>
    <Header heading="Service Details"/>
      <div>
      <img
              class="object-cover object-center rounded"
              alt="hero"
              width={1700}
              height={100}
              src="/images/service-1.png"
            />
      </div>
      <div>
      {/* heading  start*/}
<div>
<h1 className=' font-bold text-6xl' style={{padding:"20px"}}>
Holter Heart Test & Surgery
</h1>
<p  className=' font-bold text-lg ml-3' style={{padding:"20px"}}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's is a standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nob is est eligendi optio cumque nihil impedit quo minus
</p>
<p  className=' font-bold text-lg ml-3' style={{padding:"20px"}}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's is a standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nob is est eligendi optio cumque nihil impedit quo minus
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
<h1 className=' font-bold text-6xl' style={{padding:"20px"}}>
Capabilities
</h1>
<p  className=' font-bold text-lg ml-3' style={{padding:"20px"}}>
Aorem Ipsum is simply dummy text of the printing anda typesetting industry. Lorem Ipsum has been the indust ry's is astandard dummy Lorem Ipsum is simply dummy ypesetting industry.
</p>
<p  className=' font-bold text-lg ml-3' style={{padding:"20px"}}>
Aorem Ipsum is simply dummy text of the printing anda typesetting industry. Lorem Ipsum has been the indust ry's is astandard dummy Lorem Ipsum is simply dummy ypesetting industry.
</p>

</div>
<div className=' p-14'>
<Appoinmetbtn/>
</div>
    </div>
    </div>
  )
}
