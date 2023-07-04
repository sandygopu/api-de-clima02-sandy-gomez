import React from 'react'

export const Button = ({titulo, color}) => {
  return (
    <div className={color}>{titulo}</div>
  )
}
