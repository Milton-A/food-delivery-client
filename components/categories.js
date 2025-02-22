import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { categories } from "../constants";

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null);
    return (
        <View className="mt-4">

            <ScrollView horizontal showsHorizontalScrollIndicator={false}
                className="overflow-visible"
                contentContainerStyle={{ paddingHorizontal: 15 }}>
                {categories.map((category, index) => {
                    let isActive = activeCategory === category.id;
                    let btnClass = isActive ? "bg-gray-800" : "bg-gray-200";
                    let textClass = isActive ? "text-gray-800 font-semibold" : "text-gray-500";
                    return (
                        <View key={index} className="flex items-center justify-center mr-6">
                            <TouchableOpacity onPress={() => setActiveCategory(category.id)} className={"p-1 rounded-full " + btnClass} >
                                <Image source={{ uri: category.image }} className="w-12 h-12 rounded-full" />
                            </TouchableOpacity>
                            <Text className={"text-sm " + textClass}>{category.name}</Text>
                        </View>
                    )
                })
                }
            </ScrollView >
        </View >)
}