import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements'
import db from './words'
import {Audio} from 'expo-av'
import Sound from './components/Sound'
export default class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      text:"",
      chunks:[],
      phones:[]
    
    }
  }
  render()
  {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header
        backgroundColor="yellow"
        centerComponent = {{text:"Monkey Chunky",style:{color:"brown",fontSize:20}}}

      />
      <TextInput placeholder = "Enter the word" onChangeText = {t=>{
        this.setState({text:t})
        
        
      }}
      style = {{alignItems:'center',marginTop:30,textAlign:'center',height:50,fontSize:15}}
      value = {this.state.text}/>
      <TouchableOpacity onPress  = {()=>{
        this.setState({chunks:db[this.state.text].chunks,phones:db[this.state.text].phones})
      }} 
      style = {{backgroundColor:"lightblue",alignItems:'center',borderWidth:5,
        borderRadius:100,marginTop:30,marginLeft:95,height:50,width:220}}
      >
        <Text style = {{margin:10}}>Go</Text>
      </TouchableOpacity>
      
      {this.state.chunks.map((item,index)=>{
        return (
          <Sound wordChunk = {this.state.chunks[index]} soundChunk = {this.state.phones[index]}/>
        )
      })}

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
