import React from 'react'
import data from '../../../../mock/dataildata'
import MenuVindex from './value/MenuVindex'

const MenuV = () => {
    console.log(data)
    return (
        <div>
            <h1>MenuV</h1>
            {data.info.map((item, index) => (
                <MenuVindex key={index} value={item} />
            ))}
        </div>
    )
}

export default MenuV