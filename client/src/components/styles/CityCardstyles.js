import styled from 'styled-components'

const CityCardStyle = styled.div`
 .ui.card {
    margin: 0 auto;
    font-family: 'Bitter', serif;
    margin-bottom: 5vh;
    width: 80%;
    z-index: 0;
    box-shadow: 1vh 0 2vh 1vh rgba(0,0,0,0.5);
    background-color: rgb(230,231,232);
    &:hover{
     box-shadow: none;
     width: 82%;
    }
 }

//  .ui.card > .image {
//      clip-path: rect(250px, 0, 0, 0);
//  }

ui.fluid.container {
    position: relative;
    width: 300px;
    height: 300px;
    overflow: hidden;
}
ui.fluid.container > img {
    position: absolute;
    top: -9999px;
    left: -9999px;
    right: -9999px;
    bottom: -9999px;
    margin: auto;
}
 `
 

export default CityCardStyle