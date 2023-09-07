var com= com || {};
var com.walkin = com.walkin || {};
var com.walkin.collection  = com.walkin.collection || {};

var com.walkin.collection.walkinPosts  = Backbone.Collection.extend({
  model: com.walkin.model.walkinPostsModel,
    url: "http://localhost/walkin-post",
  });

  window.walkinPosts = walkinPosts;