import styled from 'styled-components'

export const SearchForm = styled.form`
  position: relative;
  display:flex;
  flex-direction: column;
  width: 65%;
`

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 6px;
  border: 1px solid #111;
  font-size: 16px;
  font-weight: 800;
  padding-left: 10px; 
  margin-bottom: 20px;
  background: transparent;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  z-index: 1;
  text-transform: uppercase; 
`

export const List = styled.ul`
  position: absolute;
  border: '1px solid black';
  transform: translateY(30px);
  background: white;
  width: 100%;
  height: auto;
  max-height: 100px;
  border-radius: 10px;
  box-shadow: 0 10px 3px rgba(0, 0, 0, .3);
  overflow-y: scroll;

  li {
    border-bottom: 1px solid black;
    padding: 5px;
    
    :hover {
      background: #7FDBFF;
    }

    :first-child {
      :hover {
        border-radius: 10px 10px 0 0;
      }
    }

    :last-child {
      border-bottom: none;

      :hover {
        border-radius:0 0 10px 10px;
      }
    }
  }
`
export const InputHidden = styled.input`
  position: absolute;
  width: 100%;
  height: 30px;
  border-radius: 6px;
  border: 1px solid #111;
  font-size: 16px;
  font-weight: 800;
  background: #eee;
  padding-left: 10px; 
  margin-bottom: 20px;
  text-transform: uppercase;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  color: black;
  opacity: .2;
  z-index: 0;
`
