import { StyleSheet } from 'react-native'
import Categories from '../Componentes/Categorias'

const Home = ({navigation,route}) => {
  
  return (
        <>
            <Categories navigation={navigation} route={route} />
        </>
  )
}

export default Home

const styles = StyleSheet.create({
  

})