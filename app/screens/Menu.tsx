import React, { Suspense /* useEffect, useState */ } from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import { MenuProps } from '@/app/types/props';
import colors from '@/app/styles/colors';
import { /*GET_MENUS*/ GENERATE_MENU } from '../api/queries';
import { useSuspenseQuery } from '@apollo/client';
import MenuLoading from '@/app/screens/loading/Menu';
import MenuError from '@/app/screens/error/Menu';

const IMAGE_URI =
    '/Users/nathantraxler/Projects/magic-menu/app/assets/images/dinnerMenuBright.webp';

const MenuContent = ({ route /* navigation*/ }: MenuProps) => {
    const { error, data } = useSuspenseQuery(GENERATE_MENU, {
        variables: {
            recipes: route.params?.selectedRecipes ?? []
        },
        errorPolicy: 'all'
    });

    if (error || !data) return <MenuError message={error?.message ?? 'An error occured!'} />;

    const menu = data.generateMenu;

    return (
        <ImageBackground source={{ uri: IMAGE_URI }} style={styles.background} resizeMode="cover">
            <View style={styles.listContainer}>
                <FlatList
                    data={menu.courses}
                    contentContainerStyle={styles.container}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View style={styles.menuItem}>
                            <Text style={styles.courseName}>{item.name}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    )}
                />
            </View>
        </ImageBackground>
    );
};

const Menu = ({ route, navigation }: MenuProps) => {
    return (
        <Suspense fallback={<MenuLoading />}>
            <MenuContent route={route} navigation={navigation} />
        </Suspense>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center'
    },
    listContainer: {
        flex: 0.5
    },
    container: {
        flex: 1,
        justifyContent: 'space-around'
    },
    menuItem: {
        backgroundColor: colors.textBackdrop,
        padding: 15
    },
    courseName: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.white
    },
    description: {
        fontSize: 16,
        color: colors.white
    }
});

export default Menu;
