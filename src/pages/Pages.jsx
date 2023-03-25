import Home from "./Home";
import User from "./User";
import Searched from "./Searched";
import {Routes, Route } from "react-router-dom";

const Pages = () => {
    return ( 
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:type" element={<User />} />
        <Route path="/searched/:search" element={<Searched />} />
            </Routes>
     );
}
 
export default Pages;