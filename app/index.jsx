import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router'; // Alterei de useRoute para useRouter

export default function Index() {
  const router = useRouter(); // Corrija para useRouter
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image className="h-full w-full absolute" source={require('../assets/images/gym-index.png')} />

      <LinearGradient
        colors={['transparent', '#1b1b1b']}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View entering={FadeInDown.delay(100)} className="flex items-center">
          <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wide">
            My <Text style={{ color: '#FF6F00' }}>Coach</Text>
          </Text>
          <Text style={{ fontSize: hp(1.5), textAlign: 'center', marginTop: 10 }} className="text-white tracking-wide">
            Your health depends only for you{'\n'}So be your own coach
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200)}>
          <TouchableOpacity
            onPress={() => router.push('/home')} // Use '/home'
            style={{ height: hp(7), width: wp(80), backgroundColor: '#FF6F00' }}
            className="flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
          >
            <Text style={{ fontSize: hp(2.5) }} className="text-white font-bold tracking-widest">
              GET STARTED
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}