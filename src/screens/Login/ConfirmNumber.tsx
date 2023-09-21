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
import PhoneConfirmation from '../../components/theme/form/PhoneConfirmation/PhoneConfirmation';
import BackHeader from '../../components/BackHeader/BackHeader';
import * as yup from 'yup';
import PhoneConfirmationWithForm from '../../components/theme/form/PhoneConfirmation/PhoneConfirmationWithForm';
import {yupResolver} from '@hookform/resolvers/yup';

const validationSchema = yup.object({
  phoneConfirm: yup
    .string()
    .min(4, 'Код подтверждения должен содержать 4 цифры')
    .required(),
});

const ConfirmNumber = () => {
  const pb = useKeyboardAvoidingBottomPadding();
  const navigation = useNavigation<AppStackScreenProps['navigation']>();

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
  const onPress: SubmitHandler<FieldValues> = e => {
    console.log('form', e);
  };
  const {
    handleSubmit,
    formState: {errors, isValid},
    getValues,
  } = methods;

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
            <Box>
              <BackHeader onPress={() => navigation.goBack()} />

              <PhoneConfirmationWithForm
                name="phoneConfirm"
                error={errors.phoneConfirm}
              />
            </Box>

            <CustomButton
              name="Продолжить"
              isDisabled={!isValid}
              onPress={() => navigation.navigate('Profile')}
            />
          </VStack>
        </FormProvider>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ConfirmNumber;
