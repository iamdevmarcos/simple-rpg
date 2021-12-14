import styled from "styled-components";

export const Container = styled.div`
    background-color:#24282F;
    min-height:100vh;
    color:#FFF;
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
    flex-direction: column;
    min-height: 100vh;
    font-size:30px;
`;