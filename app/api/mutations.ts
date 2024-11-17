import { gql } from '@/app/__generated__/gql';

export const ADD_RECIPES = gql(`
    mutation AddRecipes($recipes: [RecipeInput!]!) {
        addRecipes(recipes: $recipes) {
            name
            ingredients
            directions
        }
    }
`);
