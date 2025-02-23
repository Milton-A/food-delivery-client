import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Image, Text, View } from 'react-native';

export default function CheckoutScreen() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.navigate('DeliveryScreen');
        }, 3000);
    }, []);
    return (
        <View className='flex-1 bg-white justify-center items-center'>
            <Image source={{ uri: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' }} className='w-80 h-8y0' />
        </View>
    );
}