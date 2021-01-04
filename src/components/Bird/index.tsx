import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import {useGameStorage} from '../../contexts/Game';

type ChildrenReact<T = {}> =
  T & { children?: React.ReactNode };

interface BirdProps extends ChildrenReact {

}

import { Container } from './styles';

export const Bird = () => {
  let birdTimeId: ReturnType<typeof setTimeout>;
  const gravity = 3;
  const screenWidth = Dimensions.get('screen').width;
  const birdleft = screenWidth / 2;

  const {birdMovement, setBirdMovement} = useGameStorage();
  // const screenHeight = Dimensions.get('screen').height;
  // const [birdBottom, setBirdBottom] = useState(screenHeight / 2);

  // function fly(){
  //   if(birdBottom < screenHeight ){
  //     setBirdBottom(prev => prev + 50)
  //   }
  // }


  // start bird falling
  useEffect(() => {
    if (birdMovement > 0) {
      birdTimeId = setInterval(() => {
        setBirdMovement(birdMovement - gravity);
      }, 30)
    }

    return () => clearInterval(birdTimeId)
  }, [birdMovement]);

  return (
    <Container
      bird={{
        width: 50,
        height: 60,
        birdBottom: birdMovement,
        birdLeft: birdleft
      }}
    />
  );
}