interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  gender: string;
  images?: any;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Hublot Classic Fusion",
    description:
      "A blend of elegance and modern design with precise craftsmanship for the discerning gentleman.",
    price: "3500Rs",
    gender: "men",
    image: "/hublot/green.jpeg",
    images: ["/images/hublot/green.jpeg", "/images/hublot/blue.jpeg", "/images/hublot/red.jpeg"],
  },
  {
    id: 2,
    title: "LED Touch Digital",
    description:
      "A sleek and modern digital watch with touch functionality, perfect for casual outings and workouts.",
    price: "1500Rs",
    gender: "women",
    image: "/ledTouchDigitalWomen/golden.jpeg",
    images: [
      "/images/ledTouchDigitalWomen/golden.jpeg",
      "/images/ledTouchDigitalWomen/lightOrange.jpeg",
      "/images/ledTouchDigitalWomen/pureSilver.jpeg",
      "/images/ledTouchDigitalWomen/silverBlack.jpeg",
    ],
  },
  {
    id: 3,
    title: "Xenlex Gents",
    description:
      "A timeless masterpiece combining durability with sophisticated style, crafted for the modern man.",
    price: "3000 Rs",
    gender: "men",
    image: "/xenlexGents/gray.jpeg",
    images: [
      "/images/xenlexGents/black.jpeg",
      "/images/xenlexGents/gray.jpeg",
      "/images/xenlexGents/white.jpeg",
    ],
  },
  {
    id: 4,
    title: "Audemars Piguet Royal",
    description:
      "An iconic design offering unparalleled luxury and precise craftsmanship for watch connoisseurs.",
    price: "18000 Rs",
    gender: "men",
    image: "/audemarsPiguet/fullBlack.jpeg",
    images: [
      "/images/audemarsPiguet/fullBlack.jpeg",
      "/images/audemarsPiguet/lightOrangeBlack.jpeg",
      "/images/audemarsPiguet/lightOrange.jpeg",
      "/images/audemarsPiguet/orange.jpeg",
      "/images/audemarsPiguet/orangeBlack.jpeg",
      "/images/audemarsPiguet/orangeGray.jpeg",
      "/images/audemarsPiguet/silverBlue.jpeg",
      "/images/audemarsPiguet/silverBlack.jpeg",
      "/images/audemarsPiguet/silverBlack2.jpeg",
      "/images/audemarsPiguet/silverGray.jpeg",
      "/images/audemarsPiguet/silverGreen.jpeg",
      "/images/audemarsPiguet/silverOrange.jpeg",
    ],
  },
  {
    id: 5,
    title: "Rolex Oyster Perpetual",
    description:
      "A symbol of prestige and sophistication, perfect for formal occasions and professional settings.",
    price: "1500Rs",
    gender: "men",
    image: "/rolexWatch/black.jpeg",
    images: [
      "/images/rolexWatch/black.jpeg",
      "/images/rolexWatch/blue.jpeg",
      "/images/rolexWatch/gray.jpeg",
      "/images/rolexWatch/blackBackside.jpeg",
    ],
  },
  {
    id: 6,
    title: "Patek Philippe Calatrava",
    description:
      "A classic timepiece known for its timeless design and unrivaled craftsmanship, ideal for collectors.",
    price: "18000Rs",
    gender: "men",
    image: "patexPhilippe/blue.jpeg",
    images: ["/images/patexPhilippe/blue.jpeg", "/images/patexPhilippe/silver.jpeg"],
  },
  {
    id: 7,
    title: "Tag Heuer Automatic",
    description:
      "A sporty yet elegant automatic watch built for durability and precision, perfect for any adventure.",
    price: "18000 Rs",
    gender: "men",
    image: "/tagHeuerCarreraAutomatic/silverBlack.jpeg",
    images: [
      "/images/tagHeuerCarreraAutomatic/silverBlack.jpeg",
      "/images/tagHeuerCarreraAutomatic/silverWhite.jpeg",
      "/images/tagHeuerCarreraAutomatic/silverWhite2.jpeg",
    ],
  },
  {
    id: 8,
    title: "Tag Heuer Carrera",
    description:
      "Inspired by motor racing, this watch combines rugged performance with sophisticated aesthetics.",
    price: "18000 Rs",
    gender: "men",
    image: "/tagHeuerCarreraMaster/black.jpeg",
    images: [
      "/images/tagHeuerCarreraMaster/black.jpeg",
      "/images/tagHeuerCarreraMaster/blackgolden.jpeg",
      "/images/tagHeuerCarreraMaster/brown.jpeg",
      "/images/tagHeuerCarreraMaster/goldenBlue.jpeg",
      "/images/tagHeuerCarreraMaster/lightGolden.jpeg",
    ],
  },
  {
    id: 9,
    title: "Tag Heuer Monaco",
    description:
      "A bold square-faced design that exudes confidence and heritage, perfect for standout occasions.",
    price: "18000 Rs",
    gender: "men",
    image: "/tagHeuerMonaca/black.jpeg",
    images: [
      "/images/tagHeuerMonaca/black.jpeg",
      "/images/tagHeuerMonaca/blackBlue.jpeg",
      "/images/tagHeuerMonaca/blackSilver.jpeg",
      "/images/tagHeuerMonaca/blue.jpeg",
      "/images/tagHeuerMonaca/darkBlue.jpeg",
      "/images/tagHeuerMonaca/green.jpeg",
      "/images/tagHeuerMonaca/lightBlue.jpeg",
    ],
  },
  {
    id: 10,
    title: "TISSOT",
    description:
      "Quartz movement, all inner dials working, steel bracelet with great quality and finishing.",
    price: "7000Rs",
    gender: "men",
    image: "/tissot/silverBlack.jpeg",
    images: ["/images/tissot/silverBlack.jpeg", "/images/tissot/silverWhite.jpeg", "/images/tissot/goldenBlack.jpeg", "/images/tissot/goldenSilver.jpeg"],
  },
  {
    id: 11,
    title: "ROLEX",
    description:
      "Quartz movement, GMT working, date working, rotatable bezel with great quality and finishing.",
    price: "3500Rs",
    gender: "men",
    image: "/rolex/silverBlack.jpeg",
    images: [
      "/images/rolex/silverBlack.jpeg",
      "/images/rolex/silverBlackRed.jpeg",
      "/images/rolex/silverGolden.jpeg",
      "/images/rolex/silverRedBlue.jpeg",
      "/images/rolex/blackSilver.jpeg",
      "/images/rolex/goldenBlack.jpeg",
      "/images/rolex/goldenBlackSilver.jpeg",
      "/images/rolex/goldenGray.jpeg"],
  },
  {
    "id": 12,
    "title": "Quartz",
    "description": "New Arrival! Stone case, available in 6 vibrant colors.",
    "price": "1800Rs",
    "gender": "women",
    "image": "/quartz/silver.jpeg",
    "images": [
      "/images/quartz/lightGolden.jpeg",
      "/images/quartz/silverBlack.jpeg",
      "/images/quartz/silverGolden.jpeg",
      "/images/quartz/silverWhite.jpeg",
      "/images/quartz/silver.jpeg",
      "/images/quartz/silverLightBlack.jpeg",
    ]
  },
  // new add product
  {
    id: 13,
    title: "Rolex ~ Standard Quality",
    description:
      "Quartz movement, Date/Day working, Metal bracelet. Great quality & finishing. LIMITED STOCK.",
    price: "3000Rs",
    gender: "men",
    image: "/RolexStandardQuailty/goldenGreen.jpeg",
    images: [
      "/images/RolexStandardQuailty/goldenGreen.jpeg",
      "/images/RolexStandardQuailty/golden.jpeg",
      "/images/RolexStandardQuailty/watchBackSide.jpeg",
      "/images/RolexStandardQuailty/goldenWhite.jpeg",
    ],
  },
  {
    id: 14,
    title: "Bestwin ~ Original",
    description:
      "New Model with Quartz movement, Date/Day working, Butterfly lock. Great quality & finishing. LIMITED STOCK.",
    price: "3500Rs",
    gender: "men",
    image: "/bestwin/goldenBlue.jpeg",
    images: [
      "/images/bestwin/goldenBlue.jpeg",
      "/images/bestwin/silverBlack.jpeg",
      "/images/bestwin/silverBlue.jpeg",
      "/images/bestwin/goldenSilver.jpeg",
    ],
  },
  {
    id: 15,
    title: "Seastar ~ Original",
    description:
      "Quartz movement, Analog/Digital, Waterproof, Silicone rubber strap. Great quality & finishing. LIMITED STOCK.",
    price: "3500Rs",
    gender: "men",
    image: "/seastar/black.jpeg",
    images: [
      "/images/seastar/black.jpeg",
      "/images/seastar/green.jpeg",
      "/images/seastar/crimson.jpeg",
      "/images/seastar/fullBlack.jpeg",
    ],
  },
  {
    id: 17,
    title: "Longines Couple Watch",
    description:
      "A classic pair of watches for couples, with precision and elegance. Available in matching designs.",
    price: "25000Rs",
    gender: "couple",
    image: "/longinesCouple/goldenSilverWhite.jpeg",
    images: [
      "/images/longinesCouple/goldenSilverWhite.jpeg",
      "/images/longinesCouple/goldenWhite.jpeg",
      "/images/longinesCouple/silverWhite.jpeg",
      "/images/longinesCouple/backside.jpeg",
    ],
  },
  {
    id: 18,
    title: "Omega Couple Watch",
    description:
      "A sophisticated couple's watch set with timeless style and high-quality craftsmanship.",
    price: "25000Rs",
    gender: "couple",
    image: "/omegaCouple/goldenSilver.jpeg",
    images: [
      "/images//omegaCouple/goldenSilver.jpeg",
      "/images//omegaCouple/goldenWhite.jpeg",
      "/images//omegaCouple/silver.jpeg",
      "/images//omegaCouple/silverWhite.jpeg",
      "/images//omegaCouple/silverGoldenWhite.jpeg",
      "/images//omegaCouple/back1.jpeg",
      "/images//omegaCouple/back2.jpeg",
    ],
  },
  // {
  //   id: 19,
  //   title: "Longines Couple Watch (Men)",
  //   description:
  //     "A classic watch for men, combining precision and elegance, perfect for formal and casual occasions.",
  //   price: "12500Rs", // Price adjusted as it's now sold separately
  //   gender: "men",
  //   image: "/longinesCouple/goldenSilverWhite.jpeg",  // Image for men
  //   images: [
  //     "/images/longinesCouple/goldenSilverWhite.jpeg",
  //     "/images/longinesCouple/goldenWhite.jpeg",
  //     "/images/longinesCouple/silverWhite.jpeg",
  //     "/images/longinesCouple/backside.jpeg",
  //   ],
  // },

  // // Longines Couple Watch - Women
  // {
  //   id: 20,
  //   title: "Longines Couple Watch (Women)",
  //   description:
  //     "A refined watch for women, offering a sophisticated design with a touch of elegance for everyday wear.",
  //   price: "12500Rs", // Price adjusted as it's now sold separately
  //   gender: "women",
  //   image: "/longinesCouple/goldenWhite.jpeg",  // Image for women
  //   images: [
  //     "/images/longinesCouple/goldenWhite.jpeg",
  //     "/images/longinesCouple/silverWhite.jpeg",
  //     "/images/longinesCouple/goldenSilverWhite.jpeg",
  //     "/images/longinesCouple/backside.jpeg",
  //   ],
  // },

  // // Omega Couple Watch - Men
  // {
  //   id: 21,
  //   title: "Omega Couple Watch (Men)",
  //   description:
  //     "A sophisticated watch for men, blending timeless style with high-quality craftsmanship.",
  //   price: "12500Rs", // Price adjusted as it's now sold separately
  //   gender: "men",
  //   image: "/omegaCouple/goldenSilver.jpeg", // Image for men
  //   images: [
  //     "/images/omegaCouple/goldenSilver.jpeg",
  //     "/images/omegaCouple/goldenWhite.jpeg",
  //     "/images/omegaCouple/silver.jpeg",
  //     "/images/omegaCouple/silverWhite.jpeg",
  //     "/images/omegaCouple/silverGoldenWhite.jpeg",
  //     "/images/omegaCouple/back1.jpeg",
  //     "/images/omegaCouple/back2.jpeg",
  //   ],
  // },

  // // Omega Couple Watch - Women
  // {
  //   id: 22,
  //   title: "Omega Couple Watch (Women)",
  //   description:
  //     "A beautifully crafted women's watch with a timeless design, perfect for those who appreciate quality.",
  //   price: "12500Rs", // Price adjusted as it's now sold separately
  //   gender: "women",
  //   image: "/omegaCouple/silverWhite.jpeg",  // Image for women
  //   images: [
  //     "/images/omegaCouple/silverWhite.jpeg",
  //     "/images/omegaCouple/goldenSilver.jpeg",
  //     "/images/omegaCouple/silverGoldenWhite.jpeg",
  //     "/images/omegaCouple/goldenWhite.jpeg",
  //     "/images/omegaCouple/silver.jpeg",
  //     "/images/omegaCouple/back1.jpeg",
  //   ],
  // },

];


