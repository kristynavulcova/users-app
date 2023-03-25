import { useEffect, useState,useRef } from "react";
import { useParams } from 'react-router-dom';


    const Searched = () => {
        let params = useParams();
        const filteredResults = useRef([]);
    
        const [user, setUser] = useState([
        ]);
    
        useEffect(() => {
            getUser(params.search);
        },[params.search])
    
        const getUser = async () => {
            //localStorage
            const userStorage = localStorage.getItem("user");
            setUser(JSON.parse(userStorage));
         
            
            filteredResults.current = user.filter(x => x.username.toLowerCase().includes(params.search));
        
        }


  return (
      <div>
          <h2>Searched</h2>
           {filteredResults.current.map((item, key) => (
            <div key={key}>
                <img src={item.avatar} alt="" />
                    <h4>{item.first_name} {item.last_name}</h4>     
            </div>
            ))}
    </div>
  )
}

export default Searched