function fibonacciMemo(n, memo = {}) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n]; // Retorna se já calculado
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}
console.log(fibonacciMemo(100)); // 354224848179262000000 (rápido!)
