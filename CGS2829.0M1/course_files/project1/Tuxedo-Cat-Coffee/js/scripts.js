/* Author: Hannah Bauer
Course: CGS2829.0M1
Date: 9/21/2024
Assignment: Project 1: Tudedo Cat Coffee
*/

$(document).ready(function() {

    var totalOrderPrice = 0;

    var rolloverImage = [
        'images/espresso_info.jpg',
        'images/latte_info.jpg',
        'images/cappuccino_info.jpg',
        'images/coffee_info.jpg',
        'images/biscotti_info.jpg',
        'images/scone_info.jpg'
    ];
    
    $.each(rolloverImage, function(imageSourse) 
    {
        var img = new Image();
        img.src = imageSourse;
    });

    var cafeMenuItems = {
        'espresso':     { name: 'Espresso',     price: 1.95 },
        'latte':        { name: 'Latte',        price: 2.95 },
        'cappuccino':   { name: 'Cappuccino',   price: 3.45 },
        'coffee':       { name: 'Coffee',       price: 1.75 },
        'biscotti':     { name: 'Biscotti',     price: 1.95 },
        'scone':        { name: 'Scone',        price: 2.95 }
    };

    $('#menu img').hover(function() 
    {
        var rolloverImageSource = $(this).attr('id');
        $(this).attr('src', rolloverImageSource);
    }, 
        function() 
    {
        var originalImageSourcec = $(this).attr('src').replace('_info', '');
        $(this).attr('src', originalImageSourcec);
    });

    $('#menu img').click(function() 
    {
        var itemId = $(this).attr('alt');

        var item = cafeMenuItems[itemId];

        if (item) {
            $('#order').append('<option>' + item.name + ' - $' + item.price.toFixed(2) + '</option>');

            totalOrderPrice += item.price;

            $('#total').text('Total Price: $' + totalOrderPrice.toFixed(2));
        }
    });

    $('#clear_order').click(function()
    {
        $('#order').empty();

        totalOrder = 0;
        
        $('#total').text('Total Price: $0.00');
    });

    $('#place_order').click(function() 
    {
        if (totalOrderPrice > 0) {
            $('#order_form').submit();
        } 

        else {
            alert('Your order is empty! Please select items to order. \n\n ₍ᐢ..ᐢ₎⊹');
        }
    });
});