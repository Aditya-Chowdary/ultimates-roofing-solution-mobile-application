import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import service1 from "../assets/ServicePageImages/our-service1.jpg";
import service2 from "../assets/ServicePageImages/our-service2.jpg";
import service3 from "../assets/ServicePageImages/our-service3.jpg";
import service4 from "../assets/ServicePageImages/our-service4.jpg";
import service5 from "../assets/ServicePageImages/our-service5.jpg";
import { useNavigation } from "@react-navigation/native";
import Footer from "../Components/Footer";
import Header from "../Screens/Header";
import arrow from "../assets/ServicePageImages/Arrow.png";
import Trust from "../Components/Trust";
import ButtonCarousel from "../Components/ButtonCarousel";
import BackNavigation from "../Components/BackNavigation";

export default function ServicePage() {
  const navigation = useNavigation();
  return (
    <>
      <Header button={true} />
      <ScrollView style={styles.viewStyle}>
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: "5%",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "#181818",
              fontSize: 20,
              fontWeight: "normal",
              letterSpacing: 0.4,
              fontFamily: "Hauora",
            }}
          >
            Services
          </Text>
          <Text style={{ color: "#181818",fontFamily:'Hauora',fontSize:14,marginTop:6,fontWeight:'400' }} onPress={() => navigation.navigate("home")}>Back</Text>
        </View> */}
        <BackNavigation title={"Services"} />
        <View style={{ gap: -40 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Residential")}>
            <View
              style={{
                flex: 1,
                justifyContent: "center", // Centers vertically
                alignItems: "center",
                marginTop: 20, // Centers horizontally
              }}
            >
              <Image source={service1} style={styles.ourImage} />
            </View>
            <View
              style={{
                flexDirection: "row",
                position: "relative",
                bottom: 60,
                justifyContent: "space-between",
                padding: 20,
                left: 20,
              }}
            >
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
          {/* 
          Commercial */}

          <TouchableOpacity onPress={() => navigation.navigate("Commercial")}>
            <View
              style={{
                flex: 1,
                justifyContent: "center", // Centers vertically
                alignItems: "center",

              }}
            >
              <Image source={service2} style={styles.ourImage} />
            </View>
            <View
              style={{
                flexDirection: "row",
                position: "relative",
                bottom: 60,
                justifyContent: "space-between",
                padding: 20,
                left: 20,
              }}
            >
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
            <View
              style={{
                flex: 1,
                justifyContent: "center", // Centers vertically
                alignItems: "center",

              }}
            >
              <Image source={service3} style={styles.ourImage} />
            </View>
            <View
              style={{
                flexDirection: "row",
                position: "relative",
                bottom: 60,
                justifyContent: "space-between",
                padding: 20,
                left: 20,
              }}
            >
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
            <View
              style={{
                flex: 1,
                justifyContent: "center", // Centers vertically
                alignItems: "center",

              }}
            >
              <Image source={service4} style={styles.ourImage} />
            </View>
            <View
              style={{
                flexDirection: "row",
                position: "relative",
                bottom: 60,
                justifyContent: "space-between",
                padding: 20,
                left: 20,
              }}
            >
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

          {/* //windows */}

          <TouchableOpacity onPress={() => navigation.navigate("Windows")}>
            <View
              style={{
                flex: 1,
                justifyContent: "center", // Centers vertically
                alignItems: "center",

              }}
            >
              <Image source={service5} style={styles.ourImage} />
            </View>
            <View
              style={{
                flexDirection: "row",
                position: "relative",
                bottom: 60,
                justifyContent: "space-between",
                padding: 20,
                left: 20,

              }}
            >
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
  img: {
    padding: 10,
  },

  viewStyle: { flex: 1 },
  ourImage: {
    width: "90%",
    height: "25%",
    paddingVertical: "15%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  buttonContainer: {
    backgroundColor: "#B22335",
    width: "10%",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: "5%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  roof: {
    height: 200,
    backgroundColor: "rgba(30, 30, 42, 0.57)",
  },
  textAboveImage: {
    position: "absolute",
    top: 10, // Adjust the top position as needed
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    zIndex: 1,
    marginTop: 50,
    marginLeft: 25,
  },
  textAboveImage2: {
    position: "absolute",
    top: 10, // Adjust the top position as needed
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    zIndex: 1,
    marginTop: 75,
    marginLeft: 105,
  },
});
