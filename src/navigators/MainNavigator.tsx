import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {colors} from '../themes/styleComponents';
import InitialNumber from '../screens/Login/StartScreen';
import ConfirmNumber from '../screens/Login/ConfirmNumber';
import Profile from '../screens/Profile/Profile';

const MainStack = createNativeStackNavigator();
const BabySitterStack = createNativeStackNavigator();
const ParrentStack = createNativeStackNavigator();

export type MainStackParamList = {
  StartScreen: undefined;
  ConfirmNumber: undefined;
  Profile: undefined;
};
export type AppStackScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'StartScreen'
>;

const MainNavigator = () => {
  const [role, setRole] = useState<number>(0);
  const isAuth = false;
  return (
    <>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: colors.base.green},
        }}>
        <MainStack.Screen component={InitialNumber} name="StartScreen" />
        <MainStack.Screen component={ConfirmNumber} name="ConfirmNumber" />
        <MainStack.Screen component={Profile} name="Profile" />
      </MainStack.Navigator>
    </>
  );
};

export default MainNavigator;
