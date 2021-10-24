import styled from "styled-components";

interface Props {
    height?: string,
    width?: string, 
    color?: string,
    theme: any
};

const Button = styled.button`
    background: ${ props=>props.color || props.theme.white };
    height: ${ (props:Props)=>props.height || "100%" };
    width: ${ (props:Props)=>props.height || "100%" };
    border: 0px;
    &:hover{
        background: ${ props=>props.theme.black };
    }
`;

export default Button
