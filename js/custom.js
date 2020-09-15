$(document).ready(function() {
    $('.shuffle').hide();
      $('.sort').show();
    $('#sort').click(function() {
      $('.shuffle').hide();
      $('.sort').show();
    });
    $('#shuffle').click(function() {
      $('.shuffle').show();
      $('.sort').hide();
    });
    $('.sort-des').click(function() {
      $('.shuffle').hide();
      $('.sort').show();
    });
    $('.shuffle-des').click(function() {
      $('.shuffle').show();
      $('.sort').hide();
    });
});
