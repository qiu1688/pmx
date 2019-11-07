$('#rightArrow').click(function () {
        $('#left_div').animate({ right: '0px' }, 300);
        $("#floatDivBoxs").animate({ right: '-175px' }, 300);
        $(this).animate({ right: '-127px' }, 300);
     
});
$('#left_div').mouseover(function () {
    $('#floatDivBoxs').animate({ right: '0px' }, 500);
    $('#rightArrow').animate({ right: '127px' }, 500);
    $('#left_div').animate({ right: '-34px' }, 500);

})
