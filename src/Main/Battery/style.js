import styled from "styled-components";

const Div = styled.div`
    
    height: 220px;
    max-width: 560px;
    width: 100%;
    font-size: larger;
    
    .grid {
        margin-top: 1.5rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        background: #fff;
        box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
        border-radius: 12px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5px;
        align-items: center;
    }

    .time-text {
    height: 82px;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: #F0F8FF;
    border-radius: 6px;
    box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
}
    
`

export {Div}