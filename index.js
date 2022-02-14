/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FireworkSDK from "react-native-firework-sdk";

AppRegistry.registerComponent(appName, () => App);

/*
  Optional: set listener for SDK init
*/
FireworkSDK.getInstance().onSDKInit = (event) => {
  console.log('onSDKInit', event);
};

/*
  It is recommended to call the init method when the application starts,
  for example, in the index.tsx. Init method has two optional params:
  userId and adConfig.
*/
FireworkSDK.getInstance().init();
