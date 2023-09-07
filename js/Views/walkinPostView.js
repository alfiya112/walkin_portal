
var com= com || {};
var com.walkin = com.walkin || {};
var com.walkin.view  = com.walkin.view || {};

var com.walkin.view.walkinPostsView = Backbone.View.extend({
  el: '.list-of-cards',
   template : _.template($("#post-template").html()),

  initialize: function () {
    var self = this;
    self.posts = new  com.walkin.collection.walkinPosts();
    self.render();
    self.posts.fetch({reset:true});
    self.listenTo(self.posts, 'reset', self.render);
  },
  render: function () {
    var self = this;
   if(self.posts.models.length>0){
    var template = _.template($("#post-template").html())
    var output = self.template({'data':self.posts.toJSON});
    self.$el.append(output);
    return self;
   }
  }
  
    

  });



  window.walkinPostsView = walkinPostsView;
