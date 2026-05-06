import { router } from "expo-router";

import {
  Animated,
  Easing,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useEffect, useRef, useState } from "react";

export default function Index() {
  const [loading, setLoading] = useState(false);

  // Spinner Animation
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 800,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const handleStart = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      router.push("/input");
    }, 3000);
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg",
      }}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Smart Auto Loan</Text>

        <Text style={styles.subtitle}>วางแผนออกรถฉบับมือโปร</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleStart}
          disabled={loading}
        >
          {loading ? (
            <Animated.View
              style={[
                styles.spinner,
                {
                  transform: [{ rotate }],
                },
              ]}
            />
          ) : (
            <Text style={styles.buttonText}>เริ่มต้นใช้งาน</Text>
          )}
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.60)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  icon: {
    fontSize: 80,
    marginBottom: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 34,
    fontFamily: "Kanit_700Bold",
  },

  subtitle: {
    color: "#FFFFFF",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 40,
    fontFamily: "Kanit_400Regular",
  },

  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 16,
    paddingHorizontal: 45,
    borderRadius: 14,
    minWidth: 220,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Kanit_700Bold",
  },

  spinner: {
    width: 28,
    height: 28,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    borderTopColor: "transparent",
    borderRadius: 999,
  },
});
