import React from 'react'
import { ListOfIssues } from '../../components/ListOfIssues'
import { SearchInput } from '../../components/SearchInput'
import IssueFilterProvider from '../../context/IssuesFilterContext'
import { HomeWrapper } from './styles'

const Home = () => {
  return (
    <IssueFilterProvider>
      <HomeWrapper>
        <SearchInput />
        <ListOfIssues />
      </HomeWrapper>
    </IssueFilterProvider>
  )
}

export default Home
