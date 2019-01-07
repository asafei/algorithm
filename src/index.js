import _ from 'lodash';
import { insertionsort , shellsort , heapsort } from './common/index.js';



function component() {
  let element = document.createElement('div');
  let A=[2,6,1,7,0,3,5,9,4,8];
  let n=A.length;
  insertionsort(A,n);

  let B=[2,6,1,7,0,3,5,9,4,8];
  shellsort(B,n);

  let C=[2,6,1,7,0,3,5,9,4,8];
  heapsort(C,n);


  // Lodash, currently included via a script, is required for this line to work
  //element.innerHTML = _.join(['insertionsort', A], ' ');
  //element.innerHTML = _.join(['shellsort', B], ' ');
  element.innerHTML = _.join(['heapsort', C], ' ');

  return element;
}

document.body.appendChild(component());