import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../Containers/Home'
import Search from '../Containers/Search'
import NewsDetail from '../Containers/NewsDetail'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  Home: { screen: Home },
  NewsDetail: { screen: NewsDetail },
  Search: { screen: Search }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Home'
})

export default createAppContainer(PrimaryNav)
