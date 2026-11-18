// Páginas curtas por tema (destino dos pins do Pinterest). Usam os produtos já curados em products.mjs.
// Texto só afirma o que está no anúncio; nada de "testei".

export const topics = [
  {
    slug: 'cortinas-apartamento-alugado',
    titulo: 'Cortinas',
    h1: 'Cortinas para apartamento alugado, sem furar a parede',
    descricao: 'Cortina blackout e varão extensível sem furos: o que medir e conferir antes de comprar para apartamento alugado.',
    intro: [
      'Em apartamento alugado, a cortina costuma ser a mudança que mais transforma o ambiente e a que mais esbarra na regra do contrato: furar o gesso ou a alvenaria para o suporte do varão nem sempre é permitido.',
      'Esta página reúne uma cortina blackout e um varão extensível que, segundo o anúncio, dispensa furos.',
    ],
    ids: [19, 20],
    dicas: [
      'Meça a largura da janela e a altura do varão até o chão antes de olhar o tamanho da cortina.',
      'Varão sem furo segura menos peso: compare o peso máximo do varão com o de uma cortina de tecido grosso.',
      'Confira no contrato de locação o que ele diz sobre alterações no imóvel.',
    ],
    guias: ['decoracao-apartamento-alugado-sem-furar-parede'],
  },
  {
    slug: 'tapetes-sala-pequena',
    titulo: 'Tapetes',
    h1: 'Tapete para sala pequena: como escolher o tamanho',
    descricao: 'Como escolher o tamanho do tapete para sala ou quarto pequeno, com uma opção antiderrapante para conferir.',
    intro: [
      'O tapete define o espaço da sala sem obra e sem furo, e é um dos itens mais fáceis de levar para a próxima casa. O erro mais comum é comprar pelo desenho e deixar a medida para depois.',
      'Abaixo está um tapete antiderrapante de 2,00 x 1,40 m para você comparar com o seu cômodo.',
    ],
    ids: [18],
    dicas: [
      'Marque o tamanho no chão com fita crepe antes de comprar e veja se o caminho de passagem continua livre.',
      'Em sala pequena, um tapete que cabe sob a frente do sofá costuma funcionar melhor do que um que encosta nas paredes.',
      'Veja no anúncio o material e se o tapete tem base antiderrapante, principalmente sobre piso liso.',
    ],
    guias: ['decoracao-apartamento-alugado-sem-furar-parede'],
  },
  {
    slug: 'quadros-sem-furar-parede',
    titulo: 'Quadros',
    h1: 'Quadros sem furar a parede: o que usar para fixar',
    descricao: 'Kit de quadros e fita dupla face para pendurar sem furar a parede do apartamento alugado.',
    intro: [
      'Parede vazia é o que mais deixa a casa com cara de provisória, e furar nem sempre é opção. A saída é combinar quadros leves com uma fita adesiva própria para isso.',
      'Aqui estão um kit de quadros em MDF e uma fita dupla face para colar quadro, ambos com os dados conferidos em ' + '17/11/2026.',
    ],
    ids: [15, 16],
    dicas: [
      'Veja o peso máximo que a fita suporta e some o peso do quadro com a moldura.',
      'Teste a fita num ponto escondido: dependendo da tinta, a remoção pode levar parte dela.',
      'Limpe a parede e deixe secar antes de colar, e respeite o tempo de cura que o anúncio indicar.',
    ],
    guias: ['decoracao-apartamento-alugado-sem-furar-parede'],
  },
  {
    slug: 'paredes-sem-obra',
    titulo: 'Paredes',
    h1: 'Mudar a parede sem obra: papel de parede e adesivos',
    descricao: 'Papel de parede adesivo e fita para mudar o visual da parede de apartamento alugado sem obra.',
    intro: [
      'Dá para mudar o visual de uma parede sem pedreiro. O que decide se vale a pena é a sua parede e o seu contrato, mais do que o produto.',
      'Estes itens são adesivos ou de fixação por cola. Leia as condições do anúncio e teste antes de aplicar em tudo.',
    ],
    ids: [17, 16, 7],
    dicas: [
      'Teste o adesivo em um canto pouco visível e espere alguns dias antes de decidir.',
      'Paredes com textura, tinta fraca ou umidade tendem a segurar mal qualquer adesivo.',
      'Se o contrato exige devolver o imóvel como recebeu, confirme se o item é removível e como sai.',
    ],
    guias: ['decoracao-apartamento-alugado-sem-furar-parede', 'iluminacao-apartamento-alugado-luminarias-sem-obra'],
  },
  {
    slug: 'achadinhos',
    titulo: 'Achadinhos',
    h1: 'Achadinhos para casa pequena no Mercado Livre',
    descricao: 'Seleção de itens de organização e decoração para casa pequena ou alugada, escolhidos por nota e opiniões no Mercado Livre.',
    intro: [
      'Uma seleção curta, em um lugar só, com os itens do site que mais chamam atenção por nota e quantidade de opiniões. Cada um mostra por que entrou e o que conferir antes de comprar.',
      'Nota, opiniões e preço mudam: confirme sempre no anúncio.',
    ],
    ids: [2, 10, 7, 16, 13, 9, 19, 18],
    dicas: [
      'Meça o espaço antes de comprar qualquer item de organização.',
      'Dê preferência a itens com muitas opiniões e vendedor com boa reputação, e leia o que o anúncio diz sobre o tamanho.',
    ],
    guias: ['organizacao-cozinha-pequena-liberar-bancada', 'decoracao-apartamento-alugado-sem-furar-parede'],
  },
];

export const topicBySlug = (slug) => topics.find((t) => t.slug === slug);
