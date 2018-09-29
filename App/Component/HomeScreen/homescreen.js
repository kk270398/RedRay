import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity,Dimensions} from 'react-native';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
        };
    }

    static navigationOptions = {
        title: 'RedRay',
        header: null
    };



    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{flex: 3, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>

                        <Image source={require('../../../assets/logo.jpg')} style={{height: 250, width: 250,borderRadius: 250 / 2,borderWidth: 10,borderColor: '#8e0000'}}/>
                </View>
                <View style={{flex: 0.5, backgroundColor: '#8e0000', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{
                            fontSize: 35,
                            color: 'white',
                            fontFamily: this.state.fontLoaded ? 'AIOberonBold' : null
                        }}>RED</Text><Text style={{
                        fontFamily: this.state.fontLoaded ? 'AIOberonBold' : null,
                        fontSize: 35,
                        color: 'rgba(255,255,255,0.5)'
                    }}> RAY</Text>
                    </View>
                </View>
                <View style={{flex: 1.3, backgroundColor: '#d50000', justifyContent: 'center'}}>
                    <TouchableOpacity style={{
                        marginLeft: 60,
                        marginRight: 60,
                        height: 50,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} onPress={()=>navigate('BloodGroup')} ><Text
                        style={{ fontSize: 16,marginTop: 3}}>Enter Blood Group</Text>
                        </TouchableOpacity>
                    <TouchableOpacity style={{
                        marginLeft: 60,
                        marginRight: 60,
                        height: 50,
                        backgroundColor: 'white',
                        marginTop: 15,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} onPress={()=>navigate('Request')}><Text style={{ fontSize: 16}}>Request Blood</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});