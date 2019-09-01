import React from 'react';
import {Animated, View, Button} from 'react-native';
import styled from 'cssta/native.macro';

const Center = styled(View)`
  align-items: center;
`;

const Row = styled(View)`
  flex-direction: row;
`;

const Palette = styled(Animated.View)`
  background-color: #e74c3c;
  height: 50px;
  width: 50px;
  margin-bottom: 20px;
  animation: 0.5s none var(--animation-name);

  &[@animation='fade-in'] {
    --animation-name: fade-in;
  }

  &[@animation='slide-in'] {
    --animation-name: slide-in;
  }

  &[@animation='zoom-in'] {
    --animation-name: zoom-in;
  }

  @keyframes fade-in {
    start {
      opacity: 0;
    }
    end {
      opacity: 1;
    }
  }

  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateX(-75px);
    }

    66% {
      transform: translateX(15px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes zoom-in {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    66% {
      transform: scale(1.25);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export default () => {
  const [animation, setAnimation] = React.useState('fade-in');
  return (
    <Center>
      <Palette animation={animation} />
      <Row>
        <Button
          title="Fade In"
          color="black"
          onPress={() => setAnimation('fade-in')}
        />
        <Button
          title="Slide In"
          color="black"
          onPress={() => setAnimation('slide-in')}
        />
        <Button
          title="Zoom In"
          color="black"
          onPress={() => setAnimation('zoom-in')}
        />
      </Row>
    </Center>
  );
};

export const code = '@keyframes { ... }';
