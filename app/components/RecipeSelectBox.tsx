import React, { useState, useCallback } from 'react'
import { Text, StyleSheet, TouchableHighlight } from 'react-native'
import colors from '../styles/colors'
import { selectableStyles } from '../styles/selectable'

export const RecipeSelectBox = (props: { dishName: string }) => {
    const [isSelected, setIsSelected] = useState(false)

    const toggleSelect = useCallback(() => {
        setIsSelected(!isSelected)
    }, [isSelected])

    const styles = StyleSheet.create({
        selectable: {
            ...selectableStyles.selectableContainer,
            borderColor: isSelected ? colors.accent : colors.lighterAccent
        },
        selectableText: {
            ...selectableStyles.textCenter
        }
    })

    return (
        <TouchableHighlight onPress={toggleSelect} style={styles.selectable}>
            <Text style={styles.selectableText}>{props.dishName}</Text>
        </TouchableHighlight>
    )
}
