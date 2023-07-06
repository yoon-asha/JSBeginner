function generate_discounts(k) {
    const discounts = [10, 20, 30, 40];
    if (k===1){
        return [[10],[20],[30],[40]];
    } else {
        let discount_arr = [];
        for (discount of generate_discounts(k-1)){
            for (x of discounts){
                discount_arr.push([x,...discount]);
            }
        }
        return discount_arr
    }
}

function evaluate(users, emoticons, discounts) {
    var count = 0;
    var sales = 0;
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        var sale = emoticons.reduce(function(acc, emoticon, index) {
            if (discounts[index] >= user[0]) {
                return acc + (emoticon * (100 - discounts[index]) / 100);
            } else {
                return acc;
            }
        }, 0);
        if (sale >= user[1]) count += 1;
        else sales += sale;
    }
    return [count, sales];
}

function solution(users, emoticons) {
    var max_sales = 0;
    var max_count = 0;

    var discounts = generate_discounts(emoticons.length);
    for (discount of discounts) {
        const [count, sales] = evaluate(users, emoticons, discount);
        if (count > max_count) {
            max_count = count;
            max_sales = sales;
        } else if (count === max_count) {
            max_sales = Math.max(sales, max_sales);
        }
    }

   return [max_count, max_sales];
}