// import React, { useEffect, useState } from 'react';
// import { FlatList, Text, View, StyleSheet } from 'react-native';

// export default App = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   console.log(data);

//   useEffect(() => {
//     fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

//   return (

//     <View style={styles.container}>
//       {isLoading ? <Text>Loading...</Text> : 
//       ( <View style={styles.view}>
//           <Text style={styles.text}>{data.title}</Text>
//           <Text style={styles.txt}>Articles:</Text>
//           <FlatList
//             data={data.articles}
//             keyExtractor={({ id }, index) => id}
//             renderItem={({ item }) => (
//               <Text>{item.id + '. ' + item.title}</Text>
//             )}
//           />
//         </View>
//       )}
//     </View>
//   );
// };
// const styles = StyleSheet.create ({
//   container:{
//     flex: 1, 
//     padding: 24
//   },
//   view:{
//     flex: 1, 
//     flexDirection: 'column', 
//     justifyContent:  'space-between'
//   },
//   text:{
//     fontSize: 18, 
//     color: 'green', 
//     textAlign: 'center',
//     padding:20
//   },
//   txt:{
//     fontSize: 14, 
//     color: 'green', 
//     textAlign: 'center', 
//     paddingBottom: 10
//   }
// })

// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, Text, Dimensions } from "react-native";

// const window = Dimensions.get("window");
// const screen = Dimensions.get("screen");

// const App = () => {
//   const [dimensions, setDimensions] = useState({ window, screen });

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener(
//       "change",
//       ({ window, screen }) => {
//         setDimensions({ window, screen });
//       }
//     );
//     return () => subscription?.remove();
//   });

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Window Dimensions</Text>
//       {Object.entries(dimensions.window).map(([key, value]) => (
//         <Text>{key} - {value}</Text>
//       ))}
//       <Text style={styles.header}>Screen Dimensions</Text>
//       {Object.entries(dimensions.screen).map(([key, value]) => (
//         <Text>{key} - {value}</Text>
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   header: {
//     fontSize: 16,
//     marginVertical: 10
//   }
// });

// export default App;


// import React, {Component} from 'react';
// import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';

// export default class App extends Component {
//    constructor(props){
//     super(props)
//     this.state={
//       data : []
//     }
//    }
//   apihandler = () => {
//     const url = "https://jsonplaceholder.typicode.com/photos?_limit=10"
//     fetch(url).then((res) => res.json())
//     .then((resJson) => {
//       console.log("res after api call ==>", resJson)
//       this.setState({ data : resJson})
//     })
//    }

//   render() {
//     const { data } = this.state
//     return (
//       <View style= {styles.container}>
//         {
//           data.map((item ,index) => {
//             return (
//               <View style ={{height : 42, width : 400, justifyContent : 'center' , alignItems :'center'}}>
//               <Text>{item.id}</Text>
//               <Text>{item.title}</Text>
//               </View>
//             )
//           })
//         } 
//         <TouchableOpacity
//         onPress={this.apihandler} 
//         style={styles.button}>
//           <Text style ={{color : 'white', fontSize:15}}>pull data</Text>
//           </TouchableOpacity>
//           </View>
//     )
//   }
// }

// const styles = StyleSheet.create ({
//   container:{
//     flex:1, 
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   button:{
//     height:42,
//     width: 200, 
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius : 42,
//     backgroundColor : 'green'
//   }
// })

import React from "react"
import { View, Text } from "react-native"
import axios from "axios"
class App extends React.Component {
  constructor()
  {
    super()
    this.state={
      data:[]
    }
  }

  componentDidMount()
  {
    this.getapiData()
  }
  async getapiData()
  {
   let resp = await axios.get('https://facebook.github.io/react-native/movies.json')
   console.log(resp.data.movies)
   this.setState({data: resp.data.movies})
  }
  render(){
    return (
      <View style = {{flex:1, margin: 70}}>
        {
          this.state.data.length > 0 ?
          <View>
            {
              this.state.data.map((item) => 
              <Text style={{fontSize : 20}}>{item.title}</Text>
              )
            }
            </View> : <Text>data is loading...</Text>
          }
        </View> 
    )
  }
}
export default App;