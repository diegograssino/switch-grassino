import React, { useMemo, useState } from 'react';
import { Text, View, Button } from 'react-native';
import Card from '../components/Card';
import styles from '../components/Styles';
const choices = ['rock', 'paper', 'scissors'];

const Play = props => {
  const [selected, setSelected] = useState('');
  const [computedSelected, setComputedSelected] = useState('');
  const [resultClean, setResultClean] = useState(false);

  const play = () => {
    if (!selected) {
      return;
    }
    const computerChoiceIndex = Math.floor(
      Math.random() * choices.length
    );
    setComputedSelected(choices[computerChoiceIndex]);
    setResultClean(true);
  };

  const handleSelected = choice => {
    setSelected(choice);
    setResultClean(false);
  };

  const result = useMemo(() => {
    if (computedSelected === selected) {
      return `it's a tie`;
    } else {
      if (
        (computedSelected === 'rock' && selected === 'scissors') ||
        (computedSelected === 'paper' && selected === 'rock') ||
        (computedSelected === 'scissors' && selected === 'paper')
      ) {
        return 'computer won';
      }
      return 'player won';
    }
  }, [computedSelected, selected]);

  return (
    <>
      <View style={styles.choicesContainer}>
        <Text
          style={[styles.titleCentered, styles.fontFamilyOpenSans]}
        >
          1. Choose your weapon!
        </Text>
        <View style={[styles.btnContainer, styles.verticalPadding]}>
          <Button
            onPress={() => handleSelected('rock')}
            title="Rock"
          />
          <Button
            onPress={() => handleSelected('paper')}
            title="Paper"
          />
          <Button
            onPress={() => handleSelected('scissors')}
            title="Scissors"
          />
        </View>
      </View>
      <Card style={[styles.cardWithBorder, styles.cardColor]}>
        <Text>Your choice: {selected}</Text>
      </Card>
      <Text
        style={[
          styles.titleCentered,
          styles.fontFamilyOpenSans,
          styles.verticalPadding,
        ]}
      >
        2. Play!
      </Text>
      <Button onPress={play} title="Play against React Native" />
      <Text
        style={[
          styles.titleCentered,
          styles.fontFamilyOpenSans,
          styles.verticalPadding,
        ]}
      >
        3. Result!
      </Text>
      <Card style={[styles.cardWithBorder, styles.cardColor]}>
        {resultClean && (
          <>
            <Text>RN choice: {computedSelected}</Text>
            <Text>{result}</Text>
          </>
        )}
      </Card>
      <View style={[styles.btnContainer, styles.verticalPadding]}>
        <Button
          title="Back to Home"
          onPress={props.handleToScreen1}
        />
      </View>
    </>
  );
};

export default Play;
