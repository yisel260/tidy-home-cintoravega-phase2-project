
import React from 'react'
import NavBar from '../Components/NavBar';
import StoreItemForm from '../Components/StoreItemForm';

function ItemSearch() {
        return (
            <>
              <header>
              <h1 text-align= "center"> Tidy Home</h1>
                <NavBar/> 
              </header>
              <main>
                <h1>Store Items here !</h1>
                <StoreItemForm/>
              </main>
            </>
          );
        };
        
        export default ItemSearch;