/* 
Maior Subsequência Comum (LCS) (25 min)
Problema: Encontrar a maior subsequência comum entre duas strings.
 */

function lcs(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log("LCS:", lcs("AGGTAB", "GXTXAYB"));

/* 
Explicação:
dp[i][j] armazena o tamanho da LCS de text1[0..i-1] e text2[0..j-1].
 */
