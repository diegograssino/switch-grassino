import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import Header from './components/Header';
import styles from './components/Styles';
import Play from './screens/Play';

const App = () => {
  const [loaded] = useFonts({
    'open-sans': require('./assets/fonts/Open_Sans/static/OpenSans/OpenSans-Regular.ttf'),
  });

  !loaded && <AppLoading />;

  const [screen, setScreen] = useState(1);

  const handleToScreen1 = () => {
    setScreen(1);
  };
  const handleToScreen2 = () => {
    setScreen(2);
  };
  const handleToScreen3 = () => {
    setScreen(3);
  };

  if (screen === 1) {
    return (
      <>
        <Header title="Rock, Paper, Scissors" />
        <View
          style={[styles.screen, styles.screen1, styles.btnContainer]}
        >
          <Button title="Play" onPress={handleToScreen2} />
          <Button title="Credits" onPress={handleToScreen3} />
        </View>
      </>
    );
  }

  if (screen === 2) {
    return (
      <>
        <Header title="Rock, Paper, Scissors" />
        <View style={styles.screen}>
          <Play
            handleToScreen1={handleToScreen1}
            handleToScreen2={handleToScreen2}
            handleToScreen3={handleToScreen3}
          />
        </View>
      </>
    );
  }

  if (screen === 3) {
    return (
      <>
        <Header title="Rock, Paper, Scissors" />
        <Text style={[styles.verticalPadding, styles.titleCentered]}>
          Aplicación desarrollada por: Diego Grassino
        </Text>
        <Text style={styles.titleCentered}>
          Curso: Desarrollo de aplicaciones
        </Text>
        <View
          style={[styles.screen, styles.screen1, styles.btnContainer]}
        >
          <Button title="Back to Home" onPress={handleToScreen1} />
        </View>
      </>
    );
  }
};

export default App;
