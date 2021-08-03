import React from 'react';
import {TouchableOpacity, View, Text, ActivityIndicator} from 'react-native';
import colors from '../../../assets/themes/colors';
import styles from './styles';

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  onPress,
  ...props
}) => {
  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (secondary) {
      return colors.secondary;
    }
    if (danger) {
      return colors.danger;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.wrapper, {backgroundColor: getBgColor()}]}
      onPress={onPress}
      disabled={disabled}>
      <View style={styles.loaderSection}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}

        {title && (
          <Text
            style={{
              color: disabled ? 'black' : 'white',
              fontSize: 17,
              paddingLeft: loading ? 5 : 0,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
