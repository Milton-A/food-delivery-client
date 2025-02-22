import { ScrollView, StatusBar, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";

import Categories from "../components/categories";
import { featured } from "../constants";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle="dark-content" />
            {/* search bar */}
            <View className="flex-row items-center gap-2 px-4 py-2">
                <View className="flex-row flex-1 items-center p-1 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Icon.MapPin height="20" width="20" stroke="gray" />
                        <Text className="text-gray-600">Luanda, Angola</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 bg-gray-300 rounded-full">
                    <Icon.Sliders height="20" width="20" strokeWidth="2.5" stroke="white" />
                </View>
            </View>
            {/* main */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }} >
                <Categories />
                {/* featured */}
                <View className="mt-5">
                    {
                        [featured, featured, featured].map((item, index) => {
                            return (
                                <FeaturedRow
                                    key={index}
                                    title={item[0].title}
                                    restaurants={item[0].restaurants}
                                    description={item[0].description}
                                />
                            )
                        })
                    }
                </View>
            </ScrollView>

        </SafeAreaView>
    );
}

export default HomeScreen;