import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Love = (props) => {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Experience')}>
                <Icon name='arrow-left' size={30}
                    style={{
                        color: 'white',
                        padding: 19,
                    }}>
                </Icon>
            </TouchableOpacity>

            <Text style={{
                fontFamily: 'Prompt',
                fontSize: 16,
                color: '#00AB55',
                left: 15,
                lineHeight: 27,
            }}>
                Step 3/4
            </Text>

            <Text style={{
                fontSize: 36,
                fontFamily: 'Prompt',
                fontWeight: 'bold',
                color: 'white',
                left: 15,
                lineHeight: 45,
            }}>
                Tell us what you{'\n'}love
            </Text>

            <Text style={{
                color: 'white',
                fontSize: 18,
                fontFamily: 'Prompt',
                lineHeight: 27,
                left: 15,
                top: 20,
            }}>
                Event categories
            </Text>



            <View style={styles.eventcat}>
                <TouchableOpacity style={styles.art}>
                    <Text style={styles.txt}>
                        Arts Theater
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.auto}>
                    <Text style={styles.txt}>
                    Auto, Boat, Air
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.beauty}>
                    <Text style={styles.txt}>
                    Beauty
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.business}>
                    <Text style={styles.txt}>
                    Business
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.eventcatse}>
                <TouchableOpacity style={styles.charity}>
                    <Text style={styles.txt}>
                    Charity Causes
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.art}>
                    <Text style={styles.txt}>
                        Community
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.education}>
                    <Text style={styles.txt}>
                    Education
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={{
                color: 'white',
                fontSize: 18,
                fontFamily: 'Prompt',
                lineHeight: 27,
                left: 15,
                top: 90,
            }}>
                Event types
            </Text>

            <View style={styles.eventtype}>
                <TouchableOpacity style={styles.art}>
                    <Text style={styles.txt}>
                        Art Show
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.auto}>
                    <Text style={styles.txt}>
                    Book Lunch
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.beauty}>
                    <Text style={styles.txt}>
                    Booze Cruise
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.business}>
                    <Text style={styles.txt}>
                    Brunch
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.eventtypese}>
                <TouchableOpacity style={styles.charity}>
                    <Text style={styles.txt}>
                    Bowling
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.art}>
                    <Text style={styles.txt}>
                       Class
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.education}>
                    <Text style={styles.txt}>
                    Cocktail Hour
                    </Text>
                </TouchableOpacity>
            </View>




            <View style={styles.btn}>
                <TouchableOpacity onPress={() => navigation.navigate('Congratulations')}
                    style={styles.skip}>
                    <Text style={styles.skiptxt}>
                        Skip
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Organizer')}
                    style={styles.next}>
                    <Text style={styles.nexttxt}>
                        Next
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    txt: {
        color: 'white',
        marginHorizontal: 15,
        paddingTop: 12,
        fontSize: 12,
    },
    art: {
        backgroundColor: '#FC0D1B3D',
        height: 40,
        borderRadius: 25,
        borderColor: '#FC0D1B',
        borderWidth: 1,
    },
    auto: {
        backgroundColor: '#FD77283D',
        height: 40,
        borderRadius: 25,
        borderColor: '#FD7728',
        borderWidth: 1,
    },
    beauty:{
        backgroundColor: '#F756CF3D',
        height: 40,
        borderRadius: 25,
        borderColor: '#F756CF',
        borderWidth: 1,
    },
    business:{
        backgroundColor: '#6F359E3D',
        height: 40,
        borderRadius: 25,
        borderColor: '#6F359E',
        borderWidth: 1,
    },
    charity:{
        backgroundColor: '#6F359E',
        height: 40,
        borderRadius: 25,
    },
    education:{
        backgroundColor: '#FEEE363D',
        height: 40,
        borderRadius: 25,
        borderColor: '#FEEE36',
        borderWidth: 1,
    },
    eventcat:{
        flexDirection: 'row',
        marginHorizontal: 10,
        top: 50,
        justifyContent: 'space-between',
        
    },
    eventcatse:{
        flexDirection: 'row',
        marginHorizontal: 10,
        top: 65,
        // justifyContent: 'space-between',
    },
    eventtype:{
        flexDirection: 'row',
        marginHorizontal: 10,
        top: 110,
        justifyContent: 'space-between',
    },
    eventtypese:{
        flexDirection: 'row',
        marginHorizontal: 10,
        top: 125,
        // justifyContent: 'space-between',
    },
    container: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: '#000E28',
    },
    btn: {
        justifyContent: 'space-around',
        top: 242,
    },
    skip: {
        marginHorizontal: 15,
        height: 48,
        //backgroundColor: '#00AB55',
        marginBottom: 15,
        borderRadius: 7,

        borderColor: '#00AB55',
        borderWidth: 1,

    },
    skiptxt: {
        fontFamily: 'Public Sans',
        fontSize: 15,
        color: '#00AB55',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        padding: 15,
        fontWeight: 'bold',
    },
    next: {
        // width: windowWidth,
        marginHorizontal: 15,
        height: 50,
        backgroundColor: '#00AB55',
        borderRadius: 7,
    },
    nexttxt: {
        color: 'black',
        padding: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default Love;