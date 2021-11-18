import React ,{useContext} from "react";
import Header from "./Header";
import './Footer.css';
import { BurgerContext } from './BurgerContext';
import './App.css'
import './Order.css'

function Order(){
  const { value, value2,value3,value4,value5 } = useContext(BurgerContext);
  const [lettuce] = value;
  const [bacon]=value2;
  const [cheese]=value3;
  const [meat]=value4;
  const [price]= value5;
  return(
    <>
      <Header/>
        <main className="Layout__Content__3KSp3">
          <div className="Modal__Modal__cd320"></div>
          <div className="Modal__Modal__cd320"></div>
          <div class="Order__Order__W-Npf">
            <p>Ingredients: <span class="order-list">bacon ({bacon})</span>
              <span class="order-list">cheese ({cheese})</span>
              <span class="order-list">lettuce ({lettuce})</span>
              <span class="order-list">meat ({meat})</span>
            </p>
            <p>Price <strong>USD {price.toFixed(2)}</strong></p>
          </div>
        </main>
    </>
  )
  }
  export default Order;
