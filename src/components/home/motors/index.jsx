import React from 'react'
import sample from './../../../assets/home/filterWallet.svg'
import IconFilter from './iconFilter'
import { Container, DropFilter, Filter, MenuWrapper, Wrapper, WrapperMini } from './indesStyled'
import MenuController from './menuController'
import MenuV from './menuV'

const MotorsIndex = () => {
    const [active, setActive] = React.useState(true)
    console.log(active)
    return (
        <Container>
            <img src={sample} className="w-[100%]" alt="" />
            <Container.Mini>
                <Filter />
                <Wrapper>
                    <div>
                        <p>Item /Total</p>
                    </div>
                    <WrapperMini >
                        <p>Sort by</p>
                        <DropFilter />
                        <DropFilter.Mini />
                        <IconFilter onClick={(state) => setActive(state)} />
                        <MenuController active={active} />
                    </WrapperMini>
                </Wrapper>
            </Container.Mini>
            <MenuV />
        </Container>
    )
}

export default MotorsIndex