import { createContext } from "react";
export const DataContext = createContext();
export const CartContext = createContext();

export const DefaultData = [
    {
      "id": 0,
      "nome": "Tênis Esportivo",
      "preco": 25,
      "categoria": "calçado",
      "imagem": "https://m.media-amazon.com/images/I/51gNsNhx8LL.__AC_SX395_SY395_QL70_ML2_.jpg",
      "descricao": "Confortável e leve, ideal para o dia a dia.",
      "longDescription": "Fabricado com materiais flexíveis e um sistema de aperto simples, este ténis proporciona conforto durante longos períodos e é fácil de calçar, sendo indicado para pessoas com mobilidade reduzida ou dificuldades articulares."
    },
    {
      "id": 1,
      "nome": "Chinelo Conforto",
      "preco": 25,
      "categoria": "calçado",
      "imagem": "https://m.media-amazon.com/images/I/71QFH7Yv2tL.__AC_SX395_SY395_QL70_ML2_.jpg",
      "descricao": "Perfeito para relaxar em casa ou sair com conforto.",
      "longDescription": "Este chinelo apresenta uma palmilha macia e design aberto que facilita o calçar, sendo especialmente indicado para quem tem dificuldades motoras ou maior sensibilidade nos pés, assegurando conforto sem esforço."
    },
    {
      "id": 2,
      "nome": "Bota Casual",
      "preco": 25,
      "categoria": "calçado",
      "imagem": "https://images.unsplash.com/photo-1517389274750-a758d503b69e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "descricao": "Estilo e durabilidade para o dia a dia.",
      "longDescription": "Com sola antiderrapante e estrutura firme, esta bota oferece maior estabilidade ao caminhar, sendo uma excelente escolha para quem necessita de segurança adicional nos movimentos do dia a dia."
    },
    {
      "id": 3,
      "nome": "T-Shirt Básica",
      "preco": 45,
      "categoria": "vestuário",
      "imagem": "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
      "descricao": "Uma t-shirt versátil e acessível para qualquer ocasião.",
      "longDescription": "Confeccionada em tecido leve e suave ao toque, esta t-shirt é confortável para peles sensíveis e fácil de vestir, ideal para quem enfrenta limitações nos movimentos dos braços ou ombros."
    },
    {
      "id": 4,
      "nome": "Calça Jeans",
      "preco": 45,
      "categoria": "vestuário",
      "imagem": "https://assets.timberland.eu/images/t_img/f_auto,h_650,w_650,e_sharpen:60/dpr_2.0/v1713958910/TB0A5TNFEJW-ALT10/Refibra-Denim-Trouser-for-Men-in-Blue.png",
      "descricao": "Clássica e resistente, ideal para o dia a dia.",
      "longDescription": "Esta calça de ganga tem corte confortável e cintura ajustável, permitindo maior liberdade de movimentos e facilitando o vestir, especialmente para quem tem dificuldades de mobilidade ou equilíbrio."
    },
    {
      "id": 5,
      "nome": "Jaqueta Jeans",
      "preco": 45,
      "categoria": "vestuário",
      "imagem": "https://images.unsplash.com/photo-1625503331578-0553936fc5f8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "descricao": "Estilosa e prática, uma opção acessível para todas as estações.",
      "longDescription": "Equipada com botões de pressão fáceis de manusear, esta jaqueta de ganga proporciona facilidade no vestir, sendo indicada para pessoas com pouca destreza manual ou limitação nos membros superiores."
    },
    {
      "id": 6,
      "nome": "Relógio de Pulso",
      "preco": 20,
      "categoria": "acessórios",
      "imagem": "https://m.media-amazon.com/images/I/71sj7eCYG9L.__AC_SX300_SY300_QL70_ML2_.jpg",
      "descricao": "Funcional e moderno, um acessório barato que combina com tudo.",
      "longDescription": "Com mostrador de leitura simples e bracelete ajustável com fecho prático, este relógio é uma opção funcional para pessoas com baixa visão ou com dificuldades motoras finas."
    },
    {
      "id": 7,
      "nome": "Cinto de Couro",
      "preco": 20,
      "categoria": "acessórios",
      "imagem": "https://images.unsplash.com/photo-1585609762834-b010b79f84b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "descricao": "Toque de estilo com preço justo para completar seu look.",
      "longDescription": "Este cinto em couro flexível possui uma fivela de encaixe simples, sendo ideal para quem procura facilidade ao vestir e conforto durante o uso, mesmo com limitações motoras nas mãos."
    }
  ];