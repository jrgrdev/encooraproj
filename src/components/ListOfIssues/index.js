import React, { useContext } from 'react'
import { useGetIssues } from '../../hooks/useGetIssues'
import { Issue } from '../Issue'
import { List } from './styles'
import { Loading } from '../Loading'
import { IssueContext } from '../../context/IssuesContext'

export const ListOfIssues = () => {
  const { loading } = useGetIssues()
  const { issues = [] } = useContext(IssueContext)

  if (loading) return <Loading />

  return (
    <List tabIndex='0'>
      {
        issues.map(issue => <Issue key={issue.id} {...issue} />)
      }
    </List>
  )
}
