import { useContext, useEffect, useState } from 'react'
import { IssueContext } from '../context/IssuesContext'
import { IssueFilterContext } from '../context/IssuesFilterContext'

import getIssues from '../services/issues/getIssues'

export function useGetIssues () {
  const [issues, setIssues] = useState([])
  const [loading, setLoading] = useState(false)
  const { setIssues: setIssuesContext } = useContext(IssueContext)
  const { setIssuesCopy } = useContext(IssueFilterContext)

  useEffect(() => {
    setLoading(true)
    getIssues()
      .then(res => {
        setLoading(false)
        setIssuesContext(res)
        setIssuesCopy(res)
        setIssues(res)
      })
  }, [])

  return { issues, loading }
}
