const service = require('./service');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  service.numeroAleatorio = jest.fn().mockReturnValue(10)

  expect(service.numeroAleatorio()).toBe(10)
  expect(service.numeroAleatorio).toHaveBeenCalled()
  expect(service.numeroAleatorio).toHaveBeenCalledTimes(1)
});
describe("testando implementações", () => {
  test("tCom a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.", () => {
    service.numeroAleatorio = jest.fn().mockImplementationOnce((a,b,c) => a/b)

    expect(service.numeroAleatorio(4,2)).toBe(2)
    expect(service.numeroAleatorio).toHaveBeenCalled()
    expect(service.numeroAleatorio).toHaveBeenCalledTimes(1)

  });


  test("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
    service.numeroAleatorio = jest.fn().mockImplementationOnce((a,b,c) => a*b*c)

    expect(service.numeroAleatorio(4,2,2)).toBe(16)
    expect(service.numeroAleatorio).toHaveBeenCalled()
    expect(service.numeroAleatorio).toHaveBeenCalledWith(4,2,2)
  });

  test("mockando função que recebe um parâmetro e retorna seu dobro", () => {
    service.numeroAleatorio.mockReset()
    expect(service.numeroAleatorio).toHaveBeenCalledTimes(0)
    service.numeroAleatorio = jest.fn().mockImplementationOnce((a) => a*2)
    expect(service.numeroAleatorio(2)).toBe(4)
    expect(service.numeroAleatorio).toHaveBeenCalled()
    expect(service.numeroAleatorio).toHaveBeenCalledTimes(1)

  });
});

describe('agora as outras 3 funçoes', () => {
  test('Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa', () => {
    service.recebeStr = jest.fn().mockImplementation((param) => param.toLowerCase())
    expect(service.recebeStr('MATHEUS')).toBe('matheus')
    expect(service.recebeStr).toHaveBeenCalledTimes(1);
    expect(service.recebeStr).toHaveBeenCalledWith("MATHEUS");
  })
  test('Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.', () => {
    service.soAprimeiraStr = jest.fn().mockImplementation((param) => param[param.length-1])
    expect(service.soAprimeiraStr('MATHEUS')).toBe('S')
    expect(service.soAprimeiraStr).toHaveBeenCalledTimes(1);
    expect(service.soAprimeiraStr).toHaveBeenCalledWith("MATHEUS");
  })
  test('Implemente, na terceira função: ela deve receber três strings e concatená-las.', () => {
    service.concatenaStr = jest.fn().mockImplementation((param,param1,param2) => param+param1+param2)
    expect(service.concatenaStr('MATHEUS','ALMEIDA','123')).toBe('MATHEUSALMEIDA123')
    expect(service.concatenaStr).toHaveBeenCalledTimes(1);
    expect(service.concatenaStr).toHaveBeenCalledWith('MATHEUS','ALMEIDA','123');
  })
})


// const service = require("./service");
describe("testando a requisição", () => {
  service.fetchAqui = jest.fn();
  afterEach(service.fetchAqui.mockReset);

  test("testando requisição caso a promise resolva", async () => {
    service.fetchAqui.mockResolvedValue("request success");

    service.fetchAqui();
    expect(service.fetchAqui).toHaveBeenCalled();
    expect(service.fetchAqui).toHaveBeenCalledTimes(1);
    await expect(service.fetchAqui()).resolves.toBe("request success");
    expect(service.fetchAqui).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    service.fetchAqui.mockRejectedValue("request failed");

    expect(service.fetchAqui).toHaveBeenCalledTimes(0);
    await expect(service.fetchAqui()).rejects.toMatch("request failed");
    expect(service.fetchAqui).toHaveBeenCalledTimes(1);
  });
});
