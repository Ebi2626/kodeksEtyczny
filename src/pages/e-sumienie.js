import React from "react";
import { Link } from "gatsby";
import Row from "../style/row";
import InnerList from "../style/innerList";
import InnerRow from "../style/innerRow";
import ListItem from "../style/listItem";
import Title from "../style/title";
import Text from "../style/text";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Angel from "../images/aniol.jpg";

const ESumienie = () => (
  <Layout>
    <SEO title="E-sumienie" />
    <div
      style={{
        backgroundImage: `url(${Angel})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0,0,50,0.5)",
        backgroundBlendMode: "multiply",
        minHeight: 400,
        padding: "20px 0px"
      }}
    >
      <Title
        style={{
          color: "white",
          borderBottom: "solid 1px white",
          fontSize: "28px",
          marginTop: "40px",
          lineHeight: "30px"
        }}
      >
        E-Sumienie
      </Title>
      <Row>
        <InnerRow>
          <Text style={{ color: "white" }}>
            E-sumienie to narzędzie, które ma na celu pomóc Ci dokonać słusznego
            wyboru. Doceniamy to, że przykładasz wagę do podejmowania dobrych
            decyzji i szukasz odpowiedzi na nurtujące Cię pytania. Lista
            poniższych pytań powinna okazać się pomocna przy podejowaniu decyzji
            dotyczącej właściwego wyboru. Pamietaj jednak, że żadne narzędzie i
            dyrektywa nie będą pomocne, gdy nie będziesz ze sobą szczery.
          </Text>
        </InnerRow>
      </Row>
    </div>
    <Row>
      <InnerList>
        <ListItem>
          <h2>
            <span>1.</span>Czy to jest zgodne z prawem?
          </h2>
        </ListItem>
        <ListItem>
          <h2>
            <span>2.</span>Czy to jest właściwe?
          </h2>
        </ListItem>
        <ListItem>
          <h2>
            <span>3.</span>Czy to jest zgodne z kodeksem etycznym firmy?
          </h2>
        </ListItem>
        <ListItem>
          <h2>
            <span>4.</span>Czy mogę się tym podzielić z kolegami z zespołu?
          </h2>
        </ListItem>
        <ListItem>
          <h2>
            <span>5.</span>Czy mogę o tym rozmawiać z rodziną?
          </h2>
        </ListItem>
        <ListItem>
          <h2>
            <span>6.</span>Czy media odebrałyby to dobrze?
          </h2>
        </ListItem>
        <ListItem>
          <h2>
            <span>7.</span>Czy ktoś poniesie na tym stratę?
          </h2>
        </ListItem>
        <ListItem>
          <h2>
            <span>8.</span>Czy zarekomendowałbym takie działanie?
          </h2>
        </ListItem>
        <ListItem>
          <h2>
            <span>9.</span>Czy istnieją alternatywne sposoby rozwiązania
            problemu?
          </h2>
        </ListItem>
        <ListItem>
          <h2>
            <span>10.</span>Jaką decyzję na moim miejscu podjęłaby osoba
            kompetentna?
          </h2>
        </ListItem>
      </InnerList>
    </Row>
    <Link to="/">Wróć na stronę główną</Link>
  </Layout>
);

export default ESumienie;
