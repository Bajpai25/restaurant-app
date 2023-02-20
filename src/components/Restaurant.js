
import React, {useState} from "react";
import './style.css';
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
const uniqueList =[...new Set
  (Menu.map((current)=>
  {
  return current.category;
}
)
),"All",
]
 const Restaurant = () => {
const [menudata,setMenudata]= useState(Menu);
const [menuList,setMenuList]=useState(uniqueList)
const filterItem=(category)=>{
  if(category==="All"){
    setMenudata(Menu)
    return ;
  }
  const updatedList = Menu.filter((current)=>{
    return current.category===category;
  })
  setMenudata(updatedList);
};
  return(
    <>
   <Navbar filterItem={filterItem} menuList={menuList}/>
   <MenuCard menudata={menudata}/>
    </>
  )
}
export default Restaurant;