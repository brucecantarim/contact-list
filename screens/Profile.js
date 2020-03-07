import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image, Text } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import Header from '../components/Header';

const Profile = ({ route }) => {

    const { contact, addContact } = route.params;

  return (
      <Animatable.View animation="slideInUp" easing="ease" style={styles.container}>
        <Header title="CONTACT DETAILS" addContact={addContact} />
        <View style={[styles.container, styles.profile]}>
            <Image source={{ uri: contact.avatar }} style={styles.avatar} />
            <Text h2>{contact.first_name} {contact.last_name}</Text>
        </View>
      </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    marginBottom: 30
  }
});

export default Profile;
