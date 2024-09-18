import { StyleSheet, Platform } from 'react-native'
import colors from './colors'

export const selectableStyles: StyleSheet.NamedStyles<{
    selectableContainer: object
    textCenter: object
}> = {
    selectableContainer: {
        flex: 1,
        margin: 5,
        borderRadius: 5,
        borderWidth: 5
    },
    textCenter: {
        color: colors.white,
        backgroundColor: colors.textBackground,
        fontSize: 20,
        textAlign: 'center',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: Platform.OS === 'ios' ? 15 : 0
    }
}