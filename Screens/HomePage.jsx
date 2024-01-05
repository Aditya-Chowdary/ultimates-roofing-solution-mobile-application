import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
// import { LazyLoadView } from "react-native-lazyload";
import { useFonts } from "expo-font";
import HauoraRegular from "../assets/Fonts/Hauora-Regular.ttf";
import { useNavigation } from "@react-navigation/native";
import { SliderBox } from "react-native-image-slider-box";
import Header from "../Screens/Header";
import Cards from "../Components/Cards";
import Trust from "../Components/Trust";
import ButtonCarousel from "../Components/ButtonCarousel";
import OurServices from "../Components/OurServices";

export default function HomePage() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Hauora: HauoraRegular,
  });

  const images = [
    require("../assets/c1.webp"),
    require("../assets/c2.webp"),
    require("../assets/c3.webp"),
  ];

  return (
    <SafeAreaView>
      <Header button={true} />
      <ScrollView style={{ height: "auto" }}>
        <View>
       
            <SliderBox
              images={images}
              sliderBoxHeight={200}
              SliderBoxWidth={"100%"}
              dotColor="white"
              inactiveDotColor="grey"
              style={styles.backgroundVideoContainer}
              paginationBoxHorizontalMargin={40}
              autoplay
              autoplayInterval={2500}
              circleLoop
            />
   
          <View style={styles.hoverHeadingBackground}>
            <Text style={styles.headerText}>
              Elevate Your Roofing {"\n"}Experience with{"\n"}Ultimates Roofing
              App
            </Text>
            <View>
              <TouchableOpacity
                style={styles.EstimateButton}
                onPress={() => {
                  navigation.navigate("Contact");
                }}
              >
                <View>
                  <Text style={styles.EstimateButtonText}>
                    Get Your Free Estimate
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: "5%" }}>
          <Text style={styles.descriptionText}>
            At Ultimates Roofing LLC, we believe that every home and business
            deserves the highest quality roofing solutions. Established [Year],
            we have proudly served [Location] and surrounding areas, earning a
            reputation for excellence in the Roofing and Siding industry.
          </Text>
        </View>
        <View>
          <Cards />
        </View>
        <View>
          <OurServices />
        </View>
        <View style={{ marginHorizontal: "5%" }}>
          <ButtonCarousel />
        </View>
        <Trust />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundVideoContainer: {
    flex: 1,
    height: Platform.OS === "ios" ? 380 : 322,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    resizeMode: "contain",
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: "300",
    lineHeight: 21,
    letterSpacing: 0.28,
    color: "#323539",
    width: "100%",
    marginTop: "5%",
    fontFamily: "Hauora",
  },
  EstimateButton: {
    width: 185,
    paddingHorizontal: "3%",
    paddingVertical: "3%",
    backgroundColor: "white",
    marginTop: 15,
  },
  EstimateButtonText: {
    color: "#B22335",
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 0.24,
  },
  hoverHeadingBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    paddingHorizontal: "5%",
    backgroundColor: "#00000033",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 30,
    letterSpacing: 0.4,
    color: "#ffffff",
    width: "100%",
    fontFamily: "Hauora",
  },
});
