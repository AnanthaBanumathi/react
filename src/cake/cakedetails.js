const cakeData = [
    {
      name: "Birhday Cake",
      offerprice: 400,
      ratings: "4.3",
      id: "1",
      title: "birthdaycake",
      delivery: 45,
      offers:"10%",
      category: 'latest',
      orginalPrize: 500,
      days:"1",
      image: "https://assets.winni.in/product/primary/2023/8/88014.jpeg?dpr=2&w=220"
    },
    {
      name: "Apple Cake",
      offerprice: 800,
      ratings: "4.3",
      id: "1",
      title: "applecake",
      delivery: 45,
      offers:"10%",
      category: 'latest',
      orginalPrize: 950,
      image: "https://img.taste.com.au/2vkuYMCn/taste/2016/11/apple-cake-77027-1.jpeg"
    },
    {
      name: "Angel Cake",
      offerprice: 600,
      ratings: "3.9",
      id: "1",
      title: "angelcake",
      delivery: 45,
      offers:"8%",
      category: 'latest',
      orginalPrize: 750,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFOl3WF0jvuxuzRmo6llRPSoe406GxSscyQ&s"
    },
    {
      name: "Banana Cake",
      offerprice: 300,
      ratings: "4.0",
      id: "1",
      title: "bananacake",
      delivery: 45,
      offers:"8%",
      category: 'latest',
      orginalPrize: 350,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKRV0HWcvHiUsvdeN-6sBn0SH1a5KEeo_aeQ&s"
    },
    {
      name: "Batternberg Cake",
      offerprice: 350,
      ratings: "4.3",
      id: "1",
      title: "batternbergcake",
      delivery: 45,
      offers:"10%",
      category: 'latest',
      orginalPrize: 500,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1Oi20Od8ggNG7GWePAd30PoNEumxnhU5iw&s"
    },
    {
      name: "Blackout Cake",
      offerprice: 400,
      ratings: "3.8",
      id: "1",
      title: "blackoutcake",
      delivery: 45,
      offers:"5%",
      category: 'latest',
      orginalPrize: 500,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPIhaVhfq42w9_X2nISwhm8BFKFACj6AZXw&s"
    },
    {
      name: "Blondie Cake",
      offerprice: 200,
      ratings: "3.9",
      id: "1",
      title: "blondiecake",
      delivery: 45,
      offers:"5%",
      category: 'latest',
      orginalPrize: 300,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvJ5WF4oE0UsFCaq2L1-TCvezvwraODgceg&s"
    },
    {
      name: "Brownie Cake",
      offerprice: 400,
      ratings: "4.0",
      id: "1",
      title: "browniecake",
      delivery: 45,
      offers:"10%",
      category: 'latest',
      orginalPrize: 500,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVoe3iM9tURnTnhViRNBpBndJ9GFlIP1PxA&s"
    },
    {
      name: "Bundt Cake",
      offerprice: 350,
      ratings: "3.7",
      id: "1",
      title: "bundtcake",
      delivery: 45,
      offers:"8%",
      category: 'latest',
      orginalPrize: 400,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiVOPeYWu2AVgEZ-ieiHly98T4P7U0Vs4F1w&s"
    },
    {
      name: "Butter Cake",
      offerprice: 200,
      ratings: "4.3",
      id: "1",
      title: "buttercake",
      delivery: 45,
      offers:"10%",
      category: 'latest',
      orginalPrize: 300,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLZ-M-aV-t9WbLuq-gUBUq8rHDRulza8Vz3Q&s"
    },
    {
      name: "Carrot Cake",
      offerprice: 350,
      ratings: "3.5",
      id: "1",
      title: "carrotcake",
      delivery: 45,
      offers:"5%",
      category: 'latest',
      orginalPrize: 400,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcfKETnLGiQDF2vZhgmZm-yhWmHoVswWIIQ&s"
    },
    {
      name: "Cheese Cake",
      offerprice: 400,
      ratings: "4.0",
      id: "1",
      title: "cheesecake",
      delivery: 45,
      offers:"5%",
      category: 'latest',
      orginalPrize: 450,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd4fF7r0UdWARIjqjRBc342lc7-lU6_1K8cw&s"
    },
    {
      name: "Chiffon Cake",
      offerprice: 300,
      ratings: "3.8",
      id: "1",
      title: "chiffoncake",
      delivery: 45,
      offers:"5%",
      category: 'latest',
      orginalPrize: 400,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdCiSaAA38vVdHuUHh-DcOWSytWJPbrBtktw&s"
    },
    {
      name: "Chestnut Cake",
      offerprice: 350,
      ratings: "4.0",
      id: "1",
      title: "chestnutcake",
      delivery: 45,
      offers:"10%",
      category: 'latest',
      orginalPrize: 450,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwnMZhpc4Gby9SILdbircgIiINey3-V930iw&s"
    },
    {
      name: "Cocount Cake",
      offerprice: 350,
      ratings: "4.5",
      id: "1",
      title: "chestnutcake",
      delivery: 45,
      offers:"5%",
      category: 'latest',
      orginalPrize: 400,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsw_vHDgHcvN3yNJFZQSkTMdLxlWuCV3gOnA&s"
    },
    {
      name: "Chocolate Cake",
      offerprice: 500,
      ratings: "4.5",
      id: "1",
      title: "chocolatecake",
      delivery: 45,
      offers:"8%",
      category: 'latest',
      orginalPrize: 600,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLTEOQ0gVKfQNc6pXchcN-KGm8F7_qhKzHA&s"
    },
    {
      name: "Vanilla Cake",
      offerprice: 400,
      ratings: "4.1",
      id: "1",
      title: "vanillacake",
      delivery: 45,
      offers:"8%",
      category: 'birthday',
      orginalPrize: 490,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrg4Pc2UJDjzNQyScUSCwtz5JzHgLCFE-v1Q&s"
    },
    {
      name: "Chocolate Cake",
      offerprice: 500,
      ratings: "3.9",
      id: "1",
      title: "chocolatecake",
      delivery: 45,
      offers:"8%",
      category: 'birthday',
      orginalPrize: 600,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTISptptNMXJPRUo9UG0OwXm6XSY4bFjrHaiQ&s"
    },
    {
      name: "Red Velvet Cake",
      offerprice: 600,
      ratings: "4.5",
      id: "1",
      title: "redvelvetcake",
      delivery: 45,
      offers:"5%",
      category: 'birthday',
      orginalPrize: 700,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Fus2nFo9-BWNSbmQS9u-scr5F9BjD2ON_g&s"
    },
    {
      name: "Fruit Cake",
      offerprice: 600,
      ratings: "3.8",
      id: "1",
      title: "fruitcake",
      delivery: 45,
      offers:"8%",
      category: 'birthday',
      orginalPrize: 700,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1SXeyQ94PJUk4LQYxa0gjjguIOYVlquAOg&s"
    },
    {
      name: "Block Forest Cake",
      offerprice: 450,
      ratings: "4.8",
      id: "1",
      title: "blockforestcake",
      delivery: 45,
      offers:"10%",
      category: 'birthday',
      orginalPrize: 550,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ymnw4ZOcO8fn2teHdjnQBaHMiy9sY4G2PQ&s"
    },
    {
      name: "Chocolate truffle Cake",
      offerprice: 575,
      ratings: "4.5",
      id: "1",
      title: "chocolatetrufflecake",
      delivery: 45,
      offers:"8%",
      category: 'birthday',
      orginalPrize: 675,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90yQgR10DRIansRyGTxHrSyMAdIILXfJCBg&s"
    },
    {
      name: "Upside-down Cake",
      offerprice: 400,
      ratings: "4.5",
      id: "1",
      title: "upsidedowncake",
      delivery: 45,
      offers:"8%",
      category: 'birthday',
      orginalPrize: 490,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8mRwtUytfMPJ6pLHnIbV7O2LaLGnMSZNRVg&s"
    },
    {
      name: "Angel Food Cake",
      offerprice: 400,
      ratings: "3.8",
      id: "1",
      title: "angelfoodcake",
      delivery: 45,
      offers:"8%",
      category: 'birthday',
      orginalPrize: 500,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDO6NKWWPJuATac_jFFylg01b2LrQwYobUg&s"
    },
    {
      name: "Butterscotch Cake",
      offerprice: 400,
      ratings: "4.5",
      id: "1",
      title: "vanillacake",
      delivery: 45,
      offers:"5%",
      category: 'birthday',
      orginalPrize: 450,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSIBTzVw5GpjlHHoyhlTxdc2ffoshrjpzfCA&s"
    },
    {
      name: "Butter Cake",
      offerprice: 300,
      ratings: "4.0",
      id: "1",
      title: "buttercake",
      delivery: 45,
      offers:"8%",
      category: 'birthday',
      orginalPrize: 400,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmtoBq9pNPJEBUkbazIHszcqOnxNvJvHQ_vA&s"
    },
    {
      name: "Coffee Cake",
      offerprice: 700,
      ratings: "4.5",
      id: "1",
      title: "coffeecake",
      delivery: 45,
      offers:"8%",
      category: 'birthday',
      orginalPrize: 800,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIIl7EnbH-4GzMGGvbvPreDlLlocdIM5DQw&s"
    },
    {
      name: "Cheese Cake",
      offerprice: 700,
      ratings: "4.5",
      id: "1",
      title: "cheesecake",
      delivery: 45,
      offers:"10%",
      category: 'birthday',
      orginalPrize: 900,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzE0y5-5zeHJ2FfqgkoOPwEDvuPkrH8Og4A&s"
    },
    {
      name: "Chocolate Wedding Cake",
      offerprice: 700,
      ratings: "4.1",
      id: "1",
      title: "chocolatecake",
      delivery: 45,
      offers:"8%",
      category: 'wedding',
      orginalPrize: 900,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm5Ilv2ZBUo5TbhpAkNKbfO9wC-gbRv-U2QA&s"
    },
    {
      name: "Vanilla Wedding Cake",
      offerprice: 600,
      ratings: "3.9",
      id: "1",
      title: "vanillacake",
      delivery: 45,
      offers:"5%",
      category: 'wedding',
      orginalPrize: 650,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sakpBi-9kL8do3T_uSTgUb_DosuWVqLkDQ&s"
    },
    {
      name: "Fresh Fruit Cake",
      offerprice: 600,
      ratings: "3.8",
      id: "1",
      title: "freshfruitcake",
      delivery: 45,
      offers:"8%",
      category: 'wedding',
      orginalPrize: 700,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBxVBuICh4zXa_XVTRRc6TMA_vVXdgeAhgrQ&s"
    },
    {
      name: "Foundant Cake",
      offerprice: 800,
      ratings: "3.8",
      id: "1",
      title: "foundantcake",
      delivery: 45,
      offers:"6%",
      category: 'wedding',
      orginalPrize: 900,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJnbsP4wSlEPLwSTge76s0M8GI3tEQJnlLLA&s"
    },
    {
      name: "Butterscotch Cake",
      offerprice: 500,
      ratings: "3.9",
      id: "1",
      title: "butterscotchcake",
      delivery: 45,
      offers:"5%",
      category: 'wedding',
      orginalPrize: 550,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNMwRed6Z3QoHuCHPNnth8Xr5hDL2KDTfW-A&s"
    },
    {
      name: "Blockforest Cake",
      offerprice: 700,
      ratings: "4.5",
      id: "1",
      title: "blockforestcake",
      delivery: 45,
      offers:"10%",
      category: 'wedding',
      orginalPrize: 800,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1uekMbsT-5lfYtSNqi7Wy9aEFmngWLvAIg&s"
    },
    {
      name: "ButtercreamCake",
      offerprice: 500,
      ratings: "4.1",
      id: "1",
      title: "buttercreamcake",
      delivery: 45,
      offers:"8%",
      category: 'wedding',
      orginalPrize: 600,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUwN9u_TgE-6T7_mWdyyrZ25cfRVABdyqXQ&s"
    },
    {
      name: "2-Tier Cake",
      offerprice: 800,
      ratings: "3.8",
      id: "1",
      title: "tiercake",
      delivery: 45,
      offers:"10%",
      category: 'wedding',
      orginalPrize: 1000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUj0ZGJZQnE1hVOySjlOMVENiOulFE2kdMg&s"
    },
    {
      name: "Christmas Plum Cake",
      offerprice: 800,
      ratings: "3.8",
      id: "1",
      title: "plumcake",
      delivery: 45,
      offers:"10%",
      category: 'christmas',
      orginalPrize: 1000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_F6JLxNzbpIzRNUoIDbS2-GUVZOXG8Nbdg&s"
    },
    {
      name: "Gingerbread Cake",
      offerprice: 500,
      ratings: "3.8",
      id: "1",
      title: "gingercake",
      delivery: 45,
      offers:"10%",
      category: 'christmas',
      orginalPrize: 650,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNyiw5nb-M4YdUS1PK11HBIRlz5QH5LzH_Q&s"
    },
    {
      name: "Ugly sweater Cake",
      offerprice: 500,
      ratings: "3.5",
      id: "1",
      title: "uglycake",
      delivery: 45,
      offers:"10%",
      category: 'christmas',
      orginalPrize: 600,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbzQNbvQ9BMsfVD2jNhinXuMPDypc_KfrcfA&s"
    },
    {
      name: "Christmas Tree Cake",
      offerprice: 700,
      ratings: "3.9",
      id: "1",
      title: "treecake",
      delivery: 45,
      offers:"10%",
      category: 'christmas',
      orginalPrize: 800,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCc69QtJrcwgw7-RHa31InVHphWwWKSqyD-A&s"
    },
    {
      name: "Blockforest Cake",
      offerprice: 500,
      ratings: "4.2",
      id: "1",
      title: "blockforestcake",
      delivery: 45,
      offers:"10%",
      category: 'christmas',
      orginalPrize: 600,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5tmuy_EBd-lk1g5sQCZ6sBXxX-K9khmkVg&s"
    },
    {
      name: "Panettone Cake",
      offerprice: 400,
      ratings: "3.5",
      id: "1",
      title: "panettonecake",
      delivery: 45,
      offers:"10%",
      category: 'christmas',
      orginalPrize: 500,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytUeJPIjhsaL-Wwddg_el8anNaJcPf-b28Q&s"
    },
    {
      name: "Christmas Foundant Cake",
      offerprice: 500,
      ratings: "3.6",
      id: "1",
      title: "foundantcake",
      delivery: 45,
      offers:"10%",
      category: 'christmas',
      orginalPrize: 600,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQaiIdcou3ZUxTubD3r57HPaOTArU8Yua4bQ&s"
    },
    {
      name: "Buttercream Cake",
      offerprice: 700,
      ratings: "4.2",
      id: "1",
      title: "buttercreamcake",
      delivery: 45,
      offers:"10%",
      category: 'christmas',
      orginalPrize: 800,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjj9bwtdDDFpYQsCRUFqemQ-V5Aq5x3sEeg&s"
    },
    
  ];
  export default cakeData