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
          source = {require('./assets/logo_fpt.png')}
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
          <Icon style={styles.inputIcon} name={'user'} size={30} color={'#b2bcc6'}/>
          <TextInput style={styles.inputId} placeholder={'Tài khoản'} placeholderTextColor='#335271'/>
        </View>
        <View style={styles.input}>
          <Icon style={styles.inputIcon} name={'lock'} size={30} color={'#b2bcc6'}/>
          <TextInput secureTextEntry={isSecureEntry} style={styles.inputPw} placeholder={'Mật Khẩu'} placeholderTextColor='#335271'/>
          <TouchableOpacity onPress={()=>{setIsSecureEntry((prev)=>!prev)}}>
            <Icon style={styles.inputIcon} name={isSecureEntry?'eye':'eye-slash'} size={30} color={'#b2bcc6'}/>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <RadioButton color='#ff9336'/>
          <Text style={{color:'#ff9336', fontWeight:'bold', fontSize:20}}>Ghi nhớ đăng nhập</Text>
        </View>
        <Button title='ĐĂNG NHẬP'color='#ff9336'/>
      </View>
      <View style={styles.bottom}>
        <Image
            style = {{height:100}}
            source = {require('./assets/fis_logo.png')}
          />
        <Text style={{color:'#b2bcc6',paddingTop:50}}>Copyright {'\u00A9'} 2019, FPT Information System</Text>
      </View>
    </View>
  );
}

const dashStyles = {
  width: 40,
  height: 5,
  marginHorizontal: 3
}

const styles = StyleSheet.create({
 container: {
   backgroundColor : '#f4f8fb',
   flex: 1
 },
 logo:{

 },
 top: {
   paddingTop: 20,
   width: 'auto',
   alignItems: 'center'
 },
 textTop: {
   fontSize: 30,
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
  marginHorizontal: 30,
  marginTop: 10
 },
 textLogin: {
   textAlign: 'center',
   fontSize: 25,
   color: '#fea026',
   fontWeight: 'bold',
   paddingBottom: 10
 },
 inputId: {
    height: 60,
    flex: 1,
    backgroundColor: '#e6eaed',
    fontSize: 25,
    paddingLeft: 60
 },
 inputPw: {
    height: 60,
    flex: 1,
    backgroundColor: '#e6eaed',
    paddingLeft: 60,
    fontSize: 25,
 },
 input:{
   flexDirection: 'row',
   marginBottom: 10
 },
 inputIcon: {
  alignItems:'center',
  backgroundColor: '#e6eaed',
  padding:15,
  justifyContent:'center'
 },
 bottom: {
   alignItems:'center',
 }
});
