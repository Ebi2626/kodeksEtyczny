import React from "react";
import { Link } from "gatsby";
import Row from "../style/row";
import InnerList from "../style/innerList";
import ListItem from "../style/listItem";
import Title from "../style/title";
import Layout from "../components/layout";
import SEO from "../components/seo";

const DlaPracownika = () => (
  <Layout>
    <SEO title="Dla pracownika" />
    <Title style={{ fontSize: "28px", marginTop: "20px", lineHeight: "30px" }}>
      Dla pracownika
    </Title>
    <Row>
      <InnerList>
        <ListItem>
          <h2>
            <span>1.</span>Otwartość
          </h2>
          Z uśmiechem i wyrozumiałością obsługujemy wszystkich klientów bez
          względu na zakres współpracy, czy nasze potencjalne korzyści. Każdego
          klienta lub interesariusza traktujemy jak potencjalnego przyszłego
          współpracownika lub partnera biznesowego.
        </ListItem>
        <ListItem>
          <h2>
            <span>2.</span>Empatia
          </h2>
          Aktywnie wychodzimy naprzeciw potrzebom klienta, rozumiemy, że nie
          musi on być osobą techniczną, dlatego staramy się zawsze doradzić mu
          najlepsze dla niego rozwiązanie.
        </ListItem>
        <ListItem>
          <h2>
            <span>3.</span>Szacunek wobec czasu klienta
          </h2>
          Nie podejmujemy się zleceń, które są ponad nasze siły. Nie sprzedajemy
          naszych usług wówczas, gdy mamy wątpliwości, co do możliwości ich
          realizacji.
        </ListItem>
        <ListItem>
          <h2>
            <span>4.</span>Szacunek wobec kapitału klienta
          </h2>
          Pamiętamy, że nasi klienci są elementem szerszej sieci społecznej i
          kapitał wydany na nasze usługi nieefektywnie, byłby stratą dla innych
          pracowników tej firmy, dlatego szanujemy kapitał naszych klientów i
          rozważnie szacujemy budżety projektowe.
        </ListItem>
        <ListItem>
          <h2>
            <span>5.</span>Szczerość
          </h2>
          Wszelkie problemy w produkcji oprogramowania na bieżąco przedstawiamy
          klientowi wraz z kompletną informacją dotyczącą planowanych przez nas
          działań sposobów na ich rozwiązanie. Wspólnie z klientem staramy się
          szczerze rozmawiać o wszelkich napotkanych problemach i rozwiązań
          szukać wspólnie.
        </ListItem>
        <ListItem>
          <h2>
            <span>6.</span>Czysty kod
          </h2>
          Trzymamy linje naszego kodu w ryzach i ściśle przestrzegamy dobrych
          praktyk programowania. Staramy się tak tworzyć oprogramowanie, by kod
          był czytelny nawet dla osób nietechnicznych poprzez konsekwencje w
          nazewnictwie oraz przejrzystą strukturę.
        </ListItem>
        <ListItem>
          <h2>
            <span>7.</span>Dokumentacja
          </h2>
          Choć wierzymy, że dobrze napisany kod to taki, który nie wymaga
          komentarzy. To jednak zawsze dbamy o to, by nasze produkty zawierały
          dokładną dokumentację techniczną umożliwiającą sprawne modyfkowanie
          kodu nawet dla niedoświadczonych programistów.
        </ListItem>
        <ListItem>
          <h2>
            <span>8.</span>Relacje
          </h2>
          Wiemy, że przy obecnej konkurencji na rynku IT nie można pozwolić
          sobie na chwilę słabości. Dlatego postanowiliśmy uczynić naszym
          największym atutem budowanie prawdziwych relacji z klientami.
          Wierzymy, że to właśnie szczere budowanie dobrych relacji opartych o
          otwartą komunikację może dawać długoterminowe korzyści biznesowe i
          międzyludzkie, dlatego rezygnujemy z korpomowy na rzecz budowania
          realcji w taki sposób jakiego oczekuje klient.
        </ListItem>
        <ListItem>
          <h2>
            <span>9.</span>Nieprawidłowości
          </h2>
          Wszelkie uchybienia standardom pracy albo naszym zasadom etycznym
          dzielimy na anonimowym forum. Dzięki takiemu rozwiązaniu możemy
          wzajemnie się wpierać i rozwiązywać problemy bez stygmatyzacji czy
          moralizatorstwa. Tworzymy firmę przyszłości i w taki też sposób
          radzimy sobie z konfliktami i problemami.
        </ListItem>
        <ListItem>
          <h2>
            <span>10.</span>Odmowa
          </h2>
          Nie wahamy się omówić współpracy z klientam, którego wartości stoją w
          sprzeczności z naszym kodeksem etycznym. Wierzymy, że dobrze
          prowadzony biznes to biznes odpowiedzialny społecznie i taką firmę
          tworzymy.
        </ListItem>
      </InnerList>
    </Row>
    <Link to="/">Wróć do strony głównej</Link>
  </Layout>
);

export default DlaPracownika;
