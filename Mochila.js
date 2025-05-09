/*
Problema da Mochila Binária
Enunciado: Dados itens com pesos e valores, selecione itens para maximizar 
o valor sem exceder a capacidade da mochila.
*/

function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][capacity];
}

const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
console.log(knapsack(weights, values, 5)); // Saída: 7 (itens 2 e 3)


/* 
Explicação:

dp[i][w] = valor máximo para os primeiros i itens e capacidade w.

*/

