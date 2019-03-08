//ND1

  var number=1;
while (number < 135)
  {
    console.log(number);
    number++;

  }

//ND2
var i=0;
for(i=0; i<=135; i++)
  {
    if(i%2!=0)
      {
        console.log(i);
      }

  }

//ND3
var number=0;
var sum=0;
while(number < 135)
{
number++;
console.log('Number is:' + number);
sum+=number;
console.log('Sum is:' + sum);
}

//ND4
var numbers = [1,4,2,12];
console.log(numbers);

//ND5
console.log(Math.max(2, -3, -1));

//ND6
var arr = [1,3,4,5,-2]

var sum=0
for(var i=0; i<arr.length;i++){
  sum+=arr[i];
}
console.log(sum/arr.length);

//ND7
var x = [-3, 5, 1, 3, 2, 10];
function removeNegative (arr) {
  for (var i = 0, j = 0, l = arr.length; i < l; i++) {
    if (arr[i] >= 0) {
      arr[j++] = arr[i];
    }
  }
  arr.length = j;
  return arr;
}
console.log(removeNegative(x));
