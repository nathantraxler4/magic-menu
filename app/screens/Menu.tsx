import React, { /* useEffect, useState */ } from 'react'
import { StyleSheet, Text, View, ImageBackground, FlatList, /* ActivityIndicator,*/ Button } from 'react-native'
// import fetchDinnerMenu from '../services'
import { useRealm, useQuery } from '@realm/react'
import Recipe from '../models/Recipe'
import * as recipeRepo from '../repositories/recipe'
import PropTypes from 'prop-types'
import recipesJson from '../assets/json/recipes.json'

const Menu = ({ backgroundImage }) => {
    // const [dinnerMenu, setDinnerMenu] = useState(null)
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)
    const realm = useRealm()

    const recipes = useQuery(Recipe)
    console.log(recipes)

    const handleAddRecipe = () => {
        if (recipes.length < 3) {
            const record = { userId: 'Nathan', ...recipesJson[recipes.length]}
            console.log(record)
            recipeRepo.insertRecipes(realm, [record])
        } else {
            recipeRepo.deleteRecipes(realm, recipes)
        }
        
    }

    // const fetchData = async () => {
    //   try {
    //     const data = await fetchDinnerMenu()
    //     setDinnerMenu(data)
    //     setLoading(false);
    //   } catch (error) {
    //     console.log(error)
    //     setError(error.message);
    //     setLoading(false);
    //   }
    // }


    // useEffect(() => {
    //   fetchData()
    // }, [])

    // if (loading) {
    //   console.log("LOADING...")
    //   return <ActivityIndicator size="large" />;
    // }

    return (
        <ImageBackground
            source={backgroundImage}
            style={styles.background}
            resizeMode="cover"
        >
            <Button
                onPress={() => handleAddRecipe()}
                title='Add Recipe'	      
            />
            <View style={styles.container}>
                <FlatList
                    data={recipes}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <View style={styles.menuItem}>
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.dish}>{item.ingredients[0]}</Text>
                            <Text style={styles.description}>{item.directions[0]}</Text>
                        </View>
                    )}
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    menuItem: {
        marginBottom: 15,
    },
    dish: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    description: {
        fontSize: 16,
        color: 'white',
    },
})

Menu.propTypes = {
    backgroundImage: PropTypes.number.isRequired,
}

export default Menu