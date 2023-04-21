import React from 'react'
import { Top } from '../components/top'
import { Card } from '../components/card/card'
import { CardForm } from '../components/cardForm/cardForm'
import './addCard.scss'

export const AddCard=()=> {
  return (
    <div className="screenSize">
      <Top/>
      <Card/>
      <CardForm/>
    </div>
  )
}
