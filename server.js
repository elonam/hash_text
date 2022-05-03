var hash_table = [
  { a: {group: 1, column: 1 } },
  { b: {group: 1, column: 2} },
  {c: {group: 1, column: 3}},
  {ç: {group: 1, column: 4}},
    
  {d: {group: 2, column: 1}},
  {e: {group: 2, column: 2}},
  {f: {group: 2, column: 3}},
  {g: {group: 2, column: 4}},
    
  {ğ: {group: 3, column: 1}},
  {h: {group: 3, column: 2}},
  {ı: {group: 3, column: 3}},
  {i: {group: 3, column: 4}},
    
  {j: {group: 4, column: 1}},
  {k: {group: 4, column: 2}},
  {l: {group: 4, column: 3}},
  {m: {group: 4, column: 4}},
    
  {n: {group: 5, column: 1}},
  {o: {group: 5, column: 2}},
  {ö: {group: 5, column: 3}},
  {p: {group: 5, column: 4}},
    
  {q: {group: 6, column: 1}},
  {r: {group: 6, column: 2}},
  {s: {group: 6, column: 3}},
  {ş: {group: 6, column: 4}},
       
  {t: {group: 7, column: 1}},
  {u: {group: 7, column: 2}},
  {ü: {group: 7, column: 3}},
  {v: {group: 7, column: 4}},
    
  {w: {group: 8, column: 1}},
  {x: {group: 8, column: 2}},
  {y: {group: 8, column: 3}},
  {z: {group: 8, column: 4}}
  ]


function getChar(group, column){
  
for(let char of hash_table){
    if(Object.values(char)[0].group == group && Object.values(char)[0].column == column){
      return Object.keys(char)[0]
      break
    }
  }
}

function getCharI(char){
  for(let charI of hash_table){
    if(Object.keys(charI)[0] == char){
      return Object.values(charI)[0]
}
  }
}

function textToHash(text){
 let textArray = Array.from(text)
 let hash = ""
 
 for(let index in textArray){
   let char = textArray[index]
   let charI = getCharI(char)
   
   
   if(char == " ") {
     hash += "0"
     hash += " "
     continue;
   }
   
   for(let i = 0; i < charI.group; i++){
     hash += "0"
   }
   for(let i = 0; i < charI.column; i++){
     hash += "1"
   }
 }
  hash += "0"
  return hash
}

function hashToText(hash){
  let hashArray = Array.from(hash) 
  
  let text = ""
  
  let group = 0
  let column = 0
  
  for(let index in hashArray){
    let key = hashArray[index]
    
    if(key == 0) group++
    else column++
    
    if(key == " "){
      group = 0
      column = 0
      
      text += " "
      continue;
    }
    if(key + hashArray[Number(index) + 1] == "10"){
      text += getChar(group, column)
      group = 0
      column = 0
    }  
    
  }
  
  return text
}

console.log(textToHash("selam"))
