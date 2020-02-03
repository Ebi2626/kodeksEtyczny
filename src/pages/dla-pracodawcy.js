import React from "react";
import { Link } from "gatsby";
import Row from "../style/row";
import InnerList from "../style/innerList";
import ListItem from "../style/listItem";
import Title from "../style/title";
import Layout from "../components/layout";
import SEO from "../components/seo";

const DlaPracodawcy = () => (
  <Layout>
    <SEO title="Dla pracodawcy" />
    <Title style={{ fontSize: "28px", marginTop: "20px", lineHeight: "30px" }}>
      Dla pracodawcy
    </Title>
    <Row>
      <InnerList>
        <ListItem>
          <h2>
            <span>1.</span>Szacunek wobec niewiedzy
          </h2>
          Wiemy, że każdy z nas kiedyś stawiał pierwsze niestabilne kroki,
          dlatego jako nowoczesna firma wiemy, że niewiedza pracownika to
          potencjał do rozwinięcia i odkrycia jego nowych potencjalnych
          możliwości.
        </ListItem>
        <ListItem>
          <h2>
            <span>2.</span>Szacunek wobec potrzeb
          </h2>
          Pracując na globalnym rynku usług informatycznych zdajemy sobie sprawę
          z różnorodności jaka cechuje pracowników naszej branży. Z otwartością
          i szacunkiem podchodzimy do potrzeb naszych pracowników, nawet jeżli
          osobiście wydają nam się nietypowe.
        </ListItem>

        <ListItem>
          <h2>
            <span>3.</span>Work-life balance
          </h2>
          Różne potrzeby naszych pracowników rodzą konieczność różnorodnych
          odpowiedzi ze strony naszej kadry menadżerskiej. Z tego powodu
          rezygnujemy z korpostrategii i elastycznie podchodzimy do spraw
          pracowniczych.
        </ListItem>
        <ListItem>
          <h2>
            <span>4.</span>Konstruktywna krytyka
          </h2>
          Wiemy, że krytyka ze strony przełożonych bywa bolesna dla pracowników
          dlatego rezygnujemy z tradycyjnej krytyki na rzecz jej konstruktywnej
          siostry. Błędy w kodzie, niewłaściwe zachowania czy nieterminowość
          traktujemy jak okazję do okazania pracownikowi motywującego feedbacku
          zamiast tłamszącej krytyki.
        </ListItem>

        <ListItem>
          <h2>
            <span>5.</span>Praca zespołowa
          </h2>
          Oprogramowanie tworzone jest zawsze w zespołach, a zatem, by produkty
          były najwyższej jakości to całe zespoły muszą działać sprawnie.
          Kładziemy duży nacisk na autonomię zespołów i umożliwiamy pracownikom
          wspólne rozwiązywanie problemów w ramach zespołu, bez ingerencji kadry
          menadżerskiej. Wyznajemy zasadę "jeden za wszystkich, wszyscy za
          jednego" i służymy wsparciem kolegom z zespołu.
        </ListItem>
        <ListItem>
          <h2>
            <span>6.</span>Łamanie kodeksu etycznego
          </h2>
          Świadome łamanie kodeksu etycznego naszej firmy jest wyjaśniane
          podczas rozmowy z menadżerem. Wierzymy, że jeśli ktoś notorycznie
          łamie nasze wspólnie ustalone zasady, to nie pasuje do naszego
          zespołu.
        </ListItem>
        <ListItem>
          <h2>
            <span>7.</span>Łamanie prawa
          </h2>
          Jesteśmy firmą, ale przede wszystkim jesteśmy obywatelami i obowiązują
          nas normy prawne. Na wszelkie przejawy łamania prawa reaguje kadra
          menadżerska i po wyjaśnieniu sprawy z pracownikiem wyciąga
          konsekwencje prawne.
        </ListItem>
        <ListItem>
          <h2>
            <span>8.</span>Sprawiedliwość
          </h2>
          Każde zgłoszone uchybienie wobec kodeksu czy prawa jest rozpatrywane z
          pełną uwagą oraz ostrożnością. Zdając sobie sprawę z emocji, które
          mogą wówczas odgrywać rolę przy ocenianiu sprawy, rozważamy sytuację
          na podstawie zebranych faktów oraz dowodów.
        </ListItem>
        <ListItem>
          <h2>
            <span>9.</span>Drużyna
          </h2>
          Wierzymy, że dewiza "klient nasz pan" to wierutna bzdura w XXI wieku i
          aby klient był zadowolony, musimy zadbać o dobrostan pracowników.
          Jeżeli nasi pracownicy będą ustatysfakcjonowani i zadowoleni z własnej
          pracy, to ich klienci będą dostawali produkty najwyższej jakości.
          Dlatego wszelkie spory między naszym pracownikiem, a inną firma,
          traktujemy jako spór z całą naszą firmą i bronimy swoich kolegów to
          ostatniego komentarza.
        </ListItem>
      </InnerList>
    </Row>
    <Link to="/">Wróć do strony głównej</Link>
  </Layout>
);

export default DlaPracodawcy;
