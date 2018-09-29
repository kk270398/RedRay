import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
    Picker,
    Dimensions,
    FlatList,
    ActivityIndicator
} from 'react-native';
import * as firebase from 'firebase';
import openMap from 'react-native-open-maps';

var {height, width} = Dimensions.get('window');

export default class BloodGroup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bloodgroup: "Blood Group",
            bloodbanks: [],
            loaded: false,
            Index: 0,
            info: true
        };
    }

    static navigationOptions = {
        title: 'RedRay',
        header: null
    };

    componentWillMount() {
        var config = {
            apiKey: "AIzaSyCPp3erB-s3jqJLavd2BFkd27rnp8ToSCY",
            authDomain: "redray-84586.firebaseapp.com",
            databaseURL: "https://redray-84586.firebaseio.com",
            projectId: "redray-84586",
            storageBucket: "redray-84586.appspot.com",
            messagingSenderId: "346201488798"
        };
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        firebase.database().ref('BloodBanks').once('value', (data) => {

            var Items = [];

            for (var i = 0; i < 20; i++) {
                Items.push(data.toJSON()[i]);
            }
            this.setState({
                bloodbanks: Items,

            })
            this.setState({

                loaded: true
            })

        })
    }

    more_info(item, index) {
        let {bloodbanks} = this.state;
        let targetPost = bloodbanks[index];

        targetPost.info = !targetPost.info;
        global.lat = targetPost.Lat;
        global.lon = targetPost.Lon;
        bloodbanks[index] = targetPost;
        this.setState({bloodbanks})
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#eee',
                }}>
                <Image
                    style={{
                        backgroundColor: '#ccc',
                        flex: 1,
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                    }}
                    source={require('../../../assets/back.png')}/>

                <View style={{flex: 1, alignItems: 'center', backgroundColor: 'transparent'}}>
                    <View style={{
                        height: 50,
                        width: width / 1.1,
                        marginTop: 50,
                        marginBottom: 10,
                        borderWidth: 2,
                        borderColor: "white"
                    }}>
                        <Picker
                            mode={"dropdown"}
                            selectedValue={this.state.bloodgroup}
                            style={{color: "white"}}
                            onValueChange={(itemValue, itemIndex) => this.setState({
                                bloodgroup: itemValue,
                                Index: itemIndex
                            })}
                        >
                            <Picker.Item label="Select Your Blood Group" color="black" value="None"/>
                            <Picker.Item label="A+" color="black" value="Apos"/>
                            <Picker.Item label="A-" color="black" value="A-"/>
                            <Picker.Item label="B+" color="black" value="B+"/>
                            <Picker.Item label="B-" color="black" value="B-"/>
                            <Picker.Item label="AB+" color="black" value="AB+"/>
                            <Picker.Item label="AB-" color="black" value="AB-"/>
                            <Picker.Item label="O+" color="black" value="O+"/>
                            <Picker.Item label="O-" color="black" value="O-"/>
                        </Picker>
                    </View>
                    {this.state.Index === 0 ? null : <View>{this.state.loaded && this.state.Index !== 0 ? <FlatList
                        data={this.state.bloodbanks}
                        extraData={this.state}
                        keyExtractor={(x, i) => i}
                        renderItem={({item, index}) => <View><View style={{
                            width: width,
                            height: 100,
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            borderTopWidth: 1,
                            borderBottomColor: 'grey',
                            flexDirection: 'row'
                        }}>
                            <View
                                style={{height: 100, width: width / 3, alignItems: 'center', justifyContent: 'center'}}>
                                <View style={{
                                    height: 70,
                                    width: 70,
                                    borderRadius: 70 / 2,
                                    borderWidth: 2,
                                    borderColor: "white",
                                    marginLeft: 10
                                }}><Image source={require('../../../assets/B.gif')}
                                          style={{height: 60, width: 60, borderRadius: 60 / 2}}/></View>
                            </View>

                            <View style={{height: 130, width: width / 2.2}}>
                                <Text style={{marginTop: 20}}>{item.name}</Text>
                                <TouchableOpacity style={{
                                    height: 20,
                                    width: 70,
                                    backgroundColor: 'red',
                                    marginTop: 10,
                                    marginBottom: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }} onPress={() => this.more_info(item, index)}><Text
                                    style={{fontSize: 11, color: 'white'}}>More Info</Text></TouchableOpacity>
                            </View>
                            <View
                                style={{height: 100, width: width / 3, alignItems: 'center', justifyContent: 'center'}}>
                                {this.state.Index === 1 && <Text>{item.Apos} units</Text>}
                                {this.state.Index === 2 && <Text>{item.Aneg} units</Text>}
                                {this.state.Index === 3 && <Text>{item.Bpos} units</Text>}
                                {this.state.Index === 4 && <Text>{item.Bneg} units</Text>}
                                {this.state.Index === 5 && <Text>{item.ABpos} units</Text>}
                                {this.state.Index === 6 && <Text>{item.ABneg} units</Text>}
                                {this.state.Index === 7 && <Text>{item.Opos} units</Text>}
                                {this.state.Index === 8 && <Text>{item.Oneg} units</Text>}
                            </View>
                        </View>
                            {item.info ? <View style={{
                                height: 220,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: "transparent"
                            }}><View style={{
                                height: "87%",
                                width: "95%",
                                backgroundColor: "transparent",
                                borderWidth: 1,
                                borderColor: "white"
                            }}>
                                <View style={{height: "68%", backgroundColor: "transparent"}}>
                                    <Text style={{
                                        fontSize: 15,
                                        color: "white",
                                        fontWeight: "bold",
                                        marginLeft: 10,
                                        marginTop: 10
                                    }}>Address</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        color: "white",
                                        marginLeft: 10,
                                        marginTop: 2,
                                        marginRight: 10
                                    }}>{item.add}</Text>
                                    <TouchableOpacity style={{
                                        height: 41,
                                        width: "54%",
                                        backgroundColor: '#6CB6EE',
                                        marginTop: 20,
                                        marginLeft: 10,
                                        borderWidth:1,
                                        borderColor: 'white',
                                        justifyContent: 'center'
                                    }} onPress={() => openMap({latitude: lat, longitude: lon})}>
                                        <View style={{flexDirection: 'row'}}>
                                            <Image source={require('../../../assets/direction.jpg')} style={{
                                                height: 30,
                                                width: 30,
                                                borderRadius: 30 / 2,
                                                marginLeft: 10
                                            }}/>
                                            <Text style={{fontSize: 18, color: 'white', marginLeft: 10}}>Get
                                                Directions</Text></View></TouchableOpacity>
                                </View>
                                <View style={{height: "32%", backgroundColor: "transparent"}}>
                                    <Text style={{
                                        fontSize: 15,
                                        color: "white",
                                        fontWeight: "bold",
                                        marginLeft: 10,
                                        marginTop: 10
                                    }}>Contact Number</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        color: "white",
                                        marginLeft: 10,
                                        marginTop: 2,
                                        marginRight: 10
                                    }}>{item.Phone}</Text>
                                </View>
                            </View></View> : null}
                        </View>}

                    /> : <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator
                        size="large"/></View>}</View>}

                </View>
            </View>
        );
    }
}