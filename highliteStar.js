
import React, { useState } from 'react';
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

import CP from './ColorPalette';
import Icon from 'react-native-vector-icons/Ionicons';

const highliteStar = (props) => {
    const [isHighlighted, highlight] = useState(false);
    return (
        <View onPress={() => highlight(isHighlighted = true)}>
            {isHighlighted ?
                <Icon name="ios-star-" size={20} /> :
                <Icon name="ios-star-outline" size={20} />}
        </View>
    );
};

const styles = StyleSheet.create({

});

export default highliteStar;