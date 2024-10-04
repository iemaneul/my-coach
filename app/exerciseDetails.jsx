import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router'; // Adicionei o useRouter aqui
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function ExerciseDetails() {
  const item = useLocalSearchParams();
  const router = useRouter(); // Instancie o router aqui
  console.log('got item', item);

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      console.warn("No previous screen to go back to.");
    }
  };

  return (
    <ScrollView style={{ position: 'relative', backgroundColor: '#1b1b1b' }}>
      <TouchableOpacity
        onPress={handleBackPress}
        style={{
          position: 'absolute',
          top: 30,
          left: 16,
          borderRadius: 25,
          // Adicione uma cor de fundo temporária para teste
          backgroundColor: 'rgba(255, 0, 0, 0.5)', // Remova ou ajuste depois
        }}
      >
        <Image
          style={{ width: wp(10), height: wp(10) }}
          source={require('../assets/images/arrow-left.png')}
        />
      </TouchableOpacity>

      <View style={{ margin: 16 }}>
        <Text style={{ fontSize: hp(3), color: '#FF6F00', fontWeight: 'bold' }}>
          {item.bodypart} Exercise Details
        </Text>
      </View>
    </ScrollView>
  );
}
