import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

    const Searched = () => {
        let params = useParams();
        const [filteredUser, setFilteredUser] = useState([]);
    
    
        useEffect(() => {
            getUser(params.search);
        },[params.search])
    
        const getUser = async () => {
            //localStorage
            const userStorage = localStorage.getItem("users");
            const parseStorage = JSON.parse(userStorage);

            setFilteredUser(parseStorage.filter(x => x.first_name.toLowerCase().includes(params.search) || x.last_name.toLowerCase().includes(params.search)) );
        }


  return (
      <Wrapper>
          <h2>{filteredUser.length === 0 ? "Nic nenalezeno" : ""}</h2>
          <Grid>
           {filteredUser.map((item, key) => (
            <Card key={key}>
                <img src={item.avatar} alt="" />
                    <h4>{item.first_name} {item.last_name}</h4>     
            </Card>
           ))}
              </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 1em;
  padding: 0.25em 1em;
  color:#fff;
`;

const Grid = styled.div`
 display:grid;
 grid-template-columns:repeat(4,1fr);
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
export default Searched