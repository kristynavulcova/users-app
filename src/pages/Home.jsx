import Registered from "../components/Registered";
import Popular from "../components/Popular";
import { useEffect, useState } from "react";

const Home = () => {
    
        const [users, setUsers] = useState([
        ]);
    
        const StorageUsers= users.slice(0, 10);
        const PopularUsers = users.slice(11, 25);
    
        useEffect(() => {
            getUsers();
        },[])
    
        const getUsers = async () => {
            const userStorage = localStorage.getItem("users");
           
            if (userStorage) {
                setUsers(JSON.parse(userStorage));
                
            } else {
                const api = await fetch("https://random-data-api.com/api/v2/users?size=100");
                const data = await api.json();
                localStorage.setItem("users", JSON.stringify(data));
    
                setUsers(data);

            }
          
        
        }

    return (
        <div>
      <Registered registeredUsers={StorageUsers} />
            <Popular popularUsers={PopularUsers} />
            
        </div>
      );
}
export default Home;