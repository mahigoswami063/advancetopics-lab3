import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrxSummary = ({ trxns }) => {
  var hightrx = trxns.reduce((prev, current) => (prev.price > current.price) ? prev : current, trxns[0]);
  var lowtrx = trxns.reduce((prev, current) => (prev.price < current.price) ? prev : current, trxns[0]);
  return (
    <View style={{ padding: 20}}>
      <Text>No of trxns: {trxns.length}</Text>
      <Text></Text>
      <Text>Total: {trxns.reduce((sum, trxn) => sum + trxn.price, 0)}</Text>
      <Text></Text>
      <Text>Highest spending: {hightrx.name} {hightrx.price}</Text>
      <Text></Text>
      <Text>Lowest spending: {lowtrx.name} {lowtrx.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  }
});

export default TrxSummary;
