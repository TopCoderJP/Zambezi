import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '¥5,600',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '¥5,900',
    tags: 'NZ | Bottle',
  },
  {
    title: 'La Vieille Rosé ',
    price: '¥4,400',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '¥3,100',
    tags: 'ZW | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '¥2,600',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Spritz',
    price: '¥2,000',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '¥1,600',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '¥1,000',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '¥3,100',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '¥2,600',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'リーズナブルな価格で優れた料理を提供することがこの賞を受賞しました.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: '創造性、野心、絶妙なプレゼンテーション、そしておいしい料理がこの賞を受賞しました.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: '並外れたおもてなしがこの賞を受賞しました.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: '卓越した料理がこの賞を受賞しました.',
  },
];

export default { wines, cocktails, awards };
