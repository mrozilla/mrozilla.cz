import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, Table, Heading, Text, Link, Button, Modal } from "~components";

const dictionary = [
  { cz: "abatyše", czIpa: "[abatɪʃɛ]", de: "die Äbtissin", deIpa: "[ɛpˈtɪsɪn]" },
  { cz: "almužna", czIpa: "[almʊʒna]", de: "das Almosen", deIpa: "[ˈalmoːzn̩]" },
  { cz: "biliár", czIpa: "[bɪlɪjaːr]", de: "das Billard", deIpa: "[biˈjaːɐ̯]" },
  { cz: "buchty", czIpa: "[bʊxtɪ]", de: "die Buchteln", deIpa: "[ˈbʊχtl̩n]" },
  { cz: "burza", czIpa: "[bʊrza]", de: "die Börse", deIpa: "[ˈbœʁzə]" },
  { cz: "celta", czIpa: "[t͡sɛlta]", de: "das Zelt", deIpa: "[ˈzɔnə]" },
  { cz: "cíl", czIpa: "[t͡siːl]", de: "das Ziel", deIpa: "[ʦiːl]" },
  { cz: "děkan", czIpa: "[ɟɛkan]", de: "der Dekan", deIpa: "[deˈkaːn]" },
  { cz: "drát", czIpa: "[draːt]", de: "der Draht", deIpa: "[dʀaːt]" },
  { cz: "ekl", czIpa: "[ɛkl]", de: "ekelhaft", deIpa: "[ˈeːkl̩haft]" },
  { cz: "facka", czIpa: "[fat͡ska]", de: "die Fotzen", deIpa: "[ˈfɔʦn̩]" },
  { cz: "fara", czIpa: "[ˈfara]", de: "die Pfarrei", deIpa: "[pfaˈʀaɪ̯]" },
  { cz: "flek", czIpa: "[flɛk]", de: "der Fleck", deIpa: "[flɛk]" },
  { cz: "flundra", czIpa: "[flundra]", de: "der Flunder", deIpa: "[ˈflʊndɐ]" },
  { cz: "flus", czIpa: "[ˈflus]", de: "der Fluss", deIpa: "[flʊs]" },
  { cz: "fotr", czIpa: "[fɔtr̩]", de: "der Vater", deIpa: "[ˈfaːtɐ]" },
  { cz: "fuč", czIpa: "[ˈfut͡ʃ]", de: "pfutsch", deIpa: "[fʊt͡ʃ]" },
  { cz: "fuchtle", czIpa: "[ˈfʊχtl̩ɛ]", de: "die Fuchtel", deIpa: "[ˈfʊχtl̩]" },
  { cz: "fusekle", czIpa: "[fʊsɛklɛ]", de: "der Fußsöckel", deIpa: "[ˈfuːsˌzɔkl̩]" },
  { cz: "gábl", czIpa: "[gaːbl]", de: "die Gabel", deIpa: "[gaːbl]" },
  { cz: "hic", czIpa: "[ɦɪt͡s]", de: "die Hitze", deIpa: "[ˈhɪtsə]" },
  { cz: "humbuk", czIpa: "[ˈhʊmbʊk]", de: "der Humbug", deIpa: "[ˈhʊmbʊk]" },
  { cz: "kajuta", czIpa: "[kajʊta]", de: "die Kajüte", deIpa: "[kaˈjyːtə]" },
  { cz: "kamarád", czIpa: "[kamaraːt]", de: "der Kamerad", deIpa: "[kaməˈʀaːt]" },
  { cz: "kanta", czIpa: "[ˈkanta]", de: "die Kante", deIpa: "[ˈkantə]" },
  { cz: "kapuce", czIpa: "[kapʊt͡sɛ]", de: "die Kapuze", deIpa: "[kaˈpuːʦə]" },
  { cz: "karfiól", czIpa: "[karfɪɔːl]", de: "der Karfiol", deIpa: "[kaʁˈfi̯oːl]" },
  { cz: "kasárna", czIpa: "[ˈkasaːrna]", de: "die Kaserne", deIpa: "[kaˈzɛʁnə]" },
  { cz: "kastle", czIpa: "[ˈkastlɛ]", de: "der Kasten", deIpa: "[ˈkastn̩]" },
  { cz: "komín", czIpa: "[ˈkɔmiːn]", de: "der Kamin", deIpa: "[kaˈmiːn]" },
  { cz: "kramflek", czIpa: "[ˈkramflɛk]", de: "???", deIpa: "[???]" },
  { cz: "kravál", czIpa: "[kravaːl]", de: "der Krawall", deIpa: "[kʀaˈval]" },
  { cz: "krýgl", czIpa: "[kriːgl̩]", de: "der Krügel", deIpa: "[ˈkʀyːɡl̩]" },
  { cz: "ksicht", czIpa: "[ksɪxt]", de: "das Gesicht", deIpa: "[ɡəˈzɪçt]" },
  { cz: "kvartýr", czIpa: "[kvartɪːr]", de: "das Quartier", deIpa: "[kvaʁˈtiːɐ̯]" },
  { cz: "kýbl", czIpa: "[kiːbl]", de: "der Kübel", deIpa: "[ˈkyːbl̩]" },
  {
    cz: "lágr",
    czIpa: "[ˈlaːgr̩]",
    de: "der Konzentrationslager",
    deIpa: "[kɔnʦɛntʀaˈʦi̯oːnsˌlaːɡɐ]",
  },
  { cz: "lustr", czIpa: "[lʊstr̩]", de: "der Luster", deIpa: "[ˈlʊstɐ]" },
  { cz: "majstrštyk", czIpa: "[majstr̩ʃtɪk]", de: "das Meisterstück", deIpa: "[ˈmaɪ̯stɐˌʃtʏk]" },
  { cz: "makléř", czIpa: "[maklɛːr̝̊]", de: "der Makler", deIpa: "[ˈmaːklɐ]" },
  { cz: "manýr", czIpa: "[maniːr]", de: "die Manier", deIpa: "[maˈniːɐ̯]" },
  { cz: "mitfára", czIpa: "[mitfaːra]", de: "der Mitfahrer", deIpa: "[ˈmɪtˌfaːʀɐ]" },
  { cz: "mundůr", czIpa: "[mʊnduːr]", de: "die Montur", deIpa: "[mɔnˈtuːɐ̯]" },
  { cz: "nýmand", czIpa: "[niːmant]", de: "der Niemand", deIpa: "[ˈniːmant]" },
  { cz: "pajzl", czIpa: "[pajzl̩]", de: "das Beisel", deIpa: "[ˈbaɪ̯zl̩]" },
  { cz: "palačinky", czIpa: "[palat͡ʃɪŋkɪ]", de: "die Palatschinken", deIpa: "[palaˈʧɪŋkn̩]" },
  { cz: "pantofel", czIpa: "[pantɔfɛl̩]", de: "der Pantofel", deIpa: "[panˈtɔfl̩]" },
  { cz: "plech", czIpa: "[plɛx]", de: "das Blech", deIpa: "[blɛç]" },
  { cz: "plomba", czIpa: "[plɔmba]", de: "die Plombe", deIpa: "[ˈplɔmbə]" },
  { cz: "povidla", czIpa: "[pɔvɪdla]", de: "der Powidl", deIpa: "[ˈpɔvidl̩]" },
  { cz: "preclík", czIpa: "[prɛtsliːk]", de: "das Bretzel", deIpa: "[ˈbʀɛʦl̩]" },
  { cz: "prekérní", czIpa: "[prɛkɛːrɲiː]", de: "prekär", deIpa: "[pʀeˈkɛːɐ̯]" },
  { cz: "ráfek", czIpa: "[raːfɛk]", de: "der Reifen", deIpa: "[ˈʀaɪ̯fn̩]" },
  { cz: "rantl", czIpa: "[rantl]", de: "der Rand", deIpa: "[ʀant]" },
  { cz: "rašple", czIpa: "[raʃplɛ]", de: "die Raspel", deIpa: "[ˈʀaspl̩]" },
  { cz: "rauš", czIpa: "[raʊʃ]", de: "das Rausch", deIpa: "[ʀaʊ̯ʃ]" },
  { cz: "regál", czIpa: "[rɛgaːl]", de: "das Regal", deIpa: "[ʀeˈɡaːl]" },
  { cz: "rudl", czIpa: "[rʊdl̩]", de: "der Rodel", deIpa: "[ˈʀoːdl̩]" },
  { cz: "rybíz", czIpa: "[rɪbiːs]", de: "der Ribisel", deIpa: "[ˈʀiːbiːzl̩]" },
  { cz: "šachta", czIpa: "[ʃaxta]", de: "der Schacht", deIpa: "[ʃaχt]" },
  { cz: "šála", czIpa: "[ˈʃaːla]", de: "der Schal", deIpa: "[ʃaːl]" },
  { cz: "šalina", czIpa: "[ʃalɪna]", de: "die Straßenbahnlinie", deIpa: "[ˈʃtʀaːsn̩baːnˌliːni̯ə]" },
  {
    cz: "sichrhajcka",
    czIpa: "[sɪxr̩ɦajt͡ska]",
    de: "die Sicherheitsnadel",
    deIpa: "[ˈzɪçɐhaɪ̯tsˌnaːdl̩]",
  },
  { cz: "šichta", czIpa: "[ʃɪxta]", de: "die Schicht", deIpa: "[ʃɪçt]" },
  { cz: "skrupule", czIpa: "[skrʊpʊlɛ]", de: "der Skrupel", deIpa: "[ˈskʀuːpl̩]" },
  { cz: "šluk", czIpa: "[ʃlʊk]", de: "der Schluck", deIpa: "[ʃlʊk]" },
  { cz: "šlus", czIpa: "[ʃlʊs]", de: "der Schluss", deIpa: "[ʃlʊs]" },
  { cz: "šmak", czIpa: "[ʃmak]", de: "der Geschmack", deIpa: "[ɡəˈʃmak]" },
  { cz: "šminky", czIpa: "[ʃmiŋkɪ]", de: "die Schminken", deIpa: "[ˈʃmɪŋkən]" },
  {
    cz: "šmirglpapír",
    czIpa: "[ʃmɪrgl̩papiːr]",
    de: "das Schmirgelpapier",
    deIpa: "[ˈʃmɪʁɡl̩paˌpiːɐ̯]",
  },
  { cz: "šmitec", czIpa: "[ʃmɪtɛt͡s]", de: "der Schmiß", deIpa: "[ʃmɪs]" },
  { cz: "šmucka", czIpa: "[ʃmʊt͡ska]", de: "der Schmutz", deIpa: "[ʃmʊʦ]" },
  { cz: "šnek", czIpa: "[ʃnɛk]", de: "die Schnecke", deIpa: "[ˈʃnɛkə]" },
  { cz: "šnit", czIpa: "[ʃnɪt]", de: "der Schnitt", deIpa: "[ʃnɪt]" },
  { cz: "šnytlik", czIpa: "[ˈʃnɪtlik]", de: "der Schnittlauch", deIpa: "[ˈʃnɪtˌlaʊ̯χ]" },
  {
    cz: "šnuptychl",
    czIpa: "[ʃnʊptɪxl̩]",
    de: "das Schnupf-Tüchelchen",
    deIpa: "[ˈʃnʊpfˌtyːχlˌçən]",
  },
  { cz: "šňůra", czIpa: "[ʃɲuːrka]", de: "die Schnur", deIpa: "[ʃnuːɐ̯]" },
  { cz: "špachtle", czIpa: "[ʃpaxtlɛ]", de: "der Spachtel", deIpa: "[ˈʃpaχtl̩]" },
  { cz: "špagát", czIpa: "[ʃpagaːt]", de: "der Spagat", deIpa: "[ʃpaˈɡaːt]" },
  { cz: "špajz", czIpa: "[ʃpajs]", de: "die Speisekammer", deIpa: "[ˈʃpaɪ̯zəˌkamɐ]" },
  { cz: "špión", czIpa: "[ʃpɪɔːn]", de: "der Spion", deIpa: "[ˈʃpiˈoːn]" },
  { cz: "špunt", czIpa: "[ʃpʊnt]", de: "der Spund", deIpa: "[ʃpʊnt]" },
  { cz: "šrot", czIpa: "[ʃrɔt]", de: "der Schrott", deIpa: "[ʃʀɔt]" },
  { cz: "štafle", czIpa: "[ʃtaflɛ]", de: "der Stufenleiter", deIpa: "[ˈʃtuːfənˈlaɪ̯tɐ]" },
  { cz: "štangle", czIpa: "[ˈʃtaŋglɛ]", de: "die Stange", deIpa: "[ˈʃtaŋə]" },
  { cz: "štatl", czIpa: "[ʃtatl̩]", de: "die Stadt", deIpa: "[ʃtat]" },
  { cz: "štekle", czIpa: "[ʃtɛklɛ]", de: "der Stockelschuh", deIpa: "[ˈʃtœkl̩ˌʃuː]" },
  { cz: "štráf", czIpa: "[ʃtatl̩]", de: "der Streifen", deIpa: "[ˈʃtʀaɪ̯fn̩]" },
  { cz: "štych", czIpa: "[ʃtɪx]", de: "der Stich", deIpa: "[ʃtɪç]" },
  { cz: "švagr", czIpa: "[ʃvagr̩]", de: "der Schwager", deIpa: "[ˈʃvaːɡɐ]" },
  { cz: "švanda", czIpa: "[ʃvanda]", de: "???", deIpa: "[???]" },
  { cz: "švestka", czIpa: "[ˈʃvɛstka]", de: "die Zwetschge", deIpa: "[ˈʦvɛʧɡə]" },
  { cz: "tapecírung", czIpa: "[tapɛt͡siːrʊŋ]", de: "die Tapezierung", deIpa: "[tapeˈʦiːʀʊŋ]" },
  { cz: "tepich", czIpa: "[tɛpɪx]", de: "der Teppich", deIpa: "[ˈtɛpɪç]" },
  { cz: "trotl", czIpa: "[trɔtl̩]", de: "der Trottel", deIpa: "[ˈtʀɔtl̩]" },
  { cz: "trychtýř", czIpa: "[ˈtrɪxtiːr̝̊]", de: "der Trichter", deIpa: "[ˈtʀɪçtɐ]" },
  { cz: "tvargle", czIpa: "[tvartglɛ]", de: "der Quargel", deIpa: "[kvaʁɡl̩]" },
  { cz: "vágní", czIpa: "[vaːgɲiː]", de: "vage", deIpa: "[ˈvaːɡə]" },
  { cz: "vagón", czIpa: "[vagɔːn]", de: "der Wagen", deIpa: "[ˈvaːɡŋ̍]" },
  { cz: "vercajk", czIpa: "[vɛrt͡sajk]", de: "das Werkzeug", deIpa: "[ˈvɛʁkˌʦɔɪ̯k]" },
  { cz: "zicna", czIpa: "[zɪt͡sna]", de: "der Sitz", deIpa: "[zɪʦ]" },
  { cz: "zoncna", czIpa: "[zɔnt͡sna]", de: "die Sonne", deIpa: "[ˈzɔnə]" },
];

