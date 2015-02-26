/**
 * Created by Devon on 2/25/2015.
 */

var app = angular.module("myAppControllers",["ngRoute","myAppServices"]);

//With Firebase Version:
app.controller("View1Controller", ["$scope" , "FirebaseFactory", function($scope, FirebaseFactory){
    $scope.createNumberCode = function(num){
        var codeString = (num * 3) + ".";
        codeString += (num/2) + ".";
        codeString += (num*5);
        return codeString
    };
    $scope.saveUser = function(){
        FirebaseFactory.addToFirebase($scope.firstName, $scope.createNumberCode($scope.favNumber));
        alert("User " + $scope.firstName + " has been saved");
        $scope.firstName = "";
        $scope.favNumber ="";
    }
}]);

app.controller("View2Controller", ["$scope", "FirebaseFactory",function($scope, FirebaseFactory){
    $scope.answer = "";

    $scope.getFirebase = function(){
        $scope.firebaseData = FirebaseFactory.getFromFirebase();
    };

    $scope.checkUser = function(inputName, inputSecretCode){
        var i = 0;
        while(i< $scope.firebaseData.length){
            if(inputName == $scope.firebaseData[i]["name"] && inputSecretCode == $scope.firebaseData[i]["secretCode"]){
                return "Your login is valid"
            }

            else if(inputSecretCode == $scope.firebaseData[i]["secretCode"]){
                return "Your name is not found"
            }

            else if(inputName == $scope.firebaseData[i]["name"]){
                return "Your secret code is invalid"
            }

            else if(inputName != $scope.firebaseData[i]["name"] && inputSecretCode != $scope.firebaseData[i]["secretCode"]){
                if(i < $scope.firebaseData.length - 1  ){
                    i++
                }
                else{
                    return "Your login is invalid"
                }
            }

        }
        //console.log(firebaseData);
        //console.log(firebaseData.length);
        //console.log(firebaseData[0].name);
    }
}]);


////Without Firebase Version:
//app.controller("View1Controller",["$scope", "CrossViewCheck", function($scope, CrossViewCheck){
//    $scope.createNumberCode = function(num){
//        var codeString = (num * 3) + ".";
//        codeString += (num/2) + ".";
//        codeString += (num*5);
//        return codeString
//    };
//
//    $scope.saveUser= function(){
//        CrossViewCheck.addTempUser($scope.firstName, $scope.createNumberCode($scope.favNumber));
//        console.log("First Name: " + $scope.firstName + " Code: " + $scope.createNumberCode($scope.favNumber));
//        alert("User " + $scope.firstName + " has been saved");
//        $scope.firstName = "";
//        $scope.favNumber ="";
//    };
//
//}]);
//
//
//app.controller("View2Controller",["$scope", "CrossViewCheck", function($scope, CrossViewCheck){
//    $scope.getUser = function(){
//        $scope.firstNameCheck = CrossViewCheck.getTempUser().FirstName;
//        $scope.secretCodeCheck = CrossViewCheck.getTempUser().SecretCode;
//    };
//
//    $scope.checkUser = function(inputName, inputSecretCode){
//        if(inputName == CrossViewCheck.getTempUser().FirstName && inputSecretCode == CrossViewCheck.getTempUser().SecretCode){
//            return "Your login is valid"
//        }
//
//        else if(inputName != CrossViewCheck.getTempUser().FirstName && inputSecretCode != CrossViewCheck.getTempUser().SecretCode){
//            return "Your login is invalid"
//        }
//
//        else if(inputSecretCode == CrossViewCheck.getTempUser().SecretCode){
//            return "Your name is not found"
//        }
//
//        else if(inputName == CrossViewCheck.getTempUser().FirstName){
//            return "Your secret code is invalid"
//        }
//    }
//}]);