import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import LottieView from 'lottie-react-native'
import _ from 'lodash'

// Redux
import NewsActions from '../Redux/NewsRedux'

// Components
import Header from '../Components/Header'
import Card from '../Components/Card'

// Style
import globalStyles from '../Styles/GlobalStyle'

export class Home extends Component {
  componentDidMount () {
    this.props.newsRequest()
  }

  render () {
    const { articles, news, newsRequest, navigation } = this.props
    return (
      <View style={{ padding: 20, flex: 1 }}>
        <Header navigation={navigation} />
        {news.fetching
          ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LottieView source={require('../Assets/loading.json')} autoPlay loopstyle={globalStyles.loadingAnimation} />
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
  articles: _.get(state.news.data, 'articles')
})

const mapDispatchToProps = (dispatch) => ({
  newsRequest: (search) => dispatch(NewsActions.newsRequest(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
