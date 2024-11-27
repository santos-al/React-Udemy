import { useState } from "react"

import Header from "./components/Header"
import Input from "./components/Input"
import Result from "./components/Result"


function App() {

  const [userInput, setUserInput] = useState({
      initialInvestment: 1000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10
  });

  const inputisValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            // By adding the plus sign the newValue is converted from a string into an int
            [inputIdentifier]: +newValue
        };
    })
  }

  return (
    <>
      <Header />
      <Input onChangeInput={handleChange} userInput={userInput} />
      {!inputisValid && <p className="center">Please enter a duration greater than 0</p>}
      {inputisValid && <Result input={userInput} />}
    </>
  )
}

export default App
