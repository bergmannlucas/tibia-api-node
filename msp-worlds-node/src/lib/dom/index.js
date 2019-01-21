import jsdom from 'jsdom';
import { isEmpty, isNil } from 'ramda';
const { JSDOM } = jsdom;

const getDomFromURL = (url = '') => {
  if (isEmpty(url)) throw new Error('URL is required');
  return JSDOM.fromURL(url);
}

const getTextContent = (dom = {}, selector = '') => {
  if (isNil(dom.window))
    throw new Error('Dom must contains a window property');

  if (isEmpty(selector))
    throw new Error('Selector is required');

  return dom.window.document.querySelector(selector).textContent;
};

const getTableContent = (dom = {}, selector = '') => {
  if (isNil(dom.window))
    throw new Error('Dom must contains a window property');

  if (isEmpty(selector))
    throw new Error('Selector is required');

  return dom.window.document.querySelector(selector).rows;
}

module.exports = {
  getDomFromURL,
  getTextContent,
  getTableContent,
}
