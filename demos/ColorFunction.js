import React from 'react';
import {View, Text} from 'react-native';
import styled from 'cssta/native.macro';

const HeadingContainer = styled(View)`
  --color: red;
`;

const HeadingText = styled(Text)`
  color: color(var(--color) tint(50%));
`;

const Code = styled(Text)`
  font-family: 'courier';
  background-color: #eee;
  color: black;
`;

export default () => (
  <HeadingContainer>
    <HeadingText>
      Text styled using CSS&rsquo;s <Code>color(...)</Code> function
    </HeadingText>
  </HeadingContainer>
);

export const code = 'color: color(red tint(50%));';
