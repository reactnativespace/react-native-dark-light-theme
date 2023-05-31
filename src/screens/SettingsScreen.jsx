import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useTheme } from '@react-navigation/native';

import { AppContext } from '../context/AppContext';

import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = () => {

    const { colors } = useTheme();
    const { isDarkTheme, setIsDarkTheme } = React.useContext(AppContext)

    return (
        <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 32 }}>

            <Text style={{
                color: colors.text,
                fontSize: 32,
                fontWeight: '800'
            }}>Settings</Text>

            <TouchableOpacity style={{
                flexDirection: 'row',
                paddingHorizontal: 8,
                paddingVertical: 16,
                backgroundColor: colors.card,
                borderRadius: 8,
                marginTop: 8,
                alignItems: 'center'
            }}
                onPress={() => setIsDarkTheme(current => !current)}>
                <Ionicons name={isDarkTheme ? 'checkbox' : 'square-outline'} size={24} color={colors.text} />
                <Text style={{
                    color: colors.text,
                    marginLeft: 8
                }}>{isDarkTheme ? 'Switch to Light' : 'Switch to Dark'}</Text>
            </TouchableOpacity>

        </View>
    )
};

export default SettingsScreen;