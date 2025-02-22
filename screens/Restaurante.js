import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import DishesRow from "../components/dishRow";
import CardIcon from "../components/cardIcon";

export default function Restaurante() {
    const router = useRouter();
    const params = useLocalSearchParams();
    let item = params;
    const dishes = JSON.parse(params.dishes);

    return (
        <View>
            <CardIcon />
            <ScrollView>
                <View className="relative">
                    <Image source={{ uri: item.image }} className="h-72 w-full" />
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
                        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
                    </TouchableOpacity>
                </View>
                <View
                    style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                    className="bg-white -mt-16 pt-6">
                    <View className="px-5">
                        <Text className="text-3xl font-bold">{item.name}</Text>
                        <View className="flex-row space-x-5 my-1">
                            <View className="flex-row items-center">
                                <View className="flex-row items-center">
                                    <Icon.Star height="15" width="15" stroke="yellow" />
                                </View>
                                <Text className="text-xs">
                                    <Text className="text-green-700">{item.stars}</Text>
                                    <Text className="text-gray-700">
                                        ({item.reviews} reviews) . <Text className="font-semibold">{item.categories}</Text>
                                    </Text>
                                </Text>
                            </View>
                            <View className="flex-row items-center mx-1">
                                <Icon.MapPin height="15" width="15" stroke="gray" />
                                <Text className="text-gray-700 text-xs">Nearby. {item.address}</Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 mt-2">{item.description}</Text>
                    </View>
                </View>
                <View className="pb-36 bg-white">
                    <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
                    {/* dishes */}
                    {dishes.map((dish, index) => <DishesRow key={index} dish={{ ...dish }} />
                    )}
                </View>
            </ScrollView>

        </View>
    )
}   