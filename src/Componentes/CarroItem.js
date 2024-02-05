import { StyleSheet, Text, View } from 'react-native'
import {Entypo} from "@expo/vector-icons"


const CarroItem = ({item}) => {
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text1}>{item.title}</Text>
            <Text  style={styles.text2}>{item.brand}</Text>
            <Text  style={styles.text2}>Cantidad: {item.quantity} Precio $ {item.precio}</Text>
        </View>
        <Entypo name='trash' size={25} color="black"/>
    </View>

  )
}

export default CarroItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e2fc83',
        margin:10,
        padding:10,
        height:100,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:10,
        borderWidth:2
    },
    textContainer:{
        width:"70",
        gap:5
    },
    text1:{
        fontSize:19,
        color:'#B3C4BC',
        fontFamily:"Josefin"
    },
    text2:{
        fontSize:17,
        color:'#B3C4BC',
        fontFamily:"Josefin"
    }

})