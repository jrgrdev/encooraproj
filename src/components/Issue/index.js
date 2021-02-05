import React from 'react'
import { ListItem, Title, Anchor } from './styles'

export const Issue = ({ title, url }) => {
  return (
    <ListItem tabIndex='0'>
      <Title> {title} </Title>
      <Anchor href={url}> {url} </Anchor>
    </ListItem>
  )
}
