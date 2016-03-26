module.exports = function(day, n) {
    var days = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
    ]

    var i = days.indexOf(day);
    if (i + n > days.length) return days[i + n - days.length];
    else return days[i + n];
};