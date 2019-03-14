import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Keyboard,
  AsyncStorage,
  SafeAreaView,
  TouchableWithoutFeedback
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Memo from "./Todo";


const { width, height } = Dimensions.get('window');
const DismissKeyboard = ({children})=> (
<TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
 
   {children}
</TouchableWithoutFeedback>    

);

class NotePad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: ""
    };
  }

  componentDidMount() {
      AsyncStorage.getItem('noteArray').then((res)=> {
          console.log("response is", res)
 let tempArr = JSON.parse(res)
           if (tempArr.length > 0) {
              this.setState({noteArray:tempArr})
           }
        }
      )

  }

  addData = () => {
    if (this.state.noteText) {
      var data = new Date();

      this.state.noteArray.push({
        date: data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear(),
        note: this.state.noteText
      });
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: "" });
    }
    AsyncStorage.setItem('noteArray',
        JSON.stringify(this.state.noteArray));
  };

  
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }

  
  
  render() {
    return (
        
          <View
          style={styles.container}>
          <DismissKeyboard>
            <KeyboardAwareScrollView
            >
            {this.state.noteArray.reverse().map((val, key) => {
            return <Memo key={key} keyval={key} val={val}
                    deleteMethod={ ()=> this.deleteNote(key)} />
            
            })}
               
               
                  
            </KeyboardAwareScrollView> 
            </DismissKeyboard>   
                  <TouchableOpacity onPress={this.addData.bind(this)} onclick="document.write(5 + 6)" style={styles.addButton} >
                      <Text style={{fontWeight:"100",fontSize:40,color:"white"}}>+</Text>
                  </TouchableOpacity> 
                  <TextInput style={styles.text}
                //   underlineColorAndroid="transparent"
                  onChangeText={(noteText) => this.setState({noteText})}
                  value={this.state.noteText}
                  multiline={true}
                  returnKeyType="next"
                  placeholder="Enter Text"
                  onScroll={()=> Keyboard.dismiss()}
                  >
                    
                  </TextInput>
            </View>  
                
        )  
    }
    }
const styles = StyleSheet.create({
  container: {
    flex:1,
    marginBottom:150,
  },
  addButton: {
     position: "absolute",
    zIndex: 200,
     marginTop: 540,
    backgroundColor: "#368A73",
    width: 50,
    height: 50,
    borderRadius:25,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    right: 10
  },
  
  text: {
     position:"absolute",
    color: "red",
     marginTop:540,
    paddingRight:20,
    width:width-70,
    borderRadius:20,
    backgroundColor: "white",
    left:5
  },
  
});
export default NotePad;
