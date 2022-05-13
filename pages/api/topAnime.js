/* eslint-disable import/no-anonymous-default-export */

export default async (request, response) => {
  function getJson(url) {
    return fetch(url)
      .then(res => {
        return res.json();
      })
      .catch(() => {
        response.statusCode = 500;
        response.json({
          message: 'Unspected error',
        });
      });
  }

  const dataWorld = await getJson('https://api.jikan.moe/v4/top/anime');
  // const dataBrazil = await getJson(
  //   'https://covid19-brazil-api.now.sh/api/report/v1'
  // );
  console.log(dataWorld.data)
  // response.statusCode = 200;
  // response.json({
  //   world: {
  //     confirmed: dataWorld.confirmed.value,
  //     deaths: dataWorld.deaths.value,
  //     recovered: dataWorld.recovered.value,
  //     lastUpdate: dataWorld.lastUpdate,
  //   },
  //   brazil: dataBrazil.data,
  // });
};


