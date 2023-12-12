import Link from "next/link";
import AppinmentBtn from "./Appoinmentbtn/appoin"
function navber() {
  return (
    <div className="flex , flex-warp   bg-transparent text-black my-4  ">
      <nav className="justify-start">
        <ul className="flex , flex-werp justify-center  my-2">
          <h1 className=" fout-bold mr-96 font-bold text-3xl  p-5 text-black ">LOGO</h1>
          <li className="mx-6 text-lg text-black hover:text-black p-5">
            <Link href="/">HOME</Link>
          </li>
          <li className="mx-6 text-lg text-black hover:text-stone-950 p-5">
            <Link href={"/SERVICES"}>Service</Link>
          </li>
          <li className="mx-6 text-lg text-black hover:text-stone-950 p-5">
            <Link href={"/ABOUT"}>About</Link>
          </li>
          
          <li className="mx-6text-lg text-black hover:text-stone-950 p-5">
            <Link href={"/BLOG"}>Blog</Link>
          </li>
          <li className="mx-6 text-lg text-black hover:text-stone-950 p-5">
            <Link href={"/CONTENT"}>Contact</Link>
          </li>
          
         <li className="mx-6 text-lg text-black hover:text-stone-950 p-5">
         <AppinmentBtn/>
         </li>
        </ul>
      </nav>
    </div>
  );
}
export default navber;
