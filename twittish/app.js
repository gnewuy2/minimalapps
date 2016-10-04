// Note: Got the documentation from the page http://docs.mashape.com/javascript (Topic: Consuming the API in JS)
// Note: To see what $.ajax do and how it works, see AJAX api docs
// Note: Additional resources: W3Cschools JQUERY testing exercises. I used it to test $(".message").text vs $(".message").html(...)

function getQuote() { 
 var output = $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(response) {
      var r = response; // Note: sometimes JSON.parse might be useful
      currentQuote = r.quote;
      currentAuthor = r.author;
      //debugger;
      $(".message").html(currentQuote);
    },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V"); // Enter here your Mashape key
    }
 });
}

