export default ({ params, route, redirect }) => {
  if (route.path === '/orcamento' || route.path === '/contato') {
    redirect('301', `${route.path}/criacao-de-sites-blogs-portais-lojas-virtuais`)
  }

  if (route.path === '/hospedagem') {
    redirect('301', `${route.path}/hospedagem-basica-de-sites-institucionais-lojas-virtuais-blogs-portais-e-aplicacoes-web`)
  }
}
