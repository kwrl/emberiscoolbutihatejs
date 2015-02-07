'use strict';

Newsfeed.Router.map(function() {
  this.resource('newsfeed', { path: '/'});
});

Newsfeed.NewsfeedRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('newsitem');
  }
});
