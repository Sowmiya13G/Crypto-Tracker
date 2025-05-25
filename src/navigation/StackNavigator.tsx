import React from "react";

// navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import CryptoDetail from "../screens/CryptoDetails";
import Home from "../screens/Home";
import News from "../screens/News";
import NewsDetail from "../screens/NewsDetail";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="CryptoDetail"
        component={CryptoDetail}
        options={{ title: "Article" }}
      />
    </Stack.Navigator>
  );
};

const NewsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsList"
        component={News}
        options={{ title: "News" }}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{ title: "Article" }}
      />
    </Stack.Navigator>
  );
};

export { HomeStackNavigator, NewsStackNavigator };

