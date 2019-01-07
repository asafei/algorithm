/**
* 堆排序
* @param A  待排序的数组
* @param n  数组长度
* @description 从n/2处便利到0处，每次比较该点与其两个孩子点的值，将较大的放在该点，
*/
function heapsort(A,n){
	let temp;
	//从倒数第二行开始建堆,以i为顶点开始建堆
	for(let i=Math.floor(n/2);i>=0;i--){
		percDown(A,i,n);
	}

	for(let i=n-1;i>0;i--){
		swap(A,0,i);
		//去尾重建
		percDown(A,0,i);
	}
	return A;
}

//重建i处为顶点的堆
function percDown(A,i,n){
	let child;
	let temp;
	for(temp=A[i];leftChild(i)<n;i=child){
		//让child指向较大值的子节点
		child=leftChild(i);
		if(child!=n-1 && A[child+1]>A[child]){
			child++;
		}

		if(temp<A[child]){
			A[i]=A[child]
		}else{
			break;
		}
	}
	A[i]=temp;
}

//获取索引为i点 的左孩子
function leftChild(i){
	return 2*i+1;
}

//交换数组i和j索引处的值
function swap(A,i,j){
	A[i]=A[i]-A[j];
	A[j]=A[i]+A[j];
	A[i]=A[j]-A[i];
}


export { heapsort };