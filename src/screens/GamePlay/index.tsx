import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { Bird } from '../../components/Bird';
import { Pipe } from '../../components/Pipe';

import {useGameStorage} from '../../contexts/Game';

type ChildrenReact<T = {}> =
  T & { children?: React.ReactNode };

import { Container } from './styles';

export const Game = () => {
  const {setBirdMovement, birdMovement, screenHeight, screenWidth, pipeMovement, pipeUp, pipeDown} = useGameStorage()

   function fly(){
    if(birdMovement < screenHeight ){
      setBirdMovement(birdMovement + 50)
    }
  }

  // //check colision
  useEffect(()=>{
      if(pipeMovement < screenWidth / 2 - 100 && birdMovement < pipeDown && birdMovement > pipeDown - 150 ){
        console.log('passou')
      }
    },[pipeMovement, birdMovement, pipeDown]);
  

  return (
    <TouchableWithoutFeedback onPress={fly}>
    <Container>
      <Bird/>
      <Pipe/>
    </Container>
     </TouchableWithoutFeedback>
  );
}