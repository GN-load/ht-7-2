// const users = [
//     {name: 'Mango', active: true}, 
//     {name: 'Poly', active: false}, 
//     {name: 'Ajax', active: true}, 
//     {name: 'Lux', active: false}
// ];

// const toggle = (allUsers, userName, callback) => {
//     const updateUsers = allUsers.map(user => 
//         user.name === userName ? {...user, active: !user.active} : user,);
    
//         callback(updateUsers)
//     };

//     const logger = updateUsers => console.table(updateUsers);

//     toggle(users, 'Mango', logger);
//     toggle(users, 'Lux', logger);
        
const users = [
    {name: 'Mango', active: true}, 
    {name: 'Poly', active: false}, 
    {name: 'Ajax', active: true}, 
    {name: 'Lux', active: false}
];

const toggle = (allUsers, userName) => {
    promise = new Promise ((resolve) => {
            const updateUsers = allUsers.map(user => 
        user.name === userName ? {...user, active: !user.active} : user,);

        resolve(updateUsers)
    });

    return console.log(promise)
}

toggle(users, 'Mango')