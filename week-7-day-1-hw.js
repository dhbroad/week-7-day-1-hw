//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

const findWords = (astring, alist) => {
    for (let dog of alist){
        if (astring.toLowerCase().includes(dog.toLowerCase())){
            console.log('Matched',dog);
        }
        else {
            console.log('No Matches for', dog);
        }
    }
}
findWords(dog_string, dog_names)

// or, to find matches even with the commas intruding ever so rudely:
const findWords2 = (astring, alist) => {
    console.log('findWords2!')
    const new_string = astring.toLowerCase().replace(/,/g,'')
    for (let dog of alist){
        if (new_string.includes(dog.toLowerCase())){
            console.log(`Matched ${dog}`);
        }
        else {
            console.log(`No Matches for ${dog}`);
        }
    }
}
findWords2(dog_string, dog_names)


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
const arr2 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

const replaceEvens = (arr) => {
    let new_arr = [];
    for (let i = 0; i< arr.length; i++){
        if (i % 2 === 0) {
            new_arr.push("even index")
        }
        else{
            new_arr.push(arr[i])
        }
    }
    return new_arr
    
}
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
console.log(replaceEvens(arr2))


// Codewars #1
// https://www.codewars.com/kata/57a083a57cb1f31db7000028/
function powersOfTwo(n){
    let out = [];
    for (let i = 0; i<n+1; i++){
      out.push(2**i)
    }
    return out
};


// Codewars #2
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let no_geese = [];
    for (bird of birds){
      if (geese.includes(bird)){
        continue
      }
      else {no_geese.push(bird)}
    }
    return no_geese
  };