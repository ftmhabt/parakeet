import React from "react"

export const Text = ({ children, ...rest }: any) => {
  return <span {...rest}>{children}</span>
}

export default Text