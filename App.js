import { StyleSheet,StatusBar } from 'react-native'
import { useFonts } from "expo-font"
import { fonts } from './src/Global/fonts'
import { store } from './src/app/Store'
import { Provider } from 'react-redux'
import MainNavigator from './src/navigation/MainNavigator'
//import LocationSelector from './src/Pantallas/LocationSelector'
import { insertSession} from './src/database'




insertSession.then(()=> console.log("Base de datos inicializada")) 
    .catch(err => console.log(err))

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


