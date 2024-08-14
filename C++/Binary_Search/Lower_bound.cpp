#include <bits/stdc++.h>
using namespace std;

int binarySearch(int arr[], int size, int target) {
    int low = 0;
    int high = size - 1;
    int mid;

    while (low <= high) {
        mid = (low + high) / 2;
        if (arr[mid] == target) {
            return mid; // Return the index of the target
        } else if (arr[mid] > target) {
            high = mid - 1; // Search in the left half
        } else {
            low = mid + 1; // Search in the right half
        }
    }

    return -1; // Target not found
}

int main()
{
    int arr[11];

    for (int i = 0; i < 11; i++)
    {
        cin >> arr[i];
    }

    int target = 9, mid, ans=11;
    int low = 0;
    int high = 11;

    while (low <= high) {
        mid = (low + high) / 2;
        if(arr[mid]>= target){
            ans = mid;
            high = mid-1;

        }else{
            low = mid+1;
        }
    }

   cout<<arr[ans];

    return 0;
}