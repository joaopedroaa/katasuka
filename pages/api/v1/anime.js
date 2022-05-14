/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

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

  const topAnime = await getJson('https://api.jikan.moe/v4/top/anime');

  response.statusCode = 200;
  response.json({
    pagination: topAnime.pagination,
    data: topAnime.data
  });
};
