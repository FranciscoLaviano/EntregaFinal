import { StyleSheet, Text, View } from 'react-native'
import {Feather} from "@expo/vector-icons"


const OrderItem = ({order}) => {
    const total = order.items
        .reduce((acc,product)=> acc + (product.precio * product.quantity),0)

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
            <Text style={styles.text1}>{new Date(order.createdAt).toLocaleString()}</Text>
            <Text style={styles.text2}>Total: $ {total}</Text>
      </View>
      <Feather name="search" size={25} color="black"/>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#c6ff1a',
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
        fontWeight:"bold",
        fontFamily:"Josefin"
    },
    text2:{
        fontSize:17,
        fontFamily:"Josefin"
    }
})