// Guias (conteúdo principal). `sections[].ids` referencia os ids de products.mjs.
// Textos escritos sem inventar teste: afirmam só o que o anúncio permite.

export const areas = {
  cozinha: {
    slug: 'cozinha-pequena',
    titulo: 'Cozinha pequena',
    descricao: 'Organização de cozinha pequena: itens de bancada, gaveta e armário para liberar espaço sem reforma.',
    intro: 'Organização de cozinha pequena sem obra: quando a cozinha é pequena, o problema quase nunca é falta de móvel: é falta de lugar fixo para cada coisa. Aqui estão guias e produtos para organizar bancada, gavetas e armários sem obra.',
    produtoIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    grupos: [
      { titulo: 'Bancada e pia', ids: [2, 9, 6, 8] },
      { titulo: 'Armário e gaveta', ids: [5, 10, 3, 1] },
      { titulo: 'Geladeira e parede', ids: [4, 7] },
    ],
  },
  decoracao: {
    slug: 'decoracao-apartamento-alugado',
    titulo: 'Decoração de apartamento alugado',
    descricao: 'Decoração para apartamento alugado: paredes, janelas, tapete e luz que não pedem obra nem furo na parede.',
    intro: 'Decoração de apartamento alugado sem obra: em apartamento alugado, quase tudo que muda o visual precisa ser reversível. Aqui estão guias e produtos que dispensam obra e, na maioria dos casos, furo na parede.',
    produtoIds: [11, 12, 13, 14, 16, 17, 18, 19, 20],
    grupos: [
      { titulo: 'Paredes', ids: [16, 17] },
      { titulo: 'Janela', ids: [19, 20] },
      { titulo: 'Chão', ids: [18] },
      { titulo: 'Luz', ids: [11, 12, 13, 14] },
    ],
  },
};

