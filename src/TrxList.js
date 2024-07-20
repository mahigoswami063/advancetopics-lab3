import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TrxList = ({ trxns }) => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList data={trxns} keyExtractor={item => item.id} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Info', { trxn: item })}>
            <View style={styles.trxrow}>
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  trxrow: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TrxList;
