import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
// import {purpleTheme} from './purpleTheme'
import { ReactNode } from "react"
import { purpleTheme } from "./purpleTheme"

interface LayoutProps{
  children: ReactNode
}
export const AppTheme = ({children}:LayoutProps) => {
  return (
    <ThemeProvider theme={purpleTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}
