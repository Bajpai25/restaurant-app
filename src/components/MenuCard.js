import React from 'react';
 const MenuCard = ({menudata}) => {
    return (
        <>
        
        {menudata.map((current)=>{
            const {id,name,description,category,price,image}=current
            return (
                <>
                <section className="main-card--container col-lg-12">
            <div className="card-container" key="{id}">
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle" style={{color:"red"}}>
                    {category}
                    </span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">{description}  
                    </span>
                    <div className="card-read">cost-{price}
                    </div>
                    <img src={image} alt="images" className="card-media"/>
                    <span className="card-tag subtle">Order now</span>
                </div>
            </div>
        </div>
        </section>
        </>
            )
        })}
        </>
    )
}
export default MenuCard