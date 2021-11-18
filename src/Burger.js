import React,{useContext} from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { BurgerContext } from './BurgerContext';
function Burger(){
  const { value, value2,value3,value4 } = useContext(BurgerContext);
  const [lettuce] = value;
  const [bacon]=value2;
  const [cheese]=value3;
  const [meat]=value4;
  return(
    <>
      <Header/>
      <Main/>
      <Footer lettuce={lettuce} bacon={bacon} cheese={cheese} meat={meat}/>
    </>
  )

}
export default Burger;
