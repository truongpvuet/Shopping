import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ListView,
  TouchableOpacity
} from 'react-native';
// import Swiper from 'react-native-swiper';
// import bannerImage from '../../../../media/temp/banner.jpg';

// import littleIcon from '../../../../media/temp/little.jpg';
// import maxiIcon from '../../../../media/temp/maxi.jpg';
// import partyIcon from '../../../../media/temp/party.jpg';

const { width } = Dimensions.get('window');

const myData = [
  {
    name: 'Maxi Dress',
    image: require('../../../../media/temp/maxi.jpg')
  },
  {
    name: 'Little Dress',
    image: require('../../../../media/temp/little.jpg')
  },
  {
    name: 'Party Dress',
    image: require('../../../../media/temp/party.jpg')
  }
];

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(myData),
    };
    this.showList = this.showList.bind(this);
  }

  showList(props) {
    const { openListProduct } = this.props;
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={openListProduct}>
            <Image
              source={props.image}
              style={{ width: 280, height: 140, justifyContent: 'center', alignItems: 'center' }}
            >
              <Text style={{ fontFamily: 'monospace' }}> {props.name} </Text>
            </Image>
        </TouchableOpacity>

      </View>
    );
  }

  render() {
    const { wrapper, textStyle, /*imageStyle, catTitle*/ } = styles;
    return (
      <View style={wrapper}>
        <View style={{ height: 50, justifyContent: 'center' }}>
          <Text style={textStyle} > LIST OF CATEGORIES </Text>
        </View>
        <View style={{ justifyContent: 'flex-end' }}>
          <ListView
            dataSource={this.state.dataSource}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderRow={this.showList}
          />
        </View>
      </View>
    );
  }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth / 800) * 400;
const styles = StyleSheet.create({
  wrapper: {
    height: 200,
    width: width - 20,
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

// <Image source={littleIcon} style={imageStyle}>
//   <Text style={catTitle}> Maxi Dress </Text>
// </Image>
// <Image source={maxiIcon} style={imageStyle}>
//   <Text style={catTitle}> Little Dress </Text>
// </Image>
// <Image source={partyIcon} style={imageStyle}>
//   <Text style={catTitle}> Party Dress </Text>
// </Image>
