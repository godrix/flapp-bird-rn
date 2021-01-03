import React,{useState, useEffect} from 'react';
import { Dimensions } from 'react-native';

type ChildrenReact<T = {}> =
  T & { children?: React.ReactNode };

  interface PipeProps extends ChildrenReact{
    options:{
      width:number;
      height:number;
      pipeBottom:number;
      pipeLeft: number;
      gap:number;
    }
  }

  import {Container} from './styles';

export const Pipe = ({options}:PipeProps) => {

  return (
    <>
    <Container pipe={options}  />
    <Container pipe={options} bottom />
    </>
  );
}