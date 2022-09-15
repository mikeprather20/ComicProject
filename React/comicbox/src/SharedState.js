import {useState,createContext} from "react";

export const LoginContext = createContext();

export const LoginProvider = (props)=>{
    const [loggedIn,setLoggedIn] = useState(false)
    
    return (
        <LoginContext.Provider value={[loggedIn,setLoggedIn]}>
            {props.children}
        </LoginContext.Provider>
    )
}

const comicBoxGlobal = {}
export const ComicBoxContext = createContext(comicBoxGlobal);

export const ComicBoxProvider = (props) => {
    const [userComics, setUserComics] = useState(comicBoxGlobal);

    return (
        <ComicBoxContext.Provider value={[userComics, setUserComics]}>
            {props.children}
        </ComicBoxContext.Provider>
    )
}