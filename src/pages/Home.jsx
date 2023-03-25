import Registered from "../components/Registered";
import Popular from "../components/Popular";
import styled from 'styled-components';
import { useEffect, useState } from "react";

const Home = () => {
    
        const [users, setUsers] = useState([
        ]);
    
        const registeredUsers = users.slice(0, 10);
    
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
      <Registered registeredUsers={registeredUsers} />
            <Popular />
            
        </div>
      );
}
const Wrapper = styled.div`
  margin: 0 1em;
  padding: 0.25em 1em;
  color:#fff;
`;

const Grid = styled.div`
 display:grid;
 grid-template-columns:repeat(auto-fit,minmax(12rem,1fr));
 gap:3rem;
`;
 
const Card = styled.div`
border:1px solid #144272;
border-radius:0.2rem;

 img{
    width:100%;
    border-radius:2rem;
 }
 a{
    text-decoration:none;
 }
 h4{
    text-align:center;
    padding:1rem;
   }
`; 
export default Home;