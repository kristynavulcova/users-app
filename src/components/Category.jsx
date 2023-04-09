import { AiOutlineHome, AiOutlineWoman,AiOutlineMan } from 'react-icons/ai';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Category = () => {
return ( 
    <List>
        <SLink to={"/"}>
        <AiOutlineHome />
        <h4>Domů</h4>
        </SLink>

        <SLink to={"/gender/female"}>
        <AiOutlineWoman />
        <h4>Žena</h4>
        </SLink>
        
        <SLink to={"/gender/male"}>
        <AiOutlineMan />
        <h4>Muž</h4>
        </SLink>
    </List>
    );
}

const List = styled.div`
display:flex;
justify-content:center;
margin:2rem 0;
gap:1rem;

div{
    background:#144272;
    color:#fff;
}
`;

const SLink = styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
text-decoration:none;
background:#205295;
width:4rem;
height:4rem;
cursor:pointer;
padding: 5px;

h4{
    color:#fff;
    font-size:0.8rem;
}

svg{
    color:#fff;
    font-size:1.5rem;
}

&.active{
    background:#2C74B3;
}
`;

export default Category;