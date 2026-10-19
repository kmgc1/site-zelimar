export default function handler(req, res) {
  // Ajuste o link do seu site na Vercel aqui
  const baseUrl = "https://site-zelimar.vercel.app";

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<ListingDataFeed xmlns="http://www.vivareal.com.br/schemas/1.0/VRSync" 
                 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                 xsi:schemaLocation="http://www.vivareal.com.br/schemas/1.0/VRSync http://www.vivareal.com.br/schemas/1.0/vrsync.xsd">
  <Header>
    <Provider>Zelimar Imóveis</Provider>
    <Email>seuemail@email.com</Email>
  </Header>
  <Listings>
    
    <!-- IMÓVEL 1 -->
    <Listing>
      <ListingID>BL14-202</ListingID>
      <Title>Apartamento Bloco 14 Ap 202</Title>
      <TransactionType>For Sale</TransactionType>
      <ListDate>2026-10-19T10:00:00</ListDate>
      <DetailViewUrl>${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-202/bl14-202.html</DetailViewUrl>
      <Media>
        <Item medium="image" caption="Foto Principal">${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-202/WhatsApp%20Image.jpeg</Item>
      </Media>
      <Details>
        <PropertyType>Residential / Apartment</PropertyType>
        <Description>Lindo apartamento localizado no Bloco 14, apartamento 202. Excelente oportunidade!</Description>
        <ListPrice currency="BRL">170000</ListPrice>
      </Details>
      <Location>
        <Country abbreviation="BR">Brasil</Country>
        <State abbreviation="RJ">Rio de Janeiro</State>
        <City>Rio de Janeiro</City>
      </Location>
    </Listing>

  </Listings>
</ListingDataFeed>`;

  // Define o tipo do arquivo como XML
  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.status(200).send(xmlContent);
}