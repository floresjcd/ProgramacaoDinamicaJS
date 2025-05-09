/* 
O problema da Maior Subsequência Crescente (LIS - Longest Increasing Subsequence) 
consiste em encontrar a subsequência mais longe de elementos em um array que estão 
em ordem estritamente crescente.

Exemplo:
Array de entrada: [10, 9, 2, 5, 3, 7, 101, 18]

LIS: [2, 3, 7, 101] (tamanho = 4)
 */

function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    
    const dp = new Array(nums.length).fill(1); // Inicializa tudo com 1
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp); // Retorna o maior valor em dp
}

// Teste
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // Saída: 4
