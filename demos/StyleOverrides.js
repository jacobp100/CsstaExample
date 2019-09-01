import React from 'react';
import {View, Slider} from 'react-native';
// import Slider from '@react-native-community/slider';
import styled from 'cssta/native.macro';

const Palette = styled(View)`
  height: 20px;
  margin-bottom: 20px;
`;

export default () => {
  const [r, setR] = React.useState(243);
  const [g, setG] = React.useState(156);
  const [b, setB] = React.useState(18);

  const activeColor = `rgb(${r}, ${g}, ${b})`;

  return (
    <View>
      <Palette style={{backgroundColor: activeColor}} />
      <Slider
        value={r}
        maximumValue={255}
        minimumTrackTintColor="red"
        onValueChange={setR}
      />
      <Slider
        value={g}
        maximumValue={255}
        minimumTrackTintColor="green"
        onValueChange={setG}
      />
      <Slider
        value={b}
        maximumValue={255}
        minimumTrackTintColor="blue"
        onValueChange={setB}
      />
    </View>
  );
};

export const code = "<Component style={{ backgroundColor: 'green' }} />";
