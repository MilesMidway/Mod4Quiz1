class Day
{
    _day;

    static days_array = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; 

    constructor(day)
    {
        this.day = day;
    }

    set day(value) // Bryan
    {
        this._day = value;
    }

    get day()
    {
        return this._day;
    }

    printDay() // Mico
    {

    }

    nextDay() // Matthew
    {

    }

    previousDay() // Nathaniel
    {
        let previousDay = Day.days_array.indexOf(this.day);
        if (previousDay > 1){previousDay -= 1;} else previousDay = 6;
        return Day.days_array[previousDay];
    }

    predictDay(value) // Zyd
    {
        let start = Day.days_array.indexOf(this.day);
        let currentIndex = (start + value) % 7;
        return Day.days_array[currentIndex];
    }
}


// Test Area 

const day = new Day("Sunday");

console.log(day.previousDay());



