import React from 'react';
import {View, Button} from 'react-native';
import styled from 'cssta/native.macro';
import VariablesContext from 'cssta/runtime/VariablesContext';

const Palette = styled(View)`
  background: var(--active-color);
  height: 20px;
  margin-bottom: 20px;
`;

const getRandomColor = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

export default () => {
  const [activeColor, setActiveColor] = React.useState(getRandomColor);

  return (
    <View>
      <VariablesContext.Provider value={{'active-color': activeColor}}>
        <Palette />
      </VariablesContext.Provider>
      <Button
        title="Pick Random Color"
        color="black"
        onPress={() => setActiveColor(getRandomColor)}
      />
    </View>
  );
};

export const code = `/* React */
<VariablesContext.Provider
    value={{ color: activeColor }}>

/* CSS */
background-color: var(--color);`;
