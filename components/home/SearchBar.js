import { View, Text ,TextInput,StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function SearchBarTab({cityHandler}) {
    const onChange = () => {
        if(searchText!==undefined){
            cityHandler(searchText);
        }
    }
    const [searchText, setSearchText] = useState();
  return (
      
    <View style={{flexDirection:"row", alignItems:"center", marginTop:10,backgroundColor:"#eee", borderRadius:20,}}>
            <Ionicons name="location-sharp" size={30} />
             <TextInput onChangeText={setSearchText} style={styles.input} placeholder="Search"/>
            <TouchableOpacity 
                onPress={onChange}
            >
                <Ionicons name="search" size={20} style={{marginRight:10}} />
            </TouchableOpacity>       
    </View>
  )
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop:10 ,
    marginBottom:10,
    marginRight:5,
    borderWidth: 1,
    padding: 10,
    width:320,
    backgroundColor:"#fff",
    borderRadius:30,
  },
});