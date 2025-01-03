import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';
import colors from '@/app/styles/colors';
import { selectableStyles } from '@/app/styles/selectable';

export const RecipeSelectBox = (props: {
    name: string;
    selected: Set<string>;
    toggleSelected: (name: string) => void;
}) => {
    const isThisSelected = props.selected.has(props.name);

    const styles = StyleSheet.create({
        selectable: {
            ...selectableStyles.selectableContainer,
            borderColor: isThisSelected ? colors.accent : colors.lighterAccent
        },
        selectableText: {
            ...selectableStyles.textCenter,
            backgroundColor: isThisSelected ? colors.accent : colors.background
        }
    });

    const onPressHandler = () => {
        props.toggleSelected(props.name);
    };

    return (
        <TouchableHighlight onPress={onPressHandler} style={styles.selectable}>
            <Text style={styles.selectableText}>{props.name}</Text>
        </TouchableHighlight>
    );
};
