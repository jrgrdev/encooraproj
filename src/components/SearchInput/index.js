import React, { useContext, useEffect, useState } from 'react'
import { IssueContext } from '../../context/IssuesContext'
import { IssueFilterContext } from '../../context/IssuesFilterContext'
import { Input, InputHidden, SearchForm } from './styles'

export const SearchInput = () => {
  const [search, setSearch] = useState('')
  const [autocomplete, setAutocomplete] = useState('')
  const { setIssues } = useContext(IssueContext)
  const { issuesCopy = [] } = useContext(IssueFilterContext)

  useEffect(() => {
    if (issuesCopy.length > 0 && search) {
      const findIssue = issuesCopy.find(issue => issue.title.toLowerCase().substring(0, search.length) === search.toLocaleLowerCase())
      const title = findIssue ? findIssue.title : ''
      setAutocomplete(title)
    } else {
      setAutocomplete('')
    }
  }, [search])

  const handleSubmit = (evt) => {
    evt.preventDefault()

    setSearch(autocomplete)
    const filterIssues = issuesCopy.filter(issue => issue.title.toLowerCase().includes(search.toLowerCase()))
    setIssues(filterIssues)
  }

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Search...'
        value={search}
        onChange={(evt) => setSearch(evt.target.value)}
      />
      {
        search && (
          <InputHidden
            type='text'
            value={autocomplete}
            disabled
          />
        )
      }
      <button />
    </SearchForm>
  )
}
