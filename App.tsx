import React, {useState} from 'react';
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
import AddChildButton from './src/components/AddChildButton/AddChildButton';
import CommentField from './src/components/CommentField/CommentField';
import DatePickerModal from './src/components/modals/DatePickerModal/DatePickerModal';
import DatePicker from 'react-native-date-picker';
import MaskInput from 'react-native-mask-input';
import DateFrom from './src/components/DateForm/DateForm';

export interface dataProps {
  gender: string;
  phoneNumber: string;
  address: string;
}

const App = () => {
  const methods = useForm({
    defaultValues: {
      phoneNumber: '',
      address: '',
      comments: '',
      date: new Date(),
    },
  });
  const onPress: SubmitHandler<FieldValues> = e => {
    console.log('form', e);
  };
  const {
    handleSubmit,
    formState: {errors},
    getValues,
  } = methods;

  const date = getValues('date');
  const [open, setOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState('');

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
          <AddChildButton onPress={handleSubmit(onPress)} />
          <CommentField
            name="comments"
            placeholder="В данном поле напишите, что любит ребёнок, его увлечения, режим сна, наличие у ребёнка аллергии и т.д"
          />
          <DateFrom
            value={selectedDate.toString()}
            onPress={() => [setOpen(true), console.log('opened')]}
          />
        </Box>
        <DatePickerModal
          isVisible={open}
          setIsVisible={setOpen}
          name="date"
          onDateSelected={(data: Date) => {
            setSelectedDate(data.toLocaleDateString()), setOpen(false);
          }}
        />
      </FormProvider>
    </NativeBaseProvider>
  );
};

export default App;
