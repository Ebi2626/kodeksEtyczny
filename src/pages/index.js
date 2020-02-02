import React from "react";
import Row from "../style/row";
import InnerRow from "../style/innerRow";
import Title from "../style/title";
import Laptop from "../images/laptop.jpg";
import Team from "../images/team.jpg";
import Text from "../style/text";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Kodeks etyczny" />
    <div
      style={{
        backgroundImage: `url(${Team})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0,0,50,0.8)",
        backgroundBlendMode: "multiply",
        minHeight: 400,
        padding: "20px 0px"
      }}
    >
      <Title style={{ color: "white", borderBottom: "solid 1px lightgray" }}>
        Kim jesteśmy?
      </Title>
      <Row>
        <InnerRow>
          <Text style={{ color: "white" }}>
            To czym powinniśmy się kierować w kwestiach etycznych zależy nie
            tylko od tego, co powinniśmy lub czego nie powinniśmy robić, ale
            powinno przede wszystkim wynikać z tego kim jesteśmy. Jako
            deweloperzy jesteśmy odpowiedzialni nie tylko za finalny produkt
            naszej pracy, ale także jego odbiór, bezpieczeństwo oraz nasze
            relacje z interesariuszami. Jakość naszej pracy stanowi element
            wizerunku naszych klientów, dlatego musimy robić co w naszej mocy,
            by nasza praca przekładała pozytywnie na markę naszych klientów. Nie
            zapominając o zasadach etycznych, jako inżynierowie musimy także
            pamietać, że pomimo nieetycznych rozgrywek biznesowych, prawdziwa
            jakośc i wartość powstaje tylko dzięki ciężkiej i solidnej pracy
            fachowców.
          </Text>
        </InnerRow>
      </Row>
    </div>
    <Row>
      <InnerRow>
        <Title>Nasze wartości</Title>
      </InnerRow>
    </Row>
    <Row>
      <InnerRow style={{ alignItems: "flex-start" }}>
        <div style={{ flexBasis: "30%", flexGrow: 1 }}>
          <h3 style={{ textAlign: "center" }}>Profesjonalizm</h3>
          <Text>
            Wizytówką naszej pracy jest jej efekt. Dlatego na pierwszym miejscu
            stawiamy profesjonalizm. Nie produkujemy oprogramowania niskim
            kosztem, nie tworzymy kodu bez dokumentacji i nie gwałcimy dobrych
            praktyk programistycznych. Mamy na uwadze fakt, że nasz kod może
            posłużyć w przyszłości innym deweloperom i dlatego dbamy o jakość
            naszej pracy.
          </Text>
        </div>
        <div style={{ flexBasis: "30%", flexGrow: 1 }}>
          <h3 style={{ textAlign: "center" }}>Uczciwość</h3>
          <Text>
            Zarówno w pracy z klientem, jak i w pracy zespołowej zawsze stawiamy
            na uczciwość. Zdajemy sobie sprawę z tego, że lepiej jest czasem nie
            przyjąć zlecenia lub zadania niż później niedotrzymać danego słowa.
          </Text>
        </div>
        <div style={{ flexBasis: "30%", flexGrow: 1 }}>
          <h3 style={{ textAlign: "center" }}>Terminowość</h3>
          <Text>
            Wiemy, że dewiza "czas to pieniądz" nie jest tylko czczym gadaniem,
            a często w świecie biznesu można traktować ją zupełnie dosłownie. Z
            tego powodu zawsze decydujemy się na informowanie klientów o
            planowanym terminie realizacji projektu z zapasem czasowym, który
            sprawia, że mamy margines błędu umożliwiający uwzględnienie
            nieprzewidzianych problemów w ustalaniu terminu. Ponadto szanujemy
            czas naszych klientów i zawsze informujemy o postępach naszych prac
            zgodnie z umówioną częstotliwością.
          </Text>
        </div>
      </InnerRow>
    </Row>
    <div
      style={{
        backgroundImage: `url(${Laptop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0,0,50,0.8)",
        backgroundBlendMode: "multiply",
        minHeight: 400,
        padding: "20px 0px"
      }}
    >
      <Title style={{ color: "white", borderBottom: "solid 1px lightgray" }}>
        Nasze obowiązki
      </Title>
      <Row>
        <InnerRow  style={{ alignItems: "flex-start" }}>
        <div style={{ flexBasis: "30%", flexGrow: 1 }}>
          <h3 style={{ textAlign: "center", color: "white" }}>Tworzenie profesjonalne</h3>
          <Text style={{ color: "white" }}>
            Jako profesjonaliści jesteśmy odpowiedzialni za swoją pracę przed najsurowszym z szefów, czyli przed sobą samym. Wierzymy, że tylko takie oprogramowanie, z którego jesteśmy dumni jest odpowiednie, by oddać je klientowi.
          </Text>
        </div>
        <div style={{ flexBasis: "30%", flexGrow: 1 }}>
          <h3 style={{ textAlign: "center", color: "white" }}>Tworzenie udokumentowane</h3>
          <Text style={{ color: "white" }}>
            Wiemy, że nasza praca nie jest wieczna i przy naszym produkcie w przyszłości będą pracowali inni programiści dlatego dbamy o to, by każda linijka naszego kodu była odpowiednio udokumentowana i wytłumaczona w komentarzach. Doskonale znam bolączki programistów, którzy muszą odkryć, co poprzedni programista miał na myśli, dlatego nasze oprogramowanie tworzymy z myślą o innych.
          </Text>
        </div>
        <div style={{ flexBasis: "30%", flexGrow: 1 }}>
          <h3 style={{ textAlign: "center", color: "white" }}>Tworzenie odpowiedziane</h3>
          <Text style={{ color: "white" }}>
            Nie wierzymy, że wskaźniki biznesowe, czy profity ekonomiczne mogą stać ponad wartościami etycznymi. Z tego powodu nie decydujemy się na współpracę wątpliwą etycznie lub z firmami, których wartości stoją w sprzeczności z naszymi.
          </Text>
        </div>

        </InnerRow>
      </Row>
    </div>
    <Title style={{ borderBottom: "none", margin: "20px auto"}}>Szukasz odpowiedzi na pytanie natury etycznej?</Title>
    <Row>
      <InnerRow>
       <Text>Zajrzyj do odpowiedniego działu gdzie staramy się odpowiedzieć na pytania związane z Twoimi wątpliwościami</Text> 
      </InnerRow>
    </Row>
    <Row>
      <InnerRow>
        <Link
                style={{ marginBottom: 20, color: "navy", textDecoration: "none" }}
                to="/dla-klienta"
              >
                Dla klienta
        </Link>
        <Link
                style={{ marginBottom: 20, color: "navy", textDecoration: "none" }}
                to="/dla-pracownika"
              >
                Dla pracownika
        </Link>
        <Link
                style={{ marginBottom: 20, color: "navy", textDecoration: "none" }}
                to="/dla-pracodawcy"
              >
                Dla pracodawcy
        </Link>
      </InnerRow>
    </Row>
  </Layout>
);

export default IndexPage;
