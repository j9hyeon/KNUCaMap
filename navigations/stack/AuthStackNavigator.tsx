import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function AuthStackNavigator() {
  return (
    <SafeAreaView>
      <View>
        <Text>인증화면</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

export default AuthStackNavigator;