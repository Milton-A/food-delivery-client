// @ts-nocheck
import React, { useState } from 'react';
import { View, Text, Modal, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import { featured } from '../constants';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import { useRouter } from 'expo-router';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../redux/slices/restaurantSlice';

export default function CartScreen() {
    const restaurant = useSelector(selectRestaurant);
    const router = useRouter();

    console.log(restaurant)

    return (
        <View className="flex-1 bg-gray-100">
            {/* back button */}
            <View className='relative py-4 shadow-sm ' >
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                    className='absolute z-10 rounded-full p-1 shadow top-5 left-2'
                >
                    <Icon.ArrowLeft strokeWidth={3} stroke="white" />
                </TouchableOpacity>
                <View>
                    <Text className='text-center font-bold text-xl' > Your Cart</Text>
                    <Text className='text-center text-gray-500'>{restaurant.name}</Text>
                </View>
            </View>

            {/* delivery time */}
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }} className='flex flex-row px-4 py-2 items-center'>
                <Image source={{ uri: restaurant.image }} className='w-20 h-20 rounded-full' />
                <Text className='flex-1 pl-4'> Delivery in 20-30 minutes</Text>
                <TouchableOpacity>
                    <Text className='font-bold' style={{ color: themeColors.text }}>Change</Text>
                </TouchableOpacity>
            </View>
            {/* dishes */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50 }}
                className="bg-white pt-5"
            >
                {
                    restaurant.dishes.map((dish, index) => {
                        return (
                            <View key={index}
                                className='flex flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md'
                            >
                                <Text className='font-bold' style={{ color: themeColors.text }}>2 x</Text>
                                <Image source={{ uri: dish.image }} className='w-14 h-14 rounded-full' />
                                <Text className='flex-1 font-bold text-gray-700'> {dish.name}</Text>
                                <Text className='font-semibold text-base'>${dish.price}</Text>
                                <TouchableOpacity className='p-1 rounded-full'
                                    style={{ backgroundColor: themeColors.bgColor(1) }}>
                                    <Icon.Minus strokeWidth={2} stroke='white' height={20} width={20} />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
            {/* totals */}
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }} className='p-6 px-8 rounded-t-3xl space-y-4'>
                <View className='flex flex-row justify-between'>
                    <Text className='text-gray-700'>SubTotal</Text>
                    <Text className='text-gray-700'>$20</Text>
                </View>
                <View className='flex flex-row justify-between'>
                    <Text className='text-gray-700'>Delivery Fee</Text>
                    <Text className='text-gray-700'>$2</Text>
                </View>
                <View className='flex flex-row justify-between'>
                    <Text className='text-gray-700 font-extrabold'>Order Total</Text>
                    <Text className='text-gray-700 font-extrabold'>$30</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => router.navigate('CheckoutScreen')}
                        style={{ backgroundColor: themeColors.bgColor(1) }}
                        className='rounded-full p-3 mt-3'>
                        <Text className='text-white text-center font-bold text-lg'>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
