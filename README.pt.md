<div align="center">

# Keyboard Maestro para iniciantes

[中文](./README.md) · [English](./README.en.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Español](./README.es.md) · **Português** · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Русский](./README.ru.md) · [العربية](./README.ar.md)

### Aproveite ao máximo o Keyboard Maestro: deixe as tarefas repetitivas com uma só tecla

O Keyboard Maestro é uma ferramenta de automação para Mac: você cria macros no editor, e o Engine (a parte que roda em segundo plano) executa tudo para você.<br>Este guia segue a wiki oficial do Keyboard Maestro e transforma o conteúdo em três lições curtas, para que mesmo quem nunca automatizou nada consiga acompanhar.

**[Comece pela lição 1 →](https://keyboardmaestro.xiaoxiaodong.ai/pt/start/1-first-macro/)**　·　**[Já usa o app? Veja o guia completo (em inglês) →](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/0-what/)**

<sub>Não oficial · gratuito · código aberto · 10 idiomas (completo em chinês e inglês)</sub>

</div>

<p align="center">
  <img src="assets/en/hero.svg" width="100%" alt="Demonstração: quatro teclas, ⌃⌥⌘T, são pressionadas e uma macro chamada “Start my day” entra em ação. No cartão da macro, a linha Hot Key acende primeiro e depois as três ações acendem uma a uma: Activate a Specific Application abre o Calendário, Open a URL abre uma página da web e Manipulate a Window move a janela do navegador para a metade direita da tela, enquanto uma tela pequena ao lado mostra as janelas do Calendário e do navegador aparecendo. À esquerda, as três lições para iniciantes se acendem: instale e abra seu app favorito com uma tecla; digite poucas letras e receba um parágrafo inteiro; uma tecla, uma rotina inteira">
</p>

## Parece familiar?

Você abre o seu Mac de manhã, clica no Calendário, abre a página da web que confere todo dia e depois arrasta cada janela para o lugar onde gosta de deixá-la. Ao longo do dia, você digita o mesmo endereço e a mesma resposta várias vezes. Cada vez leva só alguns segundos, mas isso se repete todos os dias.

O Keyboard Maestro passa tudo isso para as macros. Uma macro define duas coisas: quando começar (os gatilhos) e o que fazer depois que começar (as ações). A partir daí, você aperta uma tecla ou digita poucas letras, e ele executa os passos por você. As macros ficam organizadas em grupos de macros, que funcionam como pastas que também decidem em quais apps, e em que momentos, essas macros ficam ativas.

<p align="center">
  <img src="assets/en/readme/macro.svg" width="100%" alt="As três colunas do editor do Keyboard Maestro. Em Macro Groups (onde as macros ficam e funcionam), Global Macro Group está selecionado, com Mail e Safari logo abaixo. Em Macros (uma pequena tarefa em cada uma), “Start my day” está selecionada. Depois vem a macro em si: em Triggered by any of the following aparecem Hot Key ⌃⌥⌘T e Time of Day 9:00, e qualquer um deles dispara a macro; em Will execute the following actions aparecem Activate a Specific Application, Open a URL e Manipulate a Window, executadas de cima para baixo, uma de cada vez. Embaixo: uma macro só dispara quando ela está habilitada e seu grupo de macros também está habilitado e ativo.">
</p>

## Dois programas: um para criar, outro para rodar

Ao instalar, você ganha dois programas. O **Keyboard Maestro** é o editor: você abre essa janela quando quer criar ou editar macros, ele salva sozinho poucos segundos depois de cada alteração (não existe opção de salvar) e você pode fechá-lo quando terminar. Já o **Keyboard Maestro Engine** fica rodando em segundo plano o tempo todo: ele escuta suas teclas de atalho, acompanha o relógio, observa quais apps estão abertos, guarda o seu histórico da área de transferência e é quem realmente executa suas macros. Se o Engine não estiver rodando, nada dispara — por isso, a recomendação oficial é ativar **Launch Engine at Login** (iniciar o Engine ao iniciar a sessão) nas preferências.

<p align="center">
  <img src="assets/en/readme/editor-engine.svg" width="100%" alt="À esquerda, o editor, Keyboard Maestro: onde você cria e altera macros; salva sozinho segundos depois de cada mudança, sem precisar salvar; você pode fechá-lo quando terminar. À direita, o Engine, Keyboard Maestro Engine: roda em segundo plano sem abrir janela; escuta teclas de atalho, acompanha o relógio e monitora apps; é a parte que realmente executa suas macros. Suas macros vão do editor para o Engine; mesmo depois de fechar o editor, apertar ⌃⌥⌘T continua rodando a macro. Embaixo: mantenha o Engine rodando ativando Launch Engine at Login nas preferências.">
</p>

## Três lições, uma coisa de cada vez

Você não precisa programar nem aprender cem ações antes de começar. Cada lição resolve uma coisa, e ao final você sai com mais uma macro funcionando.

<p align="center">
  <img src="assets/en/readme/lessons.svg" width="100%" alt="As três lições para iniciantes. Lição 1, 15 minutos: instale e abra seu app favorito com uma tecla — ao final, você tem uma tecla de atalho que abre o app que usa todo dia. Lição 2, 10 minutos: digite poucas letras e receba um parágrafo inteiro — ao final, poucas letras viram um parágrafo completo. Lição 3, 15 minutos: uma tecla, uma rotina inteira — ao final, uma só tecla roda sua rotina da manhã: apps, uma página da web e as janelas no lugar certo.">
</p>

1. **[Instale e abra seu app favorito com uma tecla](https://keyboardmaestro.xiaoxiaodong.ai/pt/start/1-first-macro/)** (15 minutos): Baixe o app, conceda as permissões, mantenha o Engine rodando e crie sua primeira macro: uma tecla de atalho que abre o app que você usa todos os dias.
2. **[Digite poucas letras e receba um parágrafo inteiro](https://keyboardmaestro.xiaoxiaodong.ai/pt/start/2-type-less/)** (10 minutos): Aquele endereço, apresentação ou resposta que você digita todo dia vai para um gatilho de texto digitado: basta digitar poucas letras e o texto inteiro aparece.
3. **[Uma tecla, uma rotina inteira](https://keyboardmaestro.xiaoxiaodong.ai/pt/start/3-one-key-routine/)** (15 minutos): Transforme os cliques de toda manhã em uma só macro: abra alguns apps e uma página da web, coloque as janelas no lugar e depois aprenda como interromper a macro e onde olhar quando algo não sair como esperado.

## O guia completo

Terminou as lições e quer criar macros que se adaptam, usar uma área de transferência com memória e saber descobrir por que algo não disparou? Siga estes passos na ordem (páginas em inglês):

| Passo | Tema | Em uma linha |
| --- | --- | --- |
| 0 | [O que é o Keyboard Maestro](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/0-what/) | Automação para Mac: você cria macros no editor e o Engine roda tudo em segundo plano. Toda macro combina um “quando” com um “o quê” |
| 1 | [Grupos de macros: onde as macros funcionam](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/1-groups/) | Um grupo de macros é uma pasta que também decide quando suas macros ficam ativas: só em certos apps, só depois que você ativar, ou exibidas em uma paleta (um painel flutuante de botões) |
| 2 | [Gatilhos: quando uma macro começa](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/2-triggers/) | Uma tecla de atalho, um texto digitado, um horário do dia, um app abrindo, uma rede Wi-Fi, um arquivo novo em uma pasta: escolha o momento mais natural |
| 3 | [Ações: o que uma macro faz](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/3-actions/) | Digitação, toques de tecla, menus, apps, janelas, cliques e arquivos: conheça a dúzia de ações que você mais vai usar e procure o resto quando precisar |
| 4 | [Variáveis, condições e loops: macros que se adaptam](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/4-variables/) | Guardar um texto, fazer uma pergunta para você, seguir caminhos diferentes conforme o que está na tela, esperar algo acontecer: a macro deixa de ser uma sequência fixa de teclas |
| 5 | [A área de transferência: tudo o que você copiou continua lá](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/5-clipboard/) | O histórico da área de transferência permite colar o que você copiou antes, as áreas de transferência nomeadas guardam itens de forma permanente e os filtros transformam o texto antes de colar |
| 6 | [Quando uma macro não funciona](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/6-debug/) | Confira primeiro as permissões e o Engine, depois veja se o grupo está ativo. Ainda empacou? Acompanhe passo a passo com o depurador ou leia o log do Engine (registro de atividade) |
| 7 | [Indo além: scripts, sub-rotinas, sincronização e compartilhamento](https://keyboardmaestro.xiaoxiaodong.ai/en/guide/7-advanced/) | Conecte shell scripts, AppleScript e JavaScript, transforme passos repetidos em sub-rotinas, sincronize entre dois Macs e compartilhe macros com outras pessoas |

## Guias práticos: tarefas específicas

- **Digitação e texto**: [Transforme o que você digita com frequência em abreviações](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/text-snippets/) · [Insira a data de hoje com uma tecla](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/insert-date/) · [Cole sem formatação](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/paste-plain/) · [Preencha o mesmo formulário com uma tecla](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/fill-form/)
- **Apps e janelas**: [Vá direto para um app com uma tecla](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/app-hotkeys/) · [Coloque suas janelas onde você quiser](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/window-layout/) · [Crie um atalho para um comando de menu que não tem um](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/menu-shortcut/)
- **Arquivos**: [Renomeie vários arquivos de uma vez](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/rename-files/) · [Organize arquivos assim que eles chegarem a uma pasta](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/watch-folder/)
- **Tela e mouse**: [Encontre um botão na tela e clique nele](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/click-image/) · [Leia o texto que aparece na tela](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/ocr-text/)
- **Com hora marcada**: [Execute algo no mesmo horário todos os dias](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/daily-schedule/) · [Faça algo ao entrar em uma rede Wi-Fi ou conectar um dispositivo](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/wifi-usb/)
- **Perguntando antes**: [Faça uma pergunta antes de executar a tarefa](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/ask-input/) · [Crie uma fileira de botões que executam macros](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/palette/)
- **Guardar e compartilhar**: [Use as mesmas macros em dois Macs](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/sync-macs/) · [Exporte, importe e compartilhe macros](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/share-macros/) · [Quando uma macro não para de rodar](https://keyboardmaestro.xiaoxiaodong.ai/en/howto/stop-macro/)

Empacou em alguma palavra ou ficou na dúvida sobre algo? Consulte a **[Wiki](https://keyboardmaestro.xiaoxiaodong.ai/en/wiki/)** e o **[FAQ](https://keyboardmaestro.xiaoxiaodong.ai/en/faq/)** (em inglês).

## De onde vem este conteúdo

Cada recurso, opção e caminho de menu foi conferido na [wiki oficial do Keyboard Maestro](https://wiki.keyboardmaestro.com/), com link direto na página. Os nomes dos botões aparecem exatamente como o app mostra. Este guia foi verificado no Keyboard Maestro 11.1.1 (2026-11-24), que exige macOS 10.13 ou posterior. Relatos do fórum são citados apenas como experiências que alguém testou, sempre com o link.

Este guia não oferece chaves de licença, cracks nem links alternativos de download; baixe o Keyboard Maestro pelo [site oficial](https://www.keyboardmaestro.com/). Ele nunca pede para você desativar os ajustes de segurança do macOS, e as permissões são concedidas exatamente como a wiki oficial descreve.

Este é um guia não oficial, sem vínculo com a Stairways Software, e não fala em nome dela. Keyboard Maestro é uma marca registrada da Stairways Software Pty Ltd. Os recursos mudam com o tempo, então a wiki oficial e o próprio app continuam sendo a referência.

## Rode localmente

```bash
npm install
npm run dev        # http://localhost:4446
npm run build      # saída em dist/
npm run check      # depois do build: idiomas, site completo e rótulos de interface
```

As ilustrações do README e as imagens de compartilhamento são geradas por script: `python3 tools/build_hero.py`, `python3 tools/build_readme_svgs.py` e `npm run og`; consulte a seção 「README 插画和分享大图」 em [docs/MAINTAINING.md](docs/MAINTAINING.md) (em chinês), que também cobre as regras de redação, as fontes e os scripts que sincronizam a wiki oficial e conferem os nomes dos botões. A estrutura do site vem de [Saily for Beginners](https://github.com/nevertoday/xxd-saily) e [Grok Bot for Beginners](https://github.com/nevertoday/xxd-grokbot), e a interface usa o 小小东 UI Kit.

O código e os textos estão sob a licença MIT; veja [LICENSE](LICENSE). A pasta `public/xxd/` é resultado do build do 小小东 UI Kit e não é coberta pela licença MIT; veja `public/xxd/LICENSE`.
