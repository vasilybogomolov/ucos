/**
 * Created by Василий on 09.11.2015.
 */
/**
 * Created by Василий on 29.10.2015.
 */

$(document).ready(function() {
    $(function () {
        var elWrap = $('.bg-slider'),
            el =  elWrap.find('.slider-control'),
            indexImg = 1,
            indexMax = el.length;

        function change () {
            el.fadeOut(500);
            el.filter(':nth-child('+indexImg+')').fadeIn(500);
            $('.button-control.selected').removeClass('selected');
            $('.button-control[data-item="'+indexImg+'"]').addClass('selected');
        }

        function autoChange () {
            indexImg++;
            if(indexImg > indexMax) {
                indexImg = 1;
            }
            change (indexImg);
        }
        var interval = setInterval(autoChange, 3000);

        elWrap.mouseover(function() {
            clearInterval(interval);
        });
        elWrap.mouseout(function() {
            interval = setInterval(autoChange, 3000);
        });
        function addButtonControl() {
            for (var i = 1; i <= indexMax; i++) {
                $('.slider-button').append('<span class="button-control" data-item="' + i + '"></span>');
                if (i==1){
                    $('.button-control').addClass('selected');
                }

            }
        }
        //addButtonControl();

        $('.button-control').on('click', function() {
            $('.button-control.selected').removeClass('selected');
            $(this).addClass('selected');
            indexImg = $(this).attr('data-item');
            console.log(indexImg);
            change ();
        });
        $('span.prev').on('click',function() {
             indexImg--;
             if(indexImg < 1) {
             indexImg = indexMax;
             }
             change ();
         });
        $('span.next').on('click',function() {
            indexImg++;
            if(indexImg > indexMax) {
                indexImg = 1;
            }
            change ();
        });
    });
    $('input[type="range"]').change(function(){
        var val = $(this).val();
        $(this).siblings('input[type="text"]').val(val);
    });
    $('.btn-low').click(function(){
        var val = $(this).siblings('input[type="range"]').val();
        val=val-40000;
        $(this).siblings('input[type="range"],input[type="text"]').val(val);
    });
    $('.btn-top').click(function(){
        var val = $(this).siblings('input[type="range"]').val();
        console.log(val);
        val=val+40000;
        $(this).siblings('input[type="range"],input[type="text"]').val(val);
    });
});
