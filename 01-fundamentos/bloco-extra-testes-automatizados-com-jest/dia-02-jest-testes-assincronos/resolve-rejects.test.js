const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];


const getListAnimals = (type) => (
  new Promise((resolve, reject) => {
    const arrayAnimals = Animals.filter((animal) => animal.type === type);

    if (arrayAnimals.length !== 0) {
      return resolve(arrayAnimals);
    }

    return reject(new Error('Não possui esse tipo de animal.'));
  })
);


describe('Testando promise - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ];
      return expect(getListAnimals('Dog')).resolves.toEqual(listDogs);
    });
  });

  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', () => (
      expect(getListAnimals('Lion'))
        .rejects.toEqual(new Error('Não possui esse tipo de animal.'))
    ));
  });
});