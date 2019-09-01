import React from 'react';
import {Animated, View, Button} from 'react-native';
import styled from 'cssta/native.macro';

const Palette = styled(Animated.View)`
  background-color: #e74c3c;
  height: 20px;
  margin-bottom: 20px;
  transform: scaleX(1) rotate(0deg);
  transition: background-color 0.5s linear, transform 0.75s linear;

  &[@active] {
    background-color: #1abc9c;
    transform: scaleX(0.5) rotate(6deg);
  }
`;

export default () => {
  const [active, setActive] = React.useState(false);

  return (
    <View>
      <Palette active={active} />
      <Button
        title="Toggle Style"
        color="black"
        onPress={() => setActive(!active)}
      />
    </View>
  );
};

export const code = `transition:
    background-color 0.5s linear,
    transform 0.75s linear;`;
