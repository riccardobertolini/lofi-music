import React from 'react'
import { ButtonStyled } from './IconButton.style'
import { useAccessibilityContext } from '../contexts/AccessibilityContext'

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
  const { tabIndex } = useAccessibilityContext()
  return (
    <ButtonStyled type={type} onClick={onClick} tabIndex={tabIndex}>
      {children}
    </ButtonStyled>
  )
}

export default IconButton
