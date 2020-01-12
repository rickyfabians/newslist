import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  backgroundImage: {
    width: '100%',
    height: width,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderRadius: 10
  },
  boxBottom: {
    backgroundColor: 'white',
    padding: 10,
    opacity: 0.9
  }
})

export default styles
