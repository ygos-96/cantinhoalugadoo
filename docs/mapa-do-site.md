---
descricao: Mapa do site da vitrine de afiliados ML (casa e decoração para apartamento pequeno/alugado) — páginas, guias iniciais, modelo de página, texto de transparência, checklist técnico
tags: [vitrine, site, mapa, afiliados, mercado-livre, pinterest, casa, decoracao, apartamento-alugado]
---
# Mapa do site — vitrine casa/decoração (rascunho 2026-11-17)

Status: RASCUNHO para o Ygor aprovar. Nada publicado. Títulos de guia são hipóteses: validar cada um na busca do Pinterest antes de escrever.

## Princípio
O pin não vai direto ao Mercado Livre. Pin -> guia do site -> botão "Ver no Mercado Livre". O guia é o conteúdo que o concorrente (achadinhosdecasaonline.com.br) não tem, e é o que sustenta a análise de aprovação do site.
Ângulo fixo em tudo: "sem obra / sem furar parede / apartamento pequeno ou alugado".

## Páginas
| Caminho | Função |
|---|---|
| `/` | Home: promessa em 1 frase, 2 categorias, 4 guias em destaque, aviso curto de afiliado |
| `/cozinha-pequena/` | Categoria 1: organização de cozinha pequena (lista dos guias) |
| `/decoracao-apartamento-alugado/` | Categoria 2: decoração sem obra (iluminação, quadros, tapetes, cortinas) |
| `/guias/<slug>/` | Guias (conteúdo principal; ver lista abaixo) |
| `/como-funciona/` | Como os produtos são escolhidos (critérios reais, sem inventar teste) |
| `/transparencia-afiliados/` | Divulgação de afiliado (texto abaixo) |
| `/privacidade/` e `/contato/` | Institucionais |
| `/sitemap.xml`, `/robots.txt` | SEO básico |

Depois (não agora): banheiro, seção "sem furar parede", móveis multifuncionais.

## Guias iniciais (4 para abrir; hipóteses de título)
Cozinha pequena
1. Organização de cozinha pequena: 7 itens que liberam a bancada
2. Como organizar armários de cozinha pequena sem reforma

Decoração de apartamento alugado
3. Decoração de apartamento alugado sem furar a parede: 10 ideias
4. Iluminação para apartamento alugado: luminárias que não pedem obra

Fila seguinte: tapetes para sala pequena (como escolher o tamanho), cortinas para apartamento alugado, quadros sem furar a parede.

## Modelo de página de guia
1. Aviso curto de afiliado no topo (link para /transparencia-afiliados/)
2. Problema em 1 parágrafo (a dor: não poder furar, pouco espaço)
3. Critérios para escolher (3 a 5 itens objetivos)
4. 5 a 8 produtos, cada um com: nome, por que entrou na lista, para quem serve, quando NÃO vale, botão "Ver no Mercado Livre"
5. Erros comuns
6. FAQ (3 a 5 perguntas reais de busca)
7. Guias relacionados

Regras de conteúdo:
- Não escrever "testei" nem inventar avaliação, nota ou depoimento. Dizer "selecionei por avaliação do comprador e características", e só afirmar o que está no anúncio.
- Sem preço fixo na página até ler os termos do programa. Usar "ver preço atual no Mercado Livre".
- Links só do gerador do programa (conta do Ygor). Sem encurtador externo nos pins.
- Texto humanizado, sem tom publicitário empilhado.

## Texto de transparência (rascunho)
"Este site é um portal de recomendações, não uma loja. Participamos do programa de afiliados do Mercado Livre: se você comprar por um link nosso, podemos receber uma comissão, sem custo extra para você. O preço e as condições são os do Mercado Livre, onde a compra é feita. Escolhemos os produtos por avaliação de quem comprou e por características do anúncio, e não somos pagos para recomendar um item específico."
(Confirmar a redação exigida nos termos do programa antes de publicar.)

## Pinterest (ligado ao mapa)
- 1 board por categoria e por guia grande.
- 3 a 4 variações de pin por guia (imagem + título de busca + descrição com a divulgação de afiliado).
- Pin aponta para o guia, URL completa, sem encurtador (o Pinterest bloqueia vários).
- Hipótese: 3 a 5 pins/dia por 60 dias. Sem repetir o mesmo conteúdo em volume alto (política contra spam).

## Checklist técnico (Vite + Cloudflare Pages)
- Site estático, uma página por guia (HTML real, não só JS) para o Google e o Pinterest lerem.
- Title/description únicos por página, imagens com alt, Open Graph com imagem vertical.
- Domínio no Registro.br (conferir preço), DNS na Cloudflare, HTTPS.
- Rodar audit/polish antes de entregar (regra do stack pessoal).
- Analytics simples e sem cookie para ver cliques por guia (decidir ferramenta depois).

## Pendências a confirmar (não assumir)
- Termos do programa ML: exibir preço/imagens de produto, redação do aviso.
- Se as imagens do ML podem ser usadas nos pins ou se é preciso criar imagem própria.
- Janela de atribuição (equipe fala em 24h; não verificado).
- Nome do site e disponibilidade do domínio.
