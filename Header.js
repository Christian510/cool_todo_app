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



const Header = () => {

    return (
        <View style={[styles.header_container, styles.flex_row]}>
            <View style={[styles.menu, styles.flex_end_vert]}>
                <Icon name='ios-menu' size={40} />
            </View>
            <View style={styles.flex_end_vert}>
                <Text style={styles.title}>Get Stuff Done!</Text>
            </View>
            <View style={{width: 30, marginRight: 10}}>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    header_container: {
        height: 140,
        backgroundColor: CP.juniper,
        paddingBottom: 20,
    },
    flex_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menu: {
        width: 30,
        // color: '',
        marginLeft: 20,
    },
    title: {
        fontSize: 30,
    },
    flex_ctr_vert: {
        flexDirection: 'column',
        alignSelf: 'center',
    },
    flex_end_vert: {
        flexDirection: 'column',
        alignSelf: 'flex-end',
    }
});
export default Header