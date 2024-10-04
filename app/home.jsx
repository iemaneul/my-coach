import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BodyParts from '../components/BodyParts';

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: '#1b1b1b'}} className="flex-1 flex space-y-5" edges={['top']}>
      <StatusBar style="light" />

      <View className="flex-row items-center mx-5" style={{ justifyContent: 'center' }}>
        <Image
          style={{ width: wp(15), height: wp(15), marginRight: 15 }}
          source={require('../assets/images/my-coach.png')}
        />
      </View>

      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
}
