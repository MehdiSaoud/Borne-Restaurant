import React, {useContext, useState} from 'react'
import Modal from '../Modals/Modal';
import shoppingBasket from '../Assets/shopping-basket.png'
import Basket from '../Views/Basket';
import { BasketContext } from '../BasketContext'

export default function Navbar() {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const {basketList} = useContext(BasketContext)
    // const [totalBasket, setTotalBasket] = useState()
    let somme = 0
    basketList.map((item) =>{
        somme = somme + item.price * item.quantiteBasket
    })

    return (
        <div id="navbar">
            <div className="nav-bar-wrapper">
                
                <div className="basket" onClick={handleClick}>
                    <div className="quantity-basket"><span>10</span></div>
                    <img src={shoppingBasket} alt="" className="shoppingBasket"/>
                </div>
                
                <div className="input-set">
                    <input type="text" placeholder="Code Promo" />
                </div>
                <div className="price"><span> {somme} </span> €</div>

            </div>
            {
                showModal &&  
                <Modal setModal={setShowModal}> 
                    <Basket setBasketModal={setShowModal}/>
                </Modal>
            }
           
        </div>
        
    )
}
