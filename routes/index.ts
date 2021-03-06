import nextRoutes from 'next-routes';

const routes = new nextRoutes()
  .add('index', '/')
  .add('about', '/about')
  .add('postList', '/postList')
  .add('post', '/post/:title')

export default routes;