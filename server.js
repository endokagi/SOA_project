$(function () {

    $.get("http://localhost:8080/freeapp", function (data, status) {
        console.log("freeApp: " + status);
        console.log("Free App");
        data.forEach(element => {
            var FreeApp = `<div class="col-sm-2" onclick="showDetailApp('${element.app}')">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${element.app}</h5>
                    <h7 class="card-title">${element.genres}</h7><hr>
                    <div class="text-right">
                        <h7 class="card-title">Rating ${element.rating} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                         THB ${element.price}</h7><p></p>
                    </div>
                </div>
            </div>
        </div>`;

            $("#freeApp").append(FreeApp);
        });
    });

    $.get("http://localhost:8080/recommended", function (data, status) {
        console.log("Recommended: " + status);
        console.log("Recommended App");
        data.forEach(element => {
            var Recommended = `<div class="col-sm-2" onclick="showDetailApp('${element.app}')">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${element.app}</h5>
                    <h7 class="card-title">${element.genres}</h7><hr>
                    <div class="text-right">
                        <h7 class="card-title">Rating ${element.rating} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                         THB ${element.price}</h7><p></p>
                    </div>
                </div>
            </div>
        </div>`;

            $("#recommended").append(Recommended);
        });
    });

    $.get("http://localhost:8080/groupbyCategory", function (data, status) {
        console.log(status);
        console.log("groupbyCategory");
        data.forEach(element => {
            var groupbyCategory = `<a class="dropdown-item" href="#">${element.category}</a>`;

            $("#CateDropdown").append(groupbyCategory);
        });
    });

});

function showDetailApp(nameApp) {
    name = nameApp;
    console.log("App name: " + name);

}