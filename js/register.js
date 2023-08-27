var User = Backbone.Model.extend({
    // initialize: function(){
    //     console.log(this)
    //     // urlRoot: 'http://localhost/user-walkin-registration';
    // }
    url:
        'http://localhost/user-walkin-registration'


})
var user = new User();
user.fetch(
    {
        xhrFields:{
            withCredentials: true
        },
        success: function (response, model) {
            console.log(response.toJSON())
        },
        error: function (error, model) {
            console.log(error)
        }
    }
);
console.log(user)