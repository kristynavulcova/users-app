import Home from "./Home";
import Gender from "./Gender";
import Searched from "./Searched";
import User from "./User";
import {Routes, Route } from "react-router-dom";

const Pages = () => {
    return ( 
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/gender/:type" element={<Gender />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
     );
}
 
export default Pages;