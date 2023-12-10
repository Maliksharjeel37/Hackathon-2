import Link from "next/link";
export default function footer() {
  return (
    <div className=" bg-green-300">
      <div className="row flex">
        {/* =====logo=== */}
        <div className="mx-20">
          <h1 className="font-bold text-3xl text-blue-700 mt-12">LOGO.</h1>
          <p className="my-5 mt-11">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Ipsa mollitia ad, non reiciendis sit natus, magnam rem dignissimos
            <br /> iusto sint commodi illo eligendi et repellendus delectus
            optio dolor error fuga!
          </p>
        </div>
        {/* =====link==== */}
        <div className ="mx-10">
          <h1 className="font-bold text-3xl text-black mt-20 ">Our Link</h1>
          <ul className=" mx-4">
            <li className="mx-8 text-lg text-blue-600 hover:text-blue-700 mt-4">
              <Link href="/">HOME</Link>
            </li>
            <li className="mx-8 text-lg text-black hover:text-blue-700 mt-2">
              <Link href="/SERVICES">SERVICES</Link>
            </li>
            <li className="mx-8 text-lg text-black hover:text-blue-700 mt-2">
              <Link href="/ABOUT">ABOUT US</Link>
            </li>
            <li className="mx-8 text-lg text-black hover:text-blue-700 mt-2">
              <Link href="/PORTFOLIO">PORTFOLIO</Link>
            </li>
            <li className="mx-8 text-lg text-black hover:text-blue-700 mt-2">
              <Link href="/TEAM">TEAM</Link>
            </li>
            <li className="mx-8 text-lg text-black hover:text-blue-700 mt-2">
              <Link href="/PRICING">PRICING</Link>
            </li>
            <li className="mx-8 text-lg text-black hover:text-blue-700 mt-2">
              <Link href="/BLOG">BLOG</Link>
            </li>
          </ul>
        </div>

        {/* ====Our Company=== */}
        <div className ="mx-10">
          <h1 className="font-bold text-3xl text-black mx-5 mt-20"> Our Company</h1>
          <h6 className="mx-4  mt-3 font-medium">About Company</h6>
          <h6 className="mx-4  mt-3 font-medium">Our Testimonials</h6>
          <h6 className="mx-4  mt-3 font-medium">Latest News</h6>
          <h6 className="mx-4  mt-3 font-medium">Our misson</h6>
          <h6 className="mx-4  mt-3 font-medium">Get a free Quot</h6>
        </div>
        {/* ====Our Services=== */}
        <div className ="mx-10">
          <h1 className="font-bold text-3xl text-black mt-20 ">Our Services </h1>
          <h6 className="mx-4  mt-3 font-medium"> App Development</h6>
          <h6 className="mx-4  mt-3 font-medium"> web Development</h6>
          <h6 className="mx-4  mt-3 font-medium">Graphic Design</h6>
          <h6 className="mx-4  mt-3 font-medium">Web Solution</h6>
          <h6 className="mx-4  mt-3 font-medium">App Design</h6>
        </div>
      </div>
      <hr/>
      <h1 className="text-center text-black">@ Copyright 2020 Brandoxide. All rights reserved.</h1>
    </div>
  );
}
