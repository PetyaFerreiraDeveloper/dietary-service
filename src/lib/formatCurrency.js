const formatter = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP'})

function formatCurrency(value) {
    // const formatted = `${value}`; // turn number to string
    // const array = [...formatted].reverse();
    // console.log(array)

    // const withCommas = array.reduce((acc, digit, index) => {
    //     acc.push(digit);
    //     if(!((index+1) % 3)) {
    //         acc.push(',')
    //     }
    //     return acc;
    // }, [])
    // return `$${withCommas.reverse().join('')}`;
    return formatter.format(value)
}

formatCurrency(1_234)
 
module.exports = formatCurrency;