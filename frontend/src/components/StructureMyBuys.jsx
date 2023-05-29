import React from 'react'
import "../styles/mybuys.css"

const StructureMyBuys = ({buys}) => {
  return (
    <div>
           <div className='a'>
              <table className='b'>
                  <tr className='c'>

                      <th className='seccion'>Product</th>
                      <th className='seccion'>Price</th>
                      <th className='seccion'>Quantity</th>
                  </tr>
      
                  <tr className='tr-detail'>
                     <td className='remera-dato'>{buys.name}</td>
                     <td className='remera-dato'>{buys.price} ARS</td>
                     <td className='remera-dato'>{buys.quantity}</td>
                  </tr>
              </table>

              
    </div>
                   
    </div>
  )
}

export default StructureMyBuys
