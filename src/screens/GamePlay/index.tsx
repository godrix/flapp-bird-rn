import React, {useEffect, useState} from 'react';
import { Dimensions } from 'react-native';

import { Bird } from '../../components/Bird';
import { Pipe } from '../../components/Pipe';

type ChildrenReact<T = {}> =
  T & { children?: React.ReactNode };

import {Container} from './styles';

export const Game = () => {

  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;

  const birdleft = screenWidth / 2;
  const gravity = 3;
  const [birdBottom, setBirdBottom] = useState(screenHeight/2);
  const [obstaclesLeftOne, setObstaclesLeftOne] = useState(screenWidth);
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth + screenWidth / 2);
  let birdTimeId:ReturnType<typeof setTimeout>;
  let pipeTimeIdOne:ReturnType<typeof setTimeout>;
  let pipeTimeIdTwo:ReturnType<typeof setTimeout>;

  // start bird falling
  useEffect(()=>{
      if(birdBottom > 0){
        birdTimeId = setInterval(()=>{
          setBirdBottom(prev => prev - gravity);
        }, 30)
      }

      return ()=> clearInterval(birdTimeId)
    },[birdBottom]);
    
    
    // start obstacles
    useEffect(()=>{
        if(obstaclesLeftOne > -60){
          pipeTimeIdOne = setInterval(()=>{
            setObstaclesLeftOne(prev => prev - 5)
          }, 30)

          return ()=> clearInterval(pipeTimeIdOne)
        }else{
          setObstaclesLeftOne(screenWidth)
        }

       
      },[obstaclesLeftOne]);

    // seccond obstacles
    useEffect(()=>{
        if(obstaclesLeftTwo > -60){
          pipeTimeIdTwo = setInterval(()=>{
            setObstaclesLeftTwo(prev => prev - 5)
          }, 30)

          return ()=> clearInterval(pipeTimeIdTwo)
        }else{
          setObstaclesLeftTwo(screenWidth)
        }

       
      },[obstaclesLeftTwo]);


  return (
    <Container>
      <Bird
        falling={birdBottom}
        birdleft={birdleft}
      />
      <Pipe options={{
        gap:200,
        height:300,
        width:60,
        pipeBottom:50,
        pipeLeft:obstaclesLeftOne
      }}/>
      <Pipe options={{
        gap:200,
        height:300,
        width:60,
        pipeBottom:50,
        pipeLeft:obstaclesLeftTwo
      }}/>
    </Container>
    );
}