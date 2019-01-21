import axios from 'axios';
import Promise from 'bluebird';
import { getDomFromURL, getTextContent, getTableData } from '../lib/dom';
import BossList from '../bossList';

function BossService() {

  const isValidWorld = (world = '') => {
    if (world.length === 0) throw new Error('World is required');
    // not implemented yet
    return true;
  }

  const getWorldKillStatistics = (world = '') => {
    const getDom = () => {
      const url = `https://www.tibia.com/community/?subtopic=killstatistics&world=${world}`;
      return getDomFromURL(url);
    }

    const getKillStatisticsTableData = (dom) => {
      const tableSelector = `#killstatistics > div.Border_2 > div > div > form > table`;

      return Array.from(getTableData(dom, tableSelector));
    }

    return isValidWorld(world)
      .then(res => getDom())
      .then(dom => getKillStatisticsTableData(dom))
      .then(statistics => {
        return Promise.resolve(statistics.map(teste => console.log(teste.textContent)));
      })
      .catch(err => console.log(err));
  };

  const getBossKillStatistics = (boss = '') => {
    return getWorldKillStatistics('Gentebra')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return {

  }

}


getBossKillStatistics();

/*
teste =
  {
    "name": "midnight panther",
    "numberOfSpawns": 3,
    "lastAppearances": [
      '07/01/2019',
      '04/01/2019',
      '01/01/2019',
    ],
  }
*/
