import { StyleSheet, View,Image,Text } from 'react-native'
import SubmitButton from '../components/SubmitButton'
import { useNavigation } from '@react-navigation/native'
import { useGetUserQuery } from '../services/user'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'
import { colors } from '../globals/colors';

const MyProfile = () => {

    const navigation = useNavigation()
    const localId = useSelector(state => state.user.localId)
    const {data:user,isError,error,isLoading} = useGetUserQuery({localId})

    if(isLoading) return <LoadingSpinner/>
    if(isError) return <View><Text>{error.message}</Text></View>
    
  return (
    <View style={styles.container}>
      <Image
        source={user?.image ? {uri:user.image}:require("../../assets/profile_default.png")}
        resizeMode='cover'
        style={styles.image}
      />
      <SubmitButton title="Cambiar imagen de perfil" onPress={()=>navigation.navigate("ImageSelector")}/>
      <SubmitButton title="Cambiar localizacion" onPress={()=>{navigation.navigate("LocationSelector")}}/>
      <View>
        <Text style={styles.dir}>{user?.address}</Text>
      </View>
    </View>
  )
}
export default MyProfile

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        gap:20,
        backgroundColor:"black",
        height:"100%"
    },
    image:{
        marginTop:70,
        width:150,
        height:150
    },
    dir:{
      color:colors.lightGray
    }
})