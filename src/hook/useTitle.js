import { useEffect } from "react"

 

export const useTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} | Context - Reducer`;
    },[title])
    return null;
}
