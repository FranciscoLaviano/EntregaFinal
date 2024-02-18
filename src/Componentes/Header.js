import { Pressable, StyleSheet, Text, View} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {  deleteAllSession } from '../database'
import { useDispatch, useSelector } from 'react-redux'


const Header = ({title = "Producto"}) => {
  const dispatch = useDispatch()
  const localId = useSelector(state => state.auth.value.localId)
  const onLogout = ()=> {
      deleteAllSession()
      dispatch(clearUser)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
       {localId && 
        <Pressable style={styles.logoutIcon}>
         <MaterialCommunityIcons name='Logout' size={30} color="red" />
        </Pressable>
       } 

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ccff33',
        width:"100%",
        height:80,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:20,
        fontFamily:"Josefin"
    },

    logoutIcon:{
           possition: "absolute",
           right: 7

    }
})
