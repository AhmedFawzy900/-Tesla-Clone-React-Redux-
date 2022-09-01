import React from 'react'

import model3 from '../images/model-s.jpg'
import image1 from '../images/new-interior.jpg'
import image2 from '../images/connected.jpg'
import image3 from '../images/audio.jpg'
import image4 from '../images/game.jpg'

import styled from 'styled-components'
import { Fade } from 'react-reveal';
function Info() {
   return (
    <>    <Wrap bgImage={model3}>
    <Fade bottom>
        <ItemText>
            <h1>Model 3</h1>
            <p>Plaid</p>
        </ItemText>
    </Fade>
    <Buttons>
    <Fade bottom>
            <ButtonGroup>
             <Information>
                <li>396 mi <p>Range (EPA est.)</p></li>
                <li>1.99 s <p>0-60 mph*</p></li>
                <li>200 mph <p>Top Speed†</p></li>
             </Information>
               
                <RightButton>
                    <p>Order Now</p>
                </RightButton> 
                
            
            </ButtonGroup>
        </Fade>
    </Buttons>
</Wrap>
        <Fade bottom>
            <Dark>
             Interior of the Future
            </Dark>
        </Fade>

        <ImagesDesc src={image1} />
        <Footer>
            <First>
            <Fade left>

                <Img src={image2} alt="" />
            </Fade>
            <Fade right>
                <Content>

                <h2>Stay Connected</h2>
                <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
                </Content>

            </Fade>
            </First>
            <First>
            <Fade left>

                <Content>

                    <h2>Immersive Sound</h2>
                    <p>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</p>
                </Content>
            </Fade>
                <Fade right>

                <Img src={image3} alt="" />
                </Fade>

            </First>
            <First>
            <Fade left>

                <Img src={image4}/>
            </Fade>
                <Fade right>
                <Content>

                    <h2>Room for Everything</h2>
                    <p>With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.</p>
                </Content>
                </Fade>
             </First>
        </Footer>
      
        </>
  )
}

export default Info

const Wrap = styled.div`
width: 100vw;
padding-bottom: 38px;
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
width: 79%;
margin: auto;
@media(max-width: 768px ){
    flex-direction:column;
}


`
const LeftButton = styled.div`

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

opacity:0.65;
color:black;

border: 4px solid #fff;
p{
    color: #fff;
    font-size: 20px;

}
`

const DownArrow = styled.img`

height:40px;
overflow-x:hidden;
animation: animatedDown infinite 1.5s`
const Buttons = styled.div` 
text-align: center;


`
const Information = styled.div`
width: 100%;
display: flex;
color: #eee !important;
font-size: 34px;
font-weight: 600;
align-items: center;
justify-content: space-around;
margin-bottom:10px;
list-style: none;
li{
list-style:none;
    color: #eee;
}
p{
    font-size: 13px;
    color: #eee;
}

`
const Dark = styled.div`
height:164px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
background: #000;
color: #fff;
font-size: 31px;
box-shadow:0px 0px 34px 44px #000 !important;
`
const ImagesDesc = styled.img`
width: 100%;
height: 123vh;
object-fit:cover;`
const Footer = styled.div`
    background: #111;
    margin-top: -4px;
    padding-top: 39px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:#fff !important;
    
    `


const First = styled.div`
display: flex;
    width: 80%;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;
`

    
const Content = styled.div`
width: 83%;
h2{
    margin-bottom: 10px;
    color:#fff !important;
}
p{
    line-height: 1.5;
    color:#fff !important;
}
`
const Img = styled.img`
width: 80%;
`
