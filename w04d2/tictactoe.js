const checkForRowVictory = function($td){
  let victory = true;

  $row = $td.parent();
  $row.children().each(function(){
    const player = $('#player').html();
    if (!($(this).hasClass(player))) {
      victory = false;
    }
    //    $(this).addClass('monkey');
  });

  return victory;
};



$(document).ready(function(){

  // console.log('what is this', $('#player').html());
  console.log('the document has loaded');

  $('td').click(function(){
    const player = $('#player').html(); // getter: what's inside the span tag?
    console.log(`It is ${player}'s turn.`);
    $(this).addClass(player);

    if (checkForRowVictory($(this))) {
      alert('victory');
    }

    $(this).off();
    let newPlayer = '';
    if (player === 'X') {
      newPlayer = 'O';
    } else {
      newPlayer = 'X';
    }
    $('#player').html(newPlayer);
  });


});
