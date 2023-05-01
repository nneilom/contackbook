import React, { createContext, useState } from 'react'

// создали контекст 
export const counterContext = createContext()
// контекст провайдер ожидает дочерние элементы 
const CounterContextProvider = ({children}) => {
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter +1)
  }
  function decrement() {
    setCounter(counter -1)
  }
  return (
    <counterContext.Provider value={{counter,increment,decrement}}>{children}</counterContext.Provider>
  )
}

export default CounterContextProvider