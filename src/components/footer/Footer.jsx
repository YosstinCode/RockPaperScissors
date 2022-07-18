import React, { useContext } from 'react'
import { rulesContext } from '../../context/RulesContext'
import ModalRules from '../modal_rules/ModalRules'

import style from "./Footer.module.css"

const Footer = () => {

  const {rules, setRules} = useContext(rulesContext)

  const handleClick = () => {
    setRules(true)
  }

  return (
  <footer className={style.footer}>
    <button className={style.rules} onClick={handleClick}>Rules</button>
    {
      rules && <ModalRules/>
    }
  </footer>
  )
}

export default Footer