const handleError = (error) => {
    console.error('There was an error fetching the data:', error)
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error data:', error.response.data)
        console.error('Error status:', error.response.status)
        console.error('Error headers:', error.response.headers)
    } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request)
    } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message)
    }
    throw error // Rethrow or handle the error as needed
}



export default handleError
