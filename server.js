$(function () {

    // searchby
    var search;
    $("#search_btn").click(function () {
        search = $("#search").val();
        $("#jumbotron").empty();
        var searchShow = `<h1 class="display-4">You're search ${search}</h1>
        <hr class="my-4">
        <div class="row" id="searchApp"></div>`;
        $("#jumbotron").append(searchShow);

        $.get(`http://localhost:8080/searchbyApp/${search}`, function (data, status) {
        console.log("groupbyApp: "+status);
        data.forEach(element => {
            var groupbyApp = `<div class="col-sm-2" 
            onclick="showDetailApp('${element.app}')">
            <div class="card">
                <div class="card-body">
                    <div><h5 class="card-title">${element.app}</h5></div>
                    <h7 class="card-title">${element.genres}</h7><hr>
                    <div class="text-right">
                        <h7 class="card-title">Rating ${element.rating}<br>
                         THB ${element.price}</h7><p></p>
                    </div>
                </div>
            </div>
        </div>`;

            $("#searchApp").append(groupbyApp);
        });
    });
    });

    

    $.get("http://localhost:8080/searchbyCategory", function (data, status) {
        console.log("groupbyCategory: "+status);
        data.forEach(element => {
            var groupbyCategory = `<a class="dropdown-item" href="#">${element.category}</a>`;

            $("#CateDropdown").append(groupbyCategory);
        });
    });

    $.get("http://localhost:8080/searchbyRating", function (data, status) {
        console.log("groupbyRating: "+status);
        data.forEach(element => {
            var groupbyCategory = `<a class="dropdown-item" href="#">${element.rating}</a>`;

            $("#RatingDropdown").append(groupbyCategory);
        });
    });

    $.get("http://localhost:8080/searchbyType", function (data, status) {
        console.log("groupbyType: "+status);
        data.forEach(element => {
            var groupbyCategory = `<a class="dropdown-item" href="#">${element.type}</a>`;

            $("#TypeDropdown").append(groupbyCategory);
        });
    });
    // freeApp
    $.get("http://localhost:8080/topfreeapp", function (data, status) {
        console.log("freeApp: " + status);
        data.forEach(element => {
            var FreeApp = `<div class="col-sm-2" 
            onclick="showDetailApp('${element.app}')">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${element.app}</h5>
                    <h7 class="card-title">${element.genres}</h7><hr>
                    <div class="text-right">
                        <h7 class="card-title">Rating ${element.rating}<br>
                         THB ${element.price}</h7><p></p>
                    </div>
                </div>
            </div>
        </div>`;

            $("#freeApp").append(FreeApp);
        });
    });

    $("#free_btn").click(function () {
        window.location.href = "freeMore.html"
    });

    $.get("http://localhost:8080/freeapp", function (data, status) {
        console.log("freeApp: " + status);
        data.forEach(element => {
            var FreeApp = `<div class="col-sm-2" 
            onclick="showDetailApp('${element.app}')">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${element.app}</h5>
                    <h7 class="card-title">${element.genres}</h7><hr>
                    <div class="text-right">
                        <h7 class="card-title">Rating ${element.rating}<br>
                         THB ${element.price}</h7><p></p>
                    </div>
                </div>
            </div>
        </div>`;

            $("#AllfreeApp").append(FreeApp);
        });
    });

    // RecommendedApp
    $.get("http://localhost:8080/topRecommended", function (data, status) {
        console.log("Recommended App: " + status);
        data.forEach(element => {
            var Recommended = `<div class="col-sm-2" 
            onclick="showDetailApp('${element.app}')">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${element.app}</h5>
                    <h7 class="card-title">${element.genres}</h7><hr>
                    <div class="text-right">
                        <h7 class="card-title">Rating ${element.rating}<br>
                         THB ${element.price}</h7><p></p>
                    </div>
                </div>
            </div>
        </div>`;

            $("#recommended").append(Recommended);
        });
    });

    $("#recommend_btn").click(function () {
        window.location.href = "recomMore.html"
    });
    $.get("http://localhost:8080/Recommended", function (data, status) {
        console.log("Recommended App: " + status);
        data.forEach(element => {
            var Recommended = `<div class="col-sm-2" 
            onclick="showDetailApp('${element.app}')">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${element.app}</h5>
                    <h7 class="card-title">${element.genres}</h7><hr>
                    <div class="text-right">
                        <h7 class="card-title">Rating ${element.rating}<br>
                         THB ${element.price}</h7><p></p>
                    </div>
                </div>
            </div>
        </div>`;

            $("#AllrecommendedApp").append(Recommended);
        });
    });


});

function showDetailApp(nameApp) {
    name = nameApp;
    console.log("App name: " + name);
    window.location.href = "reviews.html";

}

{/* <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog modal-dialog-scrollable" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalScrollableTitle">${element.app}<br>
                            <div class="text-right">${element.genres} ${element.reviews}  ${element.rating}&#9734;<br> ${element.type}</div></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Category ${element.category} || Rating <br>
                            Type  || Genres 
                            <h6>ADDITIONAL INFORMATION</h6><br>
                            Updated ${element.last_updated} || Size ${element.size}<br> 
                            Current Version ${element.current_Ver} || Requires Android ${element.android_Ver}<br>
                            Installs ${element.installs} || Content Rating ${element.content_rating}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            
                        </div>
                    </div>
                </div>
            </div> */}