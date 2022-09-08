
import { StyleSheet, Text, View,Button,Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>We'll start here</Text>
      <Button
        title="Click here"
        onPress={() => Alert.alert('Welcome to Happy Time')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
