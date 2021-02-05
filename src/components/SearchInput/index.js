import React, { useContext, useEffect, useState } from 'react'
import { IssueContext } from '../../context/IssuesContext'
import { IssueFilterContext } from '../../context/IssuesFilterContext'
import { Input, SearchInputWrapper } from './styles'

export const SearchInput = () => {
  const [search, setSearch] = useState('')
  const { setIssues } = useContext(IssueContext)
  const { issuesCopy = [] } = useContext(IssueFilterContext)

  useEffect(() => {
    setIssues(
      issuesCopy.filter(issue => issue.title.toLowerCase().includes(search.toLowerCase()))
    )
  }, [search])

  return (
    <SearchInputWrapper>
      <Input
        type='text'
        placeholder='Search...'
        value={search} onChange={(e) => setSearch(e.target.value)}
      />
    </SearchInputWrapper>
  )
}
