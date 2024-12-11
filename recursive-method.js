'use strict';

//////////////////////////////////////////////////////////////
// EXAMPLE 1 YT-WebDevSimplified https://www.youtube.com/watch?v=WbwP4w6TpCk
//////////////////////////////////////////////////////////////

// find the 'n'th element of the Fibonacii sequence
// Fibonacii sequence = its a sequence in which each number is the sum of the two preceding ones. 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ....
function fibonacci(n) {
  if (n <= 2) {
    return 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

console.log(fibonacci(5));


 

//////////////////////////////////////////////////////////////
// EXAMPLE 2 YT-Akshay Saini https://www.youtube.com/watch?v=Vi4Pr8bUMZs
//////////////////////////////////////////////////////////////

let user = {
  "cell": "(029)-082-3612",
  "dob": {
    "age": 54,
    "date": "1968-07-21T10:02:51.768Z"
  },
  "email": "joseph.evans@example.com",
  "id": 1,
  "location": {
    "city": "Hastings",
    "coordinates": {
      "latitude": "51.9039",
      "longitude": "-45.2357"
    },
    "country": "New Zealand"
  }
}

// We need output:
// {
//   user_cell: "(029)-082-3612",
//   user_dob_age: 54,
//   user_dob_date: "1968-07-21T10:02:51.768Z",
//   user_email: "joseph.evans@example.com",
//   user_id: 1,
//   user_location_city: "Hastings",
//   user_location_coordinates_latitude: "51.9039",
//   user_location_coordinates_longitude: "-45.2357",
//   user_location_country: "New Zealand"
// }

let finalObj = {};
let magic = (obj, parent) => {
  for(let key in obj) {
    if (typeof obj[key] === 'object') {
      magic(obj[key], parent + '_' + key);
    } else {
      finalObj[parent + '_' + key] = obj[key];
    }
  }
}

magic(user, 'user');
// console.log(finalObj);



//////////////////////////////////////////////////////////////
// EXAMPLE 3 (simple) YT-Nisha Singla https://www.youtube.com/watch?v=oicojjHO7uM
//////////////////////////////////////////////////////////////

// Count down function using for loop
function countDown(n) {
  for(let i=n; i>0 ; i--) {
    console.log(i);
  }
}

// countDown(5); // 5 4  3 2 1

// Count down function using recursive method
function recursiveCountDown(n) {
 if (n === 0) { // base case
  return;
 }
 console.log(n);
 recursiveCountDown(n-1)
}

// recursiveCountDown(9) // 5 4  3 2 1




//////////////////////////////////////////////////////////////
// EXAMPLE 4 (simple) YT-Nisha Singla https://www.youtube.com/watch?v=oicojjHO7uM
//////////////////////////////////////////////////////////////

// calculate total using for loop
function calculateTotal(n) {
  let total=0;
  for (let i = 0; i <= n; i++) {
    total = total+i;
  }
  console.log(total);
  
}

// 1+2+3
// calculateTotal(3); // 6

// Calculate total using recursive
function recursiveCalculateTotal(n, total=0) {
  if (n === 0) {
    return total;
  } else {
    return recursiveCalculateTotal(n-1, total+=n);
  }  
}

// console.log(recursiveCalculateTotal(3)); // 6




//////////////////////////////////////////////////////////////
// EXAMPLE 5 YT-Nisha Singla https://www.youtube.com/watch?v=oicojjHO7uM
//////////////////////////////////////////////////////////////

const teamStructure = {
  name: 'Suhail', 
  teams: [
    {
      name: 'Nasri',
      teams: [
        {
          name: 'Aydin',
          teams: [
            {
              name: 'Balloon',
              teams: []
            }
          ]
        }
      ],
    },
    {
      name: 'Shebi',
      teams: []
    }
  ]
}

function getTeamDetail(t) {
  // console.log(t);
  // base case
  if (t.teams.length === 0) return;
  t.teams.forEach(team => {
    // console.log(team.name);
    getTeamDetail(team)
  })
}

getTeamDetail(teamStructure)
////////// OUTPUT///////////
// {name: 'Suhail', teams: Array(2)}
// {name: 'Nasri', teams: Array(1)}
// {name: 'Aydin', teams: Array(1)}
// {name: 'Balloon', teams: Array(0)}
// {name: 'Shebi', teams: Array(0)}

