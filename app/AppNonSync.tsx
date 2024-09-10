import React from 'react'
import Menu from './screens/Menu'

import localImage from './assets/images/dinnerMenuBright.webp'
import { RecipeBook } from './screens/RecipeBook'

export const AppNonSync = () => {
    return (
        <RecipeBook />
        // <Menu backgroundImage={localImage}/>
    )
}
