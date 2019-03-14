import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
// import FontAwesome, { Icons } from "react-native-fontawesome";
import Icon from 'react-native-vector-icons/FontAwesome';

class Memo extends Component {
  render() {
    return (
      <View style={styles.textInput} key={this.props.keyval}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteDate}>{this.props.val.note}</Text>
          <TouchableOpacity
            onPress={this.props.deleteMethod}
            style={styles.noteDelete}
          >
          <Icon name="trash" size={30} color="#CD3D3E" />
          </TouchableOpacity>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
     flexDirection:"row",
    marginTop: 50,
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "black"
  },
  noteText: {
    color:"#333",
    fontSize:20,
    marginLeft:5,
    borderLeftWidth: 10,
    justifyContent: "flex-end",
    borderLeftColor: "#F0EC99"
  },
  noteDate: {
    color:"#333",
    fontSize:20,
    paddingLeft: 5,
    borderLeftWidth: 10,
    justifyContent: "center",
    borderLeftColor: "#F0EC99"
  },
  
  noteDelete: {
    position: "absolute",
    fontSize: 50,
    alignItems:"flex-end",
    padding: 10,
    top: 10,
    bottom: 20,
    left: 350
  },
  
});
export default Memo;
