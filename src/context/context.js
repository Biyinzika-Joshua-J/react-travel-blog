import React, {useState} from 'react'

const Authentication = React.createContext({
    userName:null,
    image:null,
    isLoggedIn:false,
    handleUsername:()=>{},
    handleImage:()=>{},
    setLogin:()=>{},
    setLogOut:()=>{},
});

export const AuthenticationProvider = (props) =>{
    const [username, setUsername] = useState(null);
    const [imageUrl, setImageurl] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const usernameHandler = (name)=>{
        setUsername(name)
    }

    const imageHandler =(image)=>{
        setImageurl(image)
    }

    const isloginHandler = ()=>{
        setIsLoggedIn(true)
    }

    const LogOutHandler=()=>{
        setIsLoggedIn(false)
    }

    return <Authentication.Provider value={
        {
            userName:username,
            image:imageUrl,
            isLoggedIn:isLoggedIn,
            handleUsername:usernameHandler,
            handleImage:imageHandler,
            setLogin:isloginHandler,
            setLogOut:LogOutHandler,
        }
    }>
        {props.children}
    </Authentication.Provider>
}

export default Authentication