import { StyleSheet, Text, View,FlatList, Pressable } from 'react-native'
import CarroItem from '../Componentes/CarroItem'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { usePostOrdersMutation } from '../app/services/ShopService'

const Carro = () => {
    const localId = useSelector(state => state.auth.value.localId)
  const cart = useSelector(state => state.cart.value)
  const [triggerPostOrder,{data,isSuccess,isError,error}] = usePostOrdersMutation()

  useEffect(() => {

    if(isSuccess && data) { console.log(data)}
    if(isError) { console.log(error)}

  }, [data,isSuccess,isError,error])

  return (
    <View style={styles.container}>
        <FlatList
            data={cart.items}
            keyExtractor={item => item.id}
            renderItem={({item})=> <CarroItem item={item}/>}
        />
        <View style={styles.confirmContainer}>
            <Pressable onPress={()=> triggerPostOrder({localId, order:cart})}>
                <Text style={styles.text}>Confirmar</Text>
            </Pressable>
            <Text style={styles.text}>Total: $ {cart.total} </Text>
        </View>
    </View>
   
  )
}

export default Carro

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:130
    },
    confirmContainer:{
        backgroundColor:"#FDE6A2",
        padding:25,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    text:{
        color:"black",
        fontFamily:"PlayFair"
    }
})