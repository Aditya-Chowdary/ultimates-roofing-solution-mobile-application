import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

import service1 from "../assets/ServicePageImages/our-service1.webp";
import service2 from "../assets/ServicePageImages/our-service2.webp";
import service3 from "../assets/ServicePageImages/our-service3.webp";
import service4 from "../assets/ServicePageImages/our-service4.webp";
import service5 from "../assets/ServicePageImages/our-service5.webp";
import arrow from "../assets/ServicePageImages/Arrow.webp";
import { useNavigation } from "@react-navigation/native";
import Header from "../Screens/Header";
import Trust from "../Components/Trust";
import ButtonCarousel from "../Components/ButtonCarousel";
import BackNavigation from "../Components/BackNavigation";

export default function ServicePage() {
  const navigation = useNavigation();
  return (
    <>
      <Header button={true} />
      <ScrollView style={styles.viewStyle}>
        <BackNavigation title={"Services"} />
        <View style={{ gap: -40 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Residential")}>
            <View style={[styles.ImageView, { marginTop: 20 }]}>
              <Image source={service1} style={styles.ourImage} />
            </View>
            <View style={styles.ImageOverlay}>
              <View>
                <Text style={{ color: "white", fontSize: 18, fontWeight: 500 }}>
                  Residential Roofing
                </Text>
              </View>
              <View>
                <Image source={arrow} style={{ marginRight: 35 }} />
              </View>
            </View>
          </TouchableOpacity>

          {/* Commercial */}
          <TouchableOpacity onPress={() => navigation.navigate("Commercial")}>
            <View style={styles.ImageView}>
              <Image source={service2} style={styles.ourImage} />
            </View>
            <View style={styles.ImageOverlay}>
              <View>
                <Text style={{ color: "white", fontSize: 18, fontWeight: 500 }}>
                  Commercial Roofing
                </Text>
              </View>
              <View>
                <Image source={arrow} style={{ marginRight: 35 }} />
              </View>
            </View>
          </TouchableOpacity>

          {/* Siding */}
          <TouchableOpacity onPress={() => navigation.navigate("Siding")}>
            <View style={styles.ImageView}>
              <Image source={service3} style={styles.ourImage} />
            </View>
            <View style={styles.ImageOverlay}>
              <View>
                <Text style={{ color: "white", fontSize: 18, fontWeight: 500 }}>
                  Siding Enhancements
                </Text>
              </View>

              <View>
                <Image source={arrow} style={{ marginRight: 35 }} />
              </View>
            </View>
          </TouchableOpacity>

          {/* Gutter system */}
          <TouchableOpacity onPress={() => navigation.navigate("Gutters")}>
            <View style={styles.ImageView}>
              <Image source={service4} style={styles.ourImage} />
            </View>
            <View style={styles.ImageOverlay}>
              <View>
                <Text style={{ color: "white", fontSize: 18, fontWeight: 500 }}>
                  Gutter Systems
                </Text>
              </View>

              <View>
                <Image source={arrow} style={{ marginRight: 35 }} />
              </View>
            </View>
          </TouchableOpacity>

          {/* windows */}
          <TouchableOpacity onPress={() => navigation.navigate("Windows")}>
            <View style={styles.ImageView}>
              <Image source={service5} style={styles.ourImage} />
            </View>
            <View style={styles.ImageOverlay}>
              <View>
                <Text style={{ color: "white", fontSize: 18, fontWeight: 500 }}>
                  Windows
                </Text>
              </View>
              <View>
                <Image source={arrow} style={{ marginRight: 35 }} />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ marginHorizontal: "5%", marginVertical: "-10%" }}>
          <ButtonCarousel />
        </View>
        <View style={{ marginTop: 35 }}>
          <Trust />
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  viewStyle: { flex: 1 },
  ourImage: {
    width: "90%",
    height: "25%",
    paddingVertical: "15%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  ImageView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageOverlay: {
    flexDirection: "row",
    position: "relative",
    bottom: 60,
    justifyContent: "space-between",
    padding: 20,
    left: 20,
  },
});
