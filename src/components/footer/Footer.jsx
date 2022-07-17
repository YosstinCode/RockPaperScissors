import React, { useContext } from 'react'
import { rulesContext } from '../../context/RulesContext'
import ModalRules from '../modal_rules/ModalRules'

const Footer = () => {

  const {rules, setRules} = useContext(rulesContext)

  const handleClick = () => {
    setRules(true)
  }

  return (
  <footer>
    <button onClick={handleClick}>Rules</button>
    {
      rules && <ModalRules/>
    }
  </footer>
  )
}

export default Footer