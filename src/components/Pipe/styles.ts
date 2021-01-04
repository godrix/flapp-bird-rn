import styled from 'styled-components/native';

interface ContainerProps {
  pipe:{
    width:number;
    height:number;
    pipeBottom:number;
    pipeLeft: number;
  }
  bottom?:boolean;
}

export const Container = styled.View<ContainerProps>`
  position:absolute;
  background:green;
  width: ${props => props.pipe.width}px;
  height:${props => props.pipe.height}px;
  left: ${props => props.pipe.pipeLeft}px;
  ${props => props.bottom ? `bottom:0;` : `top:0`}

`;