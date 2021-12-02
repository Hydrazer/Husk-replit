lang="$1"
args="$2"
input=`cat 'input.txt'`

if [ -z "$args" ]
then
  echo -e $input | python3 main.py "$lang"
else
  echo -e $input | python3 main.py "$lang" $args
fi