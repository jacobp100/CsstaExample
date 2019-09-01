import React from 'react';
import {View, Animated, Button} from 'react-native';
import styled from 'cssta/native.macro';

const Container = styled(View)`
  align-items: center;
`;

const Box = styled(Animated.View)`
  width: 50px;
  height: 50px;
  margin: 10px 0px;
  background-color: #f39c12;
`;

export default () => {
  const [rotation] = React.useState(() => new Animated.Value(0));

  const triggerAnimation = () => {
    Animated.spring(rotation).stop();
    Animated.spring(rotation, {
      toValue: 0,
      velocity: 20,
      tension: -3,
      friction: 2,
    }).start();
  };

  const rotate = rotation.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-30deg', '30deg'],
  });

  return (
    <Container>
      <Box style={{transform: [{rotate}]}} />
      <Button
        title="Trigger animation"
        color="black"
        onPress={triggerAnimation}
      />
    </Container>
  );
};
