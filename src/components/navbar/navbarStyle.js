import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
padding: 0 70px;
height:90px;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`
export const Logo = styled.img`
width:157px;
height:46px;
cursor: pointer;
`

export const MenuWrapper = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
width:50%;
div{
    cursor: pointer;
    font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
/* identical to box height */


/* text */

color: #373737;
}
`
export const NavItems = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
width:8%;
div img{
    cursor:pointer;
}
`

export const NavLink = styled(Link)`
display:flex;
text-decoration: none;
`