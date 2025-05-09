/*
O problema "Cortar Corda para Lucro Máximo" (também conhecido como Rod Cutting Problem) 
consiste em determinar o lucro máximo obtido ao cortar uma corda de tamanho n em partes 
menores, onde cada pedaço de tamanho i tem um preço p[i].

Exemplo:
Tamanho da corda (n): 4
Tabela de preços (p): [0, 1, 5, 8, 9] (preço para tamanhos 0, 1, 2, 3, 4)
Melhor estratégia: Cortar em duas partes de tamanho 2 (lucro = 5 + 5 = 10), que é melhor 
do que vender inteiro (9) ou outras combinações.
*/

function maxRopeProfit(prices, n) {
    const dp = new Array(n + 1).fill(0); // dp[0] = 0

    for (let i = 1; i <= n; i++) {
        let maxProfit = -Infinity;
        for (let j = 1; j <= i; j++) {
            maxProfit = Math.max(maxProfit, prices[j] + dp[i - j]);
        }
        dp[i] = maxProfit;
    }

    return dp[n];
}

// Exemplo de uso:
const prices = [0, 1, 5, 8, 9]; // Preços para tamanhos 0, 1, 2, 3, 4
const n = 4;
console.log(maxRopeProfit(prices, n)); // Saída: 10 (cortar em 2 + 2)

