import React from "react";
import { Link } from "gatsby";
import Row from "../style/row";
import InnerList from "../style/innerList";
import ListItem from "../style/listItem";
import Title from "../style/title";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Faq = () => (
  <Layout>
    <SEO title="FAQ" />
    <Title style={{ fontSize: 28, marginTop: 20 }}>
      Często zadawane pytania
    </Title>
    <Row>
      <InnerList>
        <ListItem>
          <h2>
            <span>1.</span>Czy mogę odmówić współpracy z klientem, którego
            uważam, za nieetycznego?
          </h2>
          <strong>Tak</strong> - swoją decyzję musisz jednak omówć z zespołem
          oraz menadżerem i wyjaśnić źródło swojej wątpliwości. Być może cały
          zespół, a co za tym idzie firma zrezygnuje z takiej współpracy?
        </ListItem>
        <ListItem>
          <h2>
            <span>2.</span>Co zrobić, gdy obawiam sie o dostarczenie kodu na
            czas?
          </h2>
          <strong>Porozmawiaj z zespołem.</strong> Jeżeli wspólnie nie
          znajdziecie sposob na dostarczenie produktu na czas, to następnym
          krokiek będzie kontakt z menadżerem oraz przedstawienie sytuacji
          klientowi. Często wspólnie znalezione rozwiązanie jest o wiele lepsze
          niż to, na które wpadniemy w pojedynkę.
        </ListItem>

        <ListItem>
          <h2>
            <span>3.</span>Co zrobić gdy jestem świadkiem nieetycznego
            postępowania?
          </h2>
          <strong>
            Zrób anonimowy wpis na forum lub wyślij wiadomość przez formularz w
            stopce.
          </strong>{" "}
          Często osoba, która postępuje nieetycznie nie jest tego świadom, a
          otwarta bezpośrednia krytyka może ją dotknąć, dlatego otwarty i
          anonimowy wpis na forum mówiący o tym, że zaobserwowano jakieś
          zachowane może stanowić odpowiedni feedback, by osoba poprawiła swoje
          zachowanie.
        </ListItem>
        <ListItem>
          <h2>
            <span>4.</span>Co zrobić, gdy mam wątpliwości natury etycznej?
          </h2>
          <strong>
            Zajrzeć na tę <Link to="/e-sumienie">stronę</Link> albo zapytać na
            forum.
          </strong>
          Najczęściej wątpliwości natury etycznej wymuszają na nas głębszą
          refleksję, którą pomagamy przeprowadzić na wskazanej stronie. Jeżeli
          jednak ona nie pomoże to publiczna anonimowa rozmowa na forum może
          rozwiać Twoje wątpliwości.
        </ListItem>

        <ListItem>
          <h2>
            <span>5.</span>Jakość kodu, czy terminowe dostarczenie?
          </h2>
          <strong>Terminowość.</strong> Choć chcielibyśmy zawsze realizować oba
          wymagania, to wiemy, że nie zawsze jest możliwe spełnienie wszystkich
          wymagań z przyczyn niezależnych od nas. W wypadku takiego dylematu
          staramy się jak najszybciej dostarczyć sprawne działalnie klientowi i
          za darmo wykonać odpowiednie łatki, które wyeliminują niedoskonałości
          naszego oprogramowania.
        </ListItem>

        <ListItem>
          <h2>
            <span>6.</span>Co zrobić, gdy będę świadkiem lub ofiarą mobbingu?
          </h2>
          <strong>Zgłosić przełożonemu i zrobić wpis na forum.</strong> Choć
          zakładamy, że w naszej firmie taki proceder nigdy nie będzie miał
          miejsca, to jednak jesteśmy przygotowani na taką przykrą ewentualność.
          W sytuacji potwierdzenia słuszności takiego zgłoszenia, mobber
          zostanie natychmiastowo zwolniony wraz z odpowiednimi referencjami.
        </ListItem>
        <ListItem>
          <h2>
            <span>7.</span>Co zrobić, gdy klient zachowa się nieetycznie wobec
            mnie?
          </h2>
          <strong>Omówić sytuację z zespołem</strong> Jeżeli doznałeś zachowania
          niezgodnego z zasadami kultury albo jakiejkolwiek formy krzywdy ze
          strony klienta, podziel się tym ze swoim zespołem. Prawdopodobnie
          zerezygnujemy współpracy z takim toksycznym klientem.
        </ListItem>
        <ListItem>
          <h2>
            <span>8.</span>Co zrobić, gdy pracownik firmy zachował się
            nieetycznie wobec mnie? (dla klienta)
          </h2>
          <strong>Napisać mailowo skargę</strong> Jeżeli nasz pracownik zachował
          się wobec Ciebie nieprofesjonalnie lub niekulturalnie, to nie wahaj
          się napisać do nas maila z prośbą o wyjaśnienie sytuacji.
        </ListItem>
        <ListItem>
          <h2>
            <span>8.</span>Co zrobić, gdy pracownik firmy zachował się
            nieetycznie wobec mnie? (dla pracownika)
          </h2>
          <strong>Napisać na forum</strong> Jeżeli uważasz, że możesz
          bezpieczenie i anonimowo zgłosić takie zdarzenie na forum, to jest to
          najlepsza forma na pokazanie koledze zółtej kartki za złe zachowanie.
          Jeżeli jednak obawiasz się o swoją anonimowość, umów się z menadżerem
          na spotkanie i przedstaw zdarzenie. Spróbuj wyjaśnić przyczynę złego
          zachowania ze swoim kolegą. Być może chwila uwagi oraz wysłuchanie
          pozwolą na załagodzenie konfliktu i zasieśnią Wasze relacje? W innym
          wypadku nie wahaj się zgłosić sytuacji menadżerowi.
        </ListItem>
        <ListItem>
          <h2>
            <span>9.</span>Kodeks etyczny nie odpowiada na moje pytanie albo
            uważam, że brakuje pozycji w faq
          </h2>
          <strong>Skorzystaj z formularza w stopce.</strong> Etyka to nie jest
          błaha sprawa, a możliwości złego postępowania są nieprzeliczone,
          dlatego docenimy wszelkie informacje dotyczące użytecznych usprawnień
          tego kodeksu.
        </ListItem>
      </InnerList>
    </Row>
    <Link to="/">Wróć do strony głównej</Link>
  </Layout>
);

export default Faq;
