lang="$1"
args="$2"
input=`cat 'input.txt'`
code_path="$PWD"/code.husk

cd src

./Husk -uf "$code_path" "$args"