import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {iconSize, spacing} from '../../constants/dimensions';
import {colors} from '../../constants/colors';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const CustomDrawerContent = (props: any) => {
  const navigation = useNavigation();

  // StackNavigator의 상태 찾기
  const stackNavigatorState = props.state.routes.find(
    (route: any) => route.name === 'StackNavigator',
  )?.state;

  // 현재 Stack에서 활성화된 화면
  const currentStackScreen =
    stackNavigatorState?.routes[stackNavigatorState.index].name;

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  return (
    <>
      <DrawerContentScrollView {...props} style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={closeDrawer}>
            <AntDesign
              name="close"
              size={iconSize.md}
              color={colors.secondary}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Octicons name="sun" size={iconSize.md} color={colors.secondary} />
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <View style={styles.drawerItemContainer}>
          <DrawerItem
            label={'Profile'}
            labelStyle={[
              styles.label,
              {
                color:
                  currentStackScreen === 'Profile'
                    ? colors.primary
                    : colors.secondary,
              },
            ]}
            icon={() => (
              <FontAwesome
                name="user"
                size={iconSize.md}
                color={
                  currentStackScreen === 'Profile'
                    ? colors.primary
                    : colors.secondary
                }
              />
            )}
            onPress={() => {
              props.navigation.navigate('StackNavigator', {
                screen: 'Profile',
              });
            }}
          />

          <DrawerItem
            label={'Liked Songs'}
            labelStyle={[
              styles.label,
              {
                color:
                  currentStackScreen === 'LikedSongs'
                    ? colors.primary
                    : colors.secondary,
              },
            ]}
            icon={() => (
              <FontAwesome
                name="heart"
                size={iconSize.md}
                color={
                  currentStackScreen === 'LikedSongs'
                    ? colors.primary
                    : colors.secondary
                }
              />
            )}
            onPress={() => {
              props.navigation.navigate('StackNavigator', {
                screen: 'LikedSongs',
              });
            }}
          />

          <DrawerItem
            label={'Contact Us'}
            labelStyle={[
              styles.label,
              {
                color:
                  currentStackScreen === 'ContactUs'
                    ? colors.primary
                    : colors.secondary,
              },
            ]}
            icon={() => (
              <FontAwesome
                name="envelope"
                size={iconSize.md}
                color={
                  currentStackScreen === 'ContactUs'
                    ? colors.primary
                    : colors.secondary
                }
              />
            )}
            onPress={() => {
              props.navigation.navigate('StackNavigator', {
                screen: 'ContactUs',
              });
            }}
          />

          <DrawerItem
            label={'FAQ'}
            labelStyle={[
              styles.label,
              {
                color:
                  currentStackScreen === 'FAQ'
                    ? colors.primary
                    : colors.secondary,
              },
            ]}
            icon={() => (
              <FontAwesome
                name="question-circle"
                size={iconSize.md}
                color={
                  currentStackScreen === 'FAQ'
                    ? colors.primary
                    : colors.secondary
                }
              />
            )}
            onPress={() => {
              props.navigation.navigate('StackNavigator', {
                screen: 'FAQ',
              });
            }}
          />
        </View>
      </DrawerContentScrollView>

      <View style={styles.footerContainer}>
        <DrawerItem
          label={'Logout'}
          labelStyle={[
            styles.label,
            {
              color: colors.secondary,
            },
          ]}
          icon={() => (
            <FontAwesome
              name="sign-out"
              size={iconSize.md}
              color={colors.secondary}
            />
          )}
          onPress={() => {
            console.log('clicked logout !!!');
          }}
        />
      </View>
    </>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginVertical: spacing.md,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  drawerItemContainer: {
    marginVertical: spacing.md,
  },
  footerContainer: {
    alignItems: 'flex-end',
    padding: spacing.md,
  },
});
