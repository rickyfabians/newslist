import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')
const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: 'flex-end',
    paddingBottom: 5
  },
  searchBox: {
    backgroundColor: '#E5E9F2',
    borderRadius: 20,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 4
  }
})

export default styles
