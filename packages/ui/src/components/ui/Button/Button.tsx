import React from "react"
import { BoxProps } from "../../primitives/Box/Box.types"

export interface ButtonProps extends BoxProps {
  variant?: "primary" | "ghost"
}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>
}

export default Button