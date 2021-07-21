const flightList = require('./flightlist.js')
const { convertDateToDDMMYYYY } = require('../utils/date.js');

const getFlightList = async (req, res) => {
    
    let flightSortedResult = await sortFlightLists(req.query);

    res.json(flightSortedResult);
}

const sortFlightLists = async ({ source, destination, travelDate, returnDate}) => {

    travelDate  = await convertDateToDDMMYYYY(travelDate);
    returnDate  = returnDate !== '' ? await convertDateToDDMMYYYY(returnDate) : '';

    let sortedList = flightList.filter(flight => {

       return returnDate === '' ? (flight.Desitination === destination && flight.Source === source && flight.TravelDate === travelDate) : (flight.Desitination === destination && flight.Source === source && flight.TravelDate === travelDate && flight.ReturnDate === returnDate)

    });

    return sortedList;
}

module.exports = { getFlightList }