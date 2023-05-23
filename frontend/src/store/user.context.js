import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext({ 
    userId: null,          //userId inicia con valor nulo
    updateUser: () => {},  //mi contexto proporciona una funcion que me deja actualizar el valor de userId
});

const UserProvider = ({ children }) => {    //Que provee mi contexto?
    const [userId, setUserId] = useState(() => {          
        const storedUserId = localStorage.getItem('userId');
        return storedUserId !== null ? storedUserId : null; //Esta funcion me devuelve el valor del userId o me devuelve null si no existe. El valor de userId se setea en proximos componentes
      });








      
  const updateUser = (id) => { //funcion para setear el userId
    setUserId(id);
    localStorage.setItem('userId', id); //guarda ese valor de userId en el localStorage para persistirlo. Es decir, al tener un valor userId queda guardado para seguir persisitiendo luego de un refresh de la pagina
  };

  useEffect(() => {
    const handleStorageChange = (event) => { //se ejecuta cuando ocurre un cambio en el localStorage
      if (event.key === 'userId') { //  Verificamos si la clave del evento storage es igual a 'userId' y, en ese caso, actualizamos el estado userId con el nuevo valor (event.newValue).
        setUserId(event.newValue);
      }
    };
    window.addEventListener('storage', handleStorageChange); //Añadimos un event listener al objeto window para escuchar los cambios en el localStorage.
    return () => {
      window.removeEventListener('storage', handleStorageChange); // eliminamos el event listener del objeto window para limpiar la suscripción. Es decir, para que vuelva el userId a NULL.
    };
  }, []);

  return (
    <UserContext.Provider value={{ userId, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };