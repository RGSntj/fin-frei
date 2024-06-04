import prompt from "prompt-sync";

import { exibirMenu } from "./menu.js";
import { depositar, sacar, verSaldo } from "./financeiro.js";
import { ALERTA, ERRO, SUCESSO } from "./cores.js";
import { limparTerminal } from "./exibicao.js";

let ler = prompt();

let continuar = true;

let saldo = 0;

while (continuar) {
  // console.clear();
  let opcao = exibirMenu();

  if (opcao == 1) {
    let novoSaldo = depositar(saldo);

    saldo = novoSaldo;
    limparTerminal(SUCESSO, "Deposito realizado com sucesso !!");
  } else if (opcao == 2) {
    let novoSaque = sacar(saldo);
    saldo = novoSaque;
    limparTerminal(SUCESSO, "Saque realizado com sucesso !!")
  } else if (opcao == 3) {
    let saldoAtual = verSaldo(saldo);
    limparTerminal(ALERTA, saldoAtual);
  } else if (opcao == 4) {
    continuar = false;

    limparTerminal(ALERTA, "Operação encerrada !!")
  }
}

// console.log(saldo);