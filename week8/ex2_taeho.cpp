
#include <iostream>
#include <vector>
#include <unordered_set>
#include <algorithm>

using namespace std;

int solution(vector<int> cards) {
    
    vector<unordered_set<int>> paritition_;
    unordered_set<int> used;

    for (int card : cards) {
        if (used.count(card) > 0) {
            continue;
        } else {
            unordered_set<int> cycle;
            while(cycle.count(card) == 0 ){
                cycle.insert(card);
                used.insert(card);
                card = cards[card-1];
            }
            paritition_.push_back(cycle);
        }
    }
    std::vector<int> lengths;
    for (const auto& cycle : paritition_) {
        lengths.push_back(cycle.size());
    }
    std::sort(lengths.rbegin(), lengths.rend());
    return (lengths.size() > 1) ? lengths[0] * lengths[1] : 0;
}