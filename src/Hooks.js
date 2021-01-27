import { useEffect, useState } from 'react'

//https://gist.github.com/isacvale/ffb552a66868e535ec2aa4a231b41505
const useTransition = (isOpen, closeFunction, delay = 500) => {
    const [ show, setShow ] = useState(false)
  
    // Animate in component when isOpen
    useEffect(() => {
        if (isOpen) {
          requestAnimationFrame(() => setShow(true))
        }
      }, [isOpen])
  
    // Animate out component when !isOpen
    useEffect(() => {
      if (!isOpen && show) {
        requestAnimationFrame(() => setShow(false))
        setTimeout(closeFunction, delay)
      }
  
    }, [isOpen])
  
    return isOpen ? ' open ' : ''
  }

  export {
      useTransition,
  }