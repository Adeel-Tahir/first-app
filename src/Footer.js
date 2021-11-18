import React,{useContext} from 'react';
import './Footer.css';
import { BurgerContext } from './BurgerContext';
import { Link } from 'react-router-dom';
import './App.css'

const Footer=()=>{
  const { value, value2,value3,value4,value5,value6 } = useContext(BurgerContext);
  const [lettuce, setlettuce] = value;
  const [bacon,setBacon]=value2;
  const [cheese,setCheese]=value3;
  const [meat,setMeat]=value4;
  const [price,setPrice]= value5;
  const [login,setLogin]=value6;
  const increment=(ingredient)=>{
    switch(ingredient){

      case 'lettuce':{
          setlettuce(lettuce+1);
          setPrice(price+0.50);

          break;
      }
      case 'bacon':{
          setBacon(bacon+1);
          setPrice(price+0.70);

          break;
      }
      case 'cheese':{
          setCheese(cheese+1);
          setPrice(price+0.40);

          break;
      }
      case 'meat':{
          setMeat(meat+1);
          setPrice(price+1.70);

          break;
      }

      default: break;
  }
  }
  const decrement=(ingredient)=>{
    setPrice(price+3);
    switch(ingredient){

      case 'lettuce':{
          setlettuce(lettuce-1);
          break;
      }
      case 'bacon':{
          setBacon(bacon-1);
          break;
      }
      case 'cheese':{
          setCheese(cheese-1);
          break;
      }
      case 'meat':{
          setMeat(meat-1);
          break;
      }

      default: break;
  }

  }
    return(
      <div className="BuildControls__BuildControls__220uz">
        <p>Current price: <strong>${price.toFixed(2)}</strong></p>
        <div className="BuildControl__BuildControl__ibcUQ">
          <div className="BuildControl__Label__2VLnR">Lettuce</div>
          {lettuce===0 && <button className="disable_less" disabled={true} >Less</button> }
          {lettuce>0 && <button className="BuildControl__Less__3X6hg" onClick={() => decrement('lettuce')} >Less</button> }
          <button className="BuildControl__More__2eQpV"  onClick={() => increment('lettuce')}  >More</button>
        </div>
        <div className="BuildControl__BuildControl__ibcUQ">
        <div className="BuildControl__Label__2VLnR">Bacon</div>
          {bacon===0 && <button className="disable_less" disabled={true} >Less</button> }
          {bacon>0 && <button className="BuildControl__Less__3X6hg" onClick={() => decrement('bacon')} >Less</button> }
          <button className="BuildControl__More__2eQpV" onClick={() => increment('bacon')}>More</button>
        </div>
        <div className="BuildControl__BuildControl__ibcUQ">
          <div className="BuildControl__Label__2VLnR">Cheese</div>
          {cheese===0 && <button className="disable_less" disabled={true} >Less</button> }
          {cheese>0 && <button className="BuildControl__Less__3X6hg" onClick={() => decrement('cheese')} >Less</button> }
          <button className="BuildControl__More__2eQpV" onClick={() => increment('cheese')}>More</button>
        </div>
        <div className="BuildControl__BuildControl__ibcUQ">
          <div className="BuildControl__Label__2VLnR">Meat</div>
          {meat===0 && <button className="disable_less" disabled={true} >Less</button> }
          {meat>0 && <button className="BuildControl__Less__3X6hg" onClick={() => decrement('meat')} >Less</button> }
          <button className="BuildControl__More__2eQpV" onClick={() => increment('meat')}>More</button>
        </div>
        {meat===0 && cheese===0 && bacon===0 && lettuce===0 &&
        <button className="disable-order" disabled="">SIGN UP TO ORDER</button>
        }
        {(meat>0 || cheese>0 || bacon>0 || lettuce>0) &&
        <Link to='/sign_up'>
          <button className="BuildControls__OrderButton__1ScSk" onClick={()=> setLogin(true)} disabled="">SIGN UP TO ORDER</button>
        </Link>
        }
      </div>
    );



}
export default Footer;
