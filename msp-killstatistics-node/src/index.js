import application from './config/express.config';

const port = process.env.PORT || 3001;

application.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
