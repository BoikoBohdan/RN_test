import { StyleSheet, Dimensions, Platform } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
const { width, height } = Dimensions.get('window')

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    ...ifIphoneX({
      paddingTop: 55
    }, {
        paddingTop: Platform.OS === 'ios' ? 25 : 0
      })
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  users: {
    marginBottom: 10
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  user_login: {
    fontSize: 12,
    width: width * (1 / 5)
  },
  user_profile: {
    fontSize: 10,
    width: width * (1 / 3)
  },
  user_avatar: {
    width: 100,
    height: 100,
    borderWidth: 1
  },
  paginator: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 20,
    ...ifIphoneX({
      paddingBottom: 55
    }, {
        paddingBottom: 10
      })
  },
  prev: {
    fontSize: 32
  },
  next: {
    fontSize: 32
  },
  loading: {
    position: 'absolute',
    width: width,
    height: height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(53,53,53,0.3)'
  }
});