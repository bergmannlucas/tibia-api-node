import { Router } from 'express';
import HTTPStatus from 'http-status';

const load = () => {
  const routes = new Router();

  /* Declare here all routes */
  routes.get('/health-check', (req, res) => res.json({ healthcheck: 'success' }));

  routes.all('*', (req, res) => {
    res.status(HTTPStatus.NOT_FOUND)
      .json({
        code: 1,
        message: 'Not Found',
      });
  });

  routes.use((err, req, res, next) => {
    res.status(err.status || HTTPStatus.BAD_REQUEST)
      .json(err);
    next();
  });

  return routes;
};

module.exports = { load };
