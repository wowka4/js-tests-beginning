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
function padRow(rowNumber, rowCount) {
    return ' '.repeat(rowCount - rowNumber) + char.repeat(2 * rowNumber - 1) +
        ' '.repeat(rowCount - rowNumber);
}
while (row.length < count) {
    row.push(padRow(row.length + 1,count));
}

let result = '';
for (const r of row) {
    result = result + "\n" + r;
}

console.log(result);