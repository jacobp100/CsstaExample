import React from 'react';
import {View, Button, Animated} from 'react-native';
import styled from 'cssta/native.macro';

const PickerRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const DynamicContainer = styled(View)`
  --color: black;

  &[@color='red'] {
    --color: #e74c3c;
  }
  &[@color='green'] {
    --color: #2ecc71;
  }
  &[@color='blue'] {
    --color: #3498db;
  }
`;

const DynamicPicker = ({children}) => {
  const [color, setColor] = React.useState('red');
  return (
    <DynamicContainer color={color}>
      {children}
      <PickerRow>
        <Button
          title="Default"
          color="black"
          onPress={() => {
            setColor(null);
          }}
        />
        <Button
          title="Red"
          color="black"
          onPress={() => {
            setColor('red');
          }}
        />
        <Button
          title="Green"
          color="black"
          onPress={() => {
            setColor('green');
          }}
        />
        <Button
          title="Blue"
          color="black"
          onPress={() => {
            setColor('blue');
          }}
        />
      </PickerRow>
    </DynamicContainer>
  );
};

const DynamicText = styled(Animated.Text)`
  color: var(--color);
  font-size: 20px;

  /* You can animate CSS variables */
  transition: color 0.1s;
`;

export default () => (
  <DynamicPicker>
    <DynamicText>Text dynamically styled with CSS variables!</DynamicText>
  </DynamicPicker>
);

export const code = `--primary-color: red;
          color: var(--primary-color);`;
