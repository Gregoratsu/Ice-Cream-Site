$(document).ready(function () {

    $('#vanilla').click(function () {
        if (this.checked) {
            $('#vanillaquantity').show();
        } else {
            $('#vanillaquantity').hide();
        }
    })

    $('#chocolate').click(function () {
        if (this.checked) {
            $('#chocolatequantity').show();
        } else {
            $('#chocolatequantity').hide();
        }
    })

    $('#strawberry').click(function () {
        if (this.checked) {
            $('#strawberryquantity').show();
        } else {
            $('#strawberryquantity').hide();
        }
    })

    $('#banana').click(function () {
        if (this.checked) {
            $('#bananaquantity').show();
        } else {
            $('#bananaquantity').hide();
        }
    })

    $('#coffee').click(function () {
        if (this.checked) {
            $('#coffeequantity').show();
        } else {
            $('#quantity').hide();
        }
    })
})