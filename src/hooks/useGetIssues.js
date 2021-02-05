import { useContext, useEffect, useState } from 'react'
import { IssueContext } from '../context/IssuesContext'
import { IssueFilterContext } from '../context/IssuesFilterContext'

export function useGetIssues () {
  const [issues, setIssues] = useState([])
  const [loading, setLoading] = useState(false)
  const { setIssues: setIssuesContext } = useContext(IssueContext)
  const { setIssuesCopy } = useContext(IssueFilterContext)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://api.github.com/repos/facebook/react/issues')
      .then(response => response.json())
      .then(res => {
        setLoading(false)
        setIssuesContext(res)
        setIssuesCopy(res)
        setIssues(res)
      })
  }, [])

  return { issues, loading }
}
