import styled from 'styled-components/native';

interface ContainerProps {
  bird:{
    width:number;
    height:number;
    birdBottom:number;
    birdLeft: number;
  }
}

export const Container = styled.View<ContainerProps>`
  position:absolute;
  background-color:blue;
  width:50px;
  height:60px;
  left:${props => props.bird.birdLeft - (props.bird.width / 2) }px;
  bottom:${props => props.bird.birdBottom - (props.bird.height / 2)}px;
`;