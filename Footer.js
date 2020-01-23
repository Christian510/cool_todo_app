import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CP from './ColorPalette';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    TextInput,
    StatusBar,
    FlatList,
} from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logos}>
                <Icon name="logo-github" size={30} />
                <Icon name="logo-linkedin" size={30} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: CP.juniper
    },
    logos: {
        paddingTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default Footer;