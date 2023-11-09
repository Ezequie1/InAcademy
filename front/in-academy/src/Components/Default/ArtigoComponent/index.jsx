import React, { useEffect, useState } from "react";
import './style.css'
import Checkbox from '@mui/material/Checkbox';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { ArtigoCard } from "../ArtigoCard";

export function ArtigoComponent(props){

    const [reset, setReset] = useState(false);

    function resetCheckbox(){
        setReset(true);

        setInterval(() =>  setReset(false), 100);
    }

    function RenderItem(props){
        const [check, setCheck] = useState(props.value == 'Todos' ? true : false );

        useEffect(() => { if(reset) setCheck(false) })

        return(
            <div className="itemFilter">
                <div className="lineFilter">
                    <p>{props.value}</p>
                    <p className="totalItens">({props.total})</p>
                </div>
                <Checkbox checked={check} onChange={() => setCheck(!check)}/>
            </div>
        )
    }

    return(
        <div className="divArtigo">
            <div className="divFiltro">
                <h5 className="tituloFiltro">Filtra por</h5>
                <p className="infoFiltro">Selecione o filtro que deseja aplicar (max: 3)</p>
                <RenderItem reset={reset} value='Todos' total={723}/>
                <RenderItem reset={reset} value='Tecnologia' total={124}/>
                <RenderItem reset={reset} value='Bem estar' total={32}/>
                <RenderItem reset={reset} value='Gestão' total={142}/>
                <RenderItem reset={reset} value='Arquiteura e Design' total={15}/>
                <RenderItem reset={reset} value='Cloud' total={87}/>
                <RenderItem reset={reset} value='IA' total={92}/>
                <RenderItem reset={reset} value='Cibersecurity' total={45}/>
                <RenderItem reset={reset} value='Pensar Lean' total={45}/>

                <div className="divButtonFilter">
                    <button className="cleanFilter" onClick={resetCheckbox}>
                        <h5>Limpar filtros</h5> <FilterAltOffIcon fontSize="small"/>
                    </button>
                </div>
                
            </div>
            <div className="artigos">
                <ArtigoCard  author="Marcos Paulo de Azevedo" rate={4.2} timePub='27/10/2023' title="Outubro rosa é de todas as cores" fav={true} text="Outubro chegou e com ele, as cores do outono começam a pintar o mundo. Mas não é apenas o dourado das folhas que se destaca nesse mês, é também o rosa vibrante que inunda nossos corações e mentes. É o mês do Outubro Rosa, um período dedicado à conscientização e à importância da prevenção do câncer de mama. E para celebrar essa causa tão nobre, permitam-me contar a história da minha tia Matilde.
                    Ti Matê era uma pessoa única em todos os sentidos. Com seus cabelos ruivos e um sorriso que iluminava qualquer cômodo, ela era a alma da família. Uma verdadeira força da natureza, nunca deixou que os obstáculos a impedissem de viver a vida ao máximo. Ela era a dona daquele abraço acolhedor que fazia todas as preocupações desaparecerem, e sua risada contagiante era uma sinfonia que todos adoravam ouvir.
                    Porém, havia um vilão silencioso que se escondia em seu corpo: o câncer de mama. Durante muito tempo ela travou uma batalha corajosa contra essa doença traiçoeira, mas, infelizmente, nos deixou cedo demais. O coração da nossa família ficou mais vazio naquele dia, mas sua memória e seu espírito permanecem vivos em nossos corações.
                    O Outubro Rosa é um lembrete de que todas as 'Matildes' deste mundo, todas as pessoas queridas em nossas vidas, merecem a chance de lutar e vencer o câncer de mama. É um mês em que celebramos a importância da detecção precoce, da educação e do apoio. É um mês em que nos unimos para criar um futuro em que menos famílias passem pela dor que a nossa passou.
                    A cada outubro, o rosa se espalha como uma corrente de esperança. Pessoas se vestem de rosa, laços e fitas cor-de-rosa enfeitam as cidades, e eventos são organizados para arrecadar fundos e conscientizar. É um momento em que todos, independentemente de gênero ou idade, podem se unir em prol de uma causa que afeta milhões de vidas.
                    Enquanto recordamos a história da minha tia Matê, lembramos que ela não estava sozinha em sua luta. Milhares de guerreiras e guerreiros travam essa batalha todos os dias, e o Outubro Rosa nos lembra que podemos fazer a diferença. Podemos apoiar uns aos outros, espalhar a conscientização e incentivar a pesquisa médica para encontrar curas.
                    Portanto, neste Outubro Rosa, honremos a memória de todas as tia Matês e de todos aqueles que perderam a luta contra o câncer de mama. Vamos nos comprometer a fazer a nossa parte, para que, um dia, nenhuma família tenha que enfrentar a perda de um ente querido para essa doença. Vamos abraçar o rosa com amor, esperança e determinação, para que ele ilumine o caminho daqueles que ainda lutam e inspire o mundo a agir.
                    O Outubro Rosa é mais do que apenas uma cor; é um símbolo de amor, esperança e unidade. Que a nossa jornada contra o câncer de mama seja acima de tudo, consciente e bem-sucedida. Juntos, podemos pintar o mundo de rosa, tornando-o mais brilhante e, quem sabe, mais saudável para as gerações futuras. Por fim o Outubro é rosa mas a luta é de todas as cores !!" src="https://d3a43hwv7gvd4j.cloudfront.net/Pictures_YouKnow/1697817810131outrosa.jpg?Expires=1698683607&Signature=oDbnf5hF3u9FcCOZcssWlc41bi9GW6~9gstnUnRO7eoOnK2TnJcpkemeamhDQv2Kzhh8Yi1MRInJC7ljww9oqNBAThFobeRsEarvzVS1FCzOtkoO~ykdw5LnGsznedBgCTE~CyYfP2NWdIky4yR~OzUnlb0VofGAUr4hWV2KolQ_&Key-Pair-Id=APKAISCSU5VMJAEZCN3Q"/>
                <ArtigoCard  author="Marcos Paulo de Azevedo" rate={4.6} timePub='22/09/2023' title="A Importância dos Testes de Acessibilidade em Softwares Mobile: Ninguém Deveria Ficar de Fora da Festa!" fav={false} text="Você já se deparou com um aplicativo móvel que parecia tão incrível, mas quando tentou usá-lo, percebeu que não era nada acessível para você? Se a resposta for sim, você sabe o quanto isso pode ser frustrante. A acessibilidade em softwares mobile é uma questão crucial, e neste artigo, vamos explorar por que os testes de acessibilidade são tão importantes, enquanto nos divertimos no processo.
                    Acessibilidade, afinal, o que é?
                    Antes de começarmos a 'festa', vamos definir o que é acessibilidade em softwares mobile. Acessibilidade se refere à capacidade de um aplicativo ou sistema ser utilizado por todas as pessoas, independentemente de suas habilidades ou limitações. Isso inclui pessoas com deficiências visuais, auditivas, motoras, cognitivas e outras.
                    Hora de entrar na 'festa'!
                    Agora que sabemos do que se trata, vamos abrir nossa mente. Imagine que a acessibilidade é uma festa e todos estão convidados, independentemente de suas capacidades. Mas como garantir que a festa seja acessível a todos? Aqui estão algumas razões para realizar testes de acessibilidade em softwares mobile:
                    1. Igualdade de Acesso
                    Acessibilidade é sobre proporcionar igualdade de acesso. Quando um aplicativo é acessível, todos podem participar da festa digital! Pessoas com deficiências não são deixadas de fora, e isso é algo que todos podem comemorar.
                    2. Expansão do Público
                    Quanto mais acessível for o seu aplicativo, maior será o público que poderá usá-lo. Você não quer que ninguém fique de fora da diversão, certo? Tornar seu aplicativo acessível é uma maneira de expandir sua base de usuários e atrair mais pessoas para sua festa digital.
                    3. Inovação Criativa
                    Quando os desenvolvedores consideram a acessibilidade desde o início do processo de criação de um aplicativo, isso estimula a inovação criativa. E, vamos ser sinceros, a diversão está em inovar e criar coisas incríveis que todos possam desfrutar.
                    4. Melhor Usabilidade para Todos
                    A acessibilidade não é apenas para pessoas com deficiências. Muitos recursos que tornam um aplicativo mais acessível também o tornam mais fácil de usar para todos. Botões maiores, contraste de cores adequado e instruções claras não beneficiam apenas aqueles com deficiências, mas todos os usuários.
                    5. Cumprindo Regulamentações
                    Em algumas regiões, há regulamentações que exigem que os aplicativos móveis sejam acessíveis. Portanto, realizar testes de acessibilidade não é apenas divertido, mas também uma obrigação legal.
                    6. Reputação Positiv
                    Aplicativos que priorizam a acessibilidade ganham uma reputação positiva. Isso pode ser uma ótima maneira de conquistar a lealdade dos usuários e obter boas avaliações, o que é uma recompensa divertida para qualquer desenvolvedor.
                    Como Começar a Diversão com Testes de Acessibilidade
                    Agora que entendemos a importância da acessibilidade em softwares mobile, é hora de começar a diversão! Aqui estão algumas dicas para iniciar:
                    Conheça as Diretrizes de Acessibilidade: Familiarize-se com as diretrizes de acessibilidade, como as Web Content Accessibility Guidelines (WCAG) e as Mobile Web Best Practices. Elas são como as regras da festa para garantir que todos possam aproveitar.
                    Use Ferramentas de Teste: Existem várias ferramentas de teste de acessibilidade disponíveis que podem ajudar a identificar problemas. Utilize-as para verificar seu aplicativo e fazer as correções necessárias.
                    Obtenha Feedback dos Usuários: Nada como uma pesquisa de campo para saber como seu aplicativo funciona para pessoas reais. Envolver pessoas com deficiências em seus testes é uma ótima maneira de obter feedback valioso.
                    Priorize a Acessibilidade desde o Início: Quanto mais cedo você começar a pensar em acessibilidade no processo de desenvolvimento, mais fácil será implementá-la.
                    Mantenha-se Atualizado: Acessibilidade é uma área em constante evolução. Continue aprendendo e acompanhando as melhores práticas.
                    Lembre-se, a festa da acessibilidade em softwares mobile é para todos, e todos são bem-vindos. Portanto, não deixe ninguém de fora da diversão digital! Certifique-se de que seu aplicativo seja acessível e, assim, todos poderão aproveitar a festa.
                    Acessibilidade não é apenas uma obrigação, é uma celebração da inclusão. Portanto, leve a sério os testes de acessibilidade em seu software mobile e divirta-se proporcionando igualdade de acesso a todos os usuários. Afinal, na festa da acessibilidade, todos são VIPs!" src="https://d3a43hwv7gvd4j.cloudfront.net/Pictures_YouKnow/1697814715164acessibilidade.jpg?Expires=1698683607&Signature=Lbor59c3bjgwoTsCLro2oiP~Hoyzx7Bt~~ulapn1ElcBSIybjI~NFgRKnuniGVNvkxvfSNZq9sqZkSo-jgM6Vqr0bZYtqvGuLnfibODO8BJ1Tiocku~gk8ktc5hO~sN0nwRqzdPhOGnC8wFbmEDlk3V6BQAZXr6lai2SAOPY~TA_&Key-Pair-Id=APKAISCSU5VMJAEZCN3Q"/>
                    <ArtigoCard  author="Marcos Paulo de Azevedo" rate={4.2} timePub='27/10/2023' title="Outubro rosa é de todas as cores" fav={true} text="Outubro chegou e com ele, as cores do outono começam a pintar o mundo. Mas não é apenas o dourado das folhas que se destaca nesse mês, é também o rosa vibrante que inunda nossos corações e mentes. É o mês do Outubro Rosa, um período dedicado à conscientização e à importância da prevenção do câncer de mama. E para celebrar essa causa tão nobre, permitam-me contar a história da minha tia Matilde.
                    Ti Matê era uma pessoa única em todos os sentidos. Com seus cabelos ruivos e um sorriso que iluminava qualquer cômodo, ela era a alma da família. Uma verdadeira força da natureza, nunca deixou que os obstáculos a impedissem de viver a vida ao máximo. Ela era a dona daquele abraço acolhedor que fazia todas as preocupações desaparecerem, e sua risada contagiante era uma sinfonia que todos adoravam ouvir.
                    Porém, havia um vilão silencioso que se escondia em seu corpo: o câncer de mama. Durante muito tempo ela travou uma batalha corajosa contra essa doença traiçoeira, mas, infelizmente, nos deixou cedo demais. O coração da nossa família ficou mais vazio naquele dia, mas sua memória e seu espírito permanecem vivos em nossos corações.
                    O Outubro Rosa é um lembrete de que todas as 'Matildes' deste mundo, todas as pessoas queridas em nossas vidas, merecem a chance de lutar e vencer o câncer de mama. É um mês em que celebramos a importância da detecção precoce, da educação e do apoio. É um mês em que nos unimos para criar um futuro em que menos famílias passem pela dor que a nossa passou.
                    A cada outubro, o rosa se espalha como uma corrente de esperança. Pessoas se vestem de rosa, laços e fitas cor-de-rosa enfeitam as cidades, e eventos são organizados para arrecadar fundos e conscientizar. É um momento em que todos, independentemente de gênero ou idade, podem se unir em prol de uma causa que afeta milhões de vidas.
                    Enquanto recordamos a história da minha tia Matê, lembramos que ela não estava sozinha em sua luta. Milhares de guerreiras e guerreiros travam essa batalha todos os dias, e o Outubro Rosa nos lembra que podemos fazer a diferença. Podemos apoiar uns aos outros, espalhar a conscientização e incentivar a pesquisa médica para encontrar curas.
                    Portanto, neste Outubro Rosa, honremos a memória de todas as tia Matês e de todos aqueles que perderam a luta contra o câncer de mama. Vamos nos comprometer a fazer a nossa parte, para que, um dia, nenhuma família tenha que enfrentar a perda de um ente querido para essa doença. Vamos abraçar o rosa com amor, esperança e determinação, para que ele ilumine o caminho daqueles que ainda lutam e inspire o mundo a agir.
                    O Outubro Rosa é mais do que apenas uma cor; é um símbolo de amor, esperança e unidade. Que a nossa jornada contra o câncer de mama seja acima de tudo, consciente e bem-sucedida. Juntos, podemos pintar o mundo de rosa, tornando-o mais brilhante e, quem sabe, mais saudável para as gerações futuras. Por fim o Outubro é rosa mas a luta é de todas as cores !!" src="https://d3a43hwv7gvd4j.cloudfront.net/Pictures_YouKnow/1697817810131outrosa.jpg?Expires=1698683607&Signature=oDbnf5hF3u9FcCOZcssWlc41bi9GW6~9gstnUnRO7eoOnK2TnJcpkemeamhDQv2Kzhh8Yi1MRInJC7ljww9oqNBAThFobeRsEarvzVS1FCzOtkoO~ykdw5LnGsznedBgCTE~CyYfP2NWdIky4yR~OzUnlb0VofGAUr4hWV2KolQ_&Key-Pair-Id=APKAISCSU5VMJAEZCN3Q"/>
                <ArtigoCard  author="Marcos Paulo de Azevedo" rate={4.6} timePub='22/09/2023' title="A Importância dos Testes de Acessibilidade em Softwares Mobile: Ninguém Deveria Ficar de Fora da Festa!" fav={false} text="Você já se deparou com um aplicativo móvel que parecia tão incrível, mas quando tentou usá-lo, percebeu que não era nada acessível para você? Se a resposta for sim, você sabe o quanto isso pode ser frustrante. A acessibilidade em softwares mobile é uma questão crucial, e neste artigo, vamos explorar por que os testes de acessibilidade são tão importantes, enquanto nos divertimos no processo.
                    Acessibilidade, afinal, o que é?
                    Antes de começarmos a 'festa', vamos definir o que é acessibilidade em softwares mobile. Acessibilidade se refere à capacidade de um aplicativo ou sistema ser utilizado por todas as pessoas, independentemente de suas habilidades ou limitações. Isso inclui pessoas com deficiências visuais, auditivas, motoras, cognitivas e outras.
                    Hora de entrar na 'festa'!
                    Agora que sabemos do que se trata, vamos abrir nossa mente. Imagine que a acessibilidade é uma festa e todos estão convidados, independentemente de suas capacidades. Mas como garantir que a festa seja acessível a todos? Aqui estão algumas razões para realizar testes de acessibilidade em softwares mobile:
                    1. Igualdade de Acesso
                    Acessibilidade é sobre proporcionar igualdade de acesso. Quando um aplicativo é acessível, todos podem participar da festa digital! Pessoas com deficiências não são deixadas de fora, e isso é algo que todos podem comemorar.
                    2. Expansão do Público
                    Quanto mais acessível for o seu aplicativo, maior será o público que poderá usá-lo. Você não quer que ninguém fique de fora da diversão, certo? Tornar seu aplicativo acessível é uma maneira de expandir sua base de usuários e atrair mais pessoas para sua festa digital.
                    3. Inovação Criativa
                    Quando os desenvolvedores consideram a acessibilidade desde o início do processo de criação de um aplicativo, isso estimula a inovação criativa. E, vamos ser sinceros, a diversão está em inovar e criar coisas incríveis que todos possam desfrutar.
                    4. Melhor Usabilidade para Todos
                    A acessibilidade não é apenas para pessoas com deficiências. Muitos recursos que tornam um aplicativo mais acessível também o tornam mais fácil de usar para todos. Botões maiores, contraste de cores adequado e instruções claras não beneficiam apenas aqueles com deficiências, mas todos os usuários.
                    5. Cumprindo Regulamentações
                    Em algumas regiões, há regulamentações que exigem que os aplicativos móveis sejam acessíveis. Portanto, realizar testes de acessibilidade não é apenas divertido, mas também uma obrigação legal.
                    6. Reputação Positiv
                    Aplicativos que priorizam a acessibilidade ganham uma reputação positiva. Isso pode ser uma ótima maneira de conquistar a lealdade dos usuários e obter boas avaliações, o que é uma recompensa divertida para qualquer desenvolvedor.
                    Como Começar a Diversão com Testes de Acessibilidade
                    Agora que entendemos a importância da acessibilidade em softwares mobile, é hora de começar a diversão! Aqui estão algumas dicas para iniciar:
                    Conheça as Diretrizes de Acessibilidade: Familiarize-se com as diretrizes de acessibilidade, como as Web Content Accessibility Guidelines (WCAG) e as Mobile Web Best Practices. Elas são como as regras da festa para garantir que todos possam aproveitar.
                    Use Ferramentas de Teste: Existem várias ferramentas de teste de acessibilidade disponíveis que podem ajudar a identificar problemas. Utilize-as para verificar seu aplicativo e fazer as correções necessárias.
                    Obtenha Feedback dos Usuários: Nada como uma pesquisa de campo para saber como seu aplicativo funciona para pessoas reais. Envolver pessoas com deficiências em seus testes é uma ótima maneira de obter feedback valioso.
                    Priorize a Acessibilidade desde o Início: Quanto mais cedo você começar a pensar em acessibilidade no processo de desenvolvimento, mais fácil será implementá-la.
                    Mantenha-se Atualizado: Acessibilidade é uma área em constante evolução. Continue aprendendo e acompanhando as melhores práticas.
                    Lembre-se, a festa da acessibilidade em softwares mobile é para todos, e todos são bem-vindos. Portanto, não deixe ninguém de fora da diversão digital! Certifique-se de que seu aplicativo seja acessível e, assim, todos poderão aproveitar a festa.
                    Acessibilidade não é apenas uma obrigação, é uma celebração da inclusão. Portanto, leve a sério os testes de acessibilidade em seu software mobile e divirta-se proporcionando igualdade de acesso a todos os usuários. Afinal, na festa da acessibilidade, todos são VIPs!" src="https://d3a43hwv7gvd4j.cloudfront.net/Pictures_YouKnow/1697814715164acessibilidade.jpg?Expires=1698683607&Signature=Lbor59c3bjgwoTsCLro2oiP~Hoyzx7Bt~~ulapn1ElcBSIybjI~NFgRKnuniGVNvkxvfSNZq9sqZkSo-jgM6Vqr0bZYtqvGuLnfibODO8BJ1Tiocku~gk8ktc5hO~sN0nwRqzdPhOGnC8wFbmEDlk3V6BQAZXr6lai2SAOPY~TA_&Key-Pair-Id=APKAISCSU5VMJAEZCN3Q"/>
                    <ArtigoCard  author="Marcos Paulo de Azevedo" rate={4.2} timePub='27/10/2023' title="Outubro rosa é de todas as cores" fav={true} text="Outubro chegou e com ele, as cores do outono começam a pintar o mundo. Mas não é apenas o dourado das folhas que se destaca nesse mês, é também o rosa vibrante que inunda nossos corações e mentes. É o mês do Outubro Rosa, um período dedicado à conscientização e à importância da prevenção do câncer de mama. E para celebrar essa causa tão nobre, permitam-me contar a história da minha tia Matilde.
                    Ti Matê era uma pessoa única em todos os sentidos. Com seus cabelos ruivos e um sorriso que iluminava qualquer cômodo, ela era a alma da família. Uma verdadeira força da natureza, nunca deixou que os obstáculos a impedissem de viver a vida ao máximo. Ela era a dona daquele abraço acolhedor que fazia todas as preocupações desaparecerem, e sua risada contagiante era uma sinfonia que todos adoravam ouvir.
                    Porém, havia um vilão silencioso que se escondia em seu corpo: o câncer de mama. Durante muito tempo ela travou uma batalha corajosa contra essa doença traiçoeira, mas, infelizmente, nos deixou cedo demais. O coração da nossa família ficou mais vazio naquele dia, mas sua memória e seu espírito permanecem vivos em nossos corações.
                    O Outubro Rosa é um lembrete de que todas as 'Matildes' deste mundo, todas as pessoas queridas em nossas vidas, merecem a chance de lutar e vencer o câncer de mama. É um mês em que celebramos a importância da detecção precoce, da educação e do apoio. É um mês em que nos unimos para criar um futuro em que menos famílias passem pela dor que a nossa passou.
                    A cada outubro, o rosa se espalha como uma corrente de esperança. Pessoas se vestem de rosa, laços e fitas cor-de-rosa enfeitam as cidades, e eventos são organizados para arrecadar fundos e conscientizar. É um momento em que todos, independentemente de gênero ou idade, podem se unir em prol de uma causa que afeta milhões de vidas.
                    Enquanto recordamos a história da minha tia Matê, lembramos que ela não estava sozinha em sua luta. Milhares de guerreiras e guerreiros travam essa batalha todos os dias, e o Outubro Rosa nos lembra que podemos fazer a diferença. Podemos apoiar uns aos outros, espalhar a conscientização e incentivar a pesquisa médica para encontrar curas.
                    Portanto, neste Outubro Rosa, honremos a memória de todas as tia Matês e de todos aqueles que perderam a luta contra o câncer de mama. Vamos nos comprometer a fazer a nossa parte, para que, um dia, nenhuma família tenha que enfrentar a perda de um ente querido para essa doença. Vamos abraçar o rosa com amor, esperança e determinação, para que ele ilumine o caminho daqueles que ainda lutam e inspire o mundo a agir.
                    O Outubro Rosa é mais do que apenas uma cor; é um símbolo de amor, esperança e unidade. Que a nossa jornada contra o câncer de mama seja acima de tudo, consciente e bem-sucedida. Juntos, podemos pintar o mundo de rosa, tornando-o mais brilhante e, quem sabe, mais saudável para as gerações futuras. Por fim o Outubro é rosa mas a luta é de todas as cores !!" src="https://d3a43hwv7gvd4j.cloudfront.net/Pictures_YouKnow/1697817810131outrosa.jpg?Expires=1698683607&Signature=oDbnf5hF3u9FcCOZcssWlc41bi9GW6~9gstnUnRO7eoOnK2TnJcpkemeamhDQv2Kzhh8Yi1MRInJC7ljww9oqNBAThFobeRsEarvzVS1FCzOtkoO~ykdw5LnGsznedBgCTE~CyYfP2NWdIky4yR~OzUnlb0VofGAUr4hWV2KolQ_&Key-Pair-Id=APKAISCSU5VMJAEZCN3Q"/>
                <ArtigoCard  author="Marcos Paulo de Azevedo" rate={4.6} timePub='22/09/2023' title="A Importância dos Testes de Acessibilidade em Softwares Mobile: Ninguém Deveria Ficar de Fora da Festa!" fav={false} text="Você já se deparou com um aplicativo móvel que parecia tão incrível, mas quando tentou usá-lo, percebeu que não era nada acessível para você? Se a resposta for sim, você sabe o quanto isso pode ser frustrante. A acessibilidade em softwares mobile é uma questão crucial, e neste artigo, vamos explorar por que os testes de acessibilidade são tão importantes, enquanto nos divertimos no processo.
                    Acessibilidade, afinal, o que é?
                    Antes de começarmos a 'festa', vamos definir o que é acessibilidade em softwares mobile. Acessibilidade se refere à capacidade de um aplicativo ou sistema ser utilizado por todas as pessoas, independentemente de suas habilidades ou limitações. Isso inclui pessoas com deficiências visuais, auditivas, motoras, cognitivas e outras.
                    Hora de entrar na 'festa'!
                    Agora que sabemos do que se trata, vamos abrir nossa mente. Imagine que a acessibilidade é uma festa e todos estão convidados, independentemente de suas capacidades. Mas como garantir que a festa seja acessível a todos? Aqui estão algumas razões para realizar testes de acessibilidade em softwares mobile:
                    1. Igualdade de Acesso
                    Acessibilidade é sobre proporcionar igualdade de acesso. Quando um aplicativo é acessível, todos podem participar da festa digital! Pessoas com deficiências não são deixadas de fora, e isso é algo que todos podem comemorar.
                    2. Expansão do Público
                    Quanto mais acessível for o seu aplicativo, maior será o público que poderá usá-lo. Você não quer que ninguém fique de fora da diversão, certo? Tornar seu aplicativo acessível é uma maneira de expandir sua base de usuários e atrair mais pessoas para sua festa digital.
                    3. Inovação Criativa
                    Quando os desenvolvedores consideram a acessibilidade desde o início do processo de criação de um aplicativo, isso estimula a inovação criativa. E, vamos ser sinceros, a diversão está em inovar e criar coisas incríveis que todos possam desfrutar.
                    4. Melhor Usabilidade para Todos
                    A acessibilidade não é apenas para pessoas com deficiências. Muitos recursos que tornam um aplicativo mais acessível também o tornam mais fácil de usar para todos. Botões maiores, contraste de cores adequado e instruções claras não beneficiam apenas aqueles com deficiências, mas todos os usuários.
                    5. Cumprindo Regulamentações
                    Em algumas regiões, há regulamentações que exigem que os aplicativos móveis sejam acessíveis. Portanto, realizar testes de acessibilidade não é apenas divertido, mas também uma obrigação legal.
                    6. Reputação Positiv
                    Aplicativos que priorizam a acessibilidade ganham uma reputação positiva. Isso pode ser uma ótima maneira de conquistar a lealdade dos usuários e obter boas avaliações, o que é uma recompensa divertida para qualquer desenvolvedor.
                    Como Começar a Diversão com Testes de Acessibilidade
                    Agora que entendemos a importância da acessibilidade em softwares mobile, é hora de começar a diversão! Aqui estão algumas dicas para iniciar:
                    Conheça as Diretrizes de Acessibilidade: Familiarize-se com as diretrizes de acessibilidade, como as Web Content Accessibility Guidelines (WCAG) e as Mobile Web Best Practices. Elas são como as regras da festa para garantir que todos possam aproveitar.
                    Use Ferramentas de Teste: Existem várias ferramentas de teste de acessibilidade disponíveis que podem ajudar a identificar problemas. Utilize-as para verificar seu aplicativo e fazer as correções necessárias.
                    Obtenha Feedback dos Usuários: Nada como uma pesquisa de campo para saber como seu aplicativo funciona para pessoas reais. Envolver pessoas com deficiências em seus testes é uma ótima maneira de obter feedback valioso.
                    Priorize a Acessibilidade desde o Início: Quanto mais cedo você começar a pensar em acessibilidade no processo de desenvolvimento, mais fácil será implementá-la.
                    Mantenha-se Atualizado: Acessibilidade é uma área em constante evolução. Continue aprendendo e acompanhando as melhores práticas.
                    Lembre-se, a festa da acessibilidade em softwares mobile é para todos, e todos são bem-vindos. Portanto, não deixe ninguém de fora da diversão digital! Certifique-se de que seu aplicativo seja acessível e, assim, todos poderão aproveitar a festa.
                    Acessibilidade não é apenas uma obrigação, é uma celebração da inclusão. Portanto, leve a sério os testes de acessibilidade em seu software mobile e divirta-se proporcionando igualdade de acesso a todos os usuários. Afinal, na festa da acessibilidade, todos são VIPs!" src="https://d3a43hwv7gvd4j.cloudfront.net/Pictures_YouKnow/1697814715164acessibilidade.jpg?Expires=1698683607&Signature=Lbor59c3bjgwoTsCLro2oiP~Hoyzx7Bt~~ulapn1ElcBSIybjI~NFgRKnuniGVNvkxvfSNZq9sqZkSo-jgM6Vqr0bZYtqvGuLnfibODO8BJ1Tiocku~gk8ktc5hO~sN0nwRqzdPhOGnC8wFbmEDlk3V6BQAZXr6lai2SAOPY~TA_&Key-Pair-Id=APKAISCSU5VMJAEZCN3Q"/>
            </div>
        </div>
    )
}