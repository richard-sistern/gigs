const header = 'Welcome to this wonderful example timeline.';
const footer = 'A footer goes here.';
const entries = [
  {
    id: 'hives-at-lcr',
    color: 'grey',
    faicon: 'icons',
    datetime: '2024-04-10 19:30',
    title: 'The Hives - The Death of Randy Fitzsimmons',
    image: {
      src: 'img/gigs/the-hives-at-lcr.jpg',
      alt: 'The Death of Randy Fitzsimmons Tour 2024',
      caption: 'The Death of Randy Fitzsimmons Tour 2024',
    },
    body: "The Hives… on a creative hiatus… surely not? Yet, while it has been over ten years since the Swedish band’s last album, 2012’s Lex Hives, anyone fearing they have fallen into the ageing rock cliche of an act touring on past glories can rest easy. Yes, The Death Of Randy Fitzsimmons is The Hives first full album in over a decade, but as its macabre title hints, the reason for the band’s absence from the studio has been uniquely and suitably The Hives. There was a problem… the increasingly long absence of The Hives’ founder, mentor and songwriter, the limelight-shunning Randy Fitzsimmons. Now, returning for their final act since his mysterious disappearance, the band have delivered a record that is not just worthy of their legacy, but one that adds fresh lustre to The Hives. The Death Of Randy Fitzsimmons is a true renaissance.",
    links: [
      {
        href: 'https://www.thehives.com/',
        linkText: 'The Hives',
      },
      {
        href: 'https://badnerves.co.uk/',
        linkText: 'Bad Nerves (support)',
      },
    ],
  },
  {
    id: 'livewire-at-waterfront',
    color: 'grey',
    faicon: 'icons',
    datetime: '2024-04-20 18:30',
    title: 'Livewire',
    image: {
      src: 'img/gigs/livewire-at-waterfront.jpg',
      alt: 'Livewire the AC/DC Show',
      caption: 'Livewire the AC/DC Show',
    },
    body: 'AC/DC, arguably the greatest rock band of all time, are brought to life by Live/Wire with the true passion you would expect from professional musicians who share your love of this legendary live act. They deliver a critically acclaimed High Voltage two hour rock ’n’ roll set with not only cannons and a full bank of Marshall amps but a journey that takes fans from one of the best-selling albums of all time ‘Back in Black’ through to the 2020 release ‘PWR UP’, with a healthy dose of the classics from the Bon Scott era.<br><br>The Live/Wire show combines the vocal power of Podge Blacksmith as Brian Johnson, the virtuoso talent of Simon Davies as Angus Young and rhythmic accuracy of Dan Mosley as Malcolm Young. The line-up is completed by Eddie Clark as bassist Cliff Williams and Paul Alwin combining the groove of Phil Rudd and thunderous energy of Chris Slade on drums.<br><br>With over 20 years of touring under their belt, Live/Wire put the audience right in the middle of a live experience comparable to that only AC/DC themselves produce. We invite AC/DC fans to join us, sing with us and relive some of those classic AC/DC concerts of the past on our very own Highway to Hell.',
    links: [
      {
        href: 'https://www.livewireacdcshow.com/',
        linkText: 'Livewire',
      },
    ],
  },
  {
    id: 'cam-cole-at-waterfront',
    color: 'grey',
    faicon: 'icons',
    datetime: '2024-04-23 19:30',
    title: 'Cam Cole',
    image: {
      src: 'img/gigs/cam-cole-at-waterfront.png',
      alt: 'Cam Cole',
      caption: 'Cam Cole',
    },
    body: 'It‘s an exciting time to listen to Cam Cole and follow his journey. From the streets of Camden in London his songs, his guitars, his Farmer footdrums and most importantly his followers have taken him across the world.<br><br>A cameo on Emmy winning TV show Ted Lasso, festivals in the UK, Sweden, Norway, the Belgium, Netherlands, an Irish tour, two UK tours and a Europe tour, a standout performance at Festival Vaiven in Mexico which gained him thousands of new fans at the other end of the world and most importantly two USA/Canada tour where Cam sold out venues in cities he had never been to before are all part of an incredible journey that only two years ago seemed impossible.<br><br>And now Cam is ready to unleash his 3rd album as well as classic songs from his first two records on his biggest tour yet!  18 dates all across the UK and Ireland.',
    links: [
      {
        href: 'https://camcole.com/',
        linkText: 'Cam Cole',
      },
      {
        href: 'https://www.the-gulls.com/',
        linkText: 'The Gulls (support)',
      },
    ],
  },
  {
    id: 'indiana-jones-at-royal-albert-hall',
    color: 'grey',
    faicon: 'icons',
    datetime: '2024-05-26 19:30',
    title: 'Indiana Jones and the Raiders of the Lost Ark Live in Concert',
    image: {
      src: 'img/gigs/indiana-jones-at-royal-albert-hall.jpg',
      alt: 'Indiana Jones',
      caption: 'Indiana Jones',
    },
    body: 'Experience the first on-screen adventure of everyones favourite archaeologist/action hero, with live orchestra at the Royal Albert Hall.<br><br>Part of our Films in Concert series, Indiana Jones and the Raiders of the Lost Ark™ in Concert will feature the London Symphony Orchestra performing John Williams’ legendary score in full for the first time since they recorded the original soundtrack in 1981.',
    links: [
      {
        href: 'https://www.royalalberthall.com/',
        linkText: 'Royal Albert Hall',
      },
    ],
  },
  {
    id: 'arctic-monkeys-at-carrow-road',
    color: 'grey',
    faicon: 'icons',
    datetime: '2023-06-07 18:40',
    title: 'Artic Monkeys',
    image: {
      src: 'img/gigs/arctic-monkeys-at-carrow-road.jpg',
      alt: 'Arctic Monkeys',
      caption: 'Arctic Monkeys',
    },
    body: '...',
    links: [
      {
        href: 'https://arcticmonkeys.com/',
        linkText: 'Arctic Monkeys',
      },
      {
        href: 'https://www.thehives.com/',
        linkText: 'The Hives (support)',
      },
      {
        href: 'https://themysterines.com/',
        linkText: 'The Mysterines (support)',
      },
    ],
  },
  {
    id: 'elton-john-at-carrow-road',
    color: 'grey',
    faicon: 'icons',
    datetime: '2023-06-15 19:30',
    title: 'Elton John - Farewell Yellow Brick Road Tour',
    image: {
      src: 'img/gigs/elton-john-at-carrow-road.jpg',
      alt: 'Elton John',
      caption: 'Elton John',
    },
    body: '...',
    links: [
      {
        href: 'https://www.eltonjohn.com/',
        linkText: 'Elton John',
      },
    ],
  },
  {
    id: 'killers-at-carrow-road',
    color: 'grey',
    faicon: 'icons',
    datetime: '2023-06-09 19:00',
    title: 'The Killers - Imploding the Mirage',
    image: {
      src: 'img/gigs/killers-at-carrow-road.jpg',
      alt: 'The Killers',
      caption: 'The Killers',
    },
    body: '...',
    links: [
      {
        href: 'https://www.thekillersmusic.com/',
        linkText: 'The Killers',
      },
      {
        href: 'https://www.blossomsband.co.uk/',
        linkText: 'Blossoms (support)',
      },
    ],
  },
  {
    id: 'neck-of-the-woods-at-earlham-park',
    color: 'grey',
    faicon: 'icons',
    datetime: '2022-05-29 13:00',
    title: 'Neck of the Woods',
    image: {
      src: 'img/gigs/neck-of-the-woods-at-earlham-park.jpg',
      alt: 'The Killers',
      caption: 'The Killers',
    },
    body: 'Staging the nation’s finest indie and alternative sounds right on your doorstep, Neck of the Woods will be popping up in East Anglia for the very first time on Sunday 29th May 2022.<br><br>With acts appearing across three stages, 14,000 music fans will descend on Earlham Park (Norwich) for a day of incredible live music.<br><br>Headlining the Main Stage of the inaugural Neck of the Woods will be… THE KOOKS. Over the years, The Kooks have proven themselves to be pillars of the UK indie pop world. Celebrating the 15th Anniversary of their iconic debut studio album ‘Inside In/Inside Out’ this year, the band will be reminding the Neck of the Woods crowd exactly why its songs are still the soundtrack to a whole generation of young people.',
    links: [
      {
        href: 'https://thekooks.com/',
        linkText: 'The Kooks',
      },
      {
        href: 'https://www.seagirls.net/',
        linkText: 'Sea Girls',
      },
      {
        href: 'https://www.kawalaofficial.com/',
        linkText: 'Kawala',
      },
    ],
  },
];

//Sort by date order
entries.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));

// Page details
const pageTitle = 'Static timeline generator'; // The title of the page that shows in the browser tab
const pageDescription = 'A super fancy timeline'; // The description of the page for search engines
const pageAuthor = 'Richard Sistern'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
