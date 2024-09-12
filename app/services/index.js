import axios from 'axios'
import handleError from '../utils/error'

const fetchDinnerMenu = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:5000/api/data', {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log(response.data) // Log or use the data as needed
        return response.data // Return the data for further processing
    } catch (error) {
        handleError(error)
    }
}

export default fetchDinnerMenu
