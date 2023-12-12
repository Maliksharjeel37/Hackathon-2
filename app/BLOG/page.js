import Blogcard from './../../app/(components)/blogCard/blogCard'
import Header from "./../(components)/Header/header"
export default function page() {
  return (
    <div>
    <Header heading="Our Blogs"/>
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
  )
}
