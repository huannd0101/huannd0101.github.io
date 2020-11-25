/* ví dụ
input: [1, 2, 3, 4, 3, 1, 2, 5, 6, 7, 5, 6, 8, 7]
output: 
{ 
    '1': 2, 
    '2': 2, 
    '3': 2, 
    '4': 1, 
    '5': 2, 
    '6': 2, 
    '7': 2, 
    '8': 1 
}
*/

const arr = [1, 2, 3, 4, 3, 1, 2, 5, 6, 7, 5, 6, 8, 7];

const countElement = arr.reduce((count, item) => {
    count[item] = (item in count) ? (count[item] + 1) : 1;
    return count;
}, {});

console.log(countElement);