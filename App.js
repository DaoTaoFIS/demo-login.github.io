import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { getCurrentTimestamp } from 'react-native/Libraries/Utilities/createPerformanceLogger';
import Icon from 'react-native-vector-icons/FontAwesome'
import { RadioButton } from 'react-native-paper';
import React, { useState } from 'react';


export default function App() {

  const [isSecureEntry, setIsSecureEntry] = useState(true)
  const [contactIcon, setContactIcon] = useState()
  return (
    <View style={styles.container}>
      <View style = {styles.top}>
        <Image
          style = {styles.logo}
          source = {require('./assets/logo2.jpg')}
        />
        <Text style={styles.textTop}>FIS INSIGHT PORTAL</Text>
        <View style = {styles.dash}>
          <View style = {styles.dash1}></View>
          <View style = {styles.dash2}></View>
          <View style = {styles.dash3}></View>
        </View>
      </View>
      
      <View style = {styles.fromLogin}>
        <Text style = {styles.textLogin}>ĐĂNG NHẬP HỆ THỐNG</Text>

        <View style={styles.input}>
          <Icon style={styles.iconUser} name={'user'} size={25} color={'#b2bcc6'}/>
          <TextInput style={styles.inputId} placeholder={'Tài khoản'} placeholderTextColor='#335271'/>
        </View>

        <View style={styles.input}>
          <Icon style={styles.iconLock} name={'lock'} size={25} color={'#b2bcc6'}/>
          <TextInput secureTextEntry={isSecureEntry} style={styles.inputPw} placeholder={'Mật Khẩu'} placeholderTextColor='#335271'/>
          <TouchableOpacity style={styles.iconEye} onPress={()=>{setIsSecureEntry((prev)=>!prev)}}>
            <Icon name={isSecureEntry?'eye':'eye-slash'} size={25} color={'#b2bcc6'}/>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <RadioButton color='#ff9336'/>
          <Text style={{color:'#ff9336', fontWeight:'bold', fontSize:15}}>Ghi nhớ đăng nhập</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textBtn}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Image
            source = {require('./assets/image.jpg')}
          />
        <Text style={{color:'#b2bcc6',paddingTop:50}}>Copyright {'\u00A9'} 2019, FPT Information System</Text>
      </View>
    </View>
  );
}

const dashStyles = {
  padding:20,
  paddingBottom:3,
  paddingTop:3,
  marginHorizontal: 2
}
const icon = {
  alignItems:'center',
  backgroundColor: '#e6eaed',
  padding:10,
  justifyContent:'center',
  flex:1
}
const styles = StyleSheet.create({
 container: {
   backgroundColor : '#fff',
   flex: 1
 },
 logo:{

 },
 top: {
   paddingTop: 70,
   width: 'auto',
   alignItems: 'center'
 },
 textTop: {
   fontSize: 25,
   textAlign: 'center',
   fontWeight: 'bold',
   color: '#335271',
   padding: 10
 },
 dash: {
   flexDirection: 'row'
 },
 dash1: {
   ...dashStyles,
   backgroundColor: 'blue'
 },
 dash2: {
  ...dashStyles,
  backgroundColor: 'orange'
 },
 dash3: {
  ...dashStyles,
   backgroundColor: 'green'
 },
 fromLogin:{
  marginHorizontal: 60,
  marginTop: 5,
  marginBottom: 5
 },
 textLogin: {
   textAlign: 'center',
   fontSize: 20,
   color: '#fea026',
   fontWeight: 'bold',
   paddingBottom: 5
 },
 inputId: {
    flex: 8,
    backgroundColor: '#e6eaed',
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign:'center'
 },
 inputPw: {
    flex: 6,
    backgroundColor: '#e6eaed',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft:60,
    fontSize: 20,
    textAlign: 'center'
 },
 input:{
   flexDirection: 'row',
   marginBottom: 10,
 },
 iconUser: {
  ...icon
 },
 iconLock:{
   ...icon
 },
 iconEye:{
  ...icon
 },
 button: {
   backgroundColor: '#ff9336',
   padding:10,
   borderRadius: 5,
 },
 textBtn:{
   textAlign:'center',
   color:'#fff',
   fontSize: 17,
   fontWeight: 'bold'
 },
 bottom: {
    alignItems:'center',
 }
});
