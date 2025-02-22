import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useRouter } from "expo-router";

export function RestaurantCard({ restaurant }) {
    const router = useRouter();

    return (
        <TouchableWithoutFeedback onPress={() => router.push({ pathname: "Restaurante", params: { ...restaurant, dishes: JSON.stringify(restaurant.dishes) } })} >
            <View
                style={{ shadowColor: themeColors.bgColor(1), shadowRadius: 7 }}
                className="mr-6 bg-white rounded-3xl shadow-lg">
                <Image source={{ uri: restaurant.image }} className="h-36 w-64 rounded-t-3xl" />
                <View className="px-3 pb-4 space-y-2">
                    <Text className="font-bold text-lg pt-2">{restaurant.name}</Text>
                    <View className="flex-row items-center  space-x-1">
                        <View className="flex-row items-center">
                            <Icon.Star height="15" width="15" stroke="yellow" />
                        </View>
                        <Text className="text-xs">
                            <Text className="text-green-700">{restaurant.stars}</Text>
                            <Text className="text-gray-700">
                                ({restaurant.reviews} reviews) . <Text className="font-semibold">{restaurant.categories}</Text>
                            </Text>
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-1 mt-2">
                        <Icon.MapPin height="15" width="15" stroke="gray" />
                        <Text className="text-gray-700 text-xs">Nearby. {restaurant.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}