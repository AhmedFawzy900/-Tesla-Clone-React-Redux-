import React from 'react'
import model3 from '../images/model-s.jpg'
import arrow from '../images/down-arrow.svg'
import styled from 'styled-components'
import { Fade } from 'react-reveal';
import {Link} from 'react-router-dom'
import Info from './Info'
function Section({title,desc,image,rightBtn,leftBtn}) {
  return (
    <Wrap bgImage={image}>
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{desc}</p>
            </ItemText>
        </Fade>
        <Buttons>
        <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                    {leftBtn}
                    </LeftButton>
                    { rightBtn &&  
                   <Link to='/info'>
                   <RightButton>
                        {rightBtn}
                    </RightButton> 
                   </Link>
                    }
                
                </ButtonGroup>
            </Fade>
            <DownArrow src={arrow} />
        </Buttons>
    </Wrap>
  )

}

export default Section

const Wrap = styled.div`
width: 100vw;
height:100vh;
background-position:center;
background-repeat:no-repeat;
background-size:cover;
background-image:${props => `url("${props.bgImage}")`};
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:conter;

`
const ItemText = styled.div`
padding-top: 15vh;
text-align:center;
`
const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
justify-content:center;
align-items: center;

@media(max-width: 768px ){
    flex-direction:column;
}


`
const LeftButton = styled.div`
background: rgba(23,26,32,0.8);
height:40px;
width:256px;
color:#eee;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase
font-size:12px;
cursor:pointer;
margin:8px;
`
const RightButton = styled(LeftButton)`
background:#eee;
opacity:0.65;
color:black;
`

const DownArrow = styled.img`

height:40px;
overflow-x:hidden;
animation: animatedDown infinite 1.5s`
const Buttons = styled.div` 
text-align: center;


`