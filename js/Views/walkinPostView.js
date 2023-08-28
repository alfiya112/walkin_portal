
var walkinPostsView = Backbone.View.extend({
  initialize: function () {
    // url: "http://localhost/walkin-post"
    // this.setElement($('.list-of-cards')); 
  },
  render: function () {
        if (this.$el) {
          const renderTemplate = this.template();
          this.$el.html(renderTemplate);
        } else {
          console.log(this.$el);
        }
      },
    template: _.template(
        `<% _.each(this.collection,function(list){ %>
            <div class="card display-card" >
            <% if(list['expire']!=null)
            {%>
                <span class="badge  expiry-badge">Expires in <%= list['expiry'] %> days</span>
            <%}%>
            <div class="card-header">
            <h1 class="card-header-text"<%= list['title']%></h1>
                <div class="card-details">
                    <p class="label-dt">Date & Time :</p>
                    <p class="dt"> <%= list['datetime']%> <span class="location"> | <img
                                src="/assets/Walkin_Portal_Icons/location_on_black_24dp.svg" alt=""> <%= list['location']%></span></p>

                </div>
            </div>
            
            
            <div class="card-body">
            <p class="label-job">Job Roles :</p>
            <p><span class="job-role"><img src="/assets/Walkin_Portal_Icons/Instructional Designer.svg" alt="">
                    Instructional Designer</span></p>

            <div class="d-grid gap-2 col-md-4 col-lg-2 mx-auto">
                <button class="btn btn-success details-btn" type="button">VIEW MORE DETAILS</button>
            </div>

        </div>
        <% });%>
          `
    ),
  });



  window.walkinPostsView = walkinPostsView;