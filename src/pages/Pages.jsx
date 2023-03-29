import Home from "./Home";
import Gender from "./Gender";
import Searched from "./Searched";
import {Routes, Route } from "react-router-dom";

const Pages = () => {
    return ( 
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gender/:type" element={<Gender />} />
        <Route path="/searched/:search" element={<Searched />} />
            </Routes>
     );
}
 
export default Pages;