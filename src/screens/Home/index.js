import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Add an Item"
        onPress={() => navigation.navigate('AddItem')}
      />
      <Button
        title="List of Items"
        color="green"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
