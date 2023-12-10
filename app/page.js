import Servicer from ".//SERVICES/page";
import About from "./ABOUT/about"
// import PORTFOLIO from "./PORTFOLIO/page";
// import TEAM from "./TEAM/page";
// import PRICING from "./PRICING/page";
import BLOG from "./BLOG/page";
function Home() {
  return (
    <div>
      <Servicer />
      <About/>
      <BLOG /> 
      
     
    </div>
  );
}
export default Home;
