// Define a middleware function for error handling
const ErrorHandler = (err, req, res, next) => {
    // Log that the middleware for error handling is being executed
    console.log("Middleware Error Handling");
    
    // Determine the status code of the error; default to 500 if not specified
    const errStatus = err.statusCode || 500;

    // Extract the error message; default to a generic message if not specified
    const errMsg = err.message || 'Something went wrong';

    // Prepare a JSON response with information about the error
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        
        // Include the error stack trace in the response only in development environment
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    });
}

// Export the ErrorHandler middleware function
module.exports = ErrorHandler
