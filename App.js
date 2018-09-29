import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Red from './App/index';

export default class App extends React.Component {

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'AIOberonBold': require('./assets/fonts/AIOberonBold.ttf'),
            'Gotham': require('./assets/fonts/GothamBook.ttf'),
            'GothamMed': require('./assets/fonts/GothamMedium.ttf'),
        });
        this.setState({fontLoaded: true});
    }

  render() {
    return (

        <Red/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
