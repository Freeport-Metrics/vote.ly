define([
  'jquery',
  'underscore',
  'backbone',
  'jqueryui',
  'jqueryuiwidget',
  'jtable'

], function($, _, Backbone){
  var VotingsTableView = Backbone.View.extend({
    el: $("#votings-table"),

    render: function(){

		$('#votings-table').jtable({
            title: 'The Votings List',
            paging: true, //Enable paging
            pageSize: 10, //Set page size (default: 10)
            sorting: true, //Enable sorting
            defaultSorting: 'Name ASC', //Set default sorting
            actions: {
                listAction: '/Demo/StudentList',
                deleteAction: '/Demo/DeleteStudent',
                updateAction: '/Demo/UpdateStudent',
                createAction: 'http://192.168.1.101:7777/VotingService.aspx/AddVoting'
            },
            fields: {
                id: {
                	title: 'Id',
                    key: true,
                    create: false,
                    edit: false,
                    list: true
                },
                name: {
                    title: 'Name',
                    width: '80%'
                },
                userId: {
                    title: 'UserId'             
                },
                sessionId: {
                    title: 'SessionId'         
                }
            }
        });
 
        //Load student list from server
        $('#votings-table').jtable('load');      

    }
  });
  return VotingsTableView;
});
