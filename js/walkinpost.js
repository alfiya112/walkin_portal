var walkinpost = new window.walkinPostsModel();
walkinpost.fetch({
    success: function (model, response) {
        console.log(response)
        this.myData = response["data"];
        var walkinview = new window.walkinPostsView({
            el: ".list-of-cards",
            collection: this.myData,
        });
        walkinview.render();
    },
});