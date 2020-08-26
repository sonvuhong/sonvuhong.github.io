for file in *.html
do
  IFS=' '
  read -a strarr <<< "$file"
  mv "$file" "${strarr[${#strarr[*]} - 1]}"
done
