
import 'react-native-gesture-handler';

import React, { Component, Fragment } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

const App = () => {
  return (
    <Fragment>
      <StatusBar hidden={true} />
    <SafeAreaView style={{ flex:0, backgroundColor: 'red' }} />
    <SafeAreaView style={{ flex:1, backgroundColor: 'gray' }}>
      <View style={{ flex: 1, backgroundColor: 'white' }} >
        <Text>hi</Text>
      </View>
    </SafeAreaView>
  </Fragment>
  );
};

export default App;
