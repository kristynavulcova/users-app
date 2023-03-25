import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Registered = ({ registeredUsers }) => {

    return ( 
        <Wrapper>
      <h3>Poslední registrovaní uživatelé</h3>

 <Splide options={ {
            perPage: 6,
            drag: "free",
            arrows: false,
            gap:"2rem"
        } }>
            {registeredUsers.map(user => (
    <SplideSlide key={user.id}>
         <Card>

            <p>{user.username}</p>
                        <img src={user.avatar} alt={user.avatar} />
                        <Gradient></Gradient>
         </Card>
   </SplideSlide>
    ))}
            
 </Splide>
</Wrapper>
        );
}
const Wrapper = styled.div`
margin: 0 1em;
padding: 0.25em 1em;
`;

const Card = styled.div`
min-height:15rem;
border-radius:1.2rem;
overflow:hidden;
position:relative;
background:#144272;

img{
  border-radius:2rem;
  object-fit:cover;
  position:absolute;
  left: 50%;
  transform: translateX(-30%);
  bottom: 0px;
  width: 100%;
  bottom:0;
  height:100%;
}

p{
  position:absolute;
  bottom:0;
  color:#fff;
  z-index:5;
  width: 100%;
  text-align: center;
}
`;

const Gradient = styled.div`
position:absolute;
z-index:3;
width:100%;
height:20%;
background:rgba(0,0,0,0.5);
bottom: 0;
padding:0 1em;
`;
export default Registered;