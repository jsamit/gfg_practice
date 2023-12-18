// https://www.geeksforgeeks.org/problems/find-transition-point-1587115620/1?page=1&category=Searching&difficulty=Easy&sortBy=submissions
class Solution {
  transitionPoint(arr, n) {
    return this.whereOneStarted(arr,0,n);
  }
  
  whereOneStarted(arr,l,r) {
      let mid = 0;
      let last = -1;
      while(l <= r) {
          mid = Math.floor(l + (r-l)/2);
          if(arr[mid] == 1 && (mid == 0 || arr[mid-1] == 0))
            return mid;
          else if(arr[mid] == 1) 
            r = mid - 1;
          else 
            l = mid+1; 
            
          //console.log(l,r);
      }
      return -1;
  }
}
