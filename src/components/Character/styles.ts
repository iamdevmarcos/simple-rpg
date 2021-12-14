import styled from "styled-components";

export const Container = styled.div<{size:number; left: number; top:number;}>`
    width:${props => props.size}px;
    height:${props => props.size}px;
    position:absolute;
    left:${props => props.left}px;
    top:${props=>props.top}px;
    background:#0000FF;
`;