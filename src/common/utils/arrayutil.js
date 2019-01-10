//交换数组i和j索引处的值
function swap(A,i,j){
	A[i]=A[i]-A[j];
	A[j]=A[i]+A[j];
	A[i]=A[j]-A[i];
}

export { swap };