// 1) Create an array of everyone that has at least one dog and sort it by age.

const dogOwners = [
  {
    firstName: 'Sarah',
    lastName: 'Palin',
    age: 47,
    pets: ['dog', 'cat']
  },
  {
    firstName: 'Frank',
    lastName: 'Zappa',
    age: 12,
    pets: ['dog']
  },
  {
    firstName: 'Rick',
    lastName: 'Sanchez',
    age: 78,
    pets: ['cat', 'parrot']
  },
  {
    firstName: 'Morty',
    lastName: 'Smith',
    age: 13,
    pets: ['cat', 'parrot', 'dog']
  },
  {
    firstName: 'Kyle',
    lastName: 'Mooney',
    age: 27,
    pets: ['dog']
  }
];

console.log(sortedDogOwners(dogOwners));

function sortedDogOwners(arr) {
  return arr
    .filter(person => person.pets.includes('dog'))
    .sort((a, b) => a.age - b.age);
}

//2) Create an array of strings of pets first names in <li>s if their owner is older than 20 and all the owners pets have nicknames, and they have at least one dog.

const moreDogOwners = [
  {
    firstName: 'Sarah',
    lastName: 'Palin',
    age: 47,
    pets: [
      {
        name: 'Alfred',
        type: 'dog',
        nickNames: ['Lil Alfred', 'Alfy', 'Alfinator']
      },
      {
        name: 'Charles',
        type: 'cat',
        nickNames: ['Charley']
      },
      {
        name: 'Bark Obama',
        type: 'dog',
        nickNames: ['Barack', 'Mr. President']
      },
      {
        name: 'Christopher George Latore Wallace',
        type: 'dog',
        nickNames: ['Notorious D.I.G.', 'Diggie Smalls']
      }
    ]
  },
  {
    firstName: 'Frank',
    lastName: 'Zappa',
    age: 12,
    pets: [
      {
        name: 'Howard',
        type: 'dog',
        nickNames: []
      },
      {
        name: 'Bear',
        type: 'dog',
        nickNames: []
      }
    ]
  },
  {
    firstName: 'Rick',
    lastName: 'Sanchez',
    age: 78,
    pets: [
      {
        name: 'Bird Person',
        type: 'bird',
        nickNames: ['Phoenixperson']
      },
      {
        name: 'Krombopulos Michael',
        type: 'Gromflomite',
        nickNames: ['Assassin man']
      },
      {
        name: 'Squanchy',
        type: 'Cat-person',
        nickNames: ['Squanch', 'Smarf', 'Thunder Cat']
      }
    ]
  },
  {
    firstName: 'Morty',
    lastName: 'Smith',
    age: 23,
    pets: [
      {
        name: 'Morty Jr.',
        type: 'Gazorpazorp',
        nickNames: ['Gwendolyn Jr.']
      },
      {
        name: 'Snuffels',
        type: 'dog',
        nickNames: ['Snowball']
      }
    ]
  }
];

console.log(arbitraryPractice(moreDogOwners));

function arbitraryPractice(arr) {}
