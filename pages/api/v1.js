// /* eslint-disable import/no-anonymous-default-export */
// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default async (request, response) => {
//   function getJson(url) {
//     return fetch(url)
//       .then(res => {
//         return res.json();
//       })
//       .catch(() => {
//         response.statusCode = 500;
//         response.json({
//           message: 'Unspected error',
//         });
//       });
//   }

//   const topAnime = await getJson('https://api.jikan.moe/v4/top/anime');
//   const topManga = await getJson('https://api.jikan.moe/v4/top/manga'
//   );

//   response.statusCode = 200;
//   response.json({
//     world: {
//       confirmed: dataWorld.confirmed.value,
//       deaths: dataWorld.deaths.value,
//       recovered: dataWorld.recovered.value,
//       lastUpdate: dataWorld.lastUpdate,
//     },
//     brazil: dataBrazil.data,
//   });
// };
