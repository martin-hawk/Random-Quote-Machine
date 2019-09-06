$.ajaxSetup({
  cache: false
});

$(document).ready(function() {

  function getQuote(callback) { // callback, because getJSON is asynchronous

    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(data) {
      callback(data);
    });
  }
  getQuote(function(data) {
    var quote = data[0].content;
    var author = data[0].title;
    $(".quote").html('<i class="fa fa-quote-left"> </i> ' + $(quote).text() + '<i class="fa fa-quote-right"> </i> ');
    $(".author").text(author);
    $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + $(quote).text() + author);
  });

  $("#getQuote").on("click", function() {
    function getQuote(callback) { // callback, because getJSON is asynchronous

      $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(data) {
        callback(data);
      });
    }
    getQuote(function(data) {
      var quote = data[0].content;
      var author = data[0].title;
      $(".quote").html('<i class="fa fa-quote-left"> </i> ' + $(quote).text() + '<i class="fa fa-quote-right"> </i> ');
      $(".author").text(author);
      $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + $(quote).text() + author);
    });

  });

});