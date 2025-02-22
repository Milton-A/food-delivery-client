import { Image, Text, TouchableOpacity, View } from "react-native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";

export default function DishesRow({ dish }) {
    return (
        <View className="flex-row items-center bg-white p-3 shadow-2xl rounded-3xl mb-3 mx-2">
            <Image source={{ uri: dish.image }} className="rounded-3xl" style={{ height: 100, width: 100 }} />
            <View className="flex flex-1 space-y-3">
                <View className="pl-3">
                    <Text className="text-xl">{dish.name}</Text>
                    <Text className="text-gray-700">{dish.description} </Text>
                </View>
                <View className="flex-row justify-between pl-3 items-center">
                    <Text className="text-gray-700 text-lg font-bold">$ {dish.price}</Text>
                    <View className="flex-row items-center">
                        <TouchableOpacity
                            className="p-1 rounded-full"
                            style={{ backgroundColor: themeColors.bgColor(1) }}>
                            <Icon.Minus strokeWidth={2} height={20} width={20} stroke={"white"} />
                        </TouchableOpacity>
                        <Text className="px-3" >{2}</Text>
                        <TouchableOpacity
                            className="p-1 rounded-full"
                            style={{ backgroundColor: themeColors.bgColor(1) }}>
                            <Icon.Plus strokeWidth={2} height={20} width={20} stroke={"white"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}