#include <string>
#include <vector>

using namespace std;

int solution(int n) {
    
    int k = 2;
    while(k < n){
        if ((n-1) % k == 0) return k;
        k++;
    }
    return 0;
}