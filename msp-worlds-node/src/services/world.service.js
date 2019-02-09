import { isEmpty } from 'ramda';
import URL from '../config/web';
import { getDomFromURL, getTableContent } from '../lib/dom';
import { ValidationError } from '../lib/errors/types';

function WorldsService() {
  const getWorldsList = () => {
    const getDom = () => {
      return getDomFromURL(URL.worldsService);
    };

    const getWorldsTableData = (dom) => {
      const tableSelector = `#worlds > div.Border_2 > div > div >
                             div > table > tbody > tr > td > div >
                             table > tbody > tr:nth-child(2) > td >
                             div.TableContentAndRightShadow > div > table`;

      return Array.from(getTableContent(dom, tableSelector));
    };

    return getDom()
      .then(dom => getWorldsTableData(dom))
      .then(rows => rows.filter(row => row.cells[0].textContent !== 'World').map(row => row.cells))
      .then((worlds) => {
        return worlds.map((world) => {
          return {
            name: world[0].textContent,
            playersOnline: Number(world[1].textContent),
            location: world[2].textContent,
            pvpType: world[3].textContent,
            additionalInfo: world[5].textContent,
          };
        });
      })
      .catch((err) => { console.log(err); throw err; });
  };

  const checkValidWorld = (world = '') => {
    if (isEmpty(world)) throw new Error('World is required');

    return getWorldsList()
      .then((worlds) => {
        if (!worlds.some(e => e.name === world)) {
          throw new ValidationError({
            message: 'World not found',
          });
        }
        return true;
      })
      .catch((err) => { throw err; });
  };

  return {
    getWorldsList,
    checkValidWorld,
  };
}

module.exports = WorldsService;
