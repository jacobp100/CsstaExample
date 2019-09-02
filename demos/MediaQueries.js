import React from 'react';
import {View, Text} from 'react-native';
import styled from 'cssta/native.macro';

const ExampleRow = styled(View)`
  flex-direction: row;
  margin: 10px;
  --border: white;
  --active: blue;
`;

const ExampleHeader = styled(Text)`
  font-weight: 700;
  color: #888;
`;

const ExampleText = styled(Text)`
  text-align: center;
`;

const Base = styled(View)`
  flex: 1;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid var(--border);
  border-radius: 1000px;
`;

/* You'd write this in production, but does show-case what you can do */
const Orientation = styled(Base)`
  @media (orientation: landscape) {
    &[@direction='landscape'] {
      --border: var(--active);
    }
  }

  @media (orientation: portrait) {
    &[@direction='portrait'] {
      --border: var(--active);
    }
  }
`;

const MinWidth = styled(Base)`
  @media (min-width: 100px) {
    &[@size='100'] {
      --border: var(--active);
    }
  }

  @media (min-width: 500px) {
    &[@size='500'] {
      --border: var(--active);
    }
  }

  @media (min-width: 1000px) {
    &[@size='1000'] {
      --border: var(--active);
    }
  }
`;

const MaxWidth = styled(Base)`
  @media (max-width: 100px) {
    &[@size='100'] {
      --border: var(--active);
    }
  }

  @media (max-width: 500px) {
    &[@size='500'] {
      --border: var(--active);
    }
  }

  @media (max-width: 1000px) {
    &[@size='1000'] {
      --border: var(--active);
    }
  }
`;

export default () => (
  <View>
    <ExampleHeader>Orientation</ExampleHeader>
    <ExampleRow>
      <Orientation direction="landscape">
        <ExampleText>Landscape</ExampleText>
      </Orientation>
      <Orientation direction="portrait">
        <ExampleText>Portrait</ExampleText>
      </Orientation>
    </ExampleRow>
    <ExampleHeader>Min Width</ExampleHeader>
    <ExampleRow>
      {['100', '500', '1000'].map(size => (
        <MinWidth key={size} size={size}>
          <ExampleText>{size}</ExampleText>
        </MinWidth>
      ))}
    </ExampleRow>
    <ExampleHeader>Max Width</ExampleHeader>
    <ExampleRow>
      {['100', '500', '1000'].map(size => (
        <MaxWidth key={size} size={size}>
          <ExampleText>{size}</ExampleText>
        </MaxWidth>
      ))}
    </ExampleRow>
  </View>
);

export const code = '@media (...) { ... }';
