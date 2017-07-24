import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

const { width } = Dimensions.get('window');

export default class TopProduct extends React.Component {
  render() {
    const { container, titleContainer, title,
      body, productContainer, productImage,
      productName, productPrice
    } = styles;
    const { openProductDetail } = this.props;
    // onPress={() => { this.props.navigation.navigate('ProductDetail_Display') }}
    return (
      <View style={container}>
        <View style={titleContainer}>
          <Text style={title}> TOP PRODUCT </Text>
        </View>
        <View style={body}>
          <TouchableOpacity onPress={openProductDetail} style={productContainer}>
            <Image source={sp1} style={productImage} />
            <Text style={productName}> PRODUCT NAME </Text>
            <Text style={productPrice}> 400$ </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openProductDetail} style={productContainer}>
            <Image source={sp2} style={productImage} />
            <Text style={productName}> PRODUCT NAME </Text>
            <Text style={productPrice}> 250$ </Text>
          </TouchableOpacity>
          <View style={{ height: 10, width }} />
          <TouchableOpacity onPress={openProductDetail} style={productContainer}>
            <Image source={sp3} style={productImage} />
            <Text style={productName}> PRODUCT NAME </Text>
            <Text style={productPrice}> 300$ </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openProductDetail} style={productContainer}>
            <Image source={sp4} style={productImage} />
            <Text style={productName}> PRODUCT NAME </Text>
            <Text style={productPrice}> 200$ </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const productWidth = (width - 60) / 2;
const productImageHeight = (productWidth / 361) * 452;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    margin: 10,
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#2E272B',
    shadowOpacity: 0.2,
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
  },
  title: {
    paddingLeft: 10,
    color: '#AFAEAF',
    fontSize: 20
  },
  body: {
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  productContainer: {
    width: productWidth,
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#2E272B',
    shadowOpacity: 0.2,
  },
  productImage: {
    width: productWidth,
    height: productImageHeight
  },
  productName: {
    marginVertical: 5,
    paddingLeft: 10,
    fontFamily: 'Cochin',
    color: '#D3D3DF',
    fontWeight: '500'
  },
  productPrice: {
    marginBottom: 5,
    paddingLeft: 10,
    fontFamily: 'Cochin',
    color: 'red',
  }
});
