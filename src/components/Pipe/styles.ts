import styled from 'styled-components/native';

interface ContainerProps {
  pipe:{
    width:number;
    height:number;
    pipeBottom:number;
    pipeLeft: number;
    gap:number;
  }
  bottom?:boolean;
}

export const Container = styled.View<ContainerProps>`
  position:absolute;
  background:green;
  width: ${props => props.pipe.width}px;
  height:${props => props.pipe.height}px;
  left: ${props => props.pipe.pipeLeft}px;
  bottom:${props => props.bottom ? 0 : props => props.pipe.height + props.pipe.gap}px;

`;