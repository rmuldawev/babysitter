import {FC} from 'react';
import {Controller, FieldError, useFormContext} from 'react-hook-form';
import PhoneConfirmation from './PhoneConfirmation';
import {Text} from 'native-base';

interface PhoneConfirmationWithFormProps {
  name: string;
  error: FieldError | undefined;
}

const PhoneConfirmationWithForm: FC<PhoneConfirmationWithFormProps> = ({
  name,
  error,
}) => {
  const {control} = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, value}}) => {
          return (
            <PhoneConfirmation
              value={value}
              onChangeText={onChange}
              error={error}
            />
          );
        }}
      />
      {error && <Text>{error.message}</Text>}
    </>
  );
};

export default PhoneConfirmationWithForm;
