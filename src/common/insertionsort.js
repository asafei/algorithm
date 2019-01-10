/**
* 插入排序
* @param A  待排序的数组
* @param n  数组长度
* @description 由于嵌套循环每一个都花费n次迭代，所以插入排序是o(n2)
*/
function insertionsort(A,n){
	let temp;
	for(let i=1;i<n;i++){
		temp=A[i];
		//遍历i之前的元素
		let j;
		for(j=i;j>0 && A[j-1]>temp;j--){
			A[j]=A[j-1];
		}
		A[j]=temp;
	}
	return A;
}

function insertsort(A,left,right){
	let temp;
	for(let i=left;i<=right;i++){
		temp=A[i];
		//遍历i之前的元素
		let j;
		for(j=i;j>left && A[j-1]>temp;j--){
			A[j]=A[j-1];
		}
		A[j]=temp;
	}
	return A;
}

export { insertionsort , insertsort};
//写原型的笔记