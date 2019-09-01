import React from 'react';
import {TouchableWithoutFeedback, Animated} from 'react-native';
import styled from 'cssta/native.macro';

const ButtonContainer = styled(Animated.View)`
  --primary: #e67e22;
  --foreground: var(--primary);
  --background: white;

  margin: 10px 50px;
  padding: 10px 15px;
  border-radius: 1000px;
  border: 1px solid var(--primary);
  background-color: var(--background);
  transition: background-color 0.2s;

  &[@active] {
    --foreground: white;
    --background: var(--primary);
  }
`;

const ButtonText = styled(Animated.Text)`
  color: var(--foreground);
  text-align: center;
  transition: color 0.3s;
`;

const TouchableCustom = ({children}) => {
  const [active, setActive] = React.useState(false);

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setActive(true)}
      onPressOut={() => setActive(false)}>
      {children(active)}
    </TouchableWithoutFeedback>
  );
};

const Button = ({children}) => (
  <TouchableCustom>
    {active => (
      <ButtonContainer active={active}>
        <ButtonText>{children}</ButtonText>
      </ButtonContainer>
    )}
  </TouchableCustom>
);

export default () => <Button>Hello world!</Button>;
