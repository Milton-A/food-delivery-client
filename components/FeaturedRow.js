import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { RestaurantCard } from "./restaurantCard";

export default function FeaturedRow({ title, description, restaurants }) {

    return (
        <View>
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-lg">{title}</Text>
                    <Text className="text-gray-500 text-xs"> {description}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: themeColors.text }} className="font-semibold">See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}
                className="overflow-visible py-5">
                {restaurants.map((restaurant, index) => {

                    return (
                        <RestaurantCard key={index} restaurant={restaurant} />)
                })}
            </ScrollView>
        </View>
    )
}