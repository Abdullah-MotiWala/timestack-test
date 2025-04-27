export const getErrorMessage = (error: any) => {
    if (error.response) return (error.response as { data: { message: string; }; }).data.message
    if (error.request) return 'Network Error: Please check your internet connection.'
    if (error.message) return `Unexpected Error: ${error.message}`
    return 'Internal Server Error'
}