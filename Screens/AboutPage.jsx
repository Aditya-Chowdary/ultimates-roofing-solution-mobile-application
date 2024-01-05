import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import HauoraRegular from "../assets/Fonts/Hauora-Regular.ttf";
import A1 from "../assets/AboutPageImages/A1.webp";
import A2 from "../assets/AboutPageImages/A2.webp";
import Header from "../Screens/Header";
import ThreeCards from "../Components/ThreeCards";
import Trust from "../Components/Trust";
import BackNavigation from "../Components/BackNavigation";

export default function AboutPage() {
  let [fontsLoaded] = useFonts({
    Hauora: HauoraRegular,
  });

  return (
    <SafeAreaView>
      <Header button={true} />
      <ScrollView>
        <BackNavigation title={"About"} />
        <Text style={[styles.MainText, { marginVertical: "4%" }]}>
          Ultimates Roofing LLC, established in [Year], proudly serves
          [Location] and surrounding areas, specializing in top-tier roofing
          solutions. With nearly a decade of dedicated expertise, our seasoned
          roofing contractor ensures excellence in every project, offering
          comprehensive installation, replacement, and meticulous long-term
          repairs. Your peace of mind is our commitment to excellence.
        </Text>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image source={A1} style={styles.A1Image} />
        </View>
        {/* Cards component */}
        <ThreeCards />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image source={A2} style={styles.A2Image} />
          <Text style={[styles.MainText, { marginTop: 10 }]}>
            Ultimates Roofing LLC embodies a decade of passion and expertise in
            redefining roofing. Beyond industry norms, we're not just a business
            but a dedicated team committed to excellence and integrity.
            Synonymous with quality and innovation, Ultimates Roofing strives to
            make a lasting impact on our community with each project.
          </Text>
        </View>
        <View style={styles.ExpertiseView}>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.ExpertiseRedText}>15+</Text>
            <Text style={styles.ExpertiseText}>Years of{"\n"}Experience</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.ExpertiseRedText}>20 - 25</Text>
            <Text style={styles.ExpertiseText}>Years of{"\n"}Warranty</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.ExpertiseRedText}>100%</Text>
            <Text style={styles.ExpertiseText}>Quality{"\n"}Products</Text>
          </View>
        </View>
        <Trust />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  MainText: {
    fontSize: 14,
    marginHorizontal: "5%",
    fontWeight: "400",
    letterSpacing: 0.28,
    fontFamily: "Hauora",
    color: "#323539",
  },
  A1Image: {
    resizeMode: "cover",
    height: 131,
    width: 362,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  A2Image: {
    marginHorizontal: "1%",
    height: 312,
    width: 362,
  },
  ExpertiseView: {
    flexDirection: "row",
    gap: 70,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  ExpertiseRedText: {
    color: "#B22335",
    fontFamily: "Hauora",
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0.4,
    textAlign: "center",
  },
  ExpertiseText: {
    color: "#323539",
    fontSize: 12,
    fontFamily: "Hauora",
    fontWeight: "400",
    letterSpacing: 0.24,
    textAlign: "center",
  },
});
