$(document).ready(function(){
  // function to get to get direct copy of code from the url
  function get_code_from_url() {
    var url = window.location.href;

    // get everything after the dc= to the optional "&"
    var content = url.match(/dc=(.*)&?/);
    
    // get the the id elements we need
    var header_elem = $("#header");
    var footer_elem = $("#footer");
    var code_elem = $("#code");
    var stdin_elem = $("#stdin");
    var args_elem = $("#args");

    console.log("Len:", code_elem.val().length);
    
    // chicken if there is anything in there
    if (content && code_elem.val() + stdin_elem.val() + header_elem.val() + footer_elem.val() + args_elem.val() === "") {
      content = content[1];
      
      // split the content on string 6969 and store in variables
      [header, code, footer, stdin, args] = content.split("6969");

      console.log(header, code, footer, stdin, args);

      var args_string = code_string = stdin_string = header_string = footer_string = "";

      // bad code to parse the content into ascii characters
      for (i = 0; i < header.length; i += 3) {
        header_string += String.fromCharCode(parseInt(header.slice(i, i + 3)));
      }

      for (i = 0; i < code.length; i += 3) {
        code_string += String.fromCharCode(parseInt(code.slice(i, i + 3)));
      }

      for (i = 0; i < footer.length; i += 3) {
        footer_string += String.fromCharCode(parseInt(footer.slice(i, i + 3)));
      }
      
      //console.log(code_string);

      for (i = 0; i < stdin.length; i += 3) {
        stdin_string += String.fromCharCode(parseInt(stdin.slice(i, i + 3)));
      }

      for (i = 0; i < args.length; i += 3) {
        args_string += String.fromCharCode(parseInt(args.slice(i, i + 3)));
      }
      
      // set the value of the elements to the strings
      header_elem.val(header_string);
      footer_elem.val(footer_string);
      code_elem.val(code_string);
      stdin_elem.val(stdin_string);
      args_elem.val(args_string);
    }
  }

  // get the url from the code so that other people can get a copy
  function get_code_url() {
    var url = window.location.href;

    // check what the language is
    var repl_name = url.match(/https:\/\/(.+?)\.repl\.co/)[1];

    // use a simple 3 pad encoder to generate the link
    return `https://${repl_name}.repl.co/?dc=` + [
      "header",
      "code",
      "footer",
      "stdin",
      "args",
    ].map(str => $(`#${str}`).val().split("").map(x => x.charCodeAt(0).toString().padStart(3, "0")).join("")).join("6969");
  }

  // run this function on start
  get_code_from_url();

  // check if any of the code buttons are clicked and toggle the text area
  $(".code").on("click", function() {
    let text_area = $(`#${$(this).html()}`);
    if (text_area.is(":hidden")) {
      text_area.show();
    } else {
      text_area.hide();
    }
  });

  // check if the run button is clicked
  $("#run").on("click", function() {

    // send post request to bruh.php with all elements
    $.ajax({
      url: "bruh.php",
      type: "POST",
      data: {
        header: $("#header").val(),
        code: $("#code").val(),
        footer: $("#footer").val(),
        stdin: $("#stdin").val(),
        args: $("#args").val(),
        lang: $("#lang").html()
      },
    }).done(function(data) {

      // get the json php gives back to use
      data = JSON.parse(data);

      // set some values
      $("#code-len").html(`code len: ${data["code_len"]}`);
      $("#stdout").val(data["stdout"]);
      $("#stderr").val(data["stderr"]);
      
    });
  });

  // show the code url when the click the link button
  $("#link-button").on("click", function() {
    $("#link-text").html(get_code_url());
  });
}); 