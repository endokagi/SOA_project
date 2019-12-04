$(function () {

    // searchbyApp
    var search;
    $("#search_btn").click(function () {
        $("#jumbotron").empty();
        search = $("#search").val();


        var searchShow = `<h1 class="display-4">You're search ${search}</h1>
        <hr class="my-4">
        <div class="row" id="searchApp"></div>`;
        $("#jumbotron").append(searchShow);
        if (search == "") {
            $.get(`http://localhost:8080/findapp`, function (data, status) {
                console.log("findApp: " + status);
                data.forEach(element => {
                    var groupbyApp = `<div class="col-sm-2" 
                    onclick="showDetailApp('${element.app}')">
                    <div class="card" style="width:220px; height:250px">
                    <div class="card-body">
                    <h5>${element.app}</h5>
                    <h7 class="card-title">${element.genres}</h7><hr>
                    <div class="text-right">
                        <h7 class="card-title">Rating ${element.rating}&#9734;<br>
                         USD ${element.price}</h7><p></p>
                    </div>
                </div>
            </div>
        </div>`;

                    $("#searchApp").append(groupbyApp);
                });
            });
        }
        else {
            $.get(`http://localhost:8080/searchbyApp/${search}`, function (data, status) {
                console.log("groupbyApp: " + status);
                data.forEach(element => {
                    var groupbyApp = `<div class="col-sm-2" 
                    onclick="showDetailApp('${element.app}')">
                    <div class="card" style="width:220px; height:250px">
                    <div class="card-body">
                    <h5>${element.app}</h5>
                    <h7 class="card-title">${element.genres}</h7><hr>
                    <div class="text-right">
                        <h7 class="card-title">Rating ${element.rating}&#9734;<br>
                         USD ${element.price}</h7><p></p>
                    </div>
                </div>
            </div>
        </div>`;

                    $("#searchApp").append(groupbyApp);
                });
            });
        }
    });

    // searchby
    $.get("http://localhost:8080/searchbyCategory", function (data, status) {
        console.log("groupbyCategory: " + status);
        data.forEach(element => {
            var groupbyCategory = `<button class="dropdown-item" onclick="SearchBy('category','${element.category}')">
            ${element.category}</button>`;

            $("#CateDropdown").append(groupbyCategory);
        });
    });

    // $.get("http://localhost:8080/searchbyRating", function (data, status) {
    //     console.log("groupbyRating: " + status);
    //     data.forEach(element => {
    //         var groupbyCategory = `<button class="dropdown-item" onclick="SearchBy('rating','${element.rating}')">
    //         ${element.rating}</button>`;

    //         $("#RatingDropdown").append(groupbyCategory);
    //     });
    // });

    $.get("http://localhost:8080/searchbyType", function (data, status) {
        console.log("groupbyType: " + status);
        data.forEach(element => {
            var groupbyCategory = `<button class="dropdown-item" onclick="SearchBy('type','${element.type}')">
            ${element.type}</button>`;

            $("#TypeDropdown").append(groupbyCategory);
        });
    });
    // freeApp
    $.get("http://localhost:8080/topfreeapp", function (data, status) {
        console.log("freeApp: " + status);
        data.forEach(element => {
            var FreeApp = `<div class="col-sm-2" 
            onclick="showDetailApp('${element.app}')">
            <div class="card" style="width:220px; height:250px">
                <div class="card-body">
                    <h5 class="card-title">${element.app}</h5>
                    <h7 class="card-title">${element.genres}</h7><hr>
                    <div class="text-right">
                        <h7 class="card-title">Rating ${element.rating}&#9734;<br>
                         USD ${element.price}</h7><p></p>
                    </div>
                </div>
            </div>
        </div>`;

            $("#freeApp").append(FreeApp);
        });
    });

    $("#free_btn").click(function () {
        $("#jumbotron").empty();

        var freeApp = `<h1 class="display-4">FREE APPLICATION</h1>
        <hr class="my-4">
        <div class="row" id="AllfreeApp"></div>`;
        $("#jumbotron").append(freeApp);

        $.get("http://localhost:8080/freeapp", function (data, status) {
            console.log("freeApp: " + status);
            data.forEach(element => {
                var FreeApp = `<div class="col-sm-2" 
            onclick="showDetailApp('${element.app}')">
            <div class="card" style="width:220px; height:250px">
                <div class="card-body">
                    <h5 class="card-title">${element.app}</h5>
                    <h7 class="card-title">${element.genres}</h7><hr>
                    <div class="text-right">
                        <h7 class="card-title">Rating ${element.rating}&#9734;<br>
                         USD ${element.price}</h7><p></p>
                    </div>
                </div>
            </div>
        </div>`;

                $("#AllfreeApp").append(FreeApp);
            });
        });
    });



    // RecommendedApp
    $.get("http://localhost:8080/topRecommended", function (data, status) {
        console.log("Recommended App: " + status);
        data.forEach(element => {
            var Recommended = `<div class="col-sm-2" 
            onclick="showDetailApp('${element.app}')">
            <div class="card" style="width:220px; height:250px">
                <div class="card-body">
                    <h5 class="card-title">${element.app}</h5>
                    <h7 class="card-title">${element.genres}</h7><hr>
                    <div class="text-right">
                        <h7 class="card-title">Rating ${element.rating}&#9734;<br>
                         USD ${element.price}</h7><p></p>
                    </div>
                </div>
            </div>
        </div>`;

            $("#recommended").append(Recommended);
        });
    });

    $("#recommend_btn").click(function () {
        $("#jumbotron").empty();

        var recomApp = `<h1 class="display-4">RECOMMENDED</h1>
        <hr class="my-4">
        <div class="row" id="AllrecommendedApp"></div>`;
        $("#jumbotron").append(recomApp);

        $.get("http://localhost:8080/Recommended", function (data, status) {
            console.log("Recommended App: " + status);
            data.forEach(element => {
                var Recommended = `<div class="col-sm-2" 
            onclick="showDetailApp('${element.app}')">
            <div class="card" style="width:220px; height:250px">
                <div class="card-body">
                    <h5 class="card-title">${element.app}</h5>
                    <h7 class="card-title">${element.genres}</h7><hr>
                    <div class="text-right">
                        <h7 class="card-title">Rating ${element.rating}&#9734;<br>
                         USD ${element.price}</h7><p></p>
                    </div>
                </div>
            </div>
        </div>`;

                $("#AllrecommendedApp").append(Recommended);
            });
        });
    });



});

