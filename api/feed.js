export default function handler(req, res) {
  const host = req.headers.host || 'site-zelimar.vercel.app';
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const baseUrl = `${protocol}://${host}`;

  const properties = [
    {
      id: 'BL1-102',
      title: 'Apartamento Bloco 1 Ap 102',
      price: '120000',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_1-102/bloco1-102.html`,
      media: Array.from({ length: 10 }, (_, i) => ({
        type: 'image',
        caption: `Foto ${i}`,
        url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_1-102/${i}.jpeg`
      }))
    },
    {
      id: 'BL2-202',
      title: 'Apartamento Bloco 02 Ap 202',
      price: '120000',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_02-202/bloco02-202.html`,
      media: Array.from({ length: 12 }, (_, i) => ({
        type: 'image',
        caption: `Foto ${i}`,
        url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_02-202/${i}.jpeg`
      }))
    },
    {
      id: 'BL5-202',
      title: 'Apartamento Bloco 5 Ap 202',
      price: '120000',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_5-202/bloco5-202.html`,
      media: Array.from({ length: 10 }, (_, i) => ({
        type: 'image',
        caption: `Foto ${i}`,
        url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_5-202/${i}.jpeg`
      }))
    },
    {
      id: 'BL6-103',
      title: 'Apartamento Bloco 6 Ap 103',
      price: '120000',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_6-103/bloco6-103.html`,
      media: Array.from({ length: 10 }, (_, i) => ({
        type: 'image',
        caption: `Foto ${i}`,
        url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_6-103/${i}.jpeg`
      }))
    },
    {
      id: 'BL7-104',
      title: 'Apartamento Bloco 7 Ap 104',
      price: '120000',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_7-104/bloco7-104.html`,
      media: Array.from({ length: 10 }, (_, i) => ({
        type: 'image',
        caption: `Foto ${i}`,
        url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_7-104/${i}.jpeg`
      }))
    },
    {
      id: 'BL7-204',
      title: 'Apartamento Bloco 7 Ap 204',
      price: '120000',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_7-204/bloco7-204.html`,
      media: Array.from({ length: 10 }, (_, i) => ({
        type: 'image',
        caption: `Foto ${i}`,
        url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_7-204/${i}.jpeg`
      }))
    },
    {
      id: 'BL7-301',
      title: 'Apartamento Bloco 7 Ap 301',
      price: '120000',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_7-301/bloco7-301.html`,
      media: Array.from({ length: 10 }, (_, i) => ({
        type: 'image',
        caption: `Foto ${i}`,
        url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_7-301/${i}.jpeg`
      }))
    },
    {
      id: 'BL10-101',
      title: 'Apartamento Bloco 10 Ap 101',
      price: '120000',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_10-101/bloco10-101.html`,
      media: Array.from({ length: 10 }, (_, i) => ({
        type: 'image',
        caption: `Foto ${i}`,
        url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_10-101/${i}.jpeg`
      }))
    },
    {
      id: 'BL10-106',
      title: 'Apartamento Bloco 10 Ap 106',
      price: '120000',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_10-106/bloco10-106.html`,
      media: Array.from({ length: 14 }, (_, i) => ({
        type: 'image',
        caption: `Foto ${i}`,
        url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_10-106/${i}.jpeg`
      }))
    },
    {
      id: 'BL14-106',
      title: 'Apartamento Bloco 14 Ap 106',
      price: '130000',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-106/bloco14-106.html`,
      media: [
        { type: 'image', caption: 'Cozinha', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-106/cozinha.jpeg` },
        { type: 'image', caption: 'Banheiro', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-106/banheiro.jpeg` },
        { type: 'image', caption: 'Banheiro 2', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-106/banheiro1.jpeg` },
        { type: 'image', caption: 'Quarto 1', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-106/quarto1.jpeg` },
        { type: 'image', caption: 'Quarto 2', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-106/quarto%202.jpeg` },
        { type: 'image', caption: 'Sala 1', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-106/sala.jpeg` },
        { type: 'image', caption: 'Sala 2', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-106/sala1.jpeg` }
      ]
    },
    {
      id: 'BL14-202',
      title: 'Apartamento Bloco 14 Ap 202',
      price: '135000',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-202/bl14-202.html`,
      media: [
        { type: 'image', caption: 'Frente', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-202/WhatsApp%20Image%202026-10-19%20at%2016.58.19.jpeg` },
        { type: 'image', caption: 'Cozinha', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-202/WhatsApp%20Image%202026-10-19%20at%2016.58.20%20(1).jpeg` },
        { type: 'image', caption: 'Quarto', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-202/WhatsApp%20Image%202026-10-19%20at%2016.58.20.jpeg` },
        { type: 'image', caption: 'Banheiro', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-202/WhatsApp%20Image%202026-10-19%20at%2016.58.21%20(1).jpeg` },
        { type: 'image', caption: 'Área de serviço', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-202/WhatsApp%20Image%202026-10-19%20at%2016.58.21.jpeg` },
        { type: 'image', caption: 'Quarto 2', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-202/WhatsApp%20Image%202026-10-19%20at%2016.58.22%20(1).jpeg` },
        { type: 'image', caption: 'Quintal', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-202/WhatsApp%20Image%202026-10-19%20at%2016.58.22%20(2).jpeg` },
        { type: 'image', caption: 'Foto 8', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-202/WhatsApp%20Image%202026-10-19%20at%2016.58.22.jpeg` },
        { type: 'image', caption: 'Foto 9', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_14-202/WhatsApp%20Image%202026-10-19%20at%2016.58.23.jpeg` }
      ]
    },
    {
      id: 'BL15-3',
      title: 'Apartamento Bloco 15 (3º Andar)',
      price: '125000',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_15-3%C2%B0/bl15-3%C2%B0.html`,
      media: [
        { type: 'image', caption: 'Cozinha', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_15-3%C2%B0/WhatsApp%20Image%202026-09-23%20at%2022.13.51.jpeg` },
        { type: 'image', caption: 'Banheiro', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_15-3%C2%B0/WhatsApp%20Image%202026-09-23%20at%2022.13.52%20(1).jpeg` },
        { type: 'image', caption: 'Banheiro 2', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_15-3%C2%B0/WhatsApp%20Image%202026-09-23%20at%2022.13.52%20(2).jpeg` },
        { type: 'image', caption: 'Quarto', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_15-3%C2%B0/WhatsApp%20Image%202026-09-23%20at%2022.13.52%20(4).jpeg` },
        { type: 'image', caption: 'Quarto 2', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_15-3%C2%B0/WhatsApp%20Image%202026-09-23%20at%2022.13.52.jpeg` },
        { type: 'image', caption: 'Sala 1', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_15-3%C2%B0/WhatsApp%20Image%202026-09-23%20at%2022.13.53%20(1).jpeg` },
        { type: 'image', caption: 'Sala 2', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_15-3%C2%B0/WhatsApp%20Image%202026-09-23%20at%2022.13.53%20(2).jpeg` },
        { type: 'image', caption: 'Sala 3', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_15-3%C2%B0/WhatsApp%20Image%202026-09-23%20at%2022.13.53%20(3).jpeg` },
        { type: 'image', caption: 'Sala 4', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_15-3%C2%B0/WhatsApp%20Image%202026-09-23%20at%2022.13.53%20(4).jpeg` },
        { type: 'image', caption: 'Sala 5', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_15-3%C2%B0/WhatsApp%20Image%202026-09-23%20at%2022.13.53.jpeg` },
        { type: 'image', caption: 'Sala 6', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_15-3%C2%B0/WhatsApp%20Image%202026-09-23%20at%2022.13.54%20(1).jpeg` },
        { type: 'image', caption: 'Sala 7', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_15-3%C2%B0/WhatsApp%20Image%202026-09-23%20at%2022.13.54.jpeg` }
      ]
    },
    {
      id: 'FAZENDINHA',
      title: 'Casa Fazendinha',
      price: '180000',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_Casa_Fazendia/Casa%20Fazendia.html`,
      media: ['a','b','c','d','e','f','g','h','i','j','k'].map((letter, i) => ({
        type: 'image',
        caption: `Foto ${i + 1}`,
        url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_Casa_Fazendia/${letter}.fazendinha.jpg`
      }))
    },
    {
      id: 'INFRA',
      title: 'Infraestrutura do Condomínio',
      price: '0',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_infra/infra.html`,
      media: Array.from({ length: 10 }, (_, i) => ({
        type: 'image',
        caption: `Foto Infra ${i + 1}`,
        url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_infra/infra${i + 1}.jpeg`
      }))
    },
    {
      id: 'MB-1-103',
      title: 'Mount Blanc Bloco 01 Ap 103',
      price: '160000',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_MB_1-103/MountBlancbloco01-103.html`,
      media: Array.from({ length: 15 }, (_, i) => ({
        type: 'image',
        caption: `Foto ${i}`,
        url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_MB_1-103/${i}.jpeg`
      }))
    },
    {
      id: 'MB-13-306',
      title: 'Mount Blanc Bloco 13 Ap 306',
      price: '165000',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_MB_13-306/bloco13-306.html`,
      media: ['a','b','c','d','e','f','g','h','i','k'].map((letter) => ({
        type: 'image',
        caption: `Foto ${letter.toUpperCase()}`,
        url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_MB_13-306/${letter}.13-306.jpeg`
      }))
    },
    {
      id: 'MBG',
      title: 'Mont Blanc',
      price: '170000',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_MontBlancc/mbg.html`,
      media: ['A','B','C','D','E','F','G','H'].map((letter) => ({
        type: 'image',
        caption: `Foto ${letter}`,
        url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_MontBlancc/mont_blancc${letter}.jpeg`
      }))
    },
    {
      id: 'MT9-3',
      title: 'MT9 (3º Andar)',
      price: '155000',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_MT9_3%C2%B0/index.html`,
      media: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','t','u','v','w','x','y','z','za','zb','zc','zd','ze'].map((code) => ({
        type: 'image',
        caption: `Foto ${code.toUpperCase()}`,
        url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_MT9_3%C2%B0/${code}.jpeg`
      }))
    },
    {
      id: 'SIENA-2',
      title: 'Siena 2',
      price: '140000',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_siena_2/siena2.html`,
      media: [
        { type: 'image', caption: 'Sala', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_siena_2/salaa.jpeg` },
        { type: 'image', caption: 'Quarto', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_siena_2/quartoo.jpeg` },
        { type: 'image', caption: 'Cozinha', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_siena_2/cozinhaa.jpeg` },
        { type: 'image', caption: 'Banheiro', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_siena_2/banheirooo.jpeg` },
        { type: 'image', caption: 'Área', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_siena_2/area.jpeg` }
      ]
    },
    {
      id: 'SIENNA-3',
      title: 'Sienna (Terceiro Andar)',
      price: '145000',
      url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_sienna_terceiro_andar/terceiro-andar.html`,
      media: [
        { type: 'image', caption: 'Foto 1', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_sienna_terceiro_andar/sienna.jpg` },
        ...Array.from({ length: 11 }, (_, i) => ({
          type: 'image',
          caption: `Foto ${i + 2}`,
          url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_sienna_terceiro_andar/sienna%20(${i + 1}).jpg`
        })),
        { type: 'image', caption: 'Foto 13', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_sienna_terceiro_andar/sienna%20(12).jpeg` },
        { type: 'image', caption: 'Foto 14', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_sienna_terceiro_andar/sienna%20(13).jpg` },
        { type: 'image', caption: 'Foto 15', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_sienna_terceiro_andar/sienna%20(14).jpg` },
        { type: 'image', caption: 'Foto 16', url: `${baseUrl}/Site%20de%20Im%C3%B3veis/imagens_sienna_terceiro_andar/sienna%20(15).jpg` }
      ]
    }
  ];

  const listingsXml = properties.map(p => `
    <Listing>
      <ListingID>${p.id}</ListingID>
      <Title>${p.title}</Title>
      <TransactionType>For Sale</TransactionType>
      <ListDate>2026-10-20T10:00:00</ListDate>
      <DetailViewUrl>${p.url}</DetailViewUrl>
      <Media>
        ${p.media.map(m => `<Item medium="${m.type}" caption="${m.caption}">${m.url}</Item>`).join('\n        ')}
      </Media>
      <Details>
        <PropertyType>Residential / Apartment</PropertyType>
        <Description>${p.title} - Excelente oportunidade.</Description>
        <ListPrice currency="BRL">${p.price}</ListPrice>
      </Details>
      <Location>
        <Country abbreviation="BR">Brasil</Country>
        <State abbreviation="RJ">Rio de Janeiro</State>
        <City>Rio de Janeiro</City>
      </Location>
    </Listing>`).join('\n');

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<ListingDataFeed xmlns="http://www.vivareal.com.br/schemas/1.0/VRSync" 
                 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                 xsi:schemaLocation="http://www.vivareal.com.br/schemas/1.0/VRSync http://a.vivareal.com.br/schemas/1.0/vrsync.xsd">
  <Header>
    <Provider>Zelimar Imóveis</Provider>
    <Email>contato@site-zelimar.com</Email>
  </Header>
  <Listings>
    ${listingsXml}
  </Listings>
</ListingDataFeed>`;

  res.setHeader('Content-Type', 'text/xml; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.status(200).send(xmlContent);
}