function sum(n){
    let s = 0;
    if(n==1) return 1;
  
    return n + sum(n-1);
}

