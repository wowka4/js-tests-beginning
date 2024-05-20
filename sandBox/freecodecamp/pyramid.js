// Description: this file makes a pyramid
/*
*      #
      ###
     #####
    #######
   #########
  ###########
 #############
###############
*/


const count = 8;
const row = [];
const char = '#';
let done = 0;
function padRow(rowNumber, rowCount) {
    return ' '.repeat(rowCount - rowNumber) + char.repeat(2 * rowNumber - 1) +
        ' '.repeat(rowCount - rowNumber);
}
while (done !== count) {
    done++;
    row.push(padRow(done,count));
}

let result = '';
for (const r of row) {
    result = result + "\n" + r;
}

console.log(result);