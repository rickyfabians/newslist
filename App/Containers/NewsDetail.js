import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import { View, Image } from 'react-native-animatable'
import { connect } from 'react-redux'

import styles from './Styles/NewsDetailStyles'
import globalStyles from '../Styles/GlobalStyle'

export class NewsDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount () {
    const { navigation } = this.props
    this.setState({ data: navigation.getParam('item', null) })
  }

  render () {
    const { data } = this.state
    return (
      <View>
        {data &&
        <ScrollView>
          <Image useNativeDriver animation='zoomIn' easing='ease-out-expo' source={{ uri: data.urlToImage }} style={styles.image} />
          <View useNativeDriver animation='slideOutUp' easing='ease-out-expo' style={styles.boxBottom}>
            <Text style={globalStyles.title}>{data.title}</Text>
            <Text style={[globalStyles.fontMedium, { marginVertical: 10, fontFamily: 'lucida grande' }]}>{data.description}</Text>
            <Text style={globalStyles.fontMedium}>{data.content}</Text>
          </View>
        </ScrollView>
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail)
