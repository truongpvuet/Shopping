import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import backList from '../../../../media/appIcon/backList.png';
import sp1 from '../../../../media/temp/sp1.jpeg';

export default class ListProduct extends React.Component {
  constructor(props) {
    super(props);
    this.gobackHome = this.gobackHome.bind(this);
    this.gotoDetail = this.gotoDetail.bind(this);
  }
  gotoDetail() {
    const { navigate } = this.props.navigation;
    navigate('ProductDetail_Display');
  }
  gobackHome() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  render() {
    const {
      constainer, header, wrapper, backStyle, titleStyle,
      productContainer, productInfo, productImage, lastRowInfo,
      txtName, txtPrice, txtMaterial, txtColor, txtShowDetail
    } = styles;
    return (
      <View style={constainer}>
        <ScrollView style={wrapper}>

          <View style={header}>
            <TouchableOpacity onPress={() => this.gobackHome()}>
              <Image source={backList} style={backStyle} />
            </TouchableOpacity>
            <Text style={titleStyle}> Party Address </Text>
            <View style={{ width: 30 }} />
          </View>

          <View style={productContainer}>
            <Image source={sp1} style={productImage} />
            <View style={productInfo}>
              <Text style={txtName}> Lace Sleeve Si </Text>
              <Text style={txtPrice}> 117$ </Text>
              <Text style={txtMaterial}> Material silk </Text>
              <View style={lastRowInfo}>
                <Text style={txtColor}> Colo RoyalBlue </Text>
                <View style={{ backgroundColor: 'cyan', width: 16, height: 16, borderRadius: 8 }} />
                <TouchableOpacity>
                  <Text style={txtShowDetail}> SHOW DETAILS </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={productContainer}>
            <Image source={sp1} style={productImage} />
            <View style={productInfo}>
              <Text style={txtName}> Lace Sleeve Si </Text>
              <Text style={txtPrice}> 117$ </Text>
              <Text style={txtMaterial}> Material silk </Text>
              <View style={lastRowInfo}>
                <Text style={txtColor}> Colo RoyalBlue </Text>
                <View style={{ backgroundColor: 'cyan', width: 16, height: 16, borderRadius: 8 }} />
                <TouchableOpacity>
                  <Text style={txtShowDetail}> SHOW DETAILS </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={productContainer}>
            <Image source={sp1} style={productImage} />
            <View style={productInfo}>
              <Text style={txtName}> Lace Sleeve Si </Text>
              <Text style={txtPrice}> 117$ </Text>
              <Text style={txtMaterial}> Material silk </Text>
              <View style={lastRowInfo}>
                <Text style={txtColor}> Colo RoyalBlue </Text>
                <View style={{ backgroundColor: 'cyan', width: 16, height: 16, borderRadius: 8 }} />
                <TouchableOpacity>
                  <Text style={txtShowDetail}> SHOW DETAILS </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={productContainer}>
            <Image source={sp1} style={productImage} />
            <View style={productInfo}>
              <Text style={txtName}> Lace Sleeve Si </Text>
              <Text style={txtPrice}> 117$ </Text>
              <Text style={txtMaterial}> Material silk </Text>
              <View style={lastRowInfo}>
                <Text style={txtColor}> Colo RoyalBlue </Text>
                <View style={{ backgroundColor: 'cyan', width: 16, height: 16, borderRadius: 8 }} />
                <TouchableOpacity>
                  <Text style={txtShowDetail}> SHOW DETAILS </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#DBDBDB',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },
  wrapper: {
    backgroundColor: '#FFF',
    margin: 10,
    paddingHorizontal: 10
  },
  backStyle: {
    width: 30,
    height: 30
  },
  productContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderTopColor: '#F0F0F0',
    borderBottomColor: '#FFF',
    borderLeftColor: '#FFF',
    borderRightColor: '#FFF',
    borderWidth: 1
  },
  titleStyle: {
    color: '#B10D65',
    fontSize: 20
  },
  productImage: {
    width: 90,
    height: (90 * 452) / 361
  },
  productInfo: {
    justifyContent: 'space-between',
    marginLeft: 10,
    flex: 1
  },
  lastRowInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  txtName: {
    color: '#BCBCBC',
    fontSize: 20,
    fontWeight: '100'
  },
  txtPrice: {
    color: '#B10D65'
  },
  txtMaterial: {
  },
  txtColor: {
  },
  txtShowDetail: {
    color: '#B10D65',
    fontSize: 11
  }
});
