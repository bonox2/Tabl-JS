const tablEl = document.getElementById('tabl')//


// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },


function renderContact(where, data) {//каркас секции
    const html =
        `
        <tr class="name">
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Website</th>
        </tr>
        <tr>
          <th>${data.id}</th>
          <th>${data.username}</th>
          <th>${data.email}</th>
          <th>${data.id}</th>
        </tr>
        <tr>
          <th>${data.id}</th>
          <th>${data.username}</th>
          <th>${data.email}</th>
          <th>${data.id}</th>
        </tr>
        <tr>
          <th>${data.id}</th>
          <th>${data.username}</th>
          <th>${data.email}</th>
          <th>${data.id}</th>
        </tr>
        <tr>
          <th>${data.id}</th>
          <th>${data.username}</th>
          <th>${data.email}</th>
          <th>${data.id}</th>
        </tr>
        <tr>
          <th>${data.id}</th>
          <th>${data.username}</th>
          <th>${data.email}</th>
          <th>${data.id}</th>
        </tr>`
        where.insertAdjacentHTML('beforeEnd', html)
}