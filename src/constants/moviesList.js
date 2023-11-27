const moviesList = [
    {
        id: 1,
        name: 'The Godfather',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18861833/pexels-photo-18861833/free-photo-of-elderly-man-walking-on-sidewalk.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 2,
        name: 'The GodMother',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18845325/pexels-photo-18845325/free-photo-of-be-free.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 3,
        name: 'The GodSister',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/13633065/pexels-photo-13633065.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 4,
        name: 'The GodGrandmother',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/19090808/pexels-photo-19090808/free-photo-of-a-person-pouring-coffee-into-a-cup-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 5,
        name: 'The GodGrandfather',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/19043171/pexels-photo-19043171/free-photo-of-horse.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 6,
        name: 'The GodNephew',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18869171/pexels-photo-18869171/free-photo-of-contemplando.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 7,
        name: 'The GodDog',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 8,
        name: 'The GodDog',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 9,
        name: 'The GodDog',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 10,
        name: 'The GodDog',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 11,
        name: 'The GodDog',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 12,
        name: 'The GodDog',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 13,
        name: 'The GodDog',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 14,
        name: 'The GodDog',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 15,
        name: 'The Godfather',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18861833/pexels-photo-18861833/free-photo-of-elderly-man-walking-on-sidewalk.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 16,
        name: 'The GodMother',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18845325/pexels-photo-18845325/free-photo-of-be-free.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 17,
        name: 'The GodSister',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/13633065/pexels-photo-13633065.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 18,
        name: 'The GodGrandmother',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/19090808/pexels-photo-19090808/free-photo-of-a-person-pouring-coffee-into-a-cup-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 19,
        name: 'The GodGrandfather',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/19043171/pexels-photo-19043171/free-photo-of-horse.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 20,
        name: 'The GodNephew',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18869171/pexels-photo-18869171/free-photo-of-contemplando.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 21,
        name: 'The GodDog',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 22,
        name: 'The GodDog',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 23,
        name: 'The Godfather',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/19122345/pexels-photo-19122345/free-photo-of-yanni-por-thiago-rosarii.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 24,
        name: 'The GodMother',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/17719835/pexels-photo-17719835/free-photo-of-a-man-in-black-shirt-standing-next-to-graffiti.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 25,
        name: 'The GodSister',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18963992/pexels-photo-18963992/free-photo-of-crosswalk-in-city.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 26,
        name: 'The GodGrandmother',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/19090808/pexels-photo-19090808/free-photo-of-a-person-pouring-coffee-into-a-cup-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 27,
        name: 'The GodGrandfather',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/19043171/pexels-photo-19043171/free-photo-of-horse.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 28,
        name: 'The GodNephew',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18869171/pexels-photo-18869171/free-photo-of-contemplando.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 29,
        name: 'The GodDog',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 30,
        name: 'The GodDog',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 31,
        name: 'The GodDog',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 32,
        name: 'The GodDog',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 33,
        name: 'The GodDog',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 34,
        name: 'The GodDog',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 35,
        name: 'The GodDog',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 36,
        name: 'The GodDog',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 37,
        name: 'The GodMother',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/18845325/pexels-photo-18845325/free-photo-of-be-free.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
    {
        id: 38,
        name: 'The GodSister',
        time: '2h 55min',
        image: 'https://images.pexels.com/photos/13633065/pexels-photo-13633065.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
    },
];

export default moviesList;
