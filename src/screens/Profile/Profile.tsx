import {Box, Container, Text} from 'native-base';
import {FormProvider, useForm} from 'react-hook-form';
import TextInput from '../../components/theme/form/TextInput/TextInput';
import DateFrom from '../../components/DateForm/DateForm';
import DatePickerModal from '../../components/modals/DatePickerModal/DatePickerModal';
import {useState} from 'react';
import Gender from '../../components/theme/form/gender/Gender';

const Profile = () => {
  const [isVsisible, setIsVisible] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>('');

  const methods = useForm({
    // resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  return (
    <>
      <FormProvider {...methods}>
        <Box
          flex={1}
          safeAreaTop
          pl={'18px'}
          pr={'18px'}
          //   justifyContent={'space-between'}
        >
          <TextInput
            name="lastName"
            type="text"
            nameInput=""
            placeholder="Фамилия"
          />
          <TextInput name="name" type="text" nameInput="" placeholder="Имя" />
          <DateFrom value={selectedDate} onPress={() => setIsVisible(true)} />
          <Gender />
          <TextInput
            name="phoneNumber"
            type="phoneNumber"
            nameInput=""
            defaultValue={'707575660'}
          />
        </Box>
        <DatePickerModal
          setIsVisible={setIsVisible}
          name="date"
          isVisible={isVsisible}
          onDateSelected={(data: Date) => {
            setSelectedDate(data.toLocaleDateString()), setIsVisible(false);
          }}
        />
      </FormProvider>
    </>
  );
};

export default Profile;
