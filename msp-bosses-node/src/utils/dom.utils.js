import jsdom from 'jsdom';
const { JSDOM } = jsdom;

const getDomFromURL = (url = '') => {
  if (url.length === 0) throw new Error('URL is required');
  return JSDOM.fromURL(url);
}

const getTextContent = (dom = {}, selector = '') => {
  if (dom.window === undefined)
    throw new Error('Dom must contains a window property');

  if (selector.length === 0)
    throw new Error('Selector is required');

  return dom.window.document.querySelector(selector).textContent;
};



module.exports = {
  getDomFromURL,
  getTextContent,
}
