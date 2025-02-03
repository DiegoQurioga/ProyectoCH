import {StyleSheet, View } from 'react-native'
import Categories from '../components/Categories'
import { colors } from '../globals/colors'

const Home = () => {

  return (
    <View style={styles.container}>
      <Categories/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.background,
    height:"100%"
  }
})