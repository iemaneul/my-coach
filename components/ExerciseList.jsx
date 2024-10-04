import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Image } from 'expo-image';

export default function ExerciseList({ data }) {
  const router = useRouter();

  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 60, paddingTop: 20, marginHorizontal: 16 }}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      ListHeaderComponent={() => (
        <Text style={{ fontSize: hp(2.3), color: '#fff', paddingBottom: 10 }} className="font-semibold">
        </Text>
      )}
      renderItem={({ item, index }) => (
        <ExerciseCard router={router} index={index} item={item} />
      )}
    />
  );
}

const ExerciseCard = ({ item, router }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: '/exerciseDetails',
          params: {
            id: item.id,
            name: item.name,
            gifUrl: item.gifUrl,
            bodyPart: item.bodyPart,
            secondaryMuscles: item.secondaryMuscles?.join(', ') || '',
          },
        })
      }
      style={{ flex: 1, margin: 8 }}
    >
      <View style={{ backgroundColor: '#FFFFFF', borderRadius: 25, shadowOpacity: 0.3, shadowRadius: 10 }}>
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ width: wp(35), height: 180, borderRadius: 25 }}
        />
      </View>
      <Text style={{ marginTop: 8, textAlign: 'center', color: '#FFF' }}>
        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
      </Text>

    </TouchableOpacity>
  );
};
