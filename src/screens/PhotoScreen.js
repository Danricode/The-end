import React, {useState} from 'react';
import {Text, Button, StyleSheet, View, ScrollView} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ImageLabeling from '@react-native-ml-kit/image-labeling';
import FormButton from '../components/FormButton';

const App = () => {
  const [labels, setLabels] = useState([]);

  const handlePress = async () => {
    setLabels([]);
    const image = await ImagePicker.openPicker({mediaType: 'photo'});
    console.log(image.path);
    const result = await ImageLabeling.label(image.path);
    console.log(result);
    setLabels(result);
  };

  return (
    <View style={styles.container}>
      <FormButton buttonTitle="Choose an Image" onPress={handlePress} />
      {labels.length > 0 && <Text style={styles.heading}>Results:</Text>}
      <ScrollView showsVerticalScrollIndicator={false}>
        {labels.map(label => (
          <View style={styles.label} key={label}>
            <Text style={styles.results}>
              {label.text} - {label.confidence.toFixed(2)}%
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
    color: 'black',
  },
  results: {color: 'white', fontSize: 15},
});

export default App;
