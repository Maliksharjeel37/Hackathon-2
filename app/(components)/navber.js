import Link from "next/link";
import AppinmentBtn from "./Appoinmentbtn/appoin"
function navber() {
  return (
    <div className="flex , flex-warp justify-center  bg-transparent text-black my-4  ">
      <nav className="justify-start">
        <ul className="flex , flex-werp justify-center  my-2">
          <h1 className=" fout-bold mr-96 font-bold text-3xl text-white">LOGO</h1>
          <li className="mx-6 text-lg text-black hover:text-black">
            <Link href="/">HOME</Link>
          </li>
          <li className="mx-6 text-lg text-black hover:text-stone-950">
            <Link href={"/ABOUT"}>About</Link>
          </li>
          <li className="mx-6 text-lg text-black hover:text-stone-950">
            <Link href={"/SERVICES"}>Service</Link>
          </li>
          
          <li className="mx-6text-lg text-black hover:text-stone-950">
            <Link href={"/BLOG"}>Blog</Link>
          </li>
          <li className="mx-6 text-lg text-black hover:text-stone-950">
            <Link href={"/CONTENT"}>Contact</Link>
          </li>
          
          <AppinmentBtn/>
        </ul>
      </nav>
    </div>
  );
}
export default navber;
