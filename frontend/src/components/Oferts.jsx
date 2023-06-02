import React, { useEffect, useState } from 'react'
import axios from "axios"

const Oferts = () => {

    const [img, setImg] = useState("")

   useEffect(() => { 
    axios.get("http://localhost:4000/ofertas")
         .then((res) => { 
          
            const doc = res.data
            doc.map((i) => { 
                setImg(i.img)
                console.log(i)
            })

         } )
         .catch((err) => console.log(err))
   }, [])



  return (
    <div>
        {img}
    </div>
  )
}

export default Oferts
