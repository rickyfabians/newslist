import React, { Component } from 'react'
import { View, Text } from 'react-native-animatable'
import { FlatList, TextInput } from 'react-native'
import _ from 'lodash'
import LottieView from 'lottie-react-native'
import { connect } from 'react-redux'

// Redux
import NewsActions from '../Redux/NewsRedux'

// Component
import Card from '../Components/Card'

// style
import globalStyles from '../Styles/GlobalStyle'

export class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      keyword: ''
    }
  }

  render () {
    const { newsRequest, news, articles, navigation } = this.props
    return (
      <View style={{ padding: 10, flex: 1 }}>
        <View useNativeDriver animation='slideInUp' easing='ease-out-expo' style={{ backgroundColor: '#E5E9F2', borderRadius: 20, padding: 4 }} >
          <TextInput
            style={{ height: 40 }}
            onChangeText={keyword => this.setState({ keyword })}
            autoFocus
            placeholder={'Cari Teknologi..'}
            value={this.state.keyword}
            onSubmitEditing={() => newsRequest(this.state.keyword)}
          />
        </View>
        {news.fetching
          ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LottieView source={require('../Assets/loading.json')} autoPlay loop style={globalStyles.loadingAnimation} />
          </View>
          : (articles && articles.length === 0)
            ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <LottieView source={require('../Assets/notFound.json')} autoPlay loop style={globalStyles.notFoundAnimation} />
              <Text>Berita tidak ditemukan</Text>
            </View>
            : <FlatList
              data={articles}
              onRefresh={() => newsRequest()}
              refreshing={false}
              style={{ backgroundColor: 'white', flex: 1 }}
              keyExtractor={(item, index) => `articles flatlist ${index}`}
              renderItem={({ item }) => <Card item={item} navigation={navigation} />}
            />
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  news: state.news,
  articles: _.get(state.news.searchResult, 'articles')
})

const mapDispatchToProps = (dispatch) => ({
  newsRequest: (search) => dispatch(NewsActions.newsRequest(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
