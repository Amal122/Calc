import React from "react";
import ReactNative, {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from "react-native";
import Note from './Paper';

export default class App extends React.Component {
   
  constructor() {
    super();
    
    this.state = {
      resultText: "",
      calculationText:"",
      
      visible:false
    };
    this.Operations = ["D", "+", "-", "*", "/"];
  }
  calculateResult() {
    const text = this.state.resultText;
    console.log(text,eval(text))
    const result = eval(text)
    this.setState({
      calculationText:result,
    })
  }
  
  validate(){
    const text=this.state.resultText
    switch(text.slice(-1)){
      
    case "+":  
    case '-':
    case "*":
    case "/":
    
    return false
    }
    return true
  }
 
   

  ButtonPressed(text) {
    console.log(text);
    if (text == "=") {
      
       return this.validate() &&   this.calculateResult() ;
       
    }
    
     
    
     console.log("hello",text) 
           
    if(text == "."){
      this.count = this.count + 1
      console.log("no.",this.count)
      if(this.count>1){
           return
      }
    }

    

    this.setState({
      resultText: this.state.resultText + text
    });
  }

  operate(Operations) {
    console.log("hello")
    switch (Operations) {
      case "D":
      {
        
        const text = this.state.resultText.split("");
        text.pop();
        text.join("");
        this.setState({
          resultText: text.join("")
        });
       break
      }
      case '-':
      {
        this.count=0
        const lastChar = this.state.resultText.toLocaleString().split("").pop();
        if ( this.Operations.indexOf(lastChar)>0) {
          return 
        }
        if(lastChar=="."){
          return null
        }
          if(this.state.text == "") {
          return
          } 
          this.setState({
          resultText:this.state.resultText+Operations
          })
      }
      case "+":
      case "*":
      case "/":
        this.count=0
        console.log("resulttext", this.state.resultText)
        const lastChar = this.state.resultText.toLocaleString().split("").pop();
        if (this.Operations.indexOf(lastChar)>0 ) {
          return 
        }
        if(this.state.resultText=="")
        {
          return null;
        }
        if(lastChar=="."){
          return null
        }
          if(this.state.text == "") {
          return
          } 
          this.setState({
          resultText:this.state.resultText+Operations
          })
        }
        
      }
      Delete(Operations){
        console.log("hiii")
        if(Operations=="D"){
          this.setState({
            resultText:""
            })
        }

      }
      
      

  render() {
    let rows = [];
    let num = [[7,8,9], [4,5,6], [1,2,3], [".", 0, "="]];
    for (let i = 0; i < 4; i++) {
      let row = [];

      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity
            onPress={() => this.ButtonPressed(num[i][j])}
            style={styles.btn}
          >
            <Text style={styles.buttons}>{num[i][j]}</Text>
          </TouchableOpacity>
        );
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }

    this.Operations = ["D", "+", "-", "*", "/"];
    let ops = [];
    for (let i = 0; i <= 4; i++) {
      ops.push(
        <TouchableOpacity
          style={styles.operations}
          onPress={() => this.operate(this.Operations[i])}
          onLongPress={() => this.Delete(this.Operations[i])}
        >
          <Text style={[styles.operations,styles.white]}>
            {this.Operations[i]}
          </Text>
        </TouchableOpacity>
        
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
        
          <Text style={styles.resultText}>{this.state.resultText}</Text>
          <Text style={{}}>Copy</Text>
        </View>
        <View style={styles.calcultion}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>{rows}</View>
          <View style={styles.operations}>
          {ops}
          
            
          </View>
           
        </View>
        <Note/>         
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  result: {
    flex:2,
    backgroundColor: "#181819",
    justifyContent: "center",
    alignItems: "center"
  },
  calcultion: {
    flex:1,
    backgroundColor: "#181819",
    
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flex:7,
    flexDirection: "row",
    fontSize:60,
  },
  numbers: {
    flex: 3,
    backgroundColor: "#C4C9CA",
    fontSize:60
  },
  operations: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "space-evenly"
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "stretch"
  },
  rows: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "stretch"
  },
  resultText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    color:"white"
  },
  calculationText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    color:"white"
  },
  white: {
    color:"white",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 30
  },
  
});
