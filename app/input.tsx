import { useState } from "react";

import {
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Input() {
  const [carPrice, setCarPrice] = useState("");

  const [interest, setInterest] = useState("");

  const [downPayment, setDownPayment] = useState(20);

  const [installment, setInstallment] = useState(48);

  const resetForm = () => {
    setCarPrice("");

    setInterest("");

    setDownPayment(20);

    setInstallment(48);
  };

  const handleCalculate = () => {
    // {สูตรคำนวน}
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        {/* Header */}
        <ImageBackground
          source={{
            uri: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg",
          }}
          style={styles.headerImage}
          resizeMode="cover"
        ></ImageBackground>

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.title}>คำนวณค่างวดรถ</Text>

          {/* ราคารถ */}
          <Text style={styles.label}>ราคารถ (บาท)</Text>

          <TextInput
            style={styles.input}
            placeholder="เช่น 850000"
            placeholderTextColor="#999999"
            keyboardType="numeric"
            value={carPrice}
            onChangeText={setCarPrice}
          />

          {/* เงินดาวน์ */}
          <Text style={styles.label}>เลือกเงินดาวน์ (%)</Text>

          <View style={styles.row}>
            {[5, 10, 15, 20, 25, 30].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.optionButton,

                  downPayment === item && styles.activeButton,
                ]}
                onPress={() => setDownPayment(item)}
              >
                <Text
                  style={[
                    styles.optionText,

                    downPayment === item && styles.activeText,
                  ]}
                >
                  {item}%
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* ระยะเวลาผ่อน */}
          <Text style={styles.label}>ระยะเวลาผ่อน (งวด)</Text>

          <View style={styles.row}>
            {[24, 36, 48, 60, 72].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.optionButton,

                  installment === item && styles.activeButton,
                ]}
                onPress={() => setInstallment(item)}
              >
                <Text
                  style={[
                    styles.optionText,

                    installment === item && styles.activeText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* ดอกเบี้ย */}
          <Text style={styles.label}>ดอกเบี้ย (% ต่อปี)</Text>

          <TextInput
            style={styles.input}
            placeholder="เช่น 2.59"
            placeholderTextColor="#999999"
            keyboardType="numeric"
            value={interest}
            onChangeText={setInterest}
          />

          {/* Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.calculateButton}
              onPress={handleCalculate}
            >
              <Text style={styles.buttonText}>คำนวณ</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.resetButton} onPress={resetForm}>
              <Text style={styles.buttonText}>รีเซ็ท</Text>
            </TouchableOpacity>
          </View>

          {/* Result */}
          <View style={styles.resultBox}>
            <Text style={styles.resultTitle}>ค่างวดต่อเดือน</Text>

            <Text style={styles.resultText}>฿ 0</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  headerImage: {
    height: 220,
    justifyContent: "center",
  },

  headerOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.50)",
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: "Kanit_700Bold",
  },

  card: {
    backgroundColor: "#FFFFFF",

    marginTop: -30,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    padding: 20,

    minHeight: 700,
  },

  title: {
    fontSize: 32,
    color: "#111827",
    marginBottom: 20,
    fontFamily: "Kanit_700Bold",
  },

  label: {
    fontSize: 18,
    color: "#111827",
    marginBottom: 12,
    marginTop: 18,
    fontFamily: "Kanit_700Bold",
  },

  input: {
    backgroundColor: "#FFFFFF",

    borderWidth: 1,
    borderColor: "#D1D5DB",

    borderRadius: 16,

    padding: 16,

    fontSize: 18,

    color: "#111827",

    fontFamily: "Kanit_400Regular",
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  optionButton: {
    backgroundColor: "#E5E7EB",

    paddingVertical: 14,
    paddingHorizontal: 20,

    borderRadius: 14,

    marginRight: 10,
    marginBottom: 10,

    minWidth: 70,

    alignItems: "center",
  },

  activeButton: {
    backgroundColor: "#1E3A8A",
  },

  optionText: {
    color: "#111827",
    fontSize: 18,
    fontFamily: "Kanit_700Bold",
  },

  activeText: {
    color: "#FFFFFF",
  },

  buttonRow: {
    flexDirection: "row",
    marginTop: 35,
  },

  calculateButton: {
    flex: 1,

    backgroundColor: "#2563EB",

    padding: 18,

    borderRadius: 16,

    alignItems: "center",

    marginRight: 10,
  },

  resetButton: {
    flex: 1,

    backgroundColor: "#DC2626",

    padding: 18,

    borderRadius: 16,

    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Kanit_700Bold",
  },

  resultBox: {
    backgroundColor: "#DBEAFE",

    padding: 30,

    borderRadius: 24,

    marginTop: 35,

    alignItems: "center",

    marginBottom: 40,
  },

  resultTitle: {
    color: "#1E3A8A",
    fontSize: 22,
    marginBottom: 10,
    fontFamily: "Kanit_700Bold",
  },

  resultText: {
    color: "#1D4ED8",
    fontSize: 50,
    fontFamily: "Kanit_700Bold",
  },
});
