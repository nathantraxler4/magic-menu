import axios from 'axios'
import handleError from '@/app/utils/error'

const axios_instance = axios.create({
    baseURL: 'http://127.0.0.1:5000/api',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
})

// export const fetchDinnerMenu = async () => {
//     try {
//         const response = await axios_instance.get('/data')
//         console.log(response.data) // Log or use the data as needed
//         return response.data // Return the data for further processing
//     } catch (error) {
//         handleError(error)
//     }
// }

export const generateCompletion = async (selectedRecipes) => {
    try {
        const response = await axios_instance.post('/menu/generate', {
            recipes: selectedRecipes
        })

        return response.data
    } catch (error) {
        handleError(error)
    }
}
