import {StyleSheet, TextInput} from 'react-native';
import colors from '../../assets/themes/colors';
// import colors from '../../../assets/themes/colors';

export default StyleSheet.create({
  logoImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    // paddingTop: 0,
    fontWeight: '500',
  },

  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: '500',
  },

  form: {
    paddingTop: 10,
  },

  createSection: {
    flexDirection: 'row',
  },
  linkBtn: {
    paddingLeft: 17,
    color: colors.primary,
    fontSize: 16,
  },

  infoText: {
    fontSize: 17,
  },
});
