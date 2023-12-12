import React from 'react'
import Header from "./../(components)/Header/header"
import Appoinmetbtn from "./../(components)/Appoinmentbtn/appoin"
export default function page() {
  return (
    <div>
    <Header heading="Blog Details"/>
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
<Appoinmetbtn/>
</div>
    </div>
    </div>
  )
}
