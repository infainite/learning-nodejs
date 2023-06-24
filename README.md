# NodeJS Getting Started 

From [Official Website](https://nodejs.dev/en/learn)

## Getting Started  

- Open Source Cross Platform JavaScript Runtime Environment
- Runs on V8 JavaScript engine (core of Google Chrome) outside of a browser
- Single Process (Single Threaded), has asynchronous I/O
- Default mode is DEBUG not PRODUCTION
- Supports TypeScript

## Asynchronous Work  

- JavaScript is designed to be non-blocking
- To prevent the "freezing" of code when a process is running for a long time, we can use callbacks but that can lead to callback hell
- This is where functions come into great use. More complex operations are mde up of many functions:
 - Initiator style/input: This function will accept the original input, if any, for the operation and then call the middleware, passing it the input and a callback function
 - Middleware: This function operates on the input according to whatever operation has to be conducted and then calls the terminator while passing it the callback function
 - Terminator: This function marks the end of the operation and invokes the callback function, maybe with the result of the operation
- State Management: A function is called state dependent if any of its input or variable depends on an outside function. There are primary two strategies for state management:
 - Passing in variables directly to a function
 - Acquiring a variable value from a cache, session, file, database , network or other outside source
 - ```NOTE: Using global variables for state management is not suggested since it makes it hard or sometimes impossible to gaurantee state```
- Control Flow: You will be able to perform almost all of your operations with the following three patterns:
 - In Series: Functions are executed in a strict sequential order, this one is most similar to a simple for loop
 - Full Parallel: When ordering is not an issue
 - Limited Parallel: Parallel with limit
- NodeJS uses event loop method instead of multiple threads to handle concurrent work
- Prevent mixing synchronous and asynchronous code
- NodeJS uses the `error-first callbacks`, i.e., the first parameter in all callback functions is the error object, which is null if there is no error
- Every time the NodeJS event loop takes a full trip, it is caled a `tick`. `process.nextTick()` takes a function as an argument which is invoked before the next tick starts
- Understanding NodeJS Execution Order
 - `process.nextTick()` adds a function to the `process.nextTick queue`
 - `Promise.then()` adds a function to `promise microtask queue`
 - `setTimeout` or `setImmediate` adds a function to `microtask queue`
 - NodeJS event loop first executes `process.nextTick queue` then `promise mircotask queue` and then finally `microtask queue`
- The NodeJS `events` module provides the `EvenEmitter` class which can be used to handle events

## Manipulating Files  

- The `fs` module is the file system module of NodeJS
- `fs.stat` is an asynchronous method used to get the stats of a file
- The `path` module handles the file paths in NodeJS
- `fs.open` is used to open file descriptors in different modes (`r`, `w`, `a`, etc)
- `fs.exists` checks if a directory exists
- `fs.access` checks if a directory exists and NodeJS has the permissions to access it
- `fs.mkdir` makes a directory
- `fs.readdir` reads the content of a directory
- `fs.rename` renames a directory
- `fs.rmdir` removes a directory, use `fs.rm` with option `{ recursive: true }` to remove a directory which is not empty

## Command Line

- Use `node app.js` to run `app.js` using NodeJS
- You can also add a shebang line to the top of your JavaScript file, `#!/usr/bin/node` or `#!/usr/bin/env node`
- To execute a string argument using node you can pass it with the flg `-e`, like this: `node -e "console.log(57)"
- To restart the application automatically when there is a change in the files, use nodemon. Install it using `npm -i --save-dev nodemon` and then run `nodemon app.js`
- `USER_ID=234 USER_KEY=abc node app.js` will set the environment variables `USER_ID` and `USER_KEY` which can be then accessed by using `process.env.USER_ID` and `process.env.USER_KEY`. In a production setting you should not pass environment variables like this, instead you should use `.env` files or export environment variables using a bash script etc
- Using the `node` command without any file will enter us into the NodeJS REPL mode
- `console.log` and many similar commands exist to output data to the command line
- `progress` module can be used to create a progress bar in the command line
- `inquirer` is an excellent library to work with CLI inputs

