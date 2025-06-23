import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { featured } from '../constants';
import { useRouter } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';

export default function DeliveryScreen() {
    const router = useRouter();
    const restaurant = featured.restaurants[0];

    return (
        <View className="flex-1">
            {/* Map View */}
            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                style={{ flex: 1 }}
                mapType="standard"
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.lng
                    }}
                    pinColor={themeColors.bgColor(1)}
                    title={"restaurant.name"}
                    description={restaurant.description}
                />
            </MapView>
            <View className='rounded-t-3xl -mt-12 bg-white relative'>
                <View className=' flex flex-row justify-between px-5 pt-10'>
                    <View>
                        <Text className='text-lg text-gray-700 font-semibold'>
                            Estimated Arrival
                        </Text>
                        <Text className='text-3xl font-extrabold text-gray-700'>
                            20-30 Minutes
                        </Text>
                        <Text className='mt-2 text-gray-700 font-semibold'>
                            Your Order is on its way!
                        </Text>
                    </View>
                    <Image className='w-24 h-24 rounded-full' source={{ uri: "https://plus.unsplash.com/premium_vector-1726621066752-11becef2e6e8?q=80&w=1660&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
                </View>
                <View className='p-2 flex flex-row justify-between items-center rounded-full my-5 mx-2'
                    style={{ backgroundColor: themeColors.bgColor(0.8) }}
                >
                    <View className='p-1 rounded-full'
                        style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}>
                        <Image source={{ uri: "https://plus.unsplash.com/premium_photo-1661394793076-ac3a20f9bb9b?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} className='w-16 h-16 rounded-full' />
                    </View>
                    <View className='flex-1 ml-4'>
                        <Text className='text-lg font-bold text-white'>John Doe</Text>
                        <Text className='text-lg font-bold text-white'>You Rider</Text>
                    </View>
                    <View className='flex flex-row items-center gap-2 space-x-3 mr-3'>
                        <TouchableOpacity className='bg-white p-2 rounded-full'>
                            <Icon.Phone fill={themeColors.bgColor(1)} strokeWidth={1} stroke={themeColors.bgColor(1)} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => router.push('/')}
                            className='bg-white p-2 rounded-full'>
                            <Icon.X stroke={'red'} strokeWidth={4} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
