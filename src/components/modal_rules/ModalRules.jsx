import React, { useContext } from 'react'
import rulesImage from "../../assets/images/image-rules.svg"
import { rulesContext } from '../../context/RulesContext'


const ModalRules = () => {

  const {rules, setRules} = useContext(rulesContext)

  const handleClick = () => {
    setRules(false)
  }

  return (
    <div>
        <h3>Rules</h3>
        <img src={rulesImage} alt="rules" />
        <button onClick={handleClick}>X</button>
    </div>
  )
}

export default ModalRules