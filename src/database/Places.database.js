 const PLACES_DATA = [

    {
        _id: "1",
        name: "Beer Point",
        address: "6-ти Септември 46",
        placeType: "бирария",
        foodType: "Хамбургери",
        openingHours : "17-22",
        takeaway: 'No',
        weekend: 'yes',
        discount: "No"
    },
    {
        _id: "2",
        name: "Downtown",
        address: "Васил Левски 27",
        placeType: "ресторант",
        foodType: "готвено",
        openingHours : "12-16",
        takeaway: 'Yes',
        weekend: 'No',
        discount: "No"
    },
    {
        _id: "3",
        name: "Beshamel",
        address: "ul. Hristo Botev",
        placeType: "бистро",
        foodType: "готвено",
        openingHours : "12-17:30h",
        takeaway: 'Yes',
        weekend: 'No',
        discount: "after 17"
    },
    {
        _id: "4",
        name: "Repeat",
        address: "Раковски 159",
        placeType: "бистро",
        foodType: "готвено",
        openingHours : "12-18:30h",
        takeaway: 'Yes',
        weekend: 'No',
        discount: "after 17"
    },
    {
        _id: "5",
        name: "Малкия Стадион",
        address: "Никола Михайлов 10",
        placeType: "кръчма",
        foodType: "готвено",
        openingHours : "13-21h",
        takeaway: 'No',
        weekend: 'Yes',
        discount: "No"
    },

]

export default PLACES_DATA;

export function savePlace(place) {

let addPlace = {...place};
addPlace._id = Date.now().toString();
PLACES_DATA.push(addPlace);

}