import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import Home from './pages/Home'
import IssueProvider from './context/IssuesContext'

export const App = () => {
  return (
    <IssueProvider>
      <GlobalStyle />
      <Home />
    </IssueProvider>
  )
}
