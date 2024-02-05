import {useState ,useEffect} from 'react'
import { View, Text ,StyleSheet, Pressable} from 'react-native'
import InputForm from '../Componentes/InputForm'
import SubmitButton from '../Componentes/SubmitButton'
import { useLoginMutation } from '../app/services/Auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../funciones/auth/AuthSlice'





const Login = ({navigation}) => {
  const dispatch = useDispatch()
  const [triggerLogin,{data,isError,isSuccess,error,isLoading}] = useLoginMutation()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  useEffect(()=>{
    if(isSuccess) dispatch(setUser(data))
    if(isError) console.log(error) 
  },[data,isError,isSuccess])


  const onSubmit = () => {
    triggerLogin({email,password})
  }
  return (
    <View style={styles.main}>
      <View style={styles.container}>
          <Text style={styles.title} >Login para comprar</Text>
          <InputForm
            label="Email"
            value={email}
            onChangeText={(t) => setEmail(t)}
            isSecure = {false}
            error=""
          />
          <InputForm
            label="Password"
            value={password}
            onChangeText={(t) => setPassword(t)}
            isSecure={true}
            error=""
          />
          <SubmitButton onPress={onSubmit}  title="Anotarme"/>
          <Text style={styles.sub}>¿Aún no tienes cuenta?</Text>
          <Pressable onPress={()=> navigation.navigate("SignUp")} >
              <Text style={styles.subLink}>Registrarse</Text>
          </Pressable>
      </View>
    </View>
  )
}


export default Login


const styles = StyleSheet.create({
    main:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      
    },
    container:{
      width:"90%",
      backgroundColor:'#ffffb3',
      gap:15,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      paddingVertical:20
    },
    title:{
      fontSize:22,
      fontFamily:"Lobster"
    },
    sub:{
      fontSize:14,
      fontFamily:"Josefin",
      
    },
    subLink:{
      fontSize:14,
      fontFamily:"Josefin",
      color:"blue"
     
    },
    
})
