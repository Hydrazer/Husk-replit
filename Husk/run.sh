lang="$1"
args="$2"
input=`cat 'input.txt'`
code_path="$PWD"/code.husk

cd husk

./Husk -uf "$code_path" "$args"