import React, { useEffect } from 'react';
import { View } from 'react-native';
import MainNavigation from './src/mainNavigation/Route';

const App = () => {

  return (
    <View style={{ height: "100%" }}>
      <MainNavigation />
    </View>
  );
}
export default App;