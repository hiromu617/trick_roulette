import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, Button , Alert,  SafeAreaView,} from 'react-native';

const TopPage: React.FC = (data) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Trick Roulette</Text>
      <View style={styles.form}>
        <View style={styles.switchForm}>
          <Text style={styles.label}>easy Trick?</Text>
          <Switch
            style={styles.switch}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        
        <View style={styles.switchForm}>
          <Text style={styles.label}>medium Trick?</Text>
          <Switch
            style={styles.switch}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        
      </View>
      <Button 
        onPress={() => {
          data.navigation.navigate("Roulette");
        }}
        title="Start"
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
  title: {
    marginTop: 16,
    padding: 10, 
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  switchForm: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingBottom: 10,
  },
  form: {
    paddingTop: 30,
    paddingBottom: 20,
    width: "70%",
  },
  label: {
    width: "70%",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold"
  },
  switch: {
    width: "30%",
  }
});

export default TopPage