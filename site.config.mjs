// Configuração central do site. Mude aqui, rode `npm run build`.
export default {
  // NOME PROVISÓRIO: troque quando o nome e o domínio forem definidos.
  name: 'Casa Sem Obra',
  tagline: 'Ideias de organização e decoração para apartamento pequeno ou alugado, sem obra.',
  lang: 'pt-BR',

  // URL final (ex.: 'https://seudominio.com.br'). Pode vir de SITE_URL no ambiente.
  // Vazio = não gera sitemap.xml nem tags canonical.
  siteUrl: process.env.SITE_URL || '',

  // Preços: deixe false até ler os termos do programa de afiliados do Mercado Livre
  // (exibir preço pode ter regra própria). Quando liberar, mude para true.
  // Os preços e a data da consulta já estão em src/data/products.mjs.
  showPrices: false,

  // Data em que os dados dos produtos foram conferidos no Mercado Livre.
  dataConsultada: '17/11/2026',
};
