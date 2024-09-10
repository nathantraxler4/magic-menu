import {StyleSheet} from 'react-native'
import colors from './colors'

export const buttonStyles: StyleSheet.NamedStyles<{button: object, text: object}> = {
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 5,
        backgroundColor: colors.accent,
    },
    text: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
    },
}
