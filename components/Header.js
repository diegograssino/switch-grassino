import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;
