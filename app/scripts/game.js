var Game = Backbone.Model.extend({
  selectHero: function(hero) {
    this.set('hero', hero);
  }
});

var game = new Game();

export default game;
