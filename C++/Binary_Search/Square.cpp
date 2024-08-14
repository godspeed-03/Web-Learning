#include<bits/stdc++.h>
using namespace std;


int main()
{
    int x = 2147395600;
 if (x <= 1) return x;
long i = 1;
long sq = i * i;
while (x >= sq) {
	i++;
	sq = i * i;
}
cout<< (int) (i - 1);
}