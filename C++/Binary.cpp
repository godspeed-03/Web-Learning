#include<bits/stdc++.h>
using namespace std;


int main()
{
    int i=0, deci_num;

    cin >> deci_num;

    // for(i=0; bin_num !=0; i++){
    //     rem = bin_num%10;
    //     bin_num = bin_num/10;
    //     deci_num += rem *(pow(2,i));
    // }

    int binarynum[32];

    while(deci_num>0){
        binarynum[i]=deci_num%2;
        deci_num =deci_num/ 2;
        i++;
    }

    for(int j = i-1; j>=0; j--){
        cout<<binarynum[j];

    }
// cout<<deci_num;
    return 0;
}