<?php
# get the command line arguments
$args = $_POST["args"];

// replace \n with \\n because js is dumb
$input = preg_replace("/\\\\n/", "\\\\\\n", $_POST["stdin"]);
$all_code = preg_replace("/\\\\n/", "\\\\\\n", $_POST["header"] . "\n" . $_POST["code"] . "\n" . $_POST["footer"]);

# get the lang
$lang = $_POST["lang"];

# get the main code
$code = $_POST["code"];

# get the code length
$code_len = strlen($code);

# hardcode file extension
$file_extension = "husk";

# write input to input.txt
shell_exec("echo '$input' > '$lang/input.txt'");

# write all code to code file
shell_exec("cd '$lang'; echo '$all_code' > 'code.$file_extension'");

# run the code with a timeout of 5 seconds and write stdout to stdout.txt and sterr to stderr.txt
shell_exec("cd $lang && timeout 5 sh 'run.sh' 'code.$file_extension' '$args' 1>stdout.txt 2>stderr.txt");

# get stdout and stderr from files
$stdout = shell_exec("cat $lang/stdout.txt");
$stderr = shell_exec("cat $lang/stderr.txt");

# create a hash table to js code info
$stuff_hash = new stdClass();
$stuff_hash->code_len = $code_len;
$stuff_hash->stdout = $stdout;
$stuff_hash->stderr = $stderr;

$stuff_json = json_encode($stuff_hash);

# given json to js
echo $stuff_json;