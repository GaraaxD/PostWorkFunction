/*
//Ejemplo 1
function deepEqual(a, b) {
    var key1 = Object.keys(a);
    var key2 = Object.keys(b);
  
    if (key1.length !== key2.length) {
      return false;
    }
  
    for (const key of key1) {
      var v1 = a[key];
      var v2 = b[key];
      const Objects = v1 != null && typeof v1 === 'object' && v2 != null && typeof v2 === 'object';
      
      if (
        Objects && !deepEqual(v1, v2) ||
        !Objects && v1 !== v2
      ) {
        return false;
      }
    }
  
    return true;
  }

  
  var john = {
    firstName: 'John',
    lastName: 'Doe'
  }
  
  console.log('Test 1:', deepEqual(1, 1)) // true
  console.log('Test 2:', deepEqual(1, '1')) // false
  console.log('Test 3:', deepEqual(john, john)) // true
  console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
  console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
*/


/*
//Ejemplo 2
  function chunk(array, size) {
    let result = []
    for (value of array){
        let lastArray = result[result.length -1 ]
        if(!lastArray || lastArray.length == size){
            result.push([value])
        } else{
            lastArray.push(value)
        }
    }
    return result
  }
  
  var data = [1, 2, 3, 4, 5, 6, 7, 8]
  
  console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
  console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
  console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]*/


//Ejemplo 3

  function frequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    var keys = Object.keys(freq);
    var pairs = [];

    for(var i = 0; i < keys.length; i++){
        pairs.push([keys[i], freq[keys[i]]]);
    }

    var obj = {}

      for(var i = 0; i<pairs.sort().length; i++){
        obj[pairs.sort()[i][0]] = pairs.sort()[i][1];
      }


    return  obj;
};

console.log('Test 1:', frequency('cccbbbaaa'))
// {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}