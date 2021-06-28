//Count the frequency of each digit in string

var str ="Arati Budihale";
var final = str.toLowerCase();
var newObject = {};

for( i in final)
{
    if(newObject.hasOwnProperty(final[i]))
    {
        newObject[final[i]]+=1;
    }
    else
    {
        newObject[final[i]] = 1;
    }
        
}
console.log(newObject);
