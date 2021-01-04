import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Game} from './src/screens/GamePlay';
import {GameProvider} from './src/contexts/Game';
 
export default function App() {
  return (
    <GameProvider>
      <Game/>
      <StatusBar style="auto" />
    </GameProvider>
  );
}

