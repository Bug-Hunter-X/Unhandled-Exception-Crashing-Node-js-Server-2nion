# Unhandled Exception Crashing Node.js Server

This repository demonstrates a common error in Node.js applications: unhandled exceptions crashing the server. The `bug.js` file shows a server vulnerable to crashes. The `bugSolution.js` provides a corrected version with proper error handling.

## Bug

The `bug.js` file showcases a simple HTTP server that doesn't handle potential errors during request processing.  If an unexpected error occurs (e.g., accessing a non-existent property), the server will abruptly terminate.

## Solution

The `bugSolution.js` file demonstrates how to gracefully handle exceptions. It uses a `try...catch` block to wrap the potentially problematic code, allowing the server to continue running even if an error occurs.  A custom error handler is used to log the error and send an appropriate response to the client.

This improved error handling makes the application more robust and prevents unexpected crashes.