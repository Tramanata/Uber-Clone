import React, { useState } from "react";
import { useRef } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          router.replace('/(auth)/sign-up');
        }}
        style={styles.skipButton}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <Swiper 
        ref={swiperRef} 
        loop={false}
        dot={<View style={styles.dot}/>}
        activeDot={<View style={styles.activeDot}/>}
        onIndexChanged={(index) => setActiveIndex(index)}
    >
        {onboarding.map((item) => (
            <View key={item.id} style={styles.screenText}>
                <Image 
                    source = {item.image}
                    style={styles.image}
                    resizeMode="contain"
                />
                <View style={styles.rowContainer}>
                    <Text style={styles.textStyle}>{item.title}</Text>
                </View>
                <Text style={styles.itemDescriptionText}>{item.description}</Text>
            </View>
        ))}
    </Swiper>
    <CustomButton title={isLastSlide ? "Get Started" :"Next"}
        onPress={() =>
            isLastSlide ? router.replace("/(auth)/sign-up") : swiperRef.current?.scrollBy(1)
        }
    
    />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  skipButton: {
    width: "100%", // Full width
    justifyContent: "flex-end", // Aligns items to the bottom
    alignItems: "flex-end", // Aligns items to the right
    padding: 20, // Adds spacing
  },
  skipText: {
    fontSize: 14, // Optional: Customize text size
    color: "black", // Optional: Text color
    fontFamily: "Jakarta-Bold",
  },
  screenText: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%", // Full width of the parent container
    height: 300, // Fixed height
  },
  rowContainer: {
    flex: 0,               // Enables flex layout
    flexDirection: "row",  // Sets items in a row
    alignItems: "center",  // Centers items vertically
    justifyContent: "center", // Centers items horizontally
    width: "60%",         // Full width
    marginTop: 10,         // Adds 10px margin at the top
  },
  textStyle: {
    color: "black",       // Text color
    fontSize: 24,         // Equivalent to text-3xl in Tailwind (approx. 24px)
    fontWeight: "bold",   // Bold text
    marginTop: 10,        // Adds 10px margin at the top
    textAlign: "center",  // Centers the text horizontally
  },
  itemDescriptionText: {
    color: "#858585",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Jakarta-Bold",
    margin: 10,
    width: "65%",
  },
  dot: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: "#E2E8F0",
  },
  activeDot: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: "#0286FF",
  },
  
});

export default Welcome;
