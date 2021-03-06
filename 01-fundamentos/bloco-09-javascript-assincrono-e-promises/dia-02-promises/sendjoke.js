const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      resolve(url)
      // fetch(url)
      //   .then((r) => r.json())
      //   .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .then(msg => console.log(msg))
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");