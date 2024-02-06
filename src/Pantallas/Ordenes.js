import { FlatList, StyleSheet, Text, View } from 'react-native'
import OrderItem from '../Componentes/OrderItem'
import { useGetOrdersQuery } from '../app/services/ShopService'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../Componentes/LoadingSpinner'

const Ordenes = () => {
  
  const {data,isSuccess,isError,error,isLoading} = useGetOrdersQuery(localId)
  const [orders, setOrders] = useState([])
  const [info,setInfo] = useState(true)
  const [errorMessage,setErrorMessage] = useState("")
  const [loading , setLoading] = useState(true)
  const localId = useSelector(state => state.auth.value.localId)

  useEffect(()=>{
    if(isSuccess && data) {  const orders = Object.keys(data).map(key => data[key])
    
      setOrders(orders)
    }
    if(isSuccess && data.length === 0)    setInfo(false)
    },[data,isSuccess,isError,error])
   
    
    
    if(isError ) setErrorMessage(error.error)
  

  if(!info) return <View><Text>no hay ordenes</Text></View>
  if(errorMessage) return  <View><Text>Error al cargar</Text></View>
  if(loading) return  <LoadingSpinner/>

  

  return (
    <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({item}) => <OrderItem order={item}/>}
    />
    
  )
  }

export default Ordenes

const styles = StyleSheet.create({
    
})