import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Componentes/Header'
import Ordenes from '../Pantallas/Ordenes'

const Stack = createNativeStackNavigator()

const OrdersStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Orders'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title="Ordenes"/>
                }
            }
        }
    >
        <Stack.Screen name="Ordenes" component={Ordenes} />
    </Stack.Navigator>
  )
}

export default OrdersStack
