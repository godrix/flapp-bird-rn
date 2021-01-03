import React from 'react';
import { View } from 'react-native';

type ChildrenReact<T = {}> =
  T & { children?: React.ReactNode };

interface BirdProps extends ChildrenReact{
  falling:number;
  birdleft:number;
}

import {Container} from './styles'

export const Bird = ({falling, birdleft}:BirdProps) => {
  const bird = {
    width:50,
    height:60,
    birdBottom:falling,
    birdLeft: birdleft
  }
  return (
    <Container
    bird={bird}
/>
  );
}