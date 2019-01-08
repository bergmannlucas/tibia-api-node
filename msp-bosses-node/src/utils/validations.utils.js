import axios from 'axios';

const isValidWorld = (world = '') => {
  if (world.length === 0) throw new Error('World is required');

  return new Promise((resolve, reject) => {
    axios.get('https://api.tibiadata.com/v2/worlds.json')
      .then(res => {
        if (res.data.worlds.allworlds.some(e => e.name === world)) resolve();
        throw new Error('Invalid world');
      })
      .catch(err => reject(err));
  });
}

module.exports = {
  isValidWorld,
}
