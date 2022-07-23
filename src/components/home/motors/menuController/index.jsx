import React from 'react'
import MenuH from '../menuH'
import MenuV from '../menuV'

const MenuController = ({ active }) => {
    return (
        <div>
            {
                active ? <MenuH /> : <MenuV />
            }
        </div>
    )
}

export default MenuController