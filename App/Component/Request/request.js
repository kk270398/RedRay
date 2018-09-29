import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
    patient_name: t.String,
    required_blood_group: t.String,
    patient_address: t.String,
    patient_contact_number: t.String,
    hospital_name: t.maybe(t.String),
    more_details: t.maybe(t.String),
});

const options = {
    fields: {
        patient_name: {
            error: 'This Field is Required'
        },
        required_blood_group: {
            error: 'This Field is Required'
        },
        patient_address: {
            error: 'This Field is Required',
        },
        patient_contact_number: {
            error: 'This Field is Required',
        },
    },
};
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
                <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#ffffff', marginTop: 50,
                    padding: 20,}}>
                    <Form type={User} style={{textColor: "white"}}/>
                    <TouchableOpacity style={{
                        height: 41,
                        width: "50%",
                        backgroundColor: '#6CB6EE',
                        marginTop: 20,
                        marginLeft: "25%",
                        borderWidth:1,
                        borderColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} onPress={() => this.handleSubmit}>
                            <Text style={{fontSize: 20, color: 'white'}}>Submit</Text></TouchableOpacity>
                </View>

        );
    }
}