

// const stations = [
//   ['Big Bear Donair', 10, 'restaurant'],
//   ['Bright Lights Elementary', 50, 'school'],
//   ['Moose Mountain Community Centre', 45, 'community centre']
// ];

stations = [
  ['A', 10, 'school'],
  ['B', 9, 'restaurant'],
  ['C', 21, 'community centre'],
  ['D', 15, 'school'],
  ['E', 50, 'restaurant'],
  ['F', 20, 'school'],
  ['G', 40, 'community centre'],
  ['H', 50, 'school'],
];

const chooseStations = function (stns){

  const res = []
  console.log("res is : "+res);


  for ( let i = 0; i < stns.length; i++ ) {
    if ( stns[i][1] >= 20 && (stns[i][2] === 'school') || ( stns[i][2] === 'community centre' ) ){
      res.push(stns[i][0])
    }
  }
  return res;
}

// chooseStations(stations);


console.log(chooseStations(stations));
