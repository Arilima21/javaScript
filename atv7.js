class ContaBancaria {
  constructor(agencia, numero, tipo, saldo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = saldo; 
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(novoSaldo) {
    this._saldo = novoSaldo;
  }

  sacar(valor) {
    if (valor > 0 && valor <= this._saldo) {
      this._saldo -= valor;
      console.log(`Saque de R$${valor} realizado com sucesso.`);
    } 
    else {
      console.log("Saldo insuficiente ou valor de saque inválido.");
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
      console.log(`Depósito de R$${valor} realizado com sucesso.`);
    } else {
      console.log("Valor de depósito inválido.");
    }
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, saldo, cartaoCredito = 0) {
    super(agencia, numero, "Conta Corrente", saldo);
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(novoCartaoCredito) {
    this._cartaoCredito = novoCartaoCredito;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, "Conta Poupança", saldo);
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, "Conta Universitária", saldo);
  }

  sacar(valor) {
    if (valor > 0 && valor <= 500) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado com sucesso.`);
      } else {
        console.log("Saldo insuficiente.");
      }
    } else {
      console.log("Valor de saque inválido para Conta Universitária.");
    }
  }
}

const contaCorrente = new ContaCorrente("2000-1", "2001-2", 1000.0, 500.0);
contaCorrente.depositar(200.0);
contaCorrente.sacar(300.0);

const contaPoupanca = new ContaPoupanca("2002-3", "2003-4", 1500.0);
contaPoupanca.sacar(200.0);

const contaUniversitaria = new ContaUniversitaria("2004-5", "2005-6", 1000.0);
contaUniversitaria.sacar(300.0);
contaUniversitaria.sacar(400.0);
