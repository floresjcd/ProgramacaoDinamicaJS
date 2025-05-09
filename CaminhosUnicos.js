/*
O problema "Caminhos Únicos com Obstáculos" (Unique Paths II) consiste 
em contar o número de caminhos únicos de um ponto inicial (geralmente o 
canto superior esquerdo) até um ponto final (canto inferior direito) em 
uma grade m x n, onde alguns espaços podem conter obstáculos que bloqueiam a passagem.

Exemplo:
Grade de entrada (obstacleGrid):
[
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]

0 = célula livre, 1 = obstáculo.

Saída esperada: 2 (existem dois caminhos possíveis evitando o obstáculo central).

*/


function uniquePathsWithObstacles(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    
    // Se o início ou o fim têm um obstáculo, retorna 0
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m-1][n-1] === 1) {
        return 0;
    }
    
    const dp = Array(m).fill().map(() => Array(n).fill(0));
    dp[0][0] = 1; // Caminho inicial
    
    // Preenche a primeira linha (só pode vir da esquerda)
    for (let j = 1; j < n; j++) {
        if (obstacleGrid[0][j] === 0) {
            dp[0][j] = dp[0][j-1];
        } else {
            dp[0][j] = 0; // Obstáculo encontrado
        }
    }
    
    // Preenche a primeira coluna (só pode vir de cima)
    for (let i = 1; i < m; i++) {
        if (obstacleGrid[i][0] === 0) {
            dp[i][0] = dp[i-1][0];
        } else {
            dp[i][0] = 0; // Obstáculo encontrado
        }
    }
    
    // Preenche o restante da grade
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            } else {
                dp[i][j] = 0; // Obstáculo, nenhum caminho aqui
            }
        }
    }
    
    return dp[m-1][n-1];
}

// Teste
const grid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
];
console.log(uniquePathsWithObstacles(grid)); // Saída: 2