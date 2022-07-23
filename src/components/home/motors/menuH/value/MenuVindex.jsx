import React from 'react'
import { Button, ButtonWrapper, Conainter, Img } from './indexStyle'
import car from './../../../../../assets/home/carImage.svg'


const MenuVindex = ({ value }) => {
  return (
    <Conainter>
      <Img src={car} alt="" />
      <p>{value.car.name || "Name of the car"}</p>
      <p>{value.car.company || "Brand name"}</p>
      <p>{value.car.cost || "250 $"}</p>
      <ButtonWrapper>
        <Button>
          Order
        </Button>
        <Button>
          Compare
        </Button>
      </ButtonWrapper>
    </Conainter>
  )
}

export default MenuVindex