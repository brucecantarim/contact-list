import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Header, ListItem } from 'react-native-elements';

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

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
      <View style={styles.container}>
        <Header 
          leftComponent={{ icon: 'contacts', color: '#fff' }}
          centerComponent={{ text: 'CONTACT LIST', style: { color: '#fff', fontWeight: 'bold' } }}
          rightComponent={{ icon: 'add', color: '#fff' }}
        />
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
            />
          ))
        }
      </View>
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
