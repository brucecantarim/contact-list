import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import Header from './components/Header';

const App = () => {

  const [ contactList, setContactList ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect( async () => {
    try {
      const res = await fetch('https://reqres.in/api/users?per_page=20');
      const json = await res.json();
      const data = json.data;

      setContactList(data);
      setIsLoading(false);
    } catch (err) {
      throw new Error(err);
    }
  }, []);

  const addContact = () => {
    alert(`Adicionar novo usuário.`);
    // TODO: Implementar funcionalidade
  };

  const handlePress = contact => {
    alert(`Contato ${contact.first_name} foi clicado!`);
    // TODO: Implementar funcionalidade
  };

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
      <Animatable.View animation="slideInUp" easing="ease" style={styles.container}>
        <Header title="CONTACT LIST" addContact={addContact} />
        {
          contactList.map((contact, index) => (
            <ListItem
              key={index}
              leftAvatar={{ source: { uri: contact.avatar } }}
              title={`${contact.first_name} ${contact.last_name}`}
              titleStyle={{ marginLeft: 10 }}
              subtitle={contact.email}
              subtitleStyle={{ marginLeft: 10 }}
              bottomDivider
              chevron
              onPress={() => handlePress(contact)}
            />
          ))
        }
      </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  loading: {
    backgroundColor: '#fff',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  }
});

export default App;
