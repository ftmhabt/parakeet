import React from "react"

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}