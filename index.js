import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Setting a timer']); // Firebase issue

import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
