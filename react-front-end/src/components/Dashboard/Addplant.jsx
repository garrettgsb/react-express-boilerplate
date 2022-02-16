import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment, Image, Dropdown, Grid } from "semantic-ui-react";

const friendOptions = [
  {
 
    key: 'Monstera Deliciosa',
    text: 'Monstera Deliciosa',
    value: 'Monstera Deliciosa',
    image:  <Image src='https://as2.ftcdn.net/v2/jpg/02/12/89/91/1000_F_212899169_gON1sUOS7fpB8sjjtZvWhVdoHRZpNo2u.jpg' className='drop' /> ,
  },
  {
    // className: 'drop',
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: <Image src='https://assets.eflorist.com/assets/products/PHR_/TPL05-1A.jpg' className='drop' /> 
  },
  {
    // className: 'drop',
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: <Image src='https://i.pinimg.com/736x/ee/ab/65/eeab65d75ae553b503f2c6a61154c0fc--indoor-house-plants-indoor-gardening.jpg' className='drop' /> 
  },
  {
    // className: 'drop',
    key: 'Christian',
    text: 'Christian',
    value: 'Christian',
    image: { avatar: true, src: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSkopIl_R0u0R0tFA6_2joPTCXB_TBVX4IY0Fuz3RamMzAMAZa1ia6wG5MfBWegjUk5nkHDpdSuQGs7tw3wL3ukfPWILprZ9gfZMqpJBj1AnoRSJj3WF1OrFA&usqp=CAE' },
  },
  {
    // className: 'drop',
    key: 'Matt',
    text: 'Matt',
    value: 'Matt',
    image: { avatar: true, src: 'https://cdn.shopify.com/s/files/1/1938/3931/files/Hoya_AdobeStock_862454_square.png?v=1559070163' },
  },
  {
    // className: 'drop',
    key: 'Justen Kitsune',
    text: 'Justen Kitsune',
    value: 'Justen Kitsune',
    image: { avatar: true, src: 'https://pyxis.nymag.com/v1/imgs/284/267/87ccd2e3f999b864b0b1bab008267cca92-calathea.2x.rsquare.w600.jpg' },
  },
]

export default function Addplant({ user }) {
  const [plant, setPlant] = useState();

  return (
    <div>
      <Segment>
        <Grid verticalAlign="middle" centered>
          <Grid.Column width={5}>
            <Image
              src="https://as2.ftcdn.net/v2/jpg/02/12/89/91/1000_F_212899169_gON1sUOS7fpB8sjjtZvWhVdoHRZpNo2u.jpg"
              size="medium"
              floated="left"
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment compact>
              Member of the arum family Araceae, Monstera is native to tropical
              forests of southern Mexico, south to Panama. As houseplants, they
              are very unique, easygoing and always eyecatching because of their
              dramatic green leaves. They are vining plants and love to trail
              over the pot or climb along a trellis.
            </Segment>
          </Grid.Column>
          <Grid.Column verticalAlign="middle" centered width={5}>
            <Dropdown className="dropdown"
              placeholder="Select Friend"
              fluid
              selection
              options={friendOptions}
              onChange={(event, data) => setPlant(data.value) }
            />
            <Segment compact>Common Name: Swiss Cheese Plant</Segment>
            <Segment compact>Scientific Name: Monstera Deliciosa.</Segment>
            <Segment compact>Last Watered: 2 Days Ago</Segment>
            <Segment compact>Pot Type</Segment>
            <Segment compact>Soil Type</Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}
