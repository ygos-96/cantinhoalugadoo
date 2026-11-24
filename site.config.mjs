// Configuração central do site. Mude aqui, rode `npm run build`.
export default {
  name: 'Cantinho Alugado',
  tagline: 'Ideias de organização e decoração para apartamento pequeno ou alugado, sem obra.',
  lang: 'pt-BR',

  // URL final do site (usada em canonical, sitemap e og:image).
  // Troque quando o domínio definitivo existir (ou defina SITE_URL no ambiente de build).
  siteUrl: process.env.SITE_URL || 'https://cantinhoalugadoo.pages.dev',

  // Contato e redes. Deixe vazio para não exibir.
  contactEmail: 'emailcanais01.2026@gmail.com',
  pinterestUrl: 'https://www.pinterest.com/cantinhoalugadoo/',
  // Código de verificação do domínio no Pinterest (p:domain_verify). Cole aqui quando receber.
  pinterestVerify: '13233b2628394578c47d42dc08e974d7',

  // Preço aparece nos cards com a data da consulta e o aviso "pode variar".
  // ATENÇÃO: confirme nos termos do programa de afiliados do Mercado Livre se exibir preço é permitido.
  showPrices: true,

  // Data em que os dados dos produtos foram conferidos no Mercado Livre.
  dataConsultada: '24/11/2026',
};
