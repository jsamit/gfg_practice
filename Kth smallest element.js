kthSmallest(arr,l,r,k){
      let pivot = -2;
      k--;
    while(pivot != k) {
        pivot = this.getPivot(arr,l,r); // 0
        //console.log(pivot);
        if(pivot > k)
            r = pivot - 1;
        else if(pivot < k)
            l = pivot + 1;
    }
    return arr[pivot];
  }
  
  // 4 3 
  getPivot(arr,l,r) {
      let pivot = arr[r]; // 1,1
      let i = -1;
      let j = 0;
      for(j=0; j<r; j++) {
          if(arr[j] <= pivot) { // 4
              this.swap(arr,++i,j);
          }
      }
      this.swap(arr,i+1,r);
      return i+1; 
  }
  
  swap(arr,i,j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
