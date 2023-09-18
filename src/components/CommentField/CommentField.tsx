import {Box, Input} from 'native-base';
import React, {FC} from 'react';
import {colors} from '../../themes/styleComponents';
import {Controller, useFormContext} from 'react-hook-form';

interface CommentFieldProps {
  name: string;
  placeholder: string;
}

const CommentField: FC<CommentFieldProps> = ({name, placeholder}) => {
  const {control} = useFormContext();

  return (
    <Controller
      name={name}
      defaultValue={''}
      control={control}
      render={({field: {onChange, value}}) => {
        return (
          <>
            <Input
              value={value}
              onChangeText={onChange}
              w={'360px'}
              h={'112px'}
              _focus={{borderColor: colors.gray}}
              placeholder={placeholder}
              placeholderTextColor={colors.gray}
              style={{
                backgroundColor: colors.base.white,
                borderColor: colors.gray,
              }}
              multiline={true}
              borderRadius={'12px'}
            />
          </>
        );
      }}
    />
  );
};

export default CommentField;
