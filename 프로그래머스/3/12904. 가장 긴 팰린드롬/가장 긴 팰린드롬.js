function solution(s) {
    const arr = s.split('');
    
    let ans = 1;
    for (let i = 0; i < arr.length; i++) {
        
        // 홀수
        let oidx = 1;
        while (arr[i - oidx] && arr[i + oidx]) {
            if (arr[i - oidx] === arr[i + oidx]) oidx++;
            else break;
        }
        ans = Math.max(1 + (oidx - 1) * 2, ans); 
        
        // 짝수
        let eidx = 1;
        while (arr[i + 1] && arr[i] === arr[i + 1]) {
            if (arr[i - eidx] && arr[i + 1 + eidx] && (arr[i - eidx] === arr[i + 1 + eidx])) eidx++;
            else {
                ans = Math.max(2 + (eidx - 1) * 2, ans);
                break;
            }
        }
    }
    
    return ans;
}
