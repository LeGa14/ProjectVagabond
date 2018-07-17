import styled from 'styled-components'

const CityCardStyle = styled.div`
 .ui.card {
    margin: 0 auto;
    width: 80%;
    z-index: -3;
    box-shadow: 1vh 0 2vh 1vh rgba(0,0,0,0.5);
    background-color: rgb(230,231,232)
 }
 .ui.card>.content>.header:not(.ui), .ui.cards>.card>.content>.header:not(.ui) 
    {font-size: 3rem;}
`

export default CityCardStyle