import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
import PhotoScreen from './PhotoScreen';
export default function HomeScreen() {
  const {user, logout, deleteUser} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <PhotoScreen />
      <FormButton buttonTitle="Logout" onPress={() => logout()} />
      <Text style={styles.introtext}>Logged in as {user.email}</Text>
      <Text style={styles.delText} onPress={() => deleteUser()}>
        Delete account
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  introtext: {
    fontSize: 15,
    color: 'grey',
    fontWeight: 'bold',
  },
  delText: {
    color: 'red',
  },
  icon: {
    width: 50,
    height: 50,
  },
});
