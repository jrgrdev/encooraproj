import React, { createContext, useState } from 'react'

export const IssueFilterContext = createContext([])

export default function IssueFilterProvider ({ children }) {
  const [issuesCopy, setIssuesCopy] = useState([])

  return (
    <IssueFilterContext.Provider value={{ issuesCopy, setIssuesCopy }}>
      {children}
    </IssueFilterContext.Provider>
  )
}
