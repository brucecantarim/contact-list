import React from 'react';
import { Header as HeaderNative, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title, addContact }) => {
    const { navigate } = useNavigation();

    return (
        <HeaderNative 
            leftComponent={(
               <Icon name='contacts' color='#fff' onPress={() => navigate('Home')} />
            )}

            centerComponent={{ text: title, style: { color: '#fff', fontWeight: 'bold' } }}
            
            rightComponent={(
                <Icon name="add" color="#fff" onPress={() => addContact()} />
          )}
        />
    );
};

export default Header;
