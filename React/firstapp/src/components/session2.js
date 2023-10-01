import React from 'react';
import { Greetings } from './session2/greeting';
import { ProductList } from './session2/productlist';
function Session2() {
    return ( <div>
        {/* Passing Props from App component to 
      Greetings Component */}
      <Greetings name="Sonam Soni" 
      message="Hello EveryOne"/>
      <ProductList />
    </div> );
}

export default Session2;