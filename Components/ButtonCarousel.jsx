import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import Icon from "@expo/vector-icons/Ionicons";

const ButtonCarousel = () => {
    const ref = useRef(10);
    const [getValue, setValue] = useState(10);
    const images = [
        require("../assets/CarouselImages/c1.jpeg"),
        require("../assets/CarouselImages/c2.jpeg"),
        require("../assets/CarouselImages/c3.jpeg"),
        require("../assets/CarouselImages/c4.jpeg"),
    ];



    const toRight = () => { if (getValue == 10) { setValue(400); } else if (getValue == 400) { setValue(790); } else if (getValue == 790) { setValue(10); } ref.current?.scrollTo({ x: getValue }) }
    const toLeft = () => { if (getValue == 790) { setValue(400); } else if (getValue == 400) { setValue(10); } else if (getValue == 10) { setValue(790) } ref.current?.scrollTo({ x: getValue }) }
    setTimeout(() => { ref.current?.scrollTo({ x: getValue }) }, 1);
    return (

        <View style={{ marginTop: "10%", width: "100%", height: 250 }} >


            {/* <SliderBox
                    images={images}
                    sliderBoxHeight={200}
                    SliderBoxWidth={"100%"}
                    dotColor="crimson"
                    inactiveDotColor="black"
                    paginationBoxVerticalPadding={10}
                    autoplayInterval={1500}
                    circleLoop
                /> */}
            < View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>

                <View ><Text style={[styles.headerText, { fontFamily: "Hauora", color: 'black', fontWeight: 600, fontSize: 20, marginTop: 0 }]}>Featured Works</Text></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { toLeft() }}>
                        <Icon name="md-arrow-back-circle-outline" size={30} style={{ color: "#3a3a3a", margin: 0 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { toRight() }}>
                        <Icon name="md-arrow-forward-circle-outline" size={30} style={{ color: "#3a3a3a", margin: 0 }} />
                    </TouchableOpacity>
                </View>
            </View >

            <ScrollView horizontal={true} style={{ width: "100%", }} ref={ref} showsHorizontalScrollIndicator={true} >
                <View style={styles.ScrollImageBackground}>
                    <Image source={images[0]} style={styles.ScrollImage} />
                </View>
                <View style={styles.ScrollImageBackground}>
                    <Image source={images[1]} style={styles.ScrollImage} />
                </View>
                <View style={styles.ScrollImageBackground}>
                    <Image source={images[2]} style={styles.ScrollImage} />
                </View>
            </ScrollView>
        </View >

    );

};

const styles = StyleSheet.create({
    ScrollImage: {

        resizeMode: 'stretch'
    },
    ScrollImageBackground: {
        borderWidth: 0,
        height: '100%',
        overflow: 'hidden',
        width: 370,
        marginHorizontal: 10,
    },
    headerText: {

        fontSize: 25,
        fontWeight: '500',
        lineHeight: 30,
        letterSpacing: 0.4,
        color: '#ffffff',
        width: '100%'
    },
});

export default ButtonCarousel;