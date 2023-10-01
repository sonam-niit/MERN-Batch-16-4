import React from 'react';
import { Counter } from './session1/counter';
import { Header } from './session1/header';
import { NavbarComp } from './session1/navbar';
import { Slider } from './session1/slider';
import { UserDetails } from './session1/userDetails';
function Session1() {
    return ( <div>
        <Counter />
        <Header />
        <NavbarComp />
        <Slider />
        <UserDetails />
    </div> );
}

export default Session1;