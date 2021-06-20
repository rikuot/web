$(document).ready(function(){
    $('.left').on('click',function(){
        $(this).next().slideToggle('hidden');
    })
})
$(function(){
    $('.sec18 li').on('click',function(){
        $(this).next().slideToggle('sec18_content')
    })
})