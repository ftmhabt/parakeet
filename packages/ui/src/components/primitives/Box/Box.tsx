import React from "react"

export const Box = ({ children, ...rest }: any) => {
  return <div {...rest}>{children}</div>
}

export default Box