import { useEffect, useState} from "react";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function User() {

    const [user, setUser] = useState();

    let params = useParams();

    const fetchDetail = async () => {
    
    let userStorage = localStorage.getItem("users");
    userStorage = (JSON.parse(userStorage));
        
    setUser(userStorage.find(item => item.id.toString() === params.id));
        
    }
  

    useEffect(() => {
        fetchDetail();
    },[params.id])

return (
    <Wrapper>
        <Grid>   
            <Content>
                <span>Jméno</span>
                <h2>{user?.first_name} {user?.last_name}</h2>
                <span>Uživatelské jméno</span>
                <h2>{user?.username}</h2>
                <span>Email</span>
                <h2>{user?.email}</h2>
                <span>Zaměstnání</span>
                <h2>{user?.employment.title}</h2>
                <span>Adresa</span>
                <h2>{user?.address.street_address} , {user?.address.city}</h2>
                <span>Pohlaví</span>
                <h2>{user?.gender}</h2>
            </Content>
            <Card>  
                <img src={user?.avatar} alt="" />    
            </Card> 
        </Grid>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  color:#fff;
  margin-top:5rem;
`;

const Grid = styled.div`
 display:grid;
 grid-template-columns:1fr;
 gap:3rem;
 align-items:center;

 @media only screen and (min-width: 980px) {
    grid-template-columns:repeat(12,1fr);
}
`;
 
const Card = styled.div`
border:1px solid #144272;
border-radius:0.2rem;
grid-column:span 1;
width: clamp(80%, 60vw, 100%);
margin:0 auto;

@media only screen and (min-width: 980px) {
    grid-column:span 4;
    order:2;
}

 img{
    width:100%;
    border-radius:2rem;
    height:100%;
    object-fit:cover;
 }
 a{
    text-decoration:none;
 }
 h4{
    text-align:center;
    padding:1rem;
   }
`;

const Content = styled.div`
grid-column:span 1;
display:grid;
order:2;

@media only screen and (min-width: 980px) {
    grid-column:span 8;
}

 span{
    display:block;
    color:#bbbbbb;
 }

 h2{
    margin-top:0;
 }
`;
export default User