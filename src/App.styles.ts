import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Press Start 2P', cursive !important;
    color:#FFF;
    background-image: url('/assets/background.jpg');
    background-position: center;
    background-size:100%;
    min-height:100vh;
    color:#000;
`;

export const Map = styled.div`
    width:480px;
    height:480px;
    background-image: url('/assets/map.png');
    background-position: left top;
    background-size:100%;
`;

export const Start = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: row;
    min-height: 100vh;
    font-size:30px;
`;

export const Key = styled.div`
    font-family: Consolas !important;
    background-color:#EDF2F7;
    border-radius: 5px;
    border-bottom: 3px solid #CCC;
    border-bottom-width:3px;
    font-size: 20px;
    font-weight: bold;
    line-height: normal;
    padding:5px;
    padding-inline: 0.6em;
    white-space: nowrap;
    transition: all ease 0.2s;
    color:#000;
    margin:0px 10px;
	animation-name: heart;
	animation-duration: 2s;
	animation-iteration-count: infinite;

    &&:hover {
        background-color:#CCC;
        border-bottom-width:1px;
        cursor:pointer;
    }

    @keyframes heart {
        0% {
            margin-top: 0px;
        }
        25% {
            margin-top: -5px;
        }
        30% {
            margin-top: 0px;
        }
        40% {
            margin-top: -3px;
        }
        50% {
            margin-top: 0px;
        }
        100% {
            margin-top: 0px;
        }
    }
`;