import React from 'react'
import { MenuWrapper } from './indesStyled'
import menuV from './../../../assets/home/menuV.svg'
import menuH from './../../../assets/home/menuH.svg'
import { IconWrapper } from './menuV/iconStyle'
const IconFilter = ({ onClick }) => {
    const [on, setOn] = React.useState(true)
    console.log(on)
    return (
        <div>
            <MenuWrapper>
                <IconWrapper
                    className='menuIcon'
                    active={on}
                    onClick={() => {
                        onClick(true);
                        setOn(true);
                    }}
                >

                    <img src={menuH} alt=""

                    />

                </IconWrapper>
                <IconWrapper
                    className='menuIcon'
                    active={!on}
                    onClick={() => {
                        onClick(false);
                        setOn(false);
                    }}
                >

                    <img src={menuV} alt=""
                    />

                </IconWrapper>

            </MenuWrapper>
        </div>
    )
}

export default IconFilter