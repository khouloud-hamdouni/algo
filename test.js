var str ="you are welcome"
let i=0;
let nb_words =0;
if (str[0]!==' ') {
    nb_words+=1;
    
}
for (i;i<str.length;i++)
{
    if(str[i]===' ')
    nb_words+=1
}
console.log(nb_words);