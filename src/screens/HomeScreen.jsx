import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { useTheme } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import { DATA } from '../db';

const HomeScreen = ({ route, navigation }) => {

    const { colors } = useTheme();

    const navigateToSettings = () => {
        navigation.navigate('Settings')
    }

    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 16,
            paddingVertical: 32
        }}>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    color: colors.text,
                    fontSize: 32,
                    fontWeight: '800'
                }}>Home</Text>
                <TouchableOpacity onPress={() => navigateToSettings()}>
                    <Ionicons name='settings-sharp' size={24} color={colors.text} />
                </TouchableOpacity>
            </View>

            <View style={{
                marginTop: 16,
                padding: 8,
                backgroundColor: colors.buttonBackground,
                borderRadius: 8,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Ionicons name='search' size={24} color={colors.placeholder} />
                <TextInput placeholder='Search' placeholderTextColor={colors.placeholder}
                    style={{
                        fontSize: 16,
                        fontWeight: '400',
                        color: colors.text,
                        marginLeft: 8
                    }} />
            </View>

            <Animated.View entering={FadeIn.delay(500).duration(500)}>
                <Text style={{
                    color: colors.text,
                    fontSize: 24,
                    fontWeight: '500',
                    marginTop: 16
                }}>Accounts</Text>

                {DATA.accounts.map((item) =>
                    <TouchableOpacity
                        key={item.id}
                        style={{
                            flexDirection: 'row',
                            padding: 8,
                            backgroundColor: colors.card,
                            borderRadius: 8,
                            marginTop: 8
                        }}>
                        <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: item.color }} />
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            marginLeft: 16
                        }}>
                            <Text style={{
                                color: colors.text,
                                fontSize: 16,
                                fontWeight: '500'
                            }}>{item.amount}</Text>
                            <Text style={{
                                color: colors.descriptionText,
                                fontSize: 16,
                                fontWeight: '400'
                            }}>{item.name + ' ' + item.number}</Text>
                        </View>

                        <View style={{
                            alignSelf: 'center',
                            paddingVertical: 4,
                            paddingHorizontal: 8,
                            borderRadius: 8,
                            backgroundColor: colors.buttonBackground
                        }}>
                            <Text style={{
                                color: colors.text,
                                fontSize: 16,
                                fontWeight: '600'
                            }}>View</Text>
                        </View>
                    </TouchableOpacity>)}
            </Animated.View>

            <Animated.View style={{flex:1}} entering={FadeIn.delay(1000).duration(500)}>
                <View style={{
                    marginTop: 16, marginBottom: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                }}>
                    <Text style={{
                        color: colors.text,
                        fontSize: 24,
                        fontWeight: '500'
                    }}>Transactions</Text>
                    <Text style={{
                        color: colors.text,
                        fontSize: 16,
                        fontWeight: '600'
                    }}>See All</Text>
                </View>


                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

                    {DATA.transactions.map((item, index) =>
                        <TouchableOpacity
                            key={item.id}
                            style={{
                                flexDirection: 'row',
                                paddingHorizontal: 8,
                                paddingVertical: 16,
                                backgroundColor: colors.card,
                                borderColor: colors.placeholder,
                                borderTopLeftRadius: index === 0 ? 8 : 0,
                                borderTopRightRadius: index === 0 ? 8 : 0,
                                borderBottomLeftRadius: index === DATA.transactions.length - 1 ? 8 : 0,
                                borderBottomRightRadius: index === DATA.transactions.length - 1 ? 8 : 0,
                                borderBottomWidth: index === DATA.transactions.length - 1 ? 0 : 0.5
                            }}>

                            <View style={{
                                width: 48,
                                height: 48,
                                borderRadius: 24,
                                backgroundColor: item.type === 'INCOME' ? colors.incomeBackground : colors.expenseBackground,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Ionicons name='wallet' size={24} color={
                                    item.type === 'INCOME' ? colors.income : colors.expense
                                } />
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', marginLeft: 16 }}>
                                <Text style={{
                                    color: colors.text,
                                    fontSize: 16,
                                    fontWeight: '500'
                                }}>{item.title}</Text>
                                <Text style={{
                                    color: colors.descriptionText,
                                    fontSize: 16,
                                    fontWeight: '400'
                                }}>{item.date}</Text>
                            </View>

                            <View style={{
                                alignSelf: 'center',
                                paddingVertical: 4,
                                paddingHorizontal: 8,
                                borderRadius: 8,
                                backgroundColor: item.type === 'INCOME' ? colors.incomeBackground : colors.expenseBackground
                            }}>
                                <Text style={{
                                    color: item.type === 'INCOME' ? colors.income : colors.expense,
                                    fontSize: 16,
                                    fontWeight: '600'
                                }}>{item.amount}</Text>
                            </View>


                        </TouchableOpacity>)}

                </ScrollView>
            </Animated.View>

            

        </View>
    )
};

export default HomeScreen;