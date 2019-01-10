import { swap } from './utils/arrayutil.js';
import { insertsort } from './insertionsort.js';
/**
* 快速排序
* @param A 要排序的数组
* @param n 数组的大小
*/
function quicksort(A,n){
	qsort(A,0,n-1);
}

/**
* 快速排序
* @param A 要排序的数组
* @param left 要排序的起始索引
* @param right 要排序的终止索引
*/
function qsort(A,left,right){
	const cutoff=3;
	let pivot,i,j;
	if(left+cutoff<right){
		pivot=median3(A,left,right);
		i=left;
		j=right-1;

		for(;;){
			while(A[++i]<pivot){}
			while(A[--j]>pivot){}
			if(i<j){
				swap(A,i,j);
			}else{
				break;
			}
		}

		swap(A,i,right-1);
		qsort(A,left,i-1);
		qsort(A,i+1,right);
	}else{
		insertsort(A,left,right);
	}
}

//给A在left到right索引段 重组使得A[left]<A[center]<A[right]
function median3(A,left,right){
	const center=Math.floor((left+right)/2);
	if(A[left]>A[center]){
		swap(A,left,center);
	}
	if(A[left]>A[right]){
		swap(A,left,right);
	}
	if(A[center]>A[right]){
		swap(A,center,right);
	}

	//此时A[left]<=A[center]<=A[right]
	swap(A,center,right-1);
	return A[right-1];
}

export { quicksort }