import React, { Component } from '../../Library/Caches/typescript/2.9/node_modules/@types/react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
const { width, height } = Dimensions.get('window');

import SlidingPanel from 'react-native-sliding-up-down-panels';
import NotePad from './android/keystores/Note';






export default class Note extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         TextArray:[],
    //         text:""
    //     };
    // }
    // changetext = (Typedtext) =>{
      
    //   this.setState({
    //     text:Typedtext
    //   });
    // }


    // AddData = ()=>{

         
    //     const {text} = this.state
        
    //     let myArray={
    //        text:text
    //     }



    //    AsyncStorage.setItem("myArray",JSON.stringify(myArray));
     
    // }

    // DisplayData = async () =>{
    //     let myArray= await AsyncStorage.getItem("myArray")
    //     let d= JSON.parse(myArray);
    //     alert(d.text)
    // }
    
  render() {

    
    return (
      <View style={styles.container}>                      
         
        {/* <View style={styles.bodyViewStyle}>
          <Text>Hello My World</Text>
        </View> */}
        
        <SlidingPanel
            headerLayoutHeight = {60}
            headerLayout = { () =>
                <View style={styles.headerLayoutStyle}>
                  <Text style={styles.commonTextStyle}>Note</Text>
                </View>
            }
            slidingPanelLayout = { () =>
                <View style={styles.slidingPanelLayoutStyle}>
                     <NotePad />
                </View>
            }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
//   bodyViewStyle: {
//     flex: 1,
//     justifyContent: 'center', 
//     alignItems: 'center',
//   },
  headerLayoutStyle: {
    width, 
    height: 60, 
    backgroundColor: 'orange', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  slidingPanelLayoutStyle: {
    width,
    height:600,
    backgroundColor: '#7E52A0', 
    
    //justifyContent: 'center', 
    //alignItems: 'center',
  },
  commonTextStyle: {
    color: 'white', 
    fontSize: 18,
  },
  text:{
    paddingLeft:30
  },
  addButton:{
      position:"absolute",
      zIndex:11,
      right:20,
      bottom:90,
      backgroundColor:"red",
      width:90,
      height:90,
      borderRadius:45,
      elevation:8,
      justifyContent:"center",
      alignItems:"center"
  },
});
