import {Button, HStack, Text} from 'native-base';
import React, {FC} from 'react';
import {colors} from '../../themes/styleComponents';
import Plus from '../../assets/icons/plus';

interface AddChildButtonProps {
  onPress: () => void;
}

const AddChildButton: FC<AddChildButtonProps> = ({onPress}) => {
  return (
    <>
      <Button
        onPress={onPress}
        w={'227px'}
        h={'46px'}
        alignSelf={'center'}
        bg={colors.orange}
        borderRadius={'20px'}>
        <HStack>
          <Plus />
          <Text color={colors.base.white} ml={'7px'}>
            Добавить ребенка
          </Text>
        </HStack>
      </Button>
    </>
  );
};

export default AddChildButton;
