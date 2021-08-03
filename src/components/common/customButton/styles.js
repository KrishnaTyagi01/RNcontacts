import {StyleSheet, TextInput} from 'react-native';
import colors from '../../../assets/themes/colors';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    borderRadius: 4,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
  },
  loaderSection: {
    flexDirection: 'row',
  },
  error: {
    color: colors.danger,
    paddingTop: 6,
    // fontSize: 12,
  },
});
