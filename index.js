import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Environment,
    Text,
    View,
    VrButton,
    NativeModules
} from 'react-360';

const {VideoModule} = NativeModules;

export default class Hello360 extends React.Component {

    state = {
        count: 0,
    };

    _incrementCount = () => {
        this.setState({count: this.state.count + 1});
    };

    componentDidMount(){
        Environment.setBackgroundVideo('myplayer');
        VideoModule.resume('myplayer'); // Start playback
    }

    render() {
        return (
            <View style={styles.panel}>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 1000,
        height: 600,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greetingBox: {
        padding: 20,
        backgroundColor: '#000000',
        borderColor: '#639dda',
        borderWidth: 2,
    },
    greeting: {
        fontSize: 30,
    },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
