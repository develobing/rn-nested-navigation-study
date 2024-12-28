import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {spacing} from '../../constants/dimensions';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const handleToggleDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggleDrawer}>
        <FontAwesome name="bars" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
});
