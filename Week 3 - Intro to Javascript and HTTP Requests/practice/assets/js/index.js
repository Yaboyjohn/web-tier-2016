$(document).ready(function() {
  var callback = function(err, res) {
    if (err) {
      window.alert(err);
    } else {
      window.alert(res);
    }
  }
  var inputs = {
    name: "john",
    email: "jasfjkashf@safkj.com",
    message: "fagt"
  }

  var memes = function() {
    alert('hi');
    $("#button").click(function() {
      window.alert('what');
      var input = $("#input").val();
      console.log(input);
    });
  }

  var hello = function(err, res) {
    console.log('ahskfjhlasdkjfhdslakjfas');
    if (err) {
      alert('fail');
    } else {
      alert('pass');
    }
  }
  // superagent.get("http://webtier2016.christianle.com/v1/color")
  //   .end(callback);

  superagent.post("http://webtier2016.christianle.com/v1/contact")
    .send(inputs)
    .end(hello);
});
