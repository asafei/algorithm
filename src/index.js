import _ from 'lodash';
import { insertionsort , shellsort , heapsort , mergesort , quicksort} from './common/index.js';



function component() {
  let container =document.createElement('div');
  let element1 = document.createElement('div');
  let element2 = document.createElement('div');
  let element3 = document.createElement('div');
  let element4 = document.createElement('div');
  let element5 = document.createElement('div');


  let A=[2,6,1,7,0,3,5,9,4,8];
  let n=A.length;
  insertionsort(A,n);
  element1.innerHTML = _.join(['insert:', A], ' ');
  container.appendChild(element1);

  let B=[2,6,1,7,0,3,5,9,4,8];
  shellsort(B,n);
  element2.innerHTML = _.join(['shell:', B], ' ');
  container.appendChild(element2);

  let C=[2,6,1,7,0,3,5,9,4,8];
  heapsort(C,n);
  element3.innerHTML = _.join(['heap:', C], ' ');
  container.appendChild(element3);

  let D=[2,6,1,7,0,3,5,9,4,8];
  mergesort(D,n);
  element4.innerHTML = _.join(['merge:', D], ' ');
  container.appendChild(element4);

  let E=[2,6,1,7,0,3,5,9,4,8];
  quicksort(E,n);
  element5.innerHTML = _.join(['quick:', E], ' ');
  container.appendChild(element5);

  return container;
}

document.body.appendChild(component());