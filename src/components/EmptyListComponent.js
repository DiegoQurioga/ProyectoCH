import { View, Text, StyleSheet} from 'react-native'

const EmptyListComponent = ({message}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"black",
    height:"100%"
  },
  errorMessage: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color:"white"
  },
})

export default EmptyListComponent