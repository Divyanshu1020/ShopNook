export const convertInPricrFormate = (/** @type {number} */ price) => {
    const formattedPrice = price.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    

    return formattedPrice
}