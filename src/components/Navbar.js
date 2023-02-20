import React from 'react'

 const Navbar = ({filterItem,menuList}) => {
  return (
    <>
     <nav className="navbar">
      <div className="btn-group">
        {
            menuList.map((current)=>{
                return (
                    <button className="btn-group__item"
                     onClick={() =>filterItem(current)}>
                        {current}</button>
                )
            })
        }
      </div>
    </nav>
    </>
  )
}
export default Navbar
