import React, {useState, useContext} from 'react'
import { BasketContext } from '../BasketContext'

export default function BasketLine({data}) {

    const {basketList, setBasketList} = useContext(BasketContext)

    const handleDeleteItem = () =>{
        const newState = [...basketList]

        let objectIndex = basketList.indexOf(basketList.find(o => o._id === data._id))

        newState.splice(objectIndex, 1)

        setBasketList(newState)

    }

    const handleAddToCart = () =>{
         
        //Copie du tableau
        const newState = [...basketList]

        //Récupérer l'index du plats s'il est déjà dans le panier
        let objectIndex = basketList.indexOf(basketList.find(o => o._id === data._id))
        console.log(objectIndex);
        if(objectIndex >= 0){
            newState[objectIndex].quantiteBasket++
        } else {
            newState.push({...data, quantiteBasket: 1})
        }
        setBasketList(newState)
    }

    const handleRemoveToCart = () =>{
         
        //Copie du tableau
        const newState = [...basketList]
        console.log(newState);

        //Récupérer l'index du plats s'il est déjà dans le panier
        let objectIndex = basketList.indexOf(basketList.find(o => o._id === data._id))
        console.log(objectIndex);

        if(newState[objectIndex].quantiteBasket > 1){
            newState[objectIndex].quantiteBasket--
            setBasketList(newState)
        } else {
            handleDeleteItem()
        }
    }

    return (
        <div className="basket-line">
            <div className="basket-item-details">
                <div className="img-basket-container"><img src={data.urlImg} alt="" /></div>
                <h3 className="basket-title">{data.name}</h3>
                <div className="quantity card-price">
                    <span className="quantity-less" onClick={handleRemoveToCart}>-</span>
                    {data.quantiteBasket}
                    <span className="quantity-more" onClick={handleAddToCart}>+</span>
                </div>
                <div className="card-price">{data.price}€</div>
            </div>
            <div className="line"></div>
        </div>
    )
}
