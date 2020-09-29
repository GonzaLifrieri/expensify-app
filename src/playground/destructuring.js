// Object Destructuring

const person = {
    name: 'Gonzalo',
    age: 23,
    location: {
        city: 'Buenos Aires',
        temp: 18
    }

}

const { name: firstname = 'Anonymous', age } = person



console.log(`${firstname} is ${age}.`);

const { city, temp: temperature } = person.location

console.log(`It´s ${temperature} in ${city}`);


/* const book = {
    title: 'El cine según Hithcock',
    author: 'Fancois Truffaut',
    publisher: {
        name: 'Alianza Editorial'
    }
}

const { name: publisherName = 'Self-published' } = book.publisher

console.log(publisherName); */

const adress = ['1789 Saint Junipero Street', 'DreamLand', 'Dailan Kifki', '19458'];

const [, ciudad, state = 'New York'] = adress;


console.log(`You are in ${ciudad}, ${state}`);

const item = ['Coffee (iced)', '$2.00', '$3.50', '2.75'];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} cost ${medium}`)


