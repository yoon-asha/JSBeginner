function solution(cards1, cards2, goal) {
    var mutableCards1 = cards1
    var mutableCards2 = cards2

    for (let word of goal) {
        if (word != mutableCards1[0] && word != mutableCards2[0]) {
            return "No";
        }
        switch (word) {
            case mutableCards1[0]:
                mutableCards1.shift();
                break;
            case mutableCards2[0]:
                mutableCards2.shift();
                break;
            default:
                break;
        }
    }
    return "Yes";
}
