export const currencyFormate = function(value) {
    const num = new Number(value).toLocaleString("en-IN", {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    });
    if (num.substr(1) !== 'NaN') {
        let valuedata = num.toString();
        valuedata = [valuedata.slice(0, 1), valuedata.slice(1)].join(' ');
        return valuedata;
    } else {
        return null;
    };
};
