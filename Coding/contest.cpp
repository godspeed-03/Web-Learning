#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

int countWinners(int n, const vector<vector<int>>& pick) {
    vector<unordered_map<int, int>> colorCounts(n);
    
    for (const auto& p : pick) {
        int player = p[0];
        int color = p[1];
        colorCounts[player][color]++;
    }

    int winnersCount = 0;
    
    for (int i = 0; i < n; ++i) {
        bool wins = false;
        for (const auto& [color, count] : colorCounts[i]) {
            if (count >= i + 1) {
                wins = true;
                break;
            }
        }
        if (wins) {
            winnersCount++;
        }
    }
    
    return winnersCount;
}

int main() {
    int n = 3;
    vector<vector<int>> pick = {{1,0},{1,3},{2,4},{2,4},{2,4}};
    
    cout << "Number of players who win the game: " << countWinners(n, pick) << endl;
    
    return 0;
}
