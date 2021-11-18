
import React,{useContext} from 'react';
import './Main.css';
import { BurgerContext } from './BurgerContext';
function Main(){
  const { value, value2,value3,value4 } = useContext(BurgerContext);
  const [lettuce] = value;
  const [bacon]=value2;
  const [cheese]=value3;
  const [meat]=value4;
  const burgerInside=()=>{

    let burger = [];

        for (let i = 0; i < lettuce; i++){
            burger.push(<div key={burger.length} className="lettuseSide"></div>);
        }
        for (let i = 0; i < bacon; i++){
            burger.push(<div key={burger.length} className="baconSide"></div>);
        }
        for (let i = 0; i < cheese; i++){
            burger.push(<div key={burger.length} className="cheeseSide"></div>);
        }
        for (let i = 0; i < meat; i++){
            burger.push(<div key={burger.length} className="meatSide"></div>);
        }
        if(burger.length === 0)
            burger.push(<p key="0">No Ingredients Added</p>);
        return burger;

  }

  return(
    <main className="Layout__Content__3KSp3">
      <div className="Modal__Modal__cd320"></div>
      <div className="Modal__Modal__cd320"></div>
      <div className="Burger__Burger__2h2kL">
        <div className="BurgerIngredient__BreadTop__2Pkwe">
          <div className="BurgerIngredient__Seeds1__2k2x7"></div>
          <div className="BurgerIngredient__Seeds2__9Mret"></div>
        </div>
        {burgerInside()}
        <div className="BurgerIngredient__BreadBottom__2z9NQ"></div>
      </div>
    </main>
  );
}

export default Main;
