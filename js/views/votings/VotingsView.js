define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'models/voting/VotingModel',
  'collections/votings/VotingsCollection',
  'views/votings/VotingsListView',
  'text!templates/votings/votingsTemplate.html'
], function($, _, Backbone, SidebarView, VotingModel, VotingsCollection, VotingsListView, votingsTemplate){

  var VotingsView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(votingsTemplate);

      var v0 = new VotingModel({id: 1, userid: 1, name: 'What is your favourite beer?', sessionid: 0}); 
      var v1 = new VotingModel({id: 2, userid: 1, name: 'What is your favourite pizza?', sessionid: 0}); 

      var aVotings = [v0, 
                      v1];

      var votingsCollection = new VotingsCollection(aVotings);  
      var votingsListView = new VotingsListView({ collection: votingsCollection}); 
      
      votingsListView.render(); 

      // add the sidebar 
      var sidebarView = new SidebarView();
      sidebarView.render();

    }
  });

  return VotingsView;
});
