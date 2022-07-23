import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;`

export const Wrapper = styled.div`
  display: flex;
  justify-content:space-between ;
  align-items: center;
  width:75% ;
  font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 100%;
color: #373737;
border-bottom: 1px solid rgba(55, 55, 55, 0.5);`

export const WrapperMini = styled.div`
    display: flex;
    justify-content:center ;
    align-items: center;
`;

export const DropFilter = styled.div`
width: 227px;
height: 30px;

border: 1px solid rgba(55, 55, 55, 0.3);
border-radius: 5px;`

DropFilter.Mini = styled.div`
width: 80px;
height: 30px;
left: 1121px;
top: 497px;

border: 1px solid rgba(55, 55, 55, 0.3);
border-radius: 5px;`

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
width: 80px;
height: 30px;

border: 1px solid rgba(55, 55, 55, 0.3);
border-radius: 5px;
transform: matrix(-1, 0, 0, 1, 0, 0);
img{
    cursor: pointer;
}
`
export const Filter = styled.div`
width:25%;
border: 1px solid rgba(55, 55, 55, 0.3);
`
Container.Mini = styled.div`
  display: flex;
  justify-content:space-between ;
  `