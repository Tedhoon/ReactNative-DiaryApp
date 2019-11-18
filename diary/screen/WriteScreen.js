import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class WriteScreen extends React.Component {
    
    // static navigationOptions = {
    //     tabBarIcon : ({tintColor}) => (
    //         <MaterialCommunityIcons name="calendar-multiselect" size={25} style={{color :tintColor}}/>
    //     )
    // }
    // 둘중에 하나만 골라서 쓰면 됩니다~(아이콘 띄우기)

    render() {
        return(
            <SafeAreaView style = {style.container}>
                <Text style={style.fontcontainer}>WriteScreen</Text>
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        paddingTop : 30,
    },
    fontcontainer: {
        fontSize : 30,
    }
})