/*
O problema da Distância de Edição (também conhecido como Levenshtein Distance) mede o número mínimo 
de operações (inserção, deleção ou substituição) necessárias para transformar uma string A em uma string B.

Exemplo:
String A: "horse"
String B: "ros"

Distância de Edição: 3
Substituir 'h' → 'r' ("rorse")
Remover 'r' ("rose")
Remover 'e' ("ros")
*/

function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    // Casos base
    for (let i = 0; i <= m; i++) dp[i][0] = i; // Deletar todos os chars de word1
    for (let j = 0; j <= n; j++) dp[0][j] = j; // Inserir todos os chars de word2
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; // Mesmo caractere, sem custo
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],    // Deleção (de word1)
                    dp[i][j - 1],    // Inserção (em word1)
                    dp[i - 1][j - 1] // Substituição
                );
            }
        }
    }
    
    return dp[m][n];
}

// Teste
console.log(minDistance("horse", "ros")); // Saída: 3