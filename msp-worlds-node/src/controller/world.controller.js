import HTTPStatus from 'http-status';
import {
  compose,
  sum,
  values,
} from 'ramda';
import WorldService from '../services/world.service';

const sumValues = compose(sum, values);

function getWorlds(req, res) {
  const worldService = WorldService();

  const getTotalPlayersOnline = (worlds) => {
    const summed = sumValues(worlds.map(world => world.playersOnline));
    return {
      worlds: {
        online: summed,
        allworlds: worlds,
      },
    };
  };

  return worldService.getWorldsList()
    .then(worlds => getTotalPlayersOnline(worlds))
    .then(body => res.status(HTTPStatus.OK).json(body))
    .catch((err) => {
      console.log(err);
      return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Falha ao processar sua requisição',
      });
    });
}

module.exports = {
  getWorlds,
};
