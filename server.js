$(function () {

    for (var i = 0; i < 6; i++) {
        // var rec = `<div class="carousel-item active" modifier="nodivider">
        //     <img src="img/honkai icon.png" alt="">
        //     ITEM
        // </div>`;

        var rec = `<div class="col">
        <img src="img/honkai icon.png">Item ${i}
        </div>`;
        $("#recommend").append(rec);
    }

});