// Write an asynchronous function
//  that accepts a message string and a delay time
// in milliseconds. The function should log the message
// to the console after the specified delay time.
function MessageDelay(message, delay) {
    setTimeout(function() {
      console.log(message);
    }, delay);
  }
MessageDelay("I love coding", 2000);
// You have an array of user IDs and a
// function getUserData(id) that returns a Promise
// with user data when given a user ID. Write an asynchronous
// function that fetches and logs the data for each user ID one by one,
//  in sequence.
const userIds = [1, 2, 3, 4, 5];
async function fetchData() {
  for (const userId of userIds) {
    try {
      const userData = await getUserData(userId);
      console.log(userData);
    } catch (error) {
      console.log(`Error fetching user data for ID ${userId}:`, error);
    }
  }
}
function getUserData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id >= 1 && id <= 5) {
        resolve({ id, data: "id present" });
      } else {
        reject(`invalid id : ${id}`);
      }
    }, 2000);
  });
}
getUserData(4);
// You have an asynchronous function performTask() that returns a Promise.
//  The Promise resolves if the task is successful and rejects if there's an error.
//   Write a function that calls performTask() and logs a custom success message if
//   the task is successful, and a custom error message if there's an error.
function Task() {
    performTask()
      .then(() => {
        console.log("Task is successful.");
      })
      .catch((error) => {
        console.log("Error occurred", error);
      });
  }
  //  asynchronous function that returns a Promise
  function performTask() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        const isSuccess = Math.random() < 0.5;
        if (isSuccess) {
          resolve();
        } else {
          reject("Task failed due to an error.");
        }
      }, 2000);
    });
  }
  
  Task();