import React, { useContext, useRef, useState } from 'react'
import { useGetIssues } from '../../hooks/useGetIssues'
import { Issue } from '../Issue'
import { List } from './styles'
import { Loading } from '../Loading'
import { IssueContext } from '../../context/IssuesContext'

export const ListOfIssues = () => {
  const [currentItem, setCurrentItem] = useState(0)
  const listRef = useRef(null)
  const { loading } = useGetIssues()
  const { issues = [] } = useContext(IssueContext)

  const handleOnKeyDown = (evt) => {
    switch (evt.key) {
      case 'ArrowDown':
        setCurrentItem(currentItem + 1)
        listRef.current.childNodes[currentItem + 1].focus()
        break
      case 'ArrowUp':
        currentItem > 0 && setCurrentItem(currentItem - 1)
        listRef.current.childNodes[currentItem - 1].focus()
        break
    }
  }

  const handleOnClickIndex = (index) => () => {
    setCurrentItem(index)
  }

  if (loading) return <Loading />

  return (
    <List ref={listRef} onKeyDown={handleOnKeyDown}>
      {
        issues.map((issue, index) => <Issue key={issue.id} {...issue} handleOnClickIndex={handleOnClickIndex(index)} />)
      }
    </List>
  )
}
