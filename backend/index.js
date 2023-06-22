import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import connectDataBase from "./database/dbconnect.js"
//import tasksRoutes from "./routes/tasks.routes.js"
import usersRoutes from "./routes/users.routes.js"
import productsRoutes from "./routes/products.routes.js"
import buyRoutes from "./routes/buy.routes.js"
import reviewsRoutes from "./routes/reviews.routes.js"
import shippingDataRoutes from "./routes/shippingdata.routes.js"



const app = express()
const port = 4000

app.use(express.json())
app.use(express.text())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({type:"*/*"}))
app.use(express.urlencoded({extended:true}))

app.use(usersRoutes)
app.use(productsRoutes)
app.use(buyRoutes)
app.use(reviewsRoutes)
app.use(shippingDataRoutes)






app.get('/', (req, res) => {
    res.send('Bienvenidos a tu Servidor de Articulos MERN!!!!!!!!')
  })
  
app.listen(port, () => {
    console.log(`El servidor esta funcionando correctamente en el puerto ${port} ✔✔`)
   connectDataBase()
  })
  