import React, {useContext, useState} from 'react'
import Modal from '../Modals/Modal';
import shoppingBasket from '../Assets/shopping-basket.png'
import Basket from '../Views/Basket';
import { BasketContext } from '../BasketContext'
import { createPortal } from 'react-dom';

export default function Navbar() {
    const [showModal, setShowModal] = useState(false)
    const [isPromo, setIsPromo] = useState(false)
    const [promoValue, setPromoValue] = useState('')

    const handleClick = () => {
        setShowModal(true)
    }

    const {basketList} = useContext(BasketContext)
    // const [totalBasket, setTotalBasket] = useState()
    let somme = 0
    let quantite = 0
    basketList.map((item) =>{
        somme = somme + item.price * item.quantiteBasket
        if (isPromo) {
            somme = somme - (somme * 0.3)
        }
        quantite += item.quantiteBasket
    })

    const updatePromoValue = (value) => {
        setPromoValue(value)
    }

    return (
        <div id="navbar">
            <div className="nav-bar-wrapper">
                
                <div className="basket" onClick={handleClick}>
                    <div className="quantity-basket"><span>{quantite}</span></div>
                    <img src={shoppingBasket} alt="" className="shoppingBasket"/>
                </div>
                
                <div className="input-set">
                    <input 
                    value={promoValue} 
                    type="text" 
                    placeholder="Code Promo" 
                    onChange={(e) => updatePromoValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && promoValue === "VOUSETESEMBAUCHE" ? setIsPromo(true) : setIsPromo(false)}
                    />
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
