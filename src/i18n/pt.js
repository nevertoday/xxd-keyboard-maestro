// Tradução em português do Brasil (pt-BR) dos textos de interface e da página inicial.
// {nome} é um marcador substituído por fmt(); mantenha exatamente como está.
// Este idioma traz a página inicial e as três lições para iniciantes; o guia completo,
// os guias práticos, a wiki e o FAQ apontam para a versão em inglês.
export default {
  ui: {
    brand: "Keyboard Maestro para iniciantes",
    desc: "Um guia não oficial do Keyboard Maestro: passe para as macros o que você repete todo dia no Mac ao digitar, clicar e abrir apps. Da instalação e da sua primeira macro até variáveis, área de transferência e depuração, em linguagem simples.",
    skip: "Pular para o conteúdo",
    menu: "Abrir menu",
    search: "Buscar no guia",
    searchPh: "Buscar lições, passos, guias práticos, termos…",
    searchEmpty: "Nada encontrado. Tente outra palavra",
    look: "Aparência",
    lang: "Idioma",
    repo: "Este guia no GitHub",
    repoMore: "Mais: a wiki oficial e o site do Keyboard Maestro",
    repoDefault: "Padrão",
    // Três links: [nome, breve descrição], em ordem fixa (este guia, wiki oficial, site oficial)
    repos: [
      ["Este guia", "Código-fonte deste guia; relate problemas aqui"],
      ["Wiki do Keyboard Maestro", "A fonte definitiva sobre os recursos e como eles funcionam"],
      ["Site do Keyboard Maestro", "Download e compra"],
    ],
    navLabel: "Navegação do site",
    start: "Começar",
    home: "Início",
    lessons: "Para iniciantes: três lições",
    more: "Mais (em inglês)",
    main: "Guia completo: 8 passos",
    howto: "Guias práticos: como fazer",
    wiki: "Wiki: o que é",
    faq: "FAQ",
    toc: "Nesta página",
    tocLabel: "Nesta página",
    hintMain: "Guia completo (em inglês)",
    hintLesson: "Para iniciantes",
    hintFaq: "FAQ (em inglês)",
    hintOther: "Em inglês",
    section: "Seção",
    // Texto do link {docs} no rodapé (wiki oficial); {docs} e {github} viram links
    docsLink: "wiki oficial",
    foot: "Um guia não oficial do Keyboard Maestro, sem vínculo com a Stairways Software. Keyboard Maestro é uma marca comercial da Stairways Software Pty Ltd. Sobre os recursos e como eles funcionam, a {docs} é a fonte definitiva. O código-fonte e o feedback deste guia ficam no {github}.",
    // Painel de aparência na barra superior
    appearance: {
      group: "Aparência", theme: "Tema", light: "Claro", dark: "Escuro", system: "Sistema",
      corners: "Cantos arredondados", cornersDesc: "Desativado mantém todos os cantos retos",
      accent: "Cor de destaque", accentDesc: "Usada em botões, seleção e foco",
    },
  },

  // Textos da página inicial
  home: {
    h1: "Passe para o Keyboard Maestro o que você repete todo dia no seu Mac",
    // lead: primeira parte, trecho destacado e parte final
    lead: ["O Keyboard Maestro é um app de automação para Mac feito pela Stairways Software. Você diz quando agir e o que fazer: apertar esta tecla abre aquele app, digitar estas poucas letras coloca um parágrafo inteiro no lugar delas. Depois que você explica uma vez, ele faz o trabalho em segundo plano, sempre do mesmo jeito. Este site é para quem nunca automatizou nada e também para quem já usa o programa e quer ir além. ", "Este é um guia não oficial", ", sem vínculo com a Stairways Software. Sobre os recursos e como eles funcionam, a wiki oficial é a fonte definitiva."],
    cta: ["Primeira vez? Comece pela lição 1", "Já usa? Guias práticos (em inglês)"],
    ctaNote: "Na lição 1 você cria uma tecla que abre um app, na lição 2 transforma poucas letras em um parágrafo inteiro, e na lição 3 faz uma única tecla rodar a sua rotina do começo do dia. Não precisa de código.",
    painH: "Parece familiar?",
    PAIN: [
      "Respondendo aos seus pais, clientes ou colegas, você digita “Certo, obrigado, dou um retorno até sexta-feira” letra por letra várias vezes por dia.",
      "Toda manhã você abre o Mail, o Calendário e a mesma página na web, e depois arrasta cada janela de volta para o lugar antes de conseguir começar.",
      "Tem um comando de menu que você usa todo dia e que não tem atalho, então toda vez você precisa sair procurando com o mouse.",
      "Em toda candidatura ou orçamento, você precisa copiar a mesma apresentação e os mesmos dados de contato do anterior.",
      "Você copia algo importante, depois copia outra coisa, e a primeira some para sempre.",
      "Toda noite, no mesmo horário, você precisa abrir a mesma planilha para anotar a pressão dos seus pais, e nos dias corridos acaba esquecendo.",
    ],
    lessonsH: "Para começar, bastam três lições",
    lessonsP: "Leia na ordem. Cada uma leva dez ou quinze minutos e você vai montando enquanto lê. Depois dessas três, você já consegue criar suas próprias macros, e todo o resto do site fica aqui para consultar quando precisar.",
    lessonsLabel: "Para iniciantes: 3 lições",
    tracksH: "Depois que pegar o jeito",
    tracksP: "Depois de algumas macros, você vai querer que ele faça mais. O guia completo tem 8 passos, divididos mais ou menos em três caminhos. Comece pelo que você precisa agora.",
    // O guia completo está disponível apenas em inglês e chinês por enquanto
    devNote: "Por enquanto, o guia completo está em inglês (e chinês). As três lições para iniciantes estão em português.",
    // TRACKS: cada item é [título, descrição], com ordem e passos fixos
    TRACKS: [
      ["Como uma macro funciona", "Os grupos de macros definem onde uma macro atua, os gatilhos definem quando ela começa e as ações dizem o que ela faz. Entendendo esses três pontos, você já consegue montar a maioria das macros por conta própria."],
      ["Macros que se adaptam", "Guardar um texto, fazer uma pergunta para você, seguir por um caminho diferente dependendo do que está acontecendo, esperar algo acontecer antes de continuar. E recuperar qualquer coisa que você já copiou."],
      ["Quando dá errado, e como ir além", "Quando uma macro não funciona, confira primeiro as permissões e o Engine, e depois avance passo a passo para ver onde ela travou. Mais adiante, conecte scripts, use as mesmas macros em dois Macs e compartilhe macros com outras pessoas."],
    ],
    tracksLabel: "Passos correspondentes no guia completo",
    // Link para um passo do guia completo: {n} é o número do passo, {title} é o título em inglês
    stepLink: "Passo {n}: {title}",
    pending: "Em andamento",
    fitH: "É para você?", yesH: "Sim, se", noH: "Ainda não, se",
    YES: [
      "Existe algo que você faz no seu Mac várias vezes por dia e gostaria de delegar",
      "Você não programa. As três lições para iniciantes não precisam de uma única linha de código",
      "Você topa gastar alguns minutos liberando permissões do sistema como Acessibilidade, já que o app aperta teclas, escolhe menus e move janelas no seu lugar",
      "Você quer testar antes de decidir. O programa é pago, mas o site oficial oferece uma versão de teste totalmente funcional",
    ],
    NO: [
      "Você não usa Mac. Ele funciona só no Mac e precisa do macOS 10.13 ou mais recente",
      "Você não quer dar permissões do sistema a nenhum app. Sem elas, muitas macros não conseguem rodar",
      "É uma tarefa pontual. Fazer uma vez na mão é mais rápido",
    ],
  },

  // Título, tempo e resumo das três lições para iniciantes na navegação e na página inicial
  lessons: [
    { title: "Instale e abra seu app favorito com uma tecla", minutes: "15 minutos", sum: "Baixe, libere as permissões, mantenha o Engine rodando e crie sua primeira macro: uma tecla de atalho que abre o app que você usa todo dia" },
    { title: "Digite poucas letras e receba um parágrafo inteiro", minutes: "10 minutos", sum: "O endereço, a apresentação ou a resposta que você digita todo dia vai para um gatilho de texto digitado: você digita poucas letras e o texto inteiro aparece" },
    { title: "Uma tecla, uma rotina inteira", minutes: "15 minutos", sum: "Transforme os cliques que você faz toda manhã em uma única macro: abra alguns apps e uma página na web, coloque as janelas no lugar e aprenda a interromper a execução e onde olhar quando algo não der certo" },
  ],

  // Estrutura da página de cada lição
  lesson: {
    eyebrow: "Para iniciantes · lição {n} de {total}",
    prog: "Progresso: lição {n} de {total}",
    nav: "Lição anterior e próxima",
    prev: "Anterior",
    next: "Próxima",
    title: "Lição {n}: {title}",
    tldr: "Em uma frase",
  },

  // Componentes usados nas páginas
  comp: {
    callout: { ok: "Você deve ver", warn: "Atenção", no: "Não faça isso", tip: "Dica" },
    copyTitle: "Copie isto",
    copy: "Copiar",
    cmdDone: "Comando copiado",
    cmdLabel: "Copiar comando: {c}",
    reply: "Ilustração: mais ou menos o que o Keyboard Maestro mostra",
    // Linha de feedback no final da página: {lead} {link gh}{faq[0]}{link faq[1]}{faq[2]}
    feedback: {
      lead: "Alguma parte desta página ficou confusa ou não funcionou como descrito?",
      gh: "Avise no GitHub",
      faq: [". Ou confira o ", "FAQ", " primeiro."],
    },
    // Cartão de dúvidas e discussões no fim da página inicial e do FAQ
    contact: {
      h: "Dúvidas e discussões",
      p: "Travou em algum passo, achou algo confuso ou criou uma macro que vale a pena compartilhar? Leve para o GitHub. As dúvidas que mais aparecem acabam entrando no guia. Pode escrever em português sem problema.",
      faq: ["Antes de perguntar, confira o ", "FAQ", ": muitas respostas já estão lá."],
      btn: "Perguntar ou discutir no GitHub",
      x: "O autor está no X",
      privacy: "Antes de enviar capturas de tela ou macros exportadas, remova os dados da sua licença, senhas e qualquer texto pessoal salvo em variáveis ou áreas de transferência.",
    },
  },
  figs: { ui: { label: "Diagrama", replay: "Ver de novo" } },
};
