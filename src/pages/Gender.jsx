import React from 'react';
import { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const User = () => {
    let params = useParams();
    const empty = useRef(false);

    const [user, setUser] = useState([]);

    useEffect(() => {
        getUser();
    },[params.type])

    const getUser = async () => {
        empty.current = false;

        //localStorage
        let userStorage = localStorage.getItem("users");

        userStorage = JSON.parse(userStorage);
    
        setUser(userStorage.filter(x => x.gender.toLowerCase() === params.type));
        
        if (!user.length) {
            empty.current = true;
        }
    
    }

return (
    <div>
    <Wrapper>
        <h3>{params.type==="female" ? "Ženy" : "Muži"}</h3>
        <Grid>
            {user.map((item, key) => (
            <Link to={"/user/" + item.id} key={key}> 
                <Card>
                    <img src={item.avatar} alt="" />
                    <h4>{item.first_name} {item.last_name}</h4>  
                </Card>
            </Link>
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
    color:#fff;
   }
   &:hover h4{
    color:#127cc2;
   }
`;

export default User;