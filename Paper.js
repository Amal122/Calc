
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ScrollView
} from 'react-native';

import SlidingPanel from 'react-native-sliding-up-down-panels';
import NotePad from './Note';



const { width, height } = Dimensions.get('window');



export default class Note extends Component {

    
    
  render() {

    
    return (
      <View style={styles.container}>                      
         
        
        
        <SlidingPanel
            headerLayoutHeight = {65}
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

  headerLayoutStyle: {
    width, 
    height: 65, 
    backgroundColor: '#368A73', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  slidingPanelLayoutStyle: {
    width,
    height,
    backgroundColor: "#F0EC99",  
  },
  commonTextStyle: {
    color: 'white', 
    fontSize: 18,
  },
  text:{
    paddingLeft:30
  },
  
});
