import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface FavoriteScreenProps {

}

function FavoriteScreen({}: FavoriteScreenProps) {
  return (
    <SafeAreaView>
      <View>
        <Text>즐겨찾기</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({});

export default FavoriteScreen;