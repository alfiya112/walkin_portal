var walkinPosts = Backbone.Collection.extend({
  model: window.walkinPostsModel,
    // url: "http://localhost/walkin-post",
  });

  window.walkinPosts = walkinPosts;