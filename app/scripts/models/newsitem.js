Newsfeed.Newsitem = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string')
});

Newsfeed.Newsitem.FIXTURES = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    body: 'Something, something'
  },
  {
    id: 2,
    title: 'Some other thing',
    body: 'Awesome body'
  }
];
