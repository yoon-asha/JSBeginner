#include <string>
#include <vector>
#include <bitset>
#include <algorithm>

using namespace std;



std::string decimalToBinary(int number) {
    std::bitset<32> binary(number);
    std::string str = binary.to_string();
    str = str.substr(str.find_first_not_of('0'));
    if (str.empty()) {
        str = "0";
    }
    return str;     
}

vector<int> solution(string s) {
    int count = 0;
    int count_zero = 0;

    while (s != "1") {
        count++;
        int countOne = std::count(s.begin(), s.end(), '1');
        count_zero += s.length() - countOne; 
        s = decimalToBinary(countOne);
    }
    return {count, count_zero};
}