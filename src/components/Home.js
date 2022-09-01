import React from 'react'
import styled from 'styled-components';
import Section from './Section';
import models from '../images/model-s.jpg'
import model3 from '../images/model-3.jpg'
import modelx from '../images/model-x.jpg'
import modely from '../images/model-y.jpg'
import solarpanel from '../images/solar-panel.jpg'
import solarroof from '../images/solar-roof.jpg'
import acces from '../images/accessories.jpg'
function Home() {
  return (
    <Container>
      <Section
      title="Model S"
      desc="Order Online for Touchless Delivery"
      image={models}
      rightBtn="Existing Inventory"
      leftBtn="Custom Order"
      />
      <Section
      title="Model Y"
      desc="Order Online for Touchless Delivery"
      image={modely}
      rightBtn="Existing Inventory"
      leftBtn="Custom Order"
      />
      <Section
      title="Model 3"
      desc="Order Online for Touchless Delivery"
      image={model3}
      rightBtn="Existing Inventory"
      leftBtn="Custom Order"
      />
      <Section
      title="Model X"
      desc="Order Online for Touchless Delivery"
      image={modelx}
      rightBtn="Existing Inventory"
      leftBtn="Custom Order"
      />
      <Section
      title="Lowest Cost Solar Panels in America"
      desc="Money-back guarantee"
      image={solarpanel}
      rightBtn="Order now"
      leftBtn="Learn more"
      />
   
      <Section
      title="Solar for New Roofs"
      desc="Solor Roof Costs less Than a New Roof"
      image={solarroof}
      rightBtn="Order now"
      leftBtn="learn more"
      />
      <Section
      title="Accessories"
      desc=""
      image={acces}
      leftBtn="Shop now"
      />
   
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
`