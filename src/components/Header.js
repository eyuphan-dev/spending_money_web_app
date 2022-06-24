import React from 'react'
import { useState } from 'react'
import { moneyFormat } from '../heplers'

const Header = ({total,money}) => {
  return (
      
    <div className='header'>
      {total > 0 && money - total !== 0 && (
          <div>Harcayacak <span>${moneyFormat(money-total)}</span> paranız kaldı!</div>
        )}
        {total === 0 &&(
          <div>Harcamak için <span>${moneyFormat(money)}</span> paranız var!</div>
        )}
        {money - total === 0 && (
            <div>Paran bitti,Naneyi yedin aç kaldın:)</div>
        )}
        <style jsx>{`
        .header{
          background: linear-gradient(to bottom, #32EEFF, #99FFD4);
          height:60px;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#fff;
          font-size: 24px;
          letter-spacing:1px;
        }
        .header span{
          margin:0 10px;
          font-weight:bold;
        }
        
        `}</style>
    </div>
    
  )
}

export default Header
