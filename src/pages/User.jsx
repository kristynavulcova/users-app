import React from 'react';
import { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const User = () => {
    let params = useParams();
    const empty = useRef(false);

    const [user, setUser] = useState([
    ]);

    useEffect(() => {
        getUser();
    },[params.type])

    const getUser = async () => {
        empty.current = false;

        //localStorage
        const userStorage = localStorage.getItem("user");

        if (userStorage) {
            const tempUsers = JSON.parse(userStorage);
            //console.log(tempUsers);

            let gender = [];
            
            for (let i = 0; i < tempUsers.length; i++) {
                if (tempUsers[i].gender.toLowerCase() === params.type) {
                    gender.push(tempUsers[i]); 
                }
               
            }
            setUser(gender);

            
            if (!gender.length) {
                empty.current = true;
            }
            
        } else {
            const api = await fetch("https://random-data-api.com/api/v2/users?size=100");
            const data = await api.json();
            localStorage.setItem("user", JSON.stringify(data));

            let gender = [];
            
            for (let i = 0; i < data.length; i++) {
                if (data[i].gender.toLowerCase() === params.type) {
                    gender.push(data[i]); 
                }
               
            }
            setUser(gender);
        }
      

      
    
    }

    return (
        <div>
        <Wrapper>
                <h3>Female users</h3>
                <Grid>
            {user.map(item => (
            <Card key={item.id}>
        <img src={item.avatar} alt="" />
                    <h4>{item.first_name} {item.last_name}</h4>     
            </Card>
            ))}
                    </Grid>
                 <p>{empty.current ? 'nic nenalezeno' : ''}</p>
       </Wrapper>
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

export default User;