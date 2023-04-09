import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const Popular = ({popularUsers}) => {

return (
  <Wrapper>
    <h3>Populární uživatelé</h3>

    <Splide options={ {
        perPage: 5,
        drag: "free",
        arrows: false,
      gap: "2rem",
      breakpoints: {
        1400: {
          perPage: 4,
         
        },
        1024: {
          perPage: 3,
         
        },
        767: {
          perPage: 2,
      
        },
        640: {
          perPage: 1,
    
        },
      }
      }}>
      
      {popularUsers.map(user => (
      <SplideSlide key={user.id}>
        <Link to={"user/" + user.id}> 
          <Card>    
            <img src={user.avatar} alt={user.avatar} />
            <Gradient>
              <p>{user.username}</p>
            </Gradient>
            </Card>
        </Link>
      </SplideSlide>
      ))}       
  </Splide>
  </Wrapper>
    );
}

const Wrapper = styled.div`
  margin: 3em 1em;
  padding: 0.25em 1em;
`;

const Card = styled.div`
  min-height:15rem;
  border-radius:1.2rem;
  overflow:hidden;
  position:relative;
  background:#144272;
  display: flex;
  align-items: end;

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
  position:relative;
  z-index:10;
  color:#fff;
  width: 100%;
  text-align: center;
  overflow-wrap: break-word;
  hyphens: auto;
 }

 &:hover{
  background:#127cc2;
 }
`;

const Gradient = styled.div`
  width:100%;
  background:rgba(0,0,0,0.5);
  padding:0 0.5em;
  display: flex;
  align-items: center;
  height: 100%;
`;
export default Popular;