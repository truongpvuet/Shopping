import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';
// import bannerImage from '../../../../media/temp/banner.jpg';

import littleIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import partyIcon from '../../../../media/temp/party.jpg';

const { width, height } = Dimensions.get('window');

export default class Category extends React.Component {
  render() {
    const { wrapper, textStyle, imageStyle, catTitle } = styles;
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, justifyContent: 'center', paddingTop: 2 }}>
          <Text style={textStyle} > LIST OF CATEGORIES </Text>
        </View>
        <View style={{ flex: 4, justifyContent: 'flex-end' }}>
          <Swiper showPagination width={imageWidth} height={imageHeight}>
            <Image source={littleIcon} style={imageStyle}>
              <Text style={catTitle}> Maxi Dress </Text>
            </Image>
            <Image source={maxiIcon} style={imageStyle}>
              <Text style={catTitle}> Little Dress </Text>
            </Image>
            <Image source={partyIcon} style={imageStyle}>
              <Text style={catTitle}> Party Dress </Text>
            </Image>
          </Swiper>
        </View>
      </View>
    );
  }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;
const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.35,
    backgroundColor: '#FFF',
    margin: 10,
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#2E272B',
    justifyContent: 'space-between',
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
    height: imageHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  catTitle: {
    fontSize: 16,
    color: '#9A9A9A',
    fontFamily: 'Cochin'
  }
});
