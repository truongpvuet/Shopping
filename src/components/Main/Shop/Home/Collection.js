import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import bannerImage from '../../../../media/temp/banner.jpg';

const { width, height } = Dimensions.get('window');

export default class Collection extends React.Component {
  render() {
    const { wrapper, textStyle, imageStyle } = styles;
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, justifyContent: 'center', paddingTop: 2 }}>
          <Text style={textStyle} > SPRING COLLECTION </Text>
        </View>
        <View style={{ flex: 4, justifyContent: 'flex-end' }}>
          <Image source={bannerImage} style={imageStyle} />
        </View>
      </View>
    );
  }
}

const imageWidth = width - 40;
const imageHeight = ((imageWidth) / 933) * 465;
const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.35,
    backgroundColor: '#FFF',
    margin: 10,
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#2E272B',
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0
  },
  textStyle: {
    fontSize: 18,
    color: '#AFAEAF'
  },
  imageStyle: {
    width: imageWidth,
    height: imageHeight
  }
});
