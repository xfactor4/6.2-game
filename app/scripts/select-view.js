import {heroes, villains} from "characters";
import game from 'game';

export default {
  render: function(){
    $('#container').html(JST.select({
      heroes: heroes.toJSON(),
      villains: villains.toJSON()
    }));

    $(document).on('click', '[data-char-name]', function(){
      var name = $(this).attr('data-char-name');
      var hero = heroes.findWhere({name: name});
      game.selectHero(hero);
    });

    game.on('change:hero', function(game, hero) {
      $('.js-selected-hero-image').attr('src', 'images/characters/' + hero.get('name') + '.png');
    });
  }
}
