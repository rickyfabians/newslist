import React from 'react'
import { ImageBackground, TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native-animatable'
import moment from 'moment'
import 'moment/locale/id'

// Styling
import styles from './Styles/CardStyle'
import globalStyles from '../Styles/GlobalStyle'

const Card = props => {
  const { item, navigation } = props
  return <TouchableOpacity onPress={() => navigation.navigate('NewsDetail', { item })} >
    <View useNativeDriver animation='fadeInUpBig' easing='ease-out-expo' style={styles.container}>
      <ImageBackground source={{ uri: item.urlToImage }}
        imageStyle={{ borderRadius: 10 }}
        style={[globalStyles.boxShadow, styles.backgroundImage]}>
        <View style={styles.boxBottom}>
          <Text style={globalStyles.fontSizeMedium}>{moment(item.publishedAt).startOf('hour').fromNow()}</Text>
          <Text style={globalStyles.title}>{item.title}</Text>
        </View>
      </ImageBackground>
    </View>
  </TouchableOpacity>
}

export default Card
