describe("Teste Calculadora", function(){

    it("Somas válidas", function(){
      expect(soma(1,2)).toBe(3);
      expect(soma(9,9)).toBe(18);
    })

    it("Somas Inválidas", function(){
      expect(soma(2,2)).not.toBe(5);
      expect(soma(9,9)).not.toBe(15);
    })

    it("Subtrações válidas", function(){
      expect(subtracaoo(1,2)).toBe(-1);
      expect(subtracaoo(9,9)).toBe(0);
    })
    
    it("Multiplicações válidas", function(){
      expect(multiplicacao(1,2)).toBe(2);
      expect(multiplicacao(9,9)).toBe(81);
    })
    
    it("Dividsões válidas", function(){
      expect(divisao(1,2)).toBe(0.5);
      expect(divisao(9,9)).toBe(1);
    })
});
    
