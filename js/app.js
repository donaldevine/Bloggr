App = Ember.Application.create();

App.Router.map(function() {
    this.resource('about');
    this.resource('posts', function() {
        this.resource('post', { path: ':post_id' });
    });
});

App.PostsRoute = Ember.Route.extend({
    model: function() {
        return posts;
    }
});

var posts = [{
    id: '1',
    title: "Title of post 1",
    author: { name: "Donal Devine"},
    date: new Date('12-27-2012'),
    excerpt: "This is an exceprt...",
    body: "This is thge body...."
}, {
    id: '2',
    title: "This is post 2",
    author: { name: "Donal Devine"},
    date: new Date('12-24-2012'),
    excerpt: "Excerpt goes like this...",
    body: "The body of this post goes here...."
}];

