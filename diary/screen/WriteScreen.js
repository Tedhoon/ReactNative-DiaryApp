import React from 'react';
import { StyleSheet, TextInput, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import WriteHeader from '../components/WriteHeader'

const { width, height } = Dimensions.get('window');

export default class WriteScreen extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <MaterialCommunityIcons name="lead-pencil" size={30} style={{color:tintColor}}/>
    ),
    tabBarOnPress: ({navigation}) => {
      navigation.navigate('Write')
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <WriteHeader/>
          <TextInput
            placeholder="제목을 입력하세요"
            style={styles.title}
            returnKeyType="done" />
          <TextInput
            placeholder="내용을 입력하세요"
            multiline={true} //여러줄에 걸친 입력이 가능합니다
            style={styles.content}
            returnKeyType="done" />
        </View>
      </SafeAreaView>
)}}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  paddingTop:30,
  },
  contentContainer: {
  width: width - 60,
  },
  title: {
  marginVertical: 30, //margin을 위 아래로 주는 속성입니다
  fontSize: 30,
  paddingBottom: 12,
  borderBottomWidth: 2,
  },
  content: {
  fontSize: 20,
  },
});
            