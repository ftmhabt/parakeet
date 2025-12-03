import React from "react"

export const RTLProvider: React.FC<any> = ({ children }) => <div dir="ltr">{children}</div>