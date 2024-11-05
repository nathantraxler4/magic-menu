import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import colors from '@/app/styles/colors'
import { AppNonSync } from '@/app/AppNonSync'

export const AppWrapperNonSync = () => {
    // If sync is disabled, setup the app without any sync functionality and return early
    return (
        <SafeAreaView style={styles.screen}>
            <AppNonSync />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background
    }
})
