import { StyleSheet, Text,Image,useWindowDimensions, Pressable } from 'react-native'
import {  useDispatch } from 'react-redux'
import { setProductSelected } from '../funciones/shop/shopSlice'

const ProductItem = ({item ,navigation,route }) => {

  const {width} = useWindowDimensions()
  const dispatch = useDispatch()
  return (
    <Pressable style={styles.container}  onPress={()=>{
      dispatch( setProductSelected(item.id))
      navigation.navigate("Product",{id:item.id})
      }} >
      <Text style={width > 350 ? styles.text : styles.textMin}>{item.title}</Text>
      <Image
            style={styles.image}
            resizeMode='cover'
            source={{uri:item.thumbnail}}
        />
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
   container:{
        width:"80%",
        height:100,
        backgroundColor:'#ffdd99',
        marginHorizontal:"10%",
        marginVertical:10,
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        gap:30
    },
    text:{
      width:"60%",
      textAlign:"center",
      fontSize:20
    },
    textMin:{
      width:"60%",
      textAlign:"center",
      fontSize:15
    },
    image:{
        minWidth:90,
        height:90,
        width:"30%"
    }
})