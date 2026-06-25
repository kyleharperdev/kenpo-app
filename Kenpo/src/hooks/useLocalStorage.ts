import { useEffect, useState } from "react";

function useLocalStorage(key: string, value: any) {
    const [user, setUser] = useState(() => {
       const stored = localStorage.getItem(key)
        if (stored) {
            const data = JSON.parse(stored)
            return data;
        } 
        return value
    })

    useEffect(() => {
        const setData = JSON.stringify(user)
        localStorage.setItem(key, setData)
    }, [user, key]);

    return [user, setUser]
}

export default useLocalStorage;