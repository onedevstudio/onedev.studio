export default ({ params, route, redirect }) => {
  if (route.path === '/orcamento') {
    redirect('301', `${route.path}/criacao-de-sites-blogs-portais-lojas-virtuais`)
  }
}
