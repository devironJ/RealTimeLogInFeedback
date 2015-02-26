/**
* Created by Devon on 2/25/2015.
*/
var app = angular.module("myAppServices",["firebase"]);

//With Firebase Version:
app.factory("FirebaseFactory",["$firebase", function($firebase){
    var ref = new Firebase("https://fakeuserlogin.firebaseio.com");
    var sync = $firebase(ref);
    var firebaseData = sync.$asArray();

    return {
        addToFirebase: function(name, num) {
            sync.$push({"name": name, "secretCode": num})
                .then(function (ref) {
                    console.log("SUCCESS, CREATED WITH ID: " + ref.key());
                }, function (error) {
                    console.log("Error: " + error);
                });
        },
        getFromFirebase: function(){
            return firebaseData
        }
    }

}]);


//
////Without Firebase Version:
//app.factory("CrossViewCheck",[function(){
//    var FirstName = "Gogogo";
//    var SecretCode = "323232";
//    return{
//        addTempUser: function(name, num){
//            FirstName = name;
//            SecretCode = num;
//            console.log("Factory First Name: " + FirstName + " Factory Code: " + SecretCode);
//        },
//        getTempUser: function(){
//            return{
//                "FirstName": FirstName,
//                "SecretCode": SecretCode
//            }
//        }
//    };
//}]);