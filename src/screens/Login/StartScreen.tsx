import {Box, Button, Container, Pressable, Text, VStack} from 'native-base';
import React from 'react';
import {colors} from '../../themes/styleComponents';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import TextInput from '../../components/theme/form/TextInput/TextInput';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import CustomButton from '../../components/Button/CustomButton';
import {useKeyboardAvoidingBottomPadding} from '../../hooks/hooks';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigators/MainNavigator';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const validationSchema = yup.object({
  phoneNumber: yup
    .string()
    .min(14, 'Мобильный номер должен содержать 10 цифр')
    .required(),
});

const InitialNumber = () => {
  const pb = useKeyboardAvoidingBottomPadding();
  const navigation = useNavigation<AppStackScreenProps['navigation']>();

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      phoneNumber: '',
    },
    mode: 'onChange',
  });
  const {
    handleSubmit,
    formState: {isValid, errors},
    getValues,
  } = methods;
  console.log('error', errors.phoneNumber);
  console.log('isValid', isValid);

  const onPress = () => {
    navigation.navigate('ConfirmNumber');
    console.log('isValid', isValid);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <FormProvider {...methods}>
          <VStack
            safeAreaTop
            pr={'18px'}
            pl={'18px'}
            justifyContent={'space-between'}
            flex={1}
            paddingBottom={pb}>
            <TextInput
              error={errors.phoneNumber}
              nameInput="Ваш номер телефона:"
              name="phoneNumber"
              type="phoneNumber"
            />
            <CustomButton
              isDisabled={!isValid}
              name="Продолжить"
              onPress={onPress}
            />
          </VStack>
        </FormProvider>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InitialNumber;
