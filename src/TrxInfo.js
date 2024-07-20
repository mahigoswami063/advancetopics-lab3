import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrxInfo = ({ route }) => {
  const { trxn } = route.params;

  return (
    <View  style={{ padding: 20}}>
      <Text>{trxn.name}</Text>
      <Text></Text>
      <Text>Price: {trxn.price}</Text>
      <Text></Text>
      <Text>Address: {trxn.addr}</Text>
      <Text></Text>
      <Text>Time: {trxn.time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default TrxInfo;
