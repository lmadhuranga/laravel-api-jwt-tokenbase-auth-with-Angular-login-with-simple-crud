<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="./js/lib/angular.js"></script>
        <script type="text/javascript" src="../node_modules/angular-ui-router/build/angular-ui-router.min.js"></script>
        <script type="text/javascript" src="../node_modules/satellizer/satellizer.js"></script>
        <script type="text/javascript" src="./js/controllers.js"></script> 
        <script type="text/javascript" src="./js/app.js"></script> 
        <script type="text/javascript" src="./js/authController.js"></script> 
        <script type="text/javascript" src="./js/userController.js"></script> 
        <script type="text/javascript" src="./js/controllers.js"></script> 
         
    </head>
    <body ng-app="myApp">
        <h1>Teplate page 1</h1>
        <ul>
            <li><a href="#/home">Home Phones</a> </li>
            <li><a href="#/phones">Phone list</a> </li>
            <li><a href="#/sample">Sample page</a></li>
            <li><a href="#/test">Test page</a> </li>
        </ul>
        <div ui-view></div>
    </body>
</html>