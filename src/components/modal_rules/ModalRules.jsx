import React, { useContext } from 'react'
import rulesImage from "../../assets/images/image-rules.svg"
import { rulesContext } from '../../context/RulesContext'

import style from "./ModalRules.module.css"

const ModalRules = () => {

  const {rules, setRules} = useContext(rulesContext)

  const handleClick = () => {
    setRules(false)
  }

  return (
    <div className={style.modal}>
        <h3 className={style.modalText}>Rules</h3>
        <img className={style.modalImg} src={rulesImage} alt="rules" />
        <button className={style.modalButton} onClick={handleClick}>X</button>
    </div>
  )
}

export default ModalRules