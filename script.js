var messageItem = $('.message-item');
var countMessage = $('.message-item').length;
var count = $('#count');
count.text(countMessage);


messageItem.find('.trash').on('click',function(){
    $(this).closest('.message-item').fadeOut().delay(5000);
    $(this).closest('.message-item').fadeOut().remove();
    countMessage = countMessage-1;
    count.text(countMessage);
});
count.text(countMessage);

//ADD MESSAGE
var addButton = $('button.add-button');
var addMessage = $('#add-message').value;
var theMessagerie = $('#messagerie');

var messageItem = $('.message-item');



addButton.click(function(){
    var newMessage = $('#add-message')[0].value;

    //NEW image
    var newImage = '<img class="avatar" src="images/panda-roux.jpg"></img>';

    //NEW text
    var newName = '<h6>Lucas Drapier</h6>';
    var newText = '<p>'+ newMessage +'</p>';
    var newDetails = '<div class="details">'+ newName + newText +'</div>';

    //NEW trash
    var newTrash = '<img class="trash" src="images/trash.png"></img>';

    //NEW row
    var newRow = '<div class="row message-item">'+ newImage + newDetails + newTrash +'</div>';
    theMessagerie.append($(newRow));

    //MAJ compteur
    var messageItem = $('.message-item');
    var countMessage = $('.message-item').length;
    var count = $('#count');
    count.text(countMessage);

    //RESET textfield
    document.getElementById('add-message').value = '';

    //MAJ POUBELLES
    messageItem.find('.trash').on('click',function(){
        $(this).closest('.message-item').fadeOut().delay(5000);
        $(this).closest('.message-item').fadeOut().remove();
        countMessage = countMessage-1;
        count.text(countMessage);
    });
});


//SEARCH MESSAGES
var searchBtn = $('#search-btn');

//function sensibilité à la casse
function varToLower($var){
    var removeSpace = $var.replace(/\s/g, '');
    var toLower = removeSpace.toLowerCase();
    return toLower;
}

searchBtn.click(function(){
    $('.row.message-item').removeClass('hide');
    var nameSearch = $('#search-message').val();
    var nameSearchLower = varToLower(nameSearch);
    var names = $('h6.name');
    names.each(function(){
        var name = $(this).text();
        var nameLower = varToLower(name);
        var badNameRow = $(this).closest('.message-item').siblings('.row.message-item');
        if(nameSearchLower == nameLower){
            badNameRow.toggleClass('hide');
        }
    });
    $('#search-message').val('');


})