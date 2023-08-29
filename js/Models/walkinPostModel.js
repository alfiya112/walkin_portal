var walkinPostsModel = Backbone.Model.extend({
    url: "http://localhost/walkin-post"

});
var walkinpost = new window.walkinPostsModel();
walkinpost.fetch({
    success: function (model, response) {
        this.myData = response;
        const data=this.myData;
        
        var walkinview = new walkinPostsView({
          el: ".list-of-cards",
          model:walkinpost,
        });
        console.log(walkinview)
        walkinview.render();
    },
});


window.walkinPostsModel = walkinPostsModel;
