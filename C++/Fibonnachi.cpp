// Print n’th Fibonacci number.


#include<bits/stdc++.h>
using namespace std;

void fibonacchi ( int n1, int n2){

    int first = (log10(n1) +1);
    int second = (log10(n2) +1);
    cout<<first <<second;

//5 3
// n1 = n1+n2; //n1=8 n2=3
// n2= n1-n2  ;//n1=8 n2=5
// n1 = n1-n2;
// cout<< n1<< ' ' <<n2;

}


int main()
{
    int firstnum, secondnum;
    cin>> firstnum >> secondnum;

    fibonacchi(firstnum, secondnum);

    return 0;
}