define([
  'jquery',
  'underscore',
  'backbone',
  'models/voting/VotingModel'
], function($, _, Backbone, VotingModel){
  var VotingsCollection = Backbone.Collection.extend({
    model: VotingModel,
    
  });
 
  return VotingsCollection;
});
