import React,{useState, createContext} from "react";

export const BurgerContext=createContext()

export const BurgerProvider= props =>{
  const [lettuce, setlettuce] = useState(0);
  const [bacon,setBacon]=useState(0);
  const [cheese,setCheese]=useState(0);
  const [meat,setMeat]=useState(0);
  const [price,setPrice]=useState(3.00);
  const [login,setLogin]=useState(false);

  return(
    <BurgerContext.Provider value={{ value: [lettuce, setlettuce], value2: [bacon, setBacon],value3: [cheese,setCheese],value4: [meat,setMeat],value5:[price,setPrice],value6: [login,setLogin]}} >
      {props.children}
    </BurgerContext.Provider>
  )
}
