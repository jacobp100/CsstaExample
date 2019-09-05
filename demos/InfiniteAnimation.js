import {Animated} from 'react-native';
import styled from 'cssta/native.macro';

export default styled(Animated.View)`
  align-self: center;
  background-color: #e74c3c;
  height: 50px;
  width: 50px;
  animation: 3s spin linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const code = 'animation: 3s spin linear infinite;';