export default function CzermanPage() {
  const [state, setState] = React.useState({
    openTermId: "",
    isOpenAll: false,
    isModalOpen: false,
    isCardFlipped: false,
  });

  const handleOpenTerm = (openTermId: string) => {
    setState({ ...state, isOpenAll: false, openTermId });
  };

  const handleOpenAll = () => {
    setState((prevState) => ({ ...prevState, isOpenAll: !prevState.isOpenAll }));
  };

  const handleNextTerm = () => {
    setState((prevState) => {
      const currentIndex = dictionary.findIndex((term) => term.cz === prevState.openTermId);
      return {
        ...prevState,
        isModalOpen: true,
        isCardFlipped: false,
        openTermId: dictionary[(currentIndex + 1) % dictionary.length].cz,
      };
    });
  };

  const handleModal = () => {
    setState((prevState) => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  const handleFlipCard = () => {
    setState((prevState) => ({
      ...prevState,
      isCardFlipped: !prevState.isCardFlipped,
    }));
  };

  const renderModal = () => {
    const modalTerm = dictionary.find((term) => term.cz === state.openTermId) || dictionary[0];

    return (
      <Modal
        isOpen={state.isModalOpen}
        innerPadding="4rem 4rem 2rem 4rem"
        innerMinWidth="30vw"
        onClickBackground={handleModal}
        onClickClose={handleModal}
        onClickEscape={handleModal}
      >
        <Heading tag="h2">Czech</Heading>
        <Text>{modalTerm.cz}</Text>
        <Heading tag="h2">
          Czech{" "}
          <Link to="https://en.wikipedia.org/wiki/Help:IPA/Czech" look="secondary">
            IPA
          </Link>
        </Heading>
        <Text>{modalTerm.czIpa}</Text>
        <Heading tag="h2">German equivalent</Heading>
        <Text>{state.isCardFlipped ? modalTerm.de : "..."}</Text>
        <Heading tag="h2">
          German{" "}
          <Link to="https://en.wikipedia.org/wiki/Help:IPA/German" look="secondary">
            IPA
          </Link>
        </Heading>
        <Text>{state.isCardFlipped ? modalTerm.deIpa : "..."}</Text>
        <Button
          look="primary"
          style={{ margin: "4rem 0 0 0", width: "100%" }}
          onClick={state.isCardFlipped ? handleNextTerm : handleFlipCard}
        >
          {state.isCardFlipped ? "Next" : "Reveal"}
        </Button>
      </Modal>
    );
  };

  const renderTable = () => (
    <Table style={{ margin: "0 0 2rem 0" }}>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Czech</Table.HeadCell>
          <Table.HeadCell>
            Czech{" "}
            <Link to="https://en.wikipedia.org/wiki/Help:IPA/Czech" look="secondary">
              IPA
            </Link>
          </Table.HeadCell>
          <Table.HeadCell>German equivalent</Table.HeadCell>
          <Table.HeadCell>
            German{" "}
            <Link to="https://en.wikipedia.org/wiki/Help:IPA/German" look="secondary">
              IPA
            </Link>
          </Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {dictionary.map((term) => (
          <Table.Row
            key={term.cz}
            style={{ cursor: "pointer" }}
            onClick={() => handleOpenTerm(state.openTermId !== term.cz ? term.cz : "")}
          >
            <Table.Cell>{term.cz}</Table.Cell>
            <Table.Cell>{term.czIpa}</Table.Cell>
            {state.openTermId === term.cz || state.isOpenAll ? (
              <Table.Cell>{term.de}</Table.Cell>
            ) : (
              <Table.Cell colSpan={2} style={{ opacity: "0.5" }}>
                Reveal
              </Table.Cell>
            )}
            {state.openTermId === term.cz || state.isOpenAll ? (
              <Table.Cell>{term.deIpa}</Table.Cell>
            ) : null}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );

  return (
    <RootContainer>
      <Main>
        <Hero
          title="Even though Czech and German come from two distinct language families, there are many, many similiarities. This is an ever-growing collection of them"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/czerman.tsx"
        />
        <section>
          <Button look="primary" onClick={handleNextTerm}>
            Start practice
          </Button>
          {renderModal()}
        </section>
        <section>
          {renderTable()}
          <Button look="secondary" onClick={handleOpenAll}>
            {state.isOpenAll ? "Hide" : "Reveal"} all
          </Button>
        </section>
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Czerman"
      description="Even though Czech and German come from two distinct language families, there are many, many similiarities. This is an ever-growing collection of them"
      permalink="/lab/czerman"
      ogImage="/assets/og.png"
    />
  );
};
