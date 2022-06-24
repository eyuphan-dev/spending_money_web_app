import React from 'react'
import { moneyFormat } from '../heplers'
const Product = ({product,basket,setBasket,total,money}) => {

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
      const checkBasket = basket.find(item => item.id === product.id)
      // ürün daha önce eklenmemiş
      if (checkBasket) {
          checkBasket.amount += 1
          setBasket([...basket.filter(item => item.id !== product.id),checkBasket])  
          
      } else {
          setBasket([...basket,{
              id: product.id,
              amount: 1
          }])
      }   
    }
    const removeBasket = () => {
            const currentBasket = basket.find(item => item.id === product.id)
            const basketWithoutCurrent = basket.filter(item => item.id !== product)
            currentBasket.amount -= 1
            if (currentBasket.amount === 0) {
                setBasket([...basketWithoutCurrent])  
                
            } else {
                setBasket([...basketWithoutCurrent, currentBasket])                  
            }
            
        
      
    }
    
    

  return (
    <div className='product'>
      <img src={product.image}/>
      <h6>{product.title}</h6>
      <div className='price'>$ {(product.price)}</div>
      <div className='actions'>
          <button className='sell-btn' disabled={!basketItem}  onClick={removeBasket}>Sat</button>
          <span className='amount'> {basketItem && basketItem.amount || 0} </span>
          <button className='buy-btn' disabled={total + product.price > money} onClick={addBasket}>Satın Al</button>
          
      </div>
      <style jsx>{`
        .product{
            top: 0;
            padding:15px;
            background:#fff;
            border:1px solid #ddd;
            margin-bottom:20px;
            width:24%;
        }    
        .product img{
          width: 100%;
        }   
        .product h6{
          font-size:20px;
          margin-bottom:10px;
        }
        .product .action{
          display:flex;
          align-items:center;
        }
        .product .price{
          font-size:20px;
          color:green;
        }
        .actions button{
          height:40px;
          padding:0 15px;
          flex:1;
          cursor:pointer;
        }
        .actions .amount{
          width:50px;
          text-align:center;
        }
        .actions .sell-btn{
          background:#ccc;
          color:#333;
          font-size:15px;
          font-weight:500%;
          border-radius:4px 0 0 4px;
        }
        .actions .buy-btn{
          background-color:#61dafb;
          font-size:15px;
          font-weight:500%;
          border-radius:4px 0 0 4px;
        }  
      `}

      </style>
    </div>
  )
}

export default Product

