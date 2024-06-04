import PromptSync from "prompt-sync";

let ler = PromptSync();

export function exibirMenu() {
  console.log(`Escolha uma opção:

1 - Depositar
2 - Sacar
3 - Ver saldo
4 - Sair
  `);

  return Number(ler("Opção > "));
}