import {Radio, Stack} from 'native-base';
import React, {FC} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import CheckboxIcom from '../../assets/icons/checkboxIcon';

type GenterType = {
  name: string;
};
const RadioField: FC<GenterType> = ({name}) => {
  const {control} = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={''}
      render={({field: {onChange, value}}) => {
        return (
          <Radio.Group
            name="radio"
            accessibilityLabel="select a gender"
            value={value}
            onChange={current => {
              onChange(current);
            }}>
            <Stack
              direction={{
                base: 'row',
              }}
              space={'41px'}>
              <Radio
                width={'18px'}
                height={'18px'}
                value="female"
                borderRadius={'4px'}
                borderColor={'#FFC996'}
                my={1}
                icon={<CheckboxIcom />}>
                Женский
              </Radio>
              <Radio
                width={'18px'}
                height={'18px'}
                borderRadius={'4px'}
                borderColor={'#FFC996'}
                value="male"
                my={1}
                icon={<CheckboxIcom />}>
                Мужской
              </Radio>
            </Stack>
          </Radio.Group>
        );
      }}
      name={name}
    />
  );
};

export default RadioField;
