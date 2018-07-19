import styled from 'styled-components'

const CityShowWrapper = styled.div`
    h1{
        margin: 10vh auto 0 auto;
        background-color: rgb(69,83,68);
        color: rgb(210,211,212);
        font-family: 'Bitter', serif;
        font-size: 3rem;
        width: 90%;
        @media(min-width: 600px){
            max-width: 540px;
        }
    }
    div {
        padding-bottom: 2vh;
        color: #a4afa1;
    }
    img {
        width: 90%;
        @media(min-width: 600px){
            max-width: 540px;
        }
    }
    p {
        background-color: rgb(69,83,68);
        width: 90%;
        margin: 0 auto;
        font-family: 'Bitter', serif;
        @media(min-width: 600px){
            max-width: 540px;
        }
    }
    a {
        color: rgb(179,183,178);
        font-size: 1.5rem;
        font-weight: 700;
        font-family: 'Bitter', serif;
    }
    .content{
        border-bottom: 1px solid rgba(31,32,33,0.4);
    }
    .text {
        max-width: 80%;
        margin: 0 auto;
        padding-bottom: 2rem;
    }
    .ui.header:first-child {
    margin-top: -.40285714em;
    padding-top: 1rem;
    font-size: 2rem;
    color: rgb(210,211,212);
        .ui.black.button {
            margin-left: 10px;
            max-height: .5rem;
            background-color: rgb(39,37,38);
                        }
            }
`

export default CityShowWrapper