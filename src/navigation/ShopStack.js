import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Componentes/Header'
import Home from '../Pantallas/Home'
import ItemListCategories from '../Pantallas/ItemListCategory'
import ItemDetail from '../Pantallas/ItemDetail'

const Stack = createNativeStackNavigator()

const ShopStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title={
                                        route.name === "Home" ? "Categorias" :
                                        route.name === "Category" ? route.params.category :
                                        "Detalle"
                    }               />
                }
            }
        }
    >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Category" component={ItemListCategories} />
        <Stack.Screen name="Product" component={ItemDetail} />
    </Stack.Navigator>
  )
}

export default ShopStack
