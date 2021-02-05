import React, { createContext, useState } from 'react'

export const IssueContext = createContext([])

export default function IssueProvider ({ children }) {
  const [issues, setIssues] = useState([])

  return (
    <IssueContext.Provider value={{ issues, setIssues }}>
      {children}
    </IssueContext.Provider>
  )
}
