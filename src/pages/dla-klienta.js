import React from "react";
import { Link } from "gatsby";
import Row from "../style/row";
import InnerList from "../style/innerList";
import ListItem from "../style/listItem";
import Title from "../style/title";

import Layout from "../components/layout";
import SEO from "../components/seo";

const DlaKlienta = () => (
  <Layout>
    <SEO title="Dla klienta" />
    <Title style={{ fontSize: "28px", marginTop: "20px", lineHeight: "30px" }}>
      Dla klienta
    </Title>
    <Row>
      <InnerList>
        <ListItem>
          <h2>
            <span>1.</span>Szacunek
          </h2>
          Wierzymy, że nasi klienci zasługują na nasz szacunek i w związku z tym
          poważnie podchodzimy do kwestii kultury językowej, terminowości,
          budżetów i poziomu naszej komunikacji.
        </ListItem>
        <ListItem>
          <h2>
            <span>2.</span>Kontakt
          </h2>
          Uważamy, że większość konfliktów międzyludzkich pochodzi z problemów w
          komunikacji, dlatego stawiamy na stałe komunikowanie naszych postępów
          nad pracą dla klienta w określonych i wspólnie ustalonych ramach.
        </ListItem>

        <ListItem>
          <h2>
            <span>3.</span>Szczerość
          </h2>
          Rozmawiając na tematy techniczne nie uciekamy się do ogólników i
          bełkotu specjalistycznym żargonem. Naszą pracę omawiamy "od kuchni" i
          otwarcie na życzenie klienta prezentujemy stan kodu podczas
          developmentu.
        </ListItem>
        <ListItem>
          <h2>
            <span>4.</span>Terminowość
          </h2>
          Na wszelkie wiadomości odpisujemy w ciagu 24 godzin. Zawsze terminowo
          dostarczamy projekty, a nasze szacunki czasowe celowo zawyżamy, by
          zapewnić klientom gwarancję terminowej realizacji.
        </ListItem>
        <ListItem>
          <h2>
            <span>5.</span>Otwartość
          </h2>
          W naszej pracy z klientem stawiamy na otwartość i zawsze, gdy stajemy
          przed jakimś problemem, dzielimy się nim z klientem. Rozwiązań szukamy
          wspólnie i w taki sposób, by klient był nieodmiennie zadowolony z
          naszych usług. Nie wahamy się, by powiedzieć, że czegoś nie damy rady
          zrobić.
        </ListItem>
        <ListItem>
          <h2>
            <span>6.</span>Profesjonalizm
          </h2>
          Wiemy, że oprogramowanie wymaga starannej dokumentacji i ścisłego
          przestrzegania dobrych praktyk, by było czytelne dla innych
          developerów. Z tego powodu tworząc oprogramowanie przestrzegamy
          ścisłego rygoru, by klientom dostarczać kod najwyższej jakości.
        </ListItem>
        <ListItem>
          <h2>
            <span>7.</span>Umowa
          </h2>
          Kwestie finansowe rozwiązujemy na etapie nawiązywania współpracy -
          podczas podpisywania umowy. Jesteśmy elastyczną firmą i dlatego umowy,
          które zawieramy z różnymi klientami mogą opiewać na różne warunki.
          Zawsze jednak są to warunki i jasne i zaakceptowane przez obie strony,
          co gwarantuje bezproblemowe rozliczenie przy przekazaniu gotowego już
          produktu na ręce klienta.
        </ListItem>
        <ListItem>
          <h2>
            <span>8.</span>Kapitał - zaufanie
          </h2>
          W zglobalizowanym świecie coraz mniejsze znaczenie mają prawdziwe
          relacje, co szczególnie widać w świecie biznesu. Jako nowoczesna firma
          przeciwdziałamy temu trendowi i okazujemy szczególne względy naszym
          klientom, z którymi wcześniej współpracowaliśmy. Wierzymy, że warto
          dbać o relacje nawet w świecie biznesu.
        </ListItem>
      </InnerList>
    </Row>
    <Link to="/">Wróć na stronę główną</Link>
  </Layout>
);

export default DlaKlienta;
