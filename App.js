import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import FutsalField from './components/FutsalField';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FutsalField />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
