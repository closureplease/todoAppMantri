// Load our app
goog.provide('Todos.app');

goog.require('Todos.Router');
goog.require('Todos.models.Store');
goog.require('Todos.ctrls.Entries');
goog.require('Todos.views.Application');



    Todos.App = Ember.Application.create({
      VERSION: '1.0',
      rootElement: '#todoapp',
      // Load routes
      Router: Router,
      // Extend to inherit outlet support
      ApplicationController: Ember.Controller.extend(),
      ApplicationView: ApplicationView,
      entriesController: EntriesController.create({
        store: new Store('todos-emberjs')
      }),
      ready: function() {
        this.initialize();
      }
    });