export const guides = [
  {
    slug: 'organizacao-cozinha-pequena-liberar-bancada',
    capa: 2,
    area: 'cozinha',
    titulo: 'Organização de cozinha pequena: 7 itens que liberam a bancada',
    descricao: 'Sete itens de organização para cozinha pequena que tiram temperos, detergente, escorredor e lixo de cima da bancada.',
    intro: [
      'Em cozinha pequena, a bancada vira depósito: temperos, esponja, detergente, escorredor, lixeira. A saída raramente é comprar mais coisa. É tirar o que está solto e dar um lugar fixo para cada item.',
      'Estes sete itens atacam o que mais costuma ficar espalhado sobre a bancada. Todos foram escolhidos pelo tipo de produto, pela reputação do vendedor e pela nota de quem já comprou, e não por teste nosso.',
    ],
    criterios: [
      'Meça antes de comprar: bancada, prateleira e gaveta.',
      'Prefira itens que usam a altura (prateleira, gancho) em vez de ocupar mais chão ou bancada.',
      'Compre poucos itens grandes, não muitos pequenos.',
      'Olhe a nota e o número de opiniões: poucas opiniões significam menos histórico, mesmo com nota alta.',
    ],
    sections: [
      { titulo: 'O que sai da bancada', texto: 'Cada item abaixo substitui algo que hoje está solto.', ids: [2, 9, 6, 8, 1, 5, 7] },
    ],
    erros: [
      'Comprar o organizador sem medir o espaço onde ele vai ficar.',
      'Comprar potes e não esvaziar as embalagens: o ganho de espaço só aparece se o pote substituir a embalagem.',
      'Devolver tudo para a bancada em duas semanas. Defina o que mora fora e o que mora dentro.',
    ],
    faq: [
      ['Por onde começar?', 'Tire tudo da bancada, devolva só o que você usa todo dia e dê lugar fixo ao resto. Só então compre o que faltar.'],
      ['Preciso furar a parede?', 'Os itens desta lista são de bancada, armário ou pia. Só os ganchos ficam na parede, e são adesivos.'],
      ['Esses itens servem para apartamento alugado?', 'Sim: nenhum depende de obra. Teste o adesivo dos ganchos num ponto escondido antes de usar.'],
    ],
    relacionados: ['organizar-armarios-cozinha-pequena-sem-reforma'],
  },
  {
    slug: 'organizar-armarios-cozinha-pequena-sem-reforma',
    capa: 5,
    area: 'cozinha',
    titulo: 'Como organizar armários de cozinha pequena sem reforma',
    descricao: 'Seis itens para organizar armários e gavetas de cozinha pequena sem reforma e sem furar nada.',
    intro: [
      'Armário de cozinha pequena costuma ter o mesmo defeito: muito espaço vazio em cima e uma pilha embaixo. Duas prateleiras a mais já mudam isso.',
      'A lista abaixo mistura itens de armário, gaveta e porta. Nenhum deles exige obra, e o único que se prende na parede usa adesivo.',
    ],
    criterios: [
      'Meça a largura, a altura e a profundidade interna do armário.',
      'Pense primeiro no que fica mais à mão: o que você usa todo dia vai na frente.',
      'Aproveite a altura com prateleira extra e a porta com gancho.',
    ],
    sections: [
      { titulo: 'Armário, gaveta e porta', texto: 'Itens para dar um lugar fixo a panelas, talheres, mantimentos e temperos.', ids: [5, 10, 3, 1, 2, 7] },
    ],
    erros: [
      'Instalar prateleira ajustável sem conferir a medida interna do armário.',
      'Guardar tudo em pote e esquecer de etiquetar o que tem dentro.',
      'Colocar peso demais no gancho adesivo. Veja o limite no anúncio.',
    ],
    faq: [
      ['A prateleira de tensão não estraga o armário?', 'O anúncio informa que ela se prende por tensão, sem parafuso. Siga a orientação de instalação do vendedor e não exceda o peso indicado.'],
      ['Dá para usar em armário alugado?', 'Pelo tipo de produto, sim: nada exige furo. Confira o que o contrato de locação diz sobre alterações.'],
    ],
    relacionados: ['organizacao-cozinha-pequena-liberar-bancada'],
  },
  {
    slug: 'decoracao-apartamento-alugado-sem-furar-parede',
    capa: 19,
    area: 'decoracao',
    titulo: 'Decoração de apartamento alugado sem furar a parede: 9 ideias',
    descricao: 'Nove ideias de decoração para apartamento alugado que dispensam obra e, na maioria, furo na parede: quadros, cortina, tapete e luz.',
    intro: [
      'Em apartamento alugado, a regra é mudar o visual sem deixar marca. Dá para fazer bastante com fita adesiva, varão sem furo, tapete e luz que só precisa de tomada.',
      'As nove ideias abaixo estão separadas por parte da casa. Elas foram escolhidas pelo tipo de produto e pelo histórico de avaliações dos vendedores, e não por teste nosso. Em todas, o cuidado principal é o mesmo: ler o anúncio e testar o adesivo num ponto escondido.',
    ],
    criterios: [
      'Tudo precisa ser reversível: adesivo removível, varão de pressão, objeto de apoio.',
      'Teste o adesivo num canto escondido antes de usar na parede principal.',
      'Leia o contrato de locação: ele pode limitar pintura, adesivo e qualquer alteração.',
      'Meça a parede, a janela e o cômodo antes de comprar.',
    ],
    sections: [
      { titulo: 'Paredes', texto: 'Mudar a parede sem obra: fita para quadro e papel adesivo.', ids: [16, 17] },
      { titulo: 'Janela', texto: 'Cortina e varão sem furar a parede.', ids: [20, 19] },
      { titulo: 'Chão', texto: 'Um tapete define a sala ou o quarto.', ids: [18] },
      { titulo: 'Luz', texto: 'Luz de tomada ou de bateria, sem instalação.', ids: [11, 12, 13, 14] },
    ],
    erros: [
      'Aplicar papel de parede adesivo sem checar se é removível.',
      'Pendurar quadro pesado com fita fraca. Confira o peso permitido.',
      'Comprar varão extensível sem conferir o peso máximo, principalmente para cortina grossa.',
      'Não ler o contrato: o que parece pequeno pode ser proibido.',
    ],
    faq: [
      ['Fita dupla face estraga a parede?', 'Pode soltar tinta ao ser removida, principalmente em tinta fraca. Teste num ponto escondido e remova devagar.'],
      ['Dá para decorar sem gastar muito?', 'Dá para começar por um item só: um tapete ou uma luz mudam o ambiente. Compre aos poucos.'],
      ['Preciso avisar o proprietário?', 'Depende do contrato. Se o item for adesivo ou mexer na parede, vale perguntar.'],
    ],
    relacionados: ['iluminacao-apartamento-alugado-luminarias-sem-obra'],
  },
  {
    slug: 'iluminacao-apartamento-alugado-luminarias-sem-obra',
    capa: 11,
    area: 'decoracao',
    titulo: 'Iluminação para apartamento alugado: 4 luminárias que não pedem obra',
    descricao: 'Quatro luminárias para apartamento alugado que funcionam sem instalação: abajur, luminária de chão, barra de LED e varal de luzes.',
    intro: [
      'Muitos apartamentos alugados vêm com uma lâmpada fria no teto e só. Dá para melhorar a luz do ambiente sem mexer na instalação elétrica, usando luz de apoio.',
      'São quatro opções: duas de tomada comum, uma recarregável e uma de decoração. Veja o que cada uma resolve antes de escolher.',
    ],
    criterios: [
      'Confira a voltagem do anúncio e a da sua casa.',
      'Veja se a lâmpada vem inclusa (o abajur informa que sim).',
      'Escolha uma luz de apoio para cada ambiente, não várias iguais.',
      'Prefira luz quente em quarto e sala.',
    ],
    sections: [
      { titulo: 'Luz de apoio', texto: 'Do abajur de mesa à barra de LED, cada uma resolve um uso.', ids: [11, 12, 13, 14] },
    ],
    erros: [
      'Comprar luminária sem conferir a voltagem.',
      'Usar luz fria demais em quarto.',
      'Deixar a barra de LED sem carregar e achar que ela não funciona.',
    ],
    faq: [
      ['Qual escolher primeiro?', 'Se o ambiente é pouco iluminado, comece pelo abajur ou pela luminária de chão. Para armário e cantos escuros, a barra de LED.'],
      ['Precisa de instalação?', 'Os produtos desta lista não exigem obra: usam tomada ou bateria, segundo os anúncios.'],
    ],
    relacionados: ['decoracao-apartamento-alugado-sem-furar-parede'],
  },
];

export const guideBySlug = (slug) => guides.find((g) => g.slug === slug);
