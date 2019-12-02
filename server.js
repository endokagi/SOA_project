$(function () {

    $.get("http://localhost:8080/googleapp", function (data,status) {
        console.log("topten");
        data.forEach(element => {
            var topten = `<div class="col-sm-2">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${element.app}</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>`;    

        $("#test").append(topten);
        });
        
    });

});