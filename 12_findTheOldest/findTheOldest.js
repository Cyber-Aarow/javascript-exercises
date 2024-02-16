const findTheOldest = function(people) {
    let oldest_person = {};
    let age = 0;
    let oldest_age = 0;
    for(person of people){
        if("yearOfDeath" in person){
            age = person.yearOfDeath - person.yearOfBirth;
        }
        else{
            let yearOfToday = new Date().getFullYear();
            age = yearOfToday - person.yearOfBirth;
        }
        if(age > oldest_age){
            oldest_age = age;
            oldest_person = person;
        }
    }
    return oldest_person;  
};

// Do not edit below this line
module.exports = findTheOldest;
