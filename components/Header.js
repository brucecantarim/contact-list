import React from 'react';
import { Header as HeaderNative, Icon } from 'react-native-elements';

const Header = ({ title, addContact }) => {
    return (
        <HeaderNative 
          leftComponent={{ icon: 'contacts', color: '#fff' }}

          centerComponent={{ text: title, style: { color: '#fff', fontWeight: 'bold' } }}
          
          rightComponent={(
            <Icon name="add" color="#fff" onPress={() => addContact()} />
          )}
        />
    );
};

export default Header;
