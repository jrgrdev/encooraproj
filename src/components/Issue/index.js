import React from 'react'
import { ListItem, Title, Anchor } from './styles'

export const Issue = ({ title, url, handleOnClickIndex }) => {
  return (
    <ListItem tabIndex='0' onClick={handleOnClickIndex}>
      <Title> {title} </Title>
      <Anchor href={url}> {url} </Anchor>
    </ListItem>
  )
}
