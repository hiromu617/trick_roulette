import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, Button , Alert,  SafeAreaView,} from 'react-native';

const RoulettePage: React.FC = (data) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>roulette</Text>
      <Button 
        onPress={() => {
          data.navigation.navigate("Top");
        }}
        title="Back To Top"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

export default RoulettePage