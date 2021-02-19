
const init =  [
    {
      id: 2,
      name: 'Rank',
      url: 'https://robohash.org/estdoloremquequi.bmp?size=50x50&set=set1',
      content:
        'Corrosion of first degree of right ear [any part, except ear drum], initial encounter',
    },
    {
      id: 3,
      name: 'Rank',
      url: 'https://robohash.org/natusnonearum.jpg?size=50x50&set=set1',
      content:
        'Burn due to localized fire on board merchant vessel, initial encounter',
    },
    {
      id: 4,
      name: 'Asoka',
      url: 'https://robohash.org/ametsintfugit.png?size=50x50&set=set1',
      content:
        'Other specified effects of reduced temperature, initial encounter',
    },
    {
      id: 5,
      name: 'Alphazap',
      url: 'https://robohash.org/voluptatesrepellenduset.png?size=50x50&set=set1',
      content:
        'Other superficial bite of left eyelid and periocular area, initial encounter',
    },
    {
      id: 6,
      name: 'Rank',
      url: 'https://robohash.org/quaeestperferendis.jpg?size=50x50&set=set1',
      content: 'Other specified types of non-Hodgkin lymphoma',
    },
    {
      id: 7,
      name: 'Bigtax',
      url: 'https://robohash.org/etofficiasoluta.bmp?size=50x50&set=set1',
      content: 'Contusion of unspecified upper arm, initial encounter',
    },
    {
      id: 8,
      name: 'Lotstring',
      url: 'https://robohash.org/similiquehicvoluptatum.bmp?size=50x50&set=set1',
      content:
        'Unspecified injury of unspecified muscles, fascia and tendons at thigh level, right thigh, initial encounter',
    },
    {
      id: 9,
      name: 'Cookley',
      url:
        'https://robohash.org/voluptatemofficiaofficiis.jpg?size=50x50&set=set1',
      content:
        'Drug or chemical induced diabetes mellitus with mild nonproliferative diabetic retinopathy without macular edema',
    },
    {
      id: 10,
      name: 'Treeflex',
      url: 'https://robohash.org/nonquasut.bmp?size=50x50&set=set1',
      content:
        'Poisoning by mineralocorticoids and their antagonists, undetermined, subsequent encounter',
    },
    {
      id: 1,
      name: 'Veribet',
      url: 'https://robohash.org/quaeetarchitecto.bmp?size=50x50&set=set1',
      content: 'Displaced comminuted fracture of shaft of radius, right arm',
    },
    {
      id: 2,
      name: 'Tin',
      url:
        'https://robohash.org/dignissimosquilaboriosam.jpg?size=50x50&set=set1',
      content:
        'Contusion and laceration of left cerebrum with loss of consciousness of any duration with death due to brain injury prior to regaining consciousness, sequela',
    },
    {
      id: 3,
      name: 'Greenlam',
      url:
        'https://robohash.org/teneturexercitationemiusto.bmp?size=50x50&set=set1',
      content: 'Displaced subtrochanteric fracture of left femur',
    },
    {
      id: 4,
      name: 'Voltsillam',
      url:
        'https://robohash.org/architectolaudantiumquidem.png?size=50x50&set=set1',
      content:
        'Laceration without foreign body of right wrist, subsequent encounter',
    },
    {
      id: 5,
      name: 'Cookley',
      url: 'https://robohash.org/ipsamrepudiandaeomnis.bmp?size=50x50&set=set1',
      content: 'Adult sexual abuse, suspected, initial encounter',
    },
    {
      id: 6,
      name: 'Tin',
      url: 'https://robohash.org/evenietquodnihil.jpg?size=50x50&set=set1',
      content: 'Unspecified lagophthalmos right upper eyelid',
    },
    {
      id: 7,
      name: 'Bitwolf',
      url: 'https://robohash.org/doloremremvoluptatum.bmp?size=50x50&set=set1',
      content:
        'Traumatic hemorrhage of left cerebrum with loss of consciousness of any duration with death due to other cause prior to regaining consciousness, initial encounter',
    },
    {
      id: 8,
      name: 'Daltfresh',
      url: 'https://robohash.org/suscipitenimcupiditate.bmp?size=50x50&set=set1',
      content:
        'Other specified injury of other specified muscles and tendons at ankle and foot level',
    },
    {
      id: 9,
      name: 'Cardguard',
      url: 'https://robohash.org/odioetnon.jpg?size=50x50&set=set1',
      content:
        'Paralytic calcification and ossification of muscle, right upper arm',
    },
    {
      id: 10,
      name: 'Konklab',
      url: 'https://robohash.org/cupiditateiustovoluptas.jpg?size=50x50&set=set1',
      content: 'Malignant neoplasm of endometrium',
    },
    {
      id: 1,
      name: 'Flexidy',
      url: 'https://robohash.org/voluptasmolestiaein.jpg?size=50x50&set=set1',
      content:
        'Salter-Harris Type III physeal fracture of lower end of humerus, unspecified arm, initial encounter for closed fracture',
    },
  ];
  
  init.forEach((item) => {
    item.id = Math.round(Math.random() * 10);
  });

  const commentReduce = (state = init, action) => {
      switch (action.type) {
          case 'UPDATE_COMMENTS':
            return action.payload;      
          default:
            return state;
      }
  }

  export {commentReduce};