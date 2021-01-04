import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import {useGameStorage} from '../../contexts/Game';

type ChildrenReact<T = {}> =
  T & { children?: React.ReactNode };

interface PipeProps extends ChildrenReact {
}

import { Container } from './styles';

export const Pipe = () => {
  let pipeTimeIdOne: ReturnType<typeof setTimeout>;
  const {pipeMovement, setPipeMovement, screenWidth, screenHeight, pipeDown, pipeUp, setPipeDown, setPipeUp} = useGameStorage();

  function randomPipes(){
    const downPipe = Math.floor(Math.random() * screenHeight) ;
    const upPipe = screenHeight - downPipe - 150;

    setPipeDown(downPipe);
    setPipeUp(upPipe);
    
  }


  // start obstacles
  useEffect(() => {
    if (pipeMovement > -50) {
      pipeTimeIdOne = setInterval(() => {
        setPipeMovement(pipeMovement - 5)
        
      }, 30)

      return () => clearInterval(pipeTimeIdOne)
    } else {
      setPipeMovement(screenWidth);
      randomPipes()
    }


  }, [pipeMovement]);

  return (
    <>
      <Container pipe={{
        height: pipeUp,
        width: 60,
        pipeBottom: 50,
        pipeLeft: pipeMovement
      }} />
      <Container pipe={{
        height: pipeDown,
        width: 60,
        pipeBottom: 50,
        pipeLeft: pipeMovement
      }} bottom />
    </>
  );
}