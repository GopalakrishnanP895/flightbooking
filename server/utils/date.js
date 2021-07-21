
const convertdateString = date => new Date(date);

const convertDateToDDMMYYYY = async (date) => {
    
    let dateString = await convertdateString(date);

    return dateString.getDate().toString().padStart(2, "0")	+ "-" + (dateString.getMonth() + 1).toString().padStart(2, "0") + "-" + dateString.getFullYear();
}


module.exports = { convertdateString, convertDateToDDMMYYYY };