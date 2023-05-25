import styled from "styled-components"

const Button = styled.button`
  font-size: 1em;
  padding: 1em;
  margin: 0.5em;
  border: 4px solid #ced7e0;
  background: ${(props) => props.background || "#9ccddc"}; 
`

const ButtonContainer = styled.div`
  display:flex; 
  justify-content:center;
  background-color: #042f4f;
`

// or statement to give the buttons different colours

const LaunchSelector = ({launchIncrease, launchDecrease}) => {

  return (
    <>
    <ButtonContainer>
      <Button onClick={launchDecrease}>Previous Launch</Button>
      <Button onClick={launchIncrease} background = "#dcab9c" >Next Launch</Button>
    </ButtonContainer>
      </>
    
  )

}

export default LaunchSelector;