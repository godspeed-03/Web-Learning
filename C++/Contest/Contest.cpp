#include <iostream>
#include <vector>
#include <algorithm>
#include <iomanip>

using namespace std;

double maxAveragePrice(int n, vector<int>& prices) {
    // Sort the prices in ascending order
    sort(prices.begin(), prices.end());

    // Initial sum of all goods
    long long total_sum = 0;
    for(int i = 0; i < n; i++) {
        total_sum += prices[i];
    }

    // Calculate the initial average
    double max_avg = static_cast<double>(total_sum) / n;

    // Remove the lowest priced items one by one and calculate the average
    for(int i = 1; i <= n / 5; i++) {
        total_sum -= prices[i - 1];
        double current_avg = static_cast<double>(total_sum) / (n - i);
        max_avg = max(max_avg, current_avg);
    }

    // Return the maximum average found rounded to 5 decimal places
    return max_avg;
}

int main() {
    int n;
    cin >> n;
    vector<int> prices(n);

    for(int i = 0; i < n; i++) {
        cin >> prices[i];
    }

    double result = maxAveragePrice(n, prices);

    // Print the result with 5 decimal places
    printf("%.5f\n", result);

    return 0;
}
