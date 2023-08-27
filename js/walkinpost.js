var User = Backbone.Model.extend({

    url:
        'http://localhost/walkin-post'


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