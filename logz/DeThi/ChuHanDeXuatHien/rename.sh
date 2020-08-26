for file in *.html
do
  IFS=' '
  read -a strarr <<< "$file"
  mv "$file" "${strarr[${#strarr[*]} - 1]}"
done

# MYDIR="$PWD"
#
# DIRS=`ls -l . | egrep '^d' | awk '{print $9}'`
#
# for DIR in $DIRS
# do
#   echo  ${DIR}
# done


# for i in `find $PWD -name *.html` ;
# do
#   echo $i ;
#   break;
# done
