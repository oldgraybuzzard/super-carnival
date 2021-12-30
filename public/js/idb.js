//create variable to hold db connection
let db;
// establish a connection to IndexedDB database called 'budget' and set it to version 1
const request = indexedDB.open('budget', 1);

//this event will emit if the database versionchanges (nonexistant to version 1, v1 to v2, etc. )
request.onupgradeneeded = function(event) {
  //save a reference to the database
  const db = event.target.result;
  //create an object store (table) called `transaction`, set it to have an auto increment primary key of sorts
  db.createObjectStore('transaction', { autoIncrement: true });
};

//upon a successful
request.onsuccess = function(event) {
  //when db is successfully created with its object store (from onupgradeneeded event above) or simpley established a connection, save a reference to db in global variable
  db = event.target.result;

  //check if app is online, if yes run uploadBudget() function to send all local db data to api
  if (navigator.onLine) {
    //
    uploadBudget();
  }
};

request.onerror = function(event) {
  //log error here
  console.log(event.target.errorCode);
};

//This function will be executed if we attempt to submit a new pizza and there's no internet connection
// This function will be executed if we attempt to submit a new pizza and there's no internet connection
function saveRecord(record) {
  // open a new transaction with the database with read and write permissions 
  const transaction = db.transaction(['transaction'], 'readwrite');

  // access the object store for `transaction`
  const budgetObjectStore = transaction.objectStore('transaction');

  // add record to your store with add method
  budgetObjectStore.add(record);
}

function uploadBudget() {
  //open a transaction on your db
  const transaction = db.transaction(['transaction'], 'readwrite');

  //access your object store
  const budgetObjectStore = transaction.objectStore('transaction');

  //get all records from store and set up a variable
  const getAll = budgetObjectStore.getAll();

  // upon a successful .getAll() execution, run this function
getAll.onsuccess = function() {
  // if there was data in indexedDb's store, let's send it to the api server
  if (getAll.result.length > 0) {
    fetch('/api/transaction', {
      method: 'POST',
      body: JSON.stringify(getAll.result),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(serverResponse => {
        if (serverResponse.message) {
          throw new Error(serverResponse);
        }
        // open one more transaction
        const transaction = db.transaction(['transaction'], 'readwrite');
        // access the transaction object store
        const budgetObjectStore = transaction.objectStore('transaction');
        // clear all items in your store
        budgetObjectStore.clear();

        alert('All offline budget transactions have been uploaded!');
      })
      .catch(err => {
        console.log(err);
      });
  }
};
}

//listen for app coming back online
window.addEventListener('online', uploadBudget);