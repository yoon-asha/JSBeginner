function solution(today, terms, privacies) {
    var answer = [];
    
    const [year_, month_, day_] = today.split('.').map(Number);
    const terms_arr = terms.map(term => term.split(' '));
    const terms_dict = terms_arr.reduce((acc, term) => {
        acc[term[0]] = Number(term[1]);
        return acc;
    }, {});

    for (var i = 0; i < privacies.length; i++) {
        var [date, term] = privacies[i].split(' ');
        var [year, month, day] = date.split('.').map(Number);
        month += terms_dict[term];
        while (month > 12) {
            year += 1;
            month -= 12;
        }

        if (365*year  + 28*month + day <= 365*year_ + 28*month_ + day_) {
            answer.push(i + 1);
        }
    }
    return answer;
}