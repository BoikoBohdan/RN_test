import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  Button,
  Linking,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { getUsers, getFolowers } from './services'
import { Folowers } from './components'
import './styles.js'

export default class App extends Component {

  state = {
    users: [],
    limit_profile: 20,
    since: 0,
    perPage: 10,
    visible: false,
    folowers: [],
    loading: true,
    prevId: 0
  }

  componentWillMount() {
    this.updateUsers(0, this.state.perPage)
  }

  updateUsers = (since, perPage) => {
    getUsers(since, perPage).then(res => {
      this.setState({ users: res, loading: false })
    })
  }

  handlerClosePopup = () => {
    this.setState({ visible: false })
  }

  handlerSelectUser = (user_name) => {
    getFolowers(user_name).then(res => {
      this.setState({ folowers: res, visible: true })
    })
  }

  handlerNext = () => {
    let users = this.state.users
    let since = users[users.length - 1].id
    let prevId = users[0].id
    this.setState({ since, prevId }, () => this.updateUsers(since, this.state.perPage))
  }
  handlerPrev = () => {
    let since = this.state.prevId - 1
    this.setState({ since }, () => this.updateUsers(since, this.state.perPage))
  }

  render() {
    let { users, since, limit_profile, visible, folowers, loading } = this.state
    return (
      <View style={styles.container}>
        <Text>User list from GIT API:</Text>
        <FlatList
          style={styles.users}
          data={users}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.handlerSelectUser(item.login)} style={styles.user}>
              <Text style={styles.user_login}>{item.login}</Text>
              <Button
                title={
                  ((item.html_url).length > limit_profile) ?
                    (((item.html_url).substring(0, limit_profile - 3)) + '...') :
                    item.html_url
                }
                onPress={() => { Linking.openURL(item.html_url) }} />
              <Image
                style={styles.user_avatar}
                source={{ uri: item.avatar_url }}
              />
            </TouchableOpacity>
          )}
        />
        <View style={styles.paginator}>
          {since !== 0 &&
            <TouchableOpacity onPress={this.handlerPrev}>
              <Text style={styles.prev}>{`<`}</Text>
            </TouchableOpacity>
          }
          <TouchableOpacity onPress={this.handlerNext}>
            <Text style={styles.next}>{`>`}</Text>
          </TouchableOpacity>
        </View>
        <Folowers
          visible={visible}
          onClose={this.handlerClosePopup}
          folowers={folowers}
        />
        {loading &&
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>}
      </View>
    );
  }
}
