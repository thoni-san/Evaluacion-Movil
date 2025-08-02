import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const SIDEBAR_WIDTH = 50;
const BOX_SMALL = 40;

export const Ejercicio1: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <View style={styles.purple} />
        <View style={styles.orangeLong} />
        <View style={styles.cyanSmall} />
      </View>
      <View style={styles.main} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width * 0.9,
    height: height * 0.6,
    backgroundColor: '#233044',
  },
  sidebar: {
    width: SIDEBAR_WIDTH,
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: '#233044',
  },
  main: {
    flex: 1,
    backgroundColor: '#233044',
  },
  purple: {
    width: SIDEBAR_WIDTH,
    height: BOX_SMALL,
    backgroundColor: '#6C5DD3',
  },
  orangeLong: {
    width: SIDEBAR_WIDTH,
    flex: 1,
    marginVertical: 5,
    backgroundColor: '#F29E4C',
  },
  cyanSmall: {
    width: SIDEBAR_WIDTH,
    height: BOX_SMALL,
    backgroundColor: '#3FC1C9',
  },
});