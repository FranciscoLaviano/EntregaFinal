import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Componentes/Header'
import Carro from '../Pantallas/Carro'

const Stack = createNativeStackNavigator()

const CartStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Carro'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title="Carrito"/>
                }
            }
        }
    >
        <Stack.Screen name="Carro" component={Carro} />
    </Stack.Navigator>
  )
}

export default CartStack
