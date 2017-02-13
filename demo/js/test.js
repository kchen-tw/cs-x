<!DOCTYPE html>
<html lang="zh-TW">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <title>Radar Chart</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css" integrity="sha384-AysaV+vQoT3kOAXZkl02PThvDr8HYKPZhNT5h/CXfBThSRXQ6jW5DO2ekP5ViFdi" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/radar.css">
</head>

<body>
    <nav class="navbar navbar-dark bg-inverse bg-faded">
        <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
        <a class="navbar-brand" href="#">NTU CS-X 期末成果展</a>
        <div class="collapse navbar-toggleable-md" id="navbarResponsive">
            <ul class="nav navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">首頁 <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">各組名單</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">成績</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">評審團</a>
                </li>

            </ul>
            <form class="form-inline float-lg-right">
                <input class="form-control" type="text" placeholder="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>

    <div class="container-fluid">
        <div class="row">
            <div class="col-sm text-xs-center">
                <div id="wrapper" class="pdb-root">

                </div>
            </div>
        </div>

    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js " integrity="sha384-3ceskX3iaEnIogmQchP8opvBy3Mi7Ce34nWjpBIwVTHfGYWQS9jwHDVRnpKKHJg7 " crossorigin="anonymous "></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.3.7/js/tether.min.js " integrity="sha384-XTs3FgkjiBgo8qjEjBk0tGmf3wPrWtA6coPfQDfFEY8AnYJwjalXCiosYRBIBZX8 " crossorigin="anonymous "></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js " integrity="sha384-BLiI7JTZm+JWlgKa0M0kGRpJbF2J8q+qreVrKBC47e3K6BW78kGLrCkeRX6I9RoK " crossorigin="anonymous "></script>
    <script src="https://plotdb.io/lib/d3/3.5.12/index.min.js"></script>
    <script src="https://plotdb.io/lib/plotd3/0.1.0/index.js"></script>
    <script type="text/javascript" src="./js/view.js "></script>
    <script type="text/javascript" src="./js/radar.js "></script>
</body>

</html>