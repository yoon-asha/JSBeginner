function solution(idList, report, k) {
    let reportPairList = Array.from(new Set(report)).map((item) => item.split(" "));
    let blackList = Object.entries(
        reportPairList.reduce((acc, pair) => {
            const last = pair[pair.length - 1];
            acc[last] = (acc[last] || 0) + 1;
            return acc;
        }, {})
    )
    .filter(([_, count]) => count >= k)
    .map(([key]) => key);
    let mailCountDic = Object.fromEntries(
        Object.entries(
            reportPairList.reduce((acc, pair) => {
                let first = pair[0];
                let last = pair[pair.length - 1];
                
                if (blackList.includes(last)) {
                    acc[first] = (acc[first] || 0) + 1;
                }
                return acc;
            }, {})
        )
    );
    return idList.map((id) => mailCountDic[id] || 0);
}
