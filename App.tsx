import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Game} from './src/screens/GamePlay';
 
export default function App() {
  return (
    <>
      <Game/>
      <StatusBar style="auto" />
    </>
  );
}

