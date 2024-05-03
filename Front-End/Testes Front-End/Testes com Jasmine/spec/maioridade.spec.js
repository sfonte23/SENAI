// Test cases
describe("Teste de validação de Maior Idade", function(){
  it("Validação Maior Idade", function(){
    expect(maioridade(20)).toBe('Maior Idade');
  });
});

describe("Teste de validação de Menor Idade", function(){
  it("Validação Menor Idade", function(){
    expect(maioridade(7)).toBe('Menor Idade');
  });
});
