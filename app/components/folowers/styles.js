import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
export default styles = StyleSheet.create({
  folower_title: {
    paddingTop: 10
  },
  folower_wrapepr: {
    paddingBottom: 30
  },
  dialog_content: {
    paddingBottom: 50
  },
  folower: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  folower_login: {
    fontSize: 12,
  },
  folower_avatar: {
    width: 50,
    height: 50,
  },
});