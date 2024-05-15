
import {
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    StyleSheet,
  } from 'react-native';
  import React from 'react';
  
  const App: React.FC = () => {
    return (
      <ScrollView style={styles.container}>
        <ScrollView style={styles.innerContainer} nestedScrollEnabled={true}>
          <View style={styles.box}>
            <Text style={[styles.text, styles.textCenter]}>
              Hello, React Native!
            </Text>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/aa/b1/3f/aab13ff8c9cae7d409809e09a05702be.jpg',
              }}
              style={[styles.image, styles.marginBottom]}
            />
            <TextInput
              placeholder="Type here..."
              placeholderTextColor="gray" 
              style={[styles.input, styles.marginBottom]}
            />
  
            <Image
              source={{
                uri: 'https://th.bing.com/th/id/OIP.xLPENWa5QjvShmjztU0HyAHaQC?rs=1&pid=ImgDetMain',
              }}
              style={[styles.image, styles.marginBottom]}
            />
            <TextInput
              placeholder="Type here..."
              placeholderTextColor="gray" 
              style={[styles.input, styles.marginBottom]}
            />
  
            <Image
              source={{
                uri: 'https://www.tifluidsystems.com/wp-content/uploads/2023/03/ti-fluid-system-efficient-electrification.jpg',
              }}
              style={[styles.image, styles.marginBottom]}
            />
            <TextInput
              placeholder="Type here..."
              placeholderTextColor="gray" 
              style={[styles.input, styles.marginBottom]}
            />
  
            {/* Add more Image and TextInput components as needed */}
          </View>
        </ScrollView>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: 'lightgray',
    },
    innerContainer: {
      marginBottom: 20,
    },
    box: {
      marginBottom: 20,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'blue',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'rgba(255, 0, 0, 1)',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },
    textCenter: {
      textAlign: 'center',
    },
    image: {
      width: 200,
      height: 250,
      resizeMode: 'cover',
    },
    input: {
      height: 40,
      borderColor: 'blue',
      borderWidth: 1,
      color: 'white',
      paddingLeft: 8,
    },
    marginBottom: {
      marginBottom: 15,
    },
  });
  
  export default App;  