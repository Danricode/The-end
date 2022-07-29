import React from 'react';
import {Alert, Text, TouchableOpacity, Button, View} from 'react-native';
import TouchID from 'react-native-touch-id';
const optionalConfigObject = {
  title: 'Authentication Required', // Android
  color: 'ffffff', // Android,
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
};

class App extends React.Component {
  touchIdAuth = () => {
    TouchID.isSupported()
      .then(biometryType => {
        // Success code
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
        } else {
          console.log('TouchID is supported.');
          TouchID.authenticate('Authenticate', optionalConfigObject)
            .then(success => {
              Alert.alert('Authenticated Successfully');
            })
            .catch(error => {
              Alert.alert('Authentication Failed', error.toString());
            });
        }
      })
      .catch(error => {
        // Failure code
        console.log(error);
      });
  };

  render() {
    return (
      <View style={{justifyContent: 'center', flex: 1, alignSelf: 'center'}}>
        <TouchableOpacity style={{flexWrap: 'wrap'}}>
          <Button title="Authenticate" onPress={this.touchIdAuth.bind(this)} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default App;
