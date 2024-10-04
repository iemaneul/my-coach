import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { bodyParts } from '../constants';
import { TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

export default function BodyParts() {
  const router = useRouter();
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="mx-4 justify-center">
        <Text style={{ fontSize: hp(2.3), color: '#fff', paddingBottom: 10, textAlign: 'center' }} className="font-semibold">
          Exercises categories
        </Text>
        <FlatList
          data={bodyParts}
          keyExtractor={(item) => item.name}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
          renderItem={({ item, index }) => <BodyPartCard router={router} index={index} item={item} />}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const BodyPartCard = ({ item, router, index }) => {
  return (
    <TouchableOpacity
      onPress={() => router.push({ pathname: '/exercises', params: item })}
      style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 15, 
        width: '100%', 
        height: hp(10),
        backgroundColor: '#222222',
        borderRadius: 15,
        overflow: 'hidden'
      }}
    >
      <Image
        source={item.image}
        resizeMode='cover'
        style={{ width: wp(30), height: '100%' }}
      />
    
      <View style={{ width: wp(50), paddingLeft: 30, paddingRight: 10, paddingTop: 15, paddingBottom: 15 }}>
        <Text 
          style={{ fontSize: hp(2.3), color: '#FF6F00' }}
          className="font-semibold"
        >
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        </Text>

        <Text 
          style={{ fontSize: hp(1.3), color: '#FFFFFF', lineHeight: hp(2) }} // Ajuste o valor conforme necessário
          className="font-regular"
        >
          {item.resume}
        </Text>

      </View>

      <Image 
        source={require('../assets/images/arrow-right.png')}
        style={{ width: wp(5), height: wp(5) }}
        resizeMode='contain'
      />
    </TouchableOpacity>
  );
};