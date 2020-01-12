import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Feather'
import moment from 'moment'
import 'moment/locale/id'

// Styling
import styles from './Styles/HeaderStyle'

const Header = props => {
  return <View useNativeDriver animation='fadeInDown' easing='ease-out-expo' style={styles.container}>
    <Text useNativeDriver animation='fadeIn' easing='ease-in-back' style={styles.dateText}>{moment().format('dddd, D MMM YYYY')}</Text>
    <TouchableOpacity onPress={() => props.navigation.navigate('Search')} >
      <View useNativeDriver animation='fadeIn' easing='ease-in-back' style={styles.searchBox}>
        <Icon name={'search'} style={{ paddingRight: 4 }} />
        <Text>Teknologi, Politik, Olahraga</Text>
      </View>
    </TouchableOpacity>
  </View>
}

export default Header
