var Character = Backbone.Model.extend({
  defaults: {
    minAttack: 0,
    maxAttack: 20,
    health: 100
  },

  roll: function() {
    return _.sample(_.range(this.get('minAttack'), this.get('maxAttack')));
  }
});

var CharacterCollection = Backbone.Collection.extend({
  model: Character
});

var heroes = new CharacterCollection([
  {name: 'finn'},
  {name: 'jake'},
  {name: 'bmo'},
  {name: 'pb'}
]);

var villains = new CharacterCollection([
  {name: 'ice-king'},
  {name: 'lemon-grab'},
  {name: 'lich'},
  {name: 'snail'}
]);

export default {heroes, villains};
