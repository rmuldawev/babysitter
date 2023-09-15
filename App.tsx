import React from 'react';
import {Box, Container, NativeBaseProvider, Text, VStack} from 'native-base';
import TextInput from './src/components/theme/form/TextInput/TextInput';
import {FormProvider, useForm, useFormContext} from 'react-hook-form';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const App = () => {
  // const {bottom, top} = useSafeAreaInsets();
  // const paddingStyle = {paddingBottom: bottom, paddingTop: top};
  const methods = useForm();
  return (
    <NativeBaseProvider>
      <FormProvider {...methods}>
        <Box
          padding={'17px'}
          flex={1}
          marginTop={10}
          backgroundColor={'#9CCB86'}>
          <TextInput name="Номер телефона:" />
        </Box>
      </FormProvider>
    </NativeBaseProvider>
  );
};

export default App;
