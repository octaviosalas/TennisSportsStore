import User from "../models/users.js"
import bcrypt from "bcrypt"

export const getUserById = async (req, res) => { 

  const {userId} = req.params;                                                         //te va a llegar por parametro un userId.
     if(userId.length === 24) {                                                       // Si el userId tiene 24 caracteres (son los 24 que da por default mongodb)
        await User.findById(userId).then((user) => {                                 // Busca por el Id en la base de datos. Y despues
            if(!user) {                                                             //Si no lo encontras
                return res.json({Mensaje: "El usuario no existe"})                 //decime que el usuario no existe
            } else {                                                              //y sino 
                const {_id, password, __v, ...respuesta } = user._doc;           //el objeto user._doc son los datos del documento de mongodb. user._doc contiene TODO. Y aca, lo desestructuro en otro objeto llamado 
                res.json(respuesta)                                             //"respuesta" para que me devuelva como respuesta los datos del documento, pero obviamente SIN el id y sin la contraseña.
            }                                                                  //de esta manera, me devuelve solo "respuesta" que contiene el email y el nombre. Por eso lo desestructuro
        })
     } else { 
         res.json({Mensaje: "La contraseña es incorrecta"})                  //si el Id que obtiene es menor a 24 caracteres me devuelve esto
     }

}


export const registerUser = async (req, res) => { 

   const {name, email, password} = req.body;         
   console.log(req.body)                                                                                   //Te va a llegar esto en el request
   await User.findOne({email}).then((user) => {                                                           //Primero busca en la DB si encontras el mail ya registrado y despues..
       if(user) {                                                                                        //si lo encontras
        return res.json({Mensaje: "Ya existe un usuario registrado con ese correo electronico"})        //devolveme que ya existe
       } else if (!name || !email || !password) {                                                      //si se quiere registrar sin ingresar sus datos
        return res.json({Mensaje: "Faltan datos para poder registrarte"})                             //devolveme que faltan los datos
       } else {        
        console.log(req.body)                                                                        //y si no lo encontraste
        bcrypt.hash(password, 10, (err, contraseñaHasheada) => {                                    //hashea la contraseña
            if(err) res.json({err})                                                                //si hay algun error devolveme el error
            else {                                                                                //y sino
                const newUserToBeRegistered = new User( {                                        //creame un usuario nuevo con los datos del request
                    name: name,
                    email: email,
                    password: contraseñaHasheada
                })
                newUserToBeRegistered.save().then((user) => {                                 //guardame en la db el usuario nuevo y despues
                    res.json({Mensaje: "Usuario creado correctamente", user})                //devolveme un mensaje para avisarme que ya esta creado
                })
                .catch(err => console.log(err))
            }
        })
       }
   })
}


    export const loginUser = async (req, res) => {
        const { email, password } = req.body;                                                      //Te va a llegar esto en el request
            
        try {                                                                                    //Intenta primero
          let user = await User.findOne({ email });                                          //buscar en la db ese correo que te llego
      
          if (!user) {                                                                    //si no encontraste el correo
            throw new Error("El mail no existe y no está registrado");                    //avisame que no esta registrado
          }
      
         
           bcrypt.compare(password, user.password).then((correct) => {            //si no tenes por que avisarme nada, significa que lo encontraste, asique comparame las contraseñas, la que llego y la guardado
            if (correct) {                                                        //asique, como "compare" devuelve una promesa, .then
              const {id, name } = user;                                           //crea un objeto que va a ser la respuesta con el id DE MONGODB y el nombre del usuario                                        
              res.json({ mensaje: "Ingresado correctamente",                      //devolveme en json, dos cosas como respuesta: Un mensajito
              user: {                                                             //y tmb devolveme como respuesta el id y el nombre del usuario que entro. El ID es el ID de mongodb.
                id: id,
                name: name       
              } });               
            } else {  
              res.json({ mensaje: "Contraseña incorrecta" });                    //y si es incorrecta devolveme esto.
            }
          });
        } catch (error) {
          res.send("No existe el usuario con esos datos");
          console.log("No existe el usuario con esos datos");                    //si no encontraste nada..
        }
      };


//OTRA OPCION PARA REGISTER USER


/*const {name, email, password} = req.body //Guardando User en DB
    try {
        let user =  await User.findOne({email})
        if (user) throw new Error ("Ya existe")
        user = new User({email, password})
        await user.save()
        console.log(user)
        return ("✔ GUARDADO ✔")
    } catch (error) {
        console.log(error) 
        if(error.code === 11000) {
            return res.status(400).json({error: "Ya existe el Usuario en la Base de Datos"}) 
        }

    }}*/

//OTRA OPCION PARA LOGIN

/* const {email, password} = req.body;      
     console.log(email, password)
     await User.findOne({email})          
       .then((user) => {              
         if(!user) {               
             return res.json({Mensaje: "El usuario no ha sido encontrado para iniciar sesion"}) 
             } 
             bcrypt.compare(password, user.password).then((correctPassword) => {  
                    
            if(correctPassword) { //si es correcta
             const {id, name} = user;
                res.json({ 
                 mensaje: "Usuario Logeado Correctamente",
                 user: { 
                        id,
                        name,
                            },
                           });
                } else { 
                 return res.json({mensaje: "Contraseña incorrecta"})
                }
                })
               })*/