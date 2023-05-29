import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import connectDataBase from "./database/dbconnect.js"
//import tasksRoutes from "./routes/tasks.routes.js"
import usersRoutes from "./routes/users.routes.js"
import productsRoutes from "./routes/products.routes.js"
import buyRoutes from "./routes/buy.routes.js"
import mercadopago from "mercadopago"

mercadopago.configure({ 
  access_token: "TEST-1883449430457760-052913-f2e2887fa5905c9bc2efbf66d85c8ba5-548557600"
})

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




app.get('/', (req, res) => {
    res.send('Bienvenidos a tu Servidor de Articulos MERN!!!!!!!!')
  })
  
app.listen(port, () => {
    console.log(`El servidor esta funcionando correctamente en el puerto ${port} ✔✔`)
   connectDataBase()
  })
  