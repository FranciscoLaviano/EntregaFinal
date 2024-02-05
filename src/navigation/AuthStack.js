import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Componentes/Header'
import SignUp from '../Pantallas/SignUp'
import Login from '../Pantallas/Login'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='SignUp'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title="Bienvenido"/>
                }
            }
        }
    >
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

export default AuthStack
