import React from 'react';
import {Box, Button, NativeBaseProvider} from 'native-base';
import TextInput from './src/components/theme/form/TextInput/TextInput';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import Gender from './src/components/theme/form/gender/Gender';
import CustomButton from './src/components/Button/CustomButton';
import PhoneConfirmation from './src/components/theme/form/PhoneConfirmation/PhoneConfirmation';

export interface dataProps {
  gender: string;
  phoneNumber: string;
  address: string;
}

const App = () => {
  const methods = useForm();
  const onPress: SubmitHandler<FieldValues> = e => {
    console.log('form', e);
  };
  const {handleSubmit} = methods;
  return (
    <NativeBaseProvider>
      <FormProvider {...methods}>
        <Box
          padding={'17px'}
          flex={1}
          marginTop={10}
          backgroundColor={'#9CCB86'}>
          <TextInput
            nameInput="Ваш номер телефона:"
            name="phoneNumber"
            type="phoneNumber"
            state={false}
          />
          <TextInput
            nameInput="Адрес:"
            name="address"
            type="text"
            placeholder="Адрес:"
            state={true}
          />
          <Gender />
          <CustomButton onPress={handleSubmit(onPress)} name="Press" />
          <PhoneConfirmation />
        </Box>
      </FormProvider>
    </NativeBaseProvider>
  );
};

export default App;
