$(function () {

    $.get("http://localhost:8080/freeapp", function (data,status) {
        console.log(status);
        console.log("Free App");
        data.forEach(element => {
            var FreeApp = `<div class="col-sm-2">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${element.app}</h5>
                    <h7>${element.genres}</h7><br><hr>
                    <h7 class="card-title">Rating ${element.rating} &emsp;&emsp;&emsp;&emsp; THB ${element.price}</h7>
                    <a href="#" class="btn btn-primary text-right">DETAIL</a>
                </div>
            </div>
        </div>`;    

        $("#freeApp").append(FreeApp);
        });
    });

    $.get("http://localhost:8080/recommended", function (data,status) {
        console.log(status);
        console.log("Recommended App");
        data.forEach(element => {
            var Recommended = `<div class="col-sm-2">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${element.app}</h5><hr>
                    <h5 class="card-title">Rating ${element.rating} &emsp;&emsp;&emsp;&emsp; THB ${element.price}</h5>
                    <a href="#" class="btn btn-primary text-right">DETAIL</a>
                </div>
            </div>
        </div>`;    

        $("#recommended").append(Recommended);
        });
    });

    $.get("http://localhost:8080/groupbyCategory", function (data,status) {
        console.log(status);
        console.log("groupbyCategory");
        data.forEach(element => {
            var groupbyCategory = `<a class="dropdown-item" href="#">${element.category}</a>`;    

        $("#CateDropdown").append(groupbyCategory);
        });
    });

});