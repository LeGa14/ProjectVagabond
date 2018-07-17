import styled from 'styled-components'

const CityCardStyle = styled.div`
 .ui.card {
    margin: 0 auto;
    margin-bottom: 5vh;
    width: 80%;
    z-index: 0;
    box-shadow: 1vh 0 2vh 1vh rgba(0,0,0,0.5);
    background-color: rgb(230,231,232);
    &:hover{
     box-shadow: none;
     width: 90%;
    }
 }
`

export default CityCardStyle