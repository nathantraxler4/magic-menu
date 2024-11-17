import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '@/app/styles/colors';

const MenuError = ({ message }: { message: string }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.textBackground,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: colors.error,
        fontSize: 28
    }
});

export default MenuError;
