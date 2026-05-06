import { Stack } from "expo-router";
import { Text, View } from "react-native";

import { useFonts } from "expo-font";

import { Kanit_400Regular, Kanit_700Bold } from "@expo-google-fonts/kanit";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
  });

  // ป้องกันจอขาว iOS ตอนโหลด Font
  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#111827",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          Smart Auto Loan
        </Text>
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",

        headerStyle: {
          backgroundColor: "#1E3A8A",
        },

        headerTitleStyle: {
          color: "#FFFFFF",
          fontFamily: "Kanit_700Bold",
        },

        headerTintColor: "#FFFFFF",

        headerBackButtonDisplayMode: "minimal",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Smart Auto Loan",
        }}
      />

      <Stack.Screen
        name="input"
        options={{
          title: "คำนวณค่างวดรถ",
        }}
      />
    </Stack>
  );
}
