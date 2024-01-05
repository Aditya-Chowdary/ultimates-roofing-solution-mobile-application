import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";

const KEY = "b182986efc1242b2a8c2709aa828fb67"; // Replace with your OpenCage API Key
const defaultRegion = {
  latitude: 16.757,
  longitude: 81.6922,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const handleSearchLocation = async (setLoading, setMarkerCoordinates, textInputValue) => {
  setLoading(true);

  try {
    const response = await axios.get(`https://[YOUR_IP_ADDRESS]/geocode/v1/json?q=${textInputValue}&key=${KEY}`);
    const firstResult = response.data.results[0];

    if (firstResult) {
      setMarkerCoordinates({
        latitude: firstResult.geometry.lat,
        longitude: firstResult.geometry.lng,
      });
    }
  } catch (error) {
    Alert.alert("Error fetching geocoding data", error.message);
  } finally {
    setLoading(false);
  }
};

const Map = (props) => (
  <MapView style={styles.map} region={props.region}>
    <Marker
      coordinate={props.Coordinates}
      title="Selected Location"
      description="Location based on entered text"
    />
  </MapView>
);

const InstantQuote = () => {
  const navigation = useNavigation();
  const [mapRegion, setMapRegion] = useState(defaultRegion);
  const [textInputValue, setTextInputValue] = useState("");
  const [markerCoordinates, setMarkerCoordinates] = useState(defaultRegion);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMapRegion({
      latitude: markerCoordinates.latitude,
      longitude: markerCoordinates.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }, [markerCoordinates]);

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Instant Roof quote</Text>
        <TouchableOpacity onPress={() => { navigation.navigate("home"), console.log('clicked') }}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
      <ScrollView>
        <View style={styles.mapContainer}>
          <Map region={mapRegion} Coordinates={markerCoordinates} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Location"
            value={textInputValue}
            onChangeText={(text) => setTextInputValue(text)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSearchLocation(setLoading, setMarkerCoordinates, textInputValue)}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.buttonText}>Search</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    height: 250,
    marginTop: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "5%",
    marginTop: 10,
  },
  headerText: {
    color: "#181818",
    fontSize: 20,
    fontWeight: "normal",
    letterSpacing: 0.4,
    fontFamily: "Hauora",
  },
  backText: {
    color: "#181818",
    fontFamily: "Hauora",
    fontSize: 14,
    marginTop: 6,
    fontWeight: "400",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 26,
    marginHorizontal: "10%",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
    marginRight: 10,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default InstantQuote;
