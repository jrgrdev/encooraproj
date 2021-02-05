import styled from 'styled-components'
import { spinner } from '../../styles/animation/ellipsisLoading'

export const Spinner = styled.div`
  color: black;
  font-size: 90px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 72px auto;
  position: relative;
  transform: translateZ(0);
  ${spinner()}
  `
