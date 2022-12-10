import React from 'react'
import { useState } from 'react'

export const Form = () => {

    const [userData, setUserData] = useState({name:"", lastName:""})

    const handleSubmit = ( event )=>{
        
        event.preventDefault()
        console.log( userData )
    }
    const handleKey = ( event )=>{

        if(event.key !== "a" && event.key !== "e" && event.key !== "i" && event.key !== "o" && event.key !== "u"){
            console.log(event.key);
        }else{
            event.preventDefault()
        }
    }

/*     const handleChangeName = ( event )=>{
        setUserData({...userData, name: event.target.value});
    } */
/*     const handleChangeLastName = ( event )=>{
        setLastName(event.target.value);
    }
 */
    return (

    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='Ingrese su nombre' 
            name='name' 
            value={userData.name} 
            onChange={(event)=> setUserData({...userData, name: event.target.value})}
            onKeyDown={handleKey}/>
            <input type="text" 
            placeholder='Ingrese su apellido' 
            name='lastName' 
            value={userData.lastName} 
            onChange={(event)=> setUserData({...userData, lastName: event.target.value})}/>
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

