$(document).ready(function() {
  var joke;
  var text;
  var callback = function(err, res) {
    if (err) {
      console.log(err);
      window.alert('ha fagt. ur request failed LMAOOOOOO')
    } else {
      console.log(res);
      joke = res.text;
      text = '"' + joke + '"';
    }
  }
  var inputs = {
    name: "john",
    email: "jasfjkashf@safkj.com",
    message: "fagt"
  }

  var memes = function() {
    $("#button").click(function() {
      //window.alert(joke);
      var input = $("#input").val();
      $('#user').text("You said: " + input);
      $('#text').text("Chuck Norris says:" + joke)
    });
  }

   superagent.get("http://api.icndb.com/jokes/random")
     .end(callback);

  superagent.post("http://webtier2016.christianle.com/v1/contact")
    .send(inputs)
    .end(memes);
});
