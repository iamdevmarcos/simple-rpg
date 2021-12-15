import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:100vh;
    max-width:400px;
    margin:auto;

    input {
        font-family: 'Press Start 2P', cursive !important;
        outline:0;
        background:transparent;
        border:0;
        border-bottom:5px solid #000;
        color:#FFF !important;
        flex:1;
        padding:5px;
        font-size:25px;
    }
`;