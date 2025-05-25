import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import News from "../screens/News";
import NewsDetail from "../screens/NewsDetail";

const Stack = createNativeStackNavigator();

export default function NewsStackNavigator() {
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
}
