import styled from 'styled-components'

export const ListItem = styled.li`
  width: 70%;
  height: auto;
  background: #7FDBFF;
  border: 1px solid #111;
  border-radius: 8px;
  margin-bottom: 10px;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  &:focus,
  :hover {
    background: #39CCCC;
  }
`
export const Title = styled.p`
  padding: 3px 3px 3px 10px;
  font-size: 14px;
  font-weight: 500;
`

export const Anchor = styled.a`
  padding: 3px 3px 3px 10px;
  font-size: 12px;
  word-break: break-word;
`
