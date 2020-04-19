import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ItemList from '../../components/ItemList';

import { db } from '../../config/firebase';

let itemsRef = db.ref('/items');

export default function List() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      itemsRef.on('value', (snapshot) => {
        let data = snapshot.val();
        let fetched = Object.values(data);

        resolve(fetched);
      });
    }).then((data) => setItems(data));
  }, []);

  return (
    <View style={styles.container}>
      {items.length > 0 ? <ItemList items={items} /> : <Text>No items</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
});