// function searchby
function SearchBy(column, value) {
    Column = column;
    Value = value;
    console.log(Column + " and " + Value);

    $("#jumbotron").empty();

    var searchby = `<h1 class="display-4">Search by ${Column} {Group by: ${Value}} </h1>
    <hr class="my-4">
    <div class="row" id="searchApp"></div>`;
    $("#jumbotron").append(searchby);

    $.get(`http://localhost:8080/${Column}/${Value}`, function (data, status) {
        console.log(`${Column} and ${Value}: ` + status);
        data.forEach(element => {
            var Searchby = `<div class="col-sm-2 text-right" 
            onclick="showDetailApp('${element.app}')">
            <div class="card" style="width:220px; height:250px">
                <div class="card-body">
                    <h5 class="card-title">${element.app}</h5>
                    <h7 class="card-title">${element.genres}</h7><hr>
                    <div class="text-right">
                        <h7 class="card-title">Rating ${element.rating}&#9734;<br>
                         USD ${element.price}</h7><p></p>
                    </div>
                </div>
            </div>
        </div>`;

            $("#searchApp").append(Searchby);
        });
    });
}

// reviews
function showDetailApp(nameApp) {
    name = nameApp;
    console.log("App name: " + name);
    $("#jumbotron").empty();

    var searchShow = `<h1 class="display-4">Application: ${name}</h1>
        <hr class="my-4">
        <div class="row" id="titlereviews"></div><br>
        <div class="row">
            <div class="col" id="Allreviews"></div>
        </div>`;
    $("#jumbotron").append(searchShow);

    $.get(`http://localhost:8080/selectApp/${name}`, function (data, status) {
        console.log("groupbyApp: " + status);
        data.forEach(element => {
            var reviewShow = `<div class="card">
                    <div class="card-header">
                    ${element.app}<br>
                    <div class="text-right">${element.genres}&emsp;&emsp; ${element.reviews}&#9786;  ${element.rating}&#9734;<br> ${element.type}</div></h5>
                    </div>
                    <div class="card-body">
                    <h6>ADDITIONAL INFORMATION</h6>
                    Updated ${element.last_updated} || Size ${element.size}<br> 
                    Current Version ${element.current_Ver} || Requires Android ${element.android_Ver}<br>
                    Installs ${element.installs} || Content Rating ${element.content_rating}
                    </div>
                  </div>`;

            $("#titlereviews").append(reviewShow);
        });
    });

    $.get(`http://localhost:8080/reviewApp/${name}`, function (data, status) {
        console.log("reviewsApp: " + status);
        data.forEach(element => {
            var reviewShoww = `<div class="card">
                    <div class="card-header">
                    Review from user (${element.sentiment})
                    </div>
                    <div class="card-body">
                    ${element.translated_reviews}
                    </div>
                  </div>`;

            $("#Allreviews").append(reviewShoww);
        });
    });

}