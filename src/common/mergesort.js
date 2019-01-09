
/**
* 归并排序
* @param A 要排序的数组
* @param n 数组A的个数 
*/
function mergesort(A,n){
	let temp;
	let tempArr=[];
	msort(A,tempArr,0,n-1);
}

/**
* 归并排序A数组中的left到right索引处的元素
* @param A 要排序的数组
* @param tempArr 临时数组，避免频繁创建数组
* @param left 要排序的起始索引 
* @param right 要排序的终止索引 
*/
function msort(A,tempArr,left,right){
	let center;
	if(left<right){
		center=Math.floor((left+right)/2);
		msort(A,tempArr,left,center);
		msort(A,tempArr,center+1,right);
		merge(A,tempArr,left,center+1,right);
	}
}

/**
* 归并排序
* @param A 要排序的数组
* @param tempArr 临时数组，避免频繁创建数组
* @param leftPos 要排序的左起始索引 
* @param rightPos 要排序的右起始索引 
* @param rightEnd 要排序的右终止索引 
*/
function merge(A,tempArr,leftPos,rightPos,rightEnd){
	const leftEnd=rightPos-1;
	const elementCount=rightEnd-leftPos+1;
	let tempPos=leftPos;

	while(leftPos<=leftEnd && rightPos<=rightEnd){
		if(A[leftPos]<A[rightPos]){
			tempArr[tempPos++]=A[leftPos++];
		}else{
			tempArr[tempPos++]=A[rightPos++];
		}
	}

	while(leftPos<=leftEnd){
		tempArr[tempPos++]=A[leftPos++];
	}

	while(rightPos<=rightEnd){
		tempArr[tempPos++]=A[rightPos++];
	}

	for(let i=0;i<elementCount;i++,rightEnd--){
		A[rightEnd]=tempArr[rightEnd];
	}
}

export { mergesort };