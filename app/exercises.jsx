import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { fetchExercisesByBodypart } from '../api/exerciseDB';
import { demoExercises } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ExerciseList from '../components/ExerciseList';

export default function Exercises() {
  const router = useRouter();
  const [exercises, setExercises] = useState(demoExercises);
  const item = useLocalSearchParams();

  useEffect(() => {
    if (item && item.name) {
      getExercises(item.name);
    }
  }, [item]);

  const getExercises = async (bodyPart) => {
    let data = await fetchExercisesByBodypart(bodyPart);
    setExercises(data);
  };

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      console.warn("No previous screen to go back to.");
    }
  };

  return (
    <ScrollView style={{ backgroundColor: '#1b1b1b' }}>
      <StatusBar style="light" />
      <View>
        <Image
          source={item.image}
          style={{ width: wp(100), height: hp(45) }}
        />
        <LinearGradient
          colors={['transparent', '#1b1b1b']}
          style={{ width: wp(100), height: wp(100) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0"
        />
      </View>
      <TouchableOpacity
        onPress={handleBackPress}
        className="mx-4 absolute rounded-full">
        <Image
          style={{ marginTop: 60, width: wp(10), height: wp(10) }}
          source={require('../assets/images/arrow-left.png')}
        />
      </TouchableOpacity>
      <View style={{ marginTop: -45 }} className="mx-4 space-y-3">
        <View style={{justifyContent: 'center'}}>
          <Text style={{ fontSize: hp(3), color: '#FF6F00' }} className="font-semibold justify-center">
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </Text>
        </View>
        <View className="mb-10">
          <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
}
