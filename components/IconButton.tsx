import React from 'react'
import { ButtonStyled } from './IconButton.style'

interface IconButtonProps {
  type?: 'button' | 'submit' | 'reset'
  onClick?: (...args: any[]) => any
  children: React.ReactNode
}

const IconButton = ({
  type = 'button',
  onClick,
  children,
}: IconButtonProps) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}

export default IconButton
