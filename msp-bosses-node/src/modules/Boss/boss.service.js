import Promise from 'bluebird';
import { getDomFromURL, getTextContent } from '../../utils/dom.utils';
import BossList from './boss.list';
import { isValidWorld } from '../../utils/validations.utils';

//#killstatistics > div.Border_2 > div > div > form > table > tbody
const getWorldKillStatistics = (world = '') => {
  const getDom = () => {
    const url = `https://www.tibia.com/community/?subtopic=killstatistics&world=${world}`;
    const dom = getDomFromURL(url);
    return dom;
  }

  const getKillStatistics = (dom) => {
    const selector = `#killstatistics > div.Border_2 > div > div > form > table > tbody`;
    return getTextContent(dom, selector);
  }

  return isValidWorld(world)
    .then(res => getDom())
    .then(dom => getKillStatistics(dom))
    .then(statistics => {
      return Promise.resolve(statistics);
    })
    .catch(err => console.log(err));
};

const getBossKillStatistics = (boss = '') => {
  return getWorldKillStatistics('Gentebra')
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

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
