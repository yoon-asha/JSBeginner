function solution(price, money, count) {
    const multiplier = (count*(count+1))/2;
    const total_price = price * multiplier;
    return total_price > money? total_price - money : 0;
}