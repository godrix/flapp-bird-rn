import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { Dimensions } from 'react-native';

interface GameContextData {
  birdMovement: number;
  setBirdMovement: (value:number ) => void;
  pipeMovement: number;
  setPipeMovement: (value:number ) => void;
  screenHeight:number;
  screenWidth:number;
  pipeUp:number;
  setPipeUp:(value:number ) => void;
  pipeDown:number;
  setPipeDown:(value:number ) => void;
 };

const GameContext = createContext<GameContextData>({} as GameContextData);

type ChildrenReact<T = {}> =
  T & { children?: React.ReactNode };

export const GameProvider = ({ children }: ChildrenReact) => {
  const screenHeight = Dimensions.get('screen').height;
  const screenWidth = Dimensions.get('screen').height;
  const [birdMovement, setBirdMovement] = useState(screenHeight / 2);
  const [pipeMovement, setPipeMovement] = useState(screenWidth);
  const [pipeUp, setPipeUp] = useState(screenHeight / 2 - 75);
  const [pipeDown, setPipeDown] = useState(screenHeight / 2 - 75);

  // useEffect(()=>{
  //    console.log('🐦', birdMovement)
  //   },[birdMovement]);

  // useEffect(()=>{
  //   if(pipeMovement < 448){
  //     console.log('🚩',pipeMovement)
  //   }
  //   },[pipeMovement]);

    // useEffect(()=>{
    //   console.log({
    //     '⬆':pipeUp,
    //     '⬇':pipeDown, 
    //   })
    //   },[pipeDown, pipeUp]);

 

  return (
    <GameContext.Provider value={{birdMovement, setBirdMovement, pipeMovement, setPipeMovement, screenHeight, screenWidth, pipeUp, setPipeUp, setPipeDown, pipeDown}}>
      {children}
    </GameContext.Provider>
  );
}

export function useGameStorage(){
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("useStorage must be used within a StorageProvider");
  }

  return context;
}