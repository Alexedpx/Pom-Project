// import React, { useState, useEffect } from 'react';
// import { faker } from '@faker-js/faker';

// const FakeDataComponent = () => {
//   const [fakeData, setFakeData] = useState<{ name: string; email: string; address: string }>({
//     name: '',
//     email: '',
//     address: ''
//   });

//   // Générer des données fictives au démarrage du composant
//   useEffect(() => {
//     setFakeData({
//       name: faker.name.findName(),
//       email: faker.internet.email(),
//       address: faker.address.streetAddress()
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Fake Data</h1>
//       <p><strong>Name:</strong> {fakeData.name}</p>
//       <p><strong>Email:</strong> {fakeData.email}</p>
//       <p><strong>Address:</strong> {fakeData.address}</p>
//     </div>
//   );
// };

// export default FakeDataComponent;
