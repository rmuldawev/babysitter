import {Button, Text} from 'native-base';
import React, {FC} from 'react';
import {colors} from '../../themes/styleComponents';

interface CustomButtonProps {
  name: string;
  onPress: () => void;
}

const CustomButton: FC<CustomButtonProps> = ({name, onPress}) => {
  return (
    <Button
      width={'358px'}
      height={'60px'}
      borderRadius={'12px'}
      backgroundColor={colors.orange}
      onPress={onPress}>
      <Text color={colors.base.white} fontSize={'24px'} fontWeight={'400'}>
        {name}
      </Text>
    </Button>
  );
};

export default CustomButton;
