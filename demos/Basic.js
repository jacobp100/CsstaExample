import React from 'react';
import {View, Text} from 'react-native';
import styled from 'cssta/native.macro';

const HeadingContainer = styled(View)`
  margin: 10px 50px;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #e67e22;
`;

const HeadingText = styled(Text)`
  color: #e67e22;
`;

export default () => (
  <HeadingContainer>
    <HeadingText>Hello World!</HeadingText>
  </HeadingContainer>
);

export const code = `       margin: 10px 50px;
      padding: 10px 15px;
border-radius: 5px;
       border: 1px solid #e67e22;`;
