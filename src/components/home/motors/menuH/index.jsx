import React from 'react'
import data from '../../../../mock/dataildata'
import MenuVindex from './value/MenuVindex'

const MenuH = () => {
    console.log(data)
    return (
        <div>
            <h1>MenuH</h1>
            {data.info.map((item, index) => (
                <MenuVindex key={index} value={item} />
            ))}
        </div>
    )
}

export default MenuH