// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above,
  'models/voting/VotingModel',
  'collections/votings/VotingsCollection',
  'text!templates/votings/votingsListTemplate.html'

], function($, _, Backbone, VotingtModel, VotingsCollection, votingsListTemplate){
  var VotingListView = Backbone.View.extend({
    el: $("#votings-list"),

    render: function(){
      
      var data = {
        votings: this.collection.models,
        _: _ 
      };

      var compiledTemplate = _.template( votingsListTemplate, data );
      $("#votings-list").html( compiledTemplate ); 
    }
  });
  return VotingListView;
});
