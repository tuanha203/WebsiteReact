const init = [
  {
    id: 1,
    name: 'Voltsillam',
    url: 'https://robohash.org/autmolestiasaut.bmp?size=50x50&set=set1',
    statusCards: {
      content:
        'Injury of cutaneous sensory nerve at ankle and foot level, unspecified leg, subsequent encounter',
      likes: 18,
      comments: 49,
      shares: 49,
      time: '10/15/2020',
    },
  },
  {
    id: 2,
    name: 'Sonsing',
    url: 'https://robohash.org/quisdeseruntnesciunt.jpg?size=50x50&set=set1',
    statusCards: {
      content:
        'Unspecified fracture of left wrist and hand, subsequent encounter for fracture with nonunion',
      likes: 53,
      comments: 61,
      shares: 26,
      time: '6/25/2020',
    },
  },
  {
    id: 3,
    name: 'Namfix',
    url:
      'https://robohash.org/sedvoluptatibusaspernatur.png?size=50x50&set=set1',
    statusCards: {
      content: 'Occlusion and stenosis of bilateral carotid arteries',
      likes: 96,
      comments: 77,
      shares: 13,
      time: '3/7/2020',
    },
  },
  {
    id: 4,
    name: 'Zoolab',
    url: 'https://robohash.org/doloresveltempore.png?size=50x50&set=set1',
    statusCards: {
      content:
        'Dislocation of unspecified interphalangeal joint of right middle finger, subsequent encounter',
      likes: 52,
      comments: 100,
      shares: 11,
      time: '12/13/2019',
    },
  },
  {
    id: 5,
    name: 'Transcof',
    url: 'https://robohash.org/etaperiamhic.png?size=50x50&set=set1',
    statusCards: {
      content:
        'Displaced fracture of capitate [os magnum] bone, left wrist, initial encounter for open fracture',
      likes: 28,
      comments: 64,
      shares: 10,
      time: '7/11/2020',
    },
  },
  {
    id: 6,
    name: 'Quo Lux',
    url: 'https://robohash.org/suntlaboreeos.bmp?size=50x50&set=set1',
    statusCards: {
      content:
        'Adverse effect of predominantly alpha-adrenoreceptor agonists, initial encounter',
      likes: 75,
      comments: 37,
      shares: 75,
      time: '1/5/2020',
    },
  },
  {
    id: 7,
    name: 'Cardguard',
    url: 'https://robohash.org/etetducimus.jpg?size=50x50&set=set1',
    statusCards: {
      content: 'Recurrent isolated sleep paralysis',
      likes: 84,
      comments: 37,
      shares: 27,
      time: '10/21/2020',
    },
  },
  {
    id: 8,
    name: 'Tempsoft',
    url: 'https://robohash.org/inetad.jpg?size=50x50&set=set1',
    statusCards: {
      content: 'Unspecified drowning and submersion, undetermined intent',
      likes: 4,
      comments: 100,
      shares: 7,
      time: '5/8/2020',
    },
  },
  {
    id: 9,
    name: 'Transcof',
    url: 'https://robohash.org/fugiatquasiut.bmp?size=50x50&set=set1',
    statusCards: {
      content:
        'Toxic effect of venom of other venomous lizard, accidental (unintentional), sequela',
      likes: 70,
      comments: 93,
      shares: 5,
      time: '6/2/2020',
    },
  },
  {
    id: 10,
    name: 'Voyatouch',
    url: 'https://robohash.org/sitetmaiores.jpg?size=50x50&set=set1',
    statusCards: {
      content: 'Cyst of pancreas',
      likes: 49,
      comments: 98,
      shares: 79,
      time: '7/15/2020',
    },
  },
];

const userReduce = (state = init, action) => {
  switch (action.type) {
    case 'UPDATE_USERS':
      return action.payload;
    default:
      return state;
  }
};

export { userReduce };
