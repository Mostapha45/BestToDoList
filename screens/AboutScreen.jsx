import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import LottieView from "lottie-react-native";
import MainLayout from "../layouts/MainLayout";

const AboutScreen = ({ navigation }) => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const currentDate = new Date().toLocaleDateString();

  const handleEasterEgg = () => {
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 5000); // Hide the animation after 5 seconds
  };

  return (
    <MainLayout>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.info}>App Name: ToDo Manager</Text>
      <Text
        style={[styles.info, { color: "blue", textDecorationLine: "underline" }]}
        onPress={handleEasterEgg}
      >
        Developer: Mostapha Alahmair
      </Text>
      <Text style={styles.info}>Date: {currentDate}</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate("Home")} />

      {showEasterEgg && (
        <View style={styles.easterEggContainer}>
          <LottieView
            source={require("../assets/confetti.json")} // Ensure the animation file is in the correct path
            autoPlay
            loop={false}
            style={styles.animation}
          />
          <Text style={styles.quote}>
            "Dream big, work hard, and make it happen!"
          </Text>
        </View>
      )}
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  easterEggContainer: {
    position: "absolute",
    top: 100,
    left: 20,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  animation: {
    width: 150,
    height: 150,
  },
  quote: {
    marginTop: 20,
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    color: "#333",
  },
});

export default AboutScreen;
