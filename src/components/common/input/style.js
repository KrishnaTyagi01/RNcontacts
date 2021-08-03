import {StyleSheet, TextInput} from 'react-native';
import colors from '../../../assets/themes/colors';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 5,

    marginTop: 5,
  },
  textInput: {
    flex: 1,
    width: '100%',
  },
  inputContainer: {
    paddingVertical: 12,
  },
  error: {
    color: colors.danger,
    paddingTop: 6,
    // fontSize: 12,
  },
});
