import React, { Component } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import styles from './styles'

export const Folowers = props => {
  let { folowers, visible, onClose } = props
  return (
    <Dialog
      visible={visible}
      dialogAnimation={new SlideAnimation({
        slideFrom: 'bottom',
      })}
      onTouchOutside={() => {
        onClose();
      }}
      height={400}
      width={300}
    >
      <DialogContent style={styles.dialog_content}>
        <Text style={styles.folower_title}>Folowers</Text>
        <View style={styles.folowers_wrapper}>
          <FlatList
            style={styles.folowers}
            data={folowers}
            keyExtractor={this._keyExtractor}
            renderItem={({ item }) => (
              <View style={styles.folower}>
                <Text style={styles.folower_login}>{item.login}</Text>
                <Image
                  style={styles.folower_avatar}
                  source={{ uri: item.avatar_url }}
                />
              </View>
            )}
          />
        </View>
      </DialogContent>
    </Dialog>
  )
}