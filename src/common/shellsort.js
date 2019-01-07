/**
* 希尔排序
* @param A  待排序的数组
* @param n  数组长度
* @description 又叫缩小增量排序，
*/
function shellsort(A,n){
	let temp;
	for(let increment=Math.floor(n/2);increment>0;increment=Math.floor(increment/2)){
		for(let i=increment;i<n;i++){
			temp=A[i];
			let j;
			for(j=i;j>=increment;j-=increment){
				if(temp<A[j-increment]){
					A[j]=A[j-increment];
				}else{
					break;
				}
			}
			A[j]=temp;
		}
	}
	return A;
}

export { shellsort };