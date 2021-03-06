import { useEffect, useState } from 'react'

const setDebounce = (delay, callback, ...args) => {
    let hash = Math.random()
    const setNewHash = () => {
        hash = Math.random()
        return hash
    }
    return () => {
        const newHash = setNewHash()
        setTimeout(() => {
            if (hash === newHash)
                callback(...args)
        }, delay)
    }
}

const useAnimationConfirm = (prop, delay = 600) => {
    const [ confirm, setConfirm ] = useState(0)
    useEffect(() => {
        !!prop
            ? requestAnimationFrame(() => setConfirm(1))
            : setTimeout(() => !!prop || setConfirm(false), delay)
    }, [delay, prop])

    return +prop + confirm - 1
}

export {
    setDebounce,
    useAnimationConfirm,
}