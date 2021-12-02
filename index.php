<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
    <script src="script.js"></script>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <h1 id="lang">Husk</h1>
    <button class = "code" type="button">header</button>
    <br>

    <textarea rows = "10" style="width:1000px; height:50px;" id="header" value=""></textarea>

    <br>
    <button class = "code" type="button">code</button>
    <br>

    <textarea rows = "10" style="width:1000px; height:150px;" id="code" value=""></textarea>

    <br>
    <button class = "code" type="button">footer</button>
    <br>

    <textarea rows = "10" style="width:1000px; height:50px;" id="footer" value=""></textarea>

    <br>
    <button class = "code" type="button">args</button>
    <br>

    <textarea rows = "10" style="width:1000px; height:50px;" id="args" value=""></textarea>
    

    <br>
    <button class = "code" type="button">stdin</button>
    <br>

    <textarea rows = "10" style="width:1000px; height:150px;" id="stdin" value=""></textarea>

    <br>
    <button class = "code" id = "run">run code</button>
    <br>

    <button id = "link-button">get link</button>
    <p id = "link-text"></p>

    <br>
    <button class = "code" type="button">stderr</button>
    <br>

    <textarea readonly style = "width:1000px; height:50px;" id = "stderr"></textarea>

    <br>
    <button class = "code" type="button">stdout</button>
    <br>

    <h5 id = "code-len">
      code len
    <h5>

    <textarea readonly style = "width:1000px; height:1000px;" id = "stdout"></textarea>
    
    </body>
</html>