    // 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

    const uppercase = (str, callback) => {
      setTimeout(() => {
        callback(str.toUpperCase());
      }, 500);
    };


    it('Escreva um teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.', (done) => {
      uppercase('teste', (callback) => {
        try {
          expect(callback).toBe('TESTE');
          done();
        } catch (error) {
          done(error);
        }
      });
    });

    // Verifique se a importação do arquivo correto está sendo feita.
    const {
      getPokemonDetails
    } = require('./exercicios');

    describe('A função getPokemonDetails', () => {
      it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
        const param1 = (error) => {
          expect(error).toEqual(Error('Não temos esse pokémon para você :('))
          done()
        };
        getPokemonDetails((pokemon) => pokemon.name === 's', param1);
      });

      it('retorna um pokemon que existe no banco de dados', (done) => {
        const param2 = (_, result) => {
          expect(result).toEqual('Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun');
          done()
        }
        getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', param2);
      })
    });