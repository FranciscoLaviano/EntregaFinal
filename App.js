import { StyleSheet,StatusBar } from 'react-native'
import { useFonts } from "expo-font"
import { fonts } from './src/Global/fonts'
import { store } from './src/app/Store'
import { Provider } from 'react-redux'
import MainNavigator from './src/navigation/MainNavigator'
//import LocationSelector from './src/Pantallas/LocationSelector'



const  App = () => {

  const [fontLoaded] = useFonts(fonts)
  if(!fontLoaded) return null
  
  return (
    <>
      
      <StatusBar backgroundColor={'#ffff99'}/>
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    
    </>
  )
}

export default App


