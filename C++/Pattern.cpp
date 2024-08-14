#include<bits/stdc++.h>
using namespace std;


// First Pattern:
//        4 4 4 4 4 4
//        4 4 4 4 4 4
//        4 4 4 4 4 4  
//        4 4 4 4 4 4
//        4 4 4 4 4 4 

void firstfunc(int order){
    for (int i = 0; i < order; i++)
{
    for (int j = 0; j < order; j++)
    {
        cout<< '4'<<" ";
    }
    cout<<endl;
}
}

// Second Pattern:
   
//        1 4 9 16 25
//        1 4 9 16 25
//        1 4 9 16 25
//        1 4 9 16 25
//        1 4 9 16 25
//        1 4 9 16 25

void secondfunc(int order){
    for (int i = 0; i < order; i++)
{
    for (int j = 1; j <= order; j++)
    {
        cout<< j*j <<" ";
    }
    cout<<endl;
}
}


//    Third Pattern:
  
//     1 8 27 64 125 216
//     1 8 27 64 125 216
//     1 8 27 64 125 216
//     1 8 27 64 125 216
//     1 8 27 64 125 216

   void thirdfunc(int order){
    for (int i = 0; i < order; i++)
{
    for (int j = 1; j <= order; j++)
    {
        cout<< j*j*j <<" ";
    }
    cout<<endl;
}
}


//    Fourth Pattern:

// F G H I J K  
// F G H I J K
// F G H I J K
// F G H I J K
// F G H I J K
   void fourthfunc(int order){
    for (int i = 0; i < order; i++)
{
    for (int j = 0; j < order; j++)
    {
        cout<< char(70 +j) <<" ";
    }
    cout<<endl;
}
}

// First Pattern:
       
//      1
//      1 2
//      1 2 3
//      1 2 3 4
//      1 2 3 4 5 
//      1 2 3 4 5 6 
//      1 2 3 4 5 6

   void fifthfunc(int order){
    for (int i = 1; i <= order; i++)
{
    for (int j = 1; j <= i; j++)
    {
        cout<< j <<" ";
    }
    cout<<endl;
}
}


// Second Pattern:
   
//     A
//     A B
//     A B C
//     A B C D
//     A B C D E


   void sixthfunc(int order){
    for (int i = 0; i < order; i++)
{
    for (int j = 0; j <= i; j++)
    {
        cout<< char(65 + j) <<" ";
    }
    cout<<endl;
}
}

     

// Third Pattern:
     
//        10
//        10 11
//        10 11 12
//        10 11 12 13
//        10 11 12 13 14
//        10 11 12 13 14 15


// Fourth Pattern:

//       A B C D
//       A B C
//       A B
//       A

   void seventhfunc(int order){
    for (int i = 0; i < order; i++)
{
    for (int j = 0; j < order-i; j++)
    {
        cout<< char(65 + j) <<" ";
    }
    cout<<endl;
}
}





int main()
{int order;
cin>>order;

// firstfunc(order);
// secondfunc(order);
// thirdfunc(order);
// fourthfunc(order);
// fifthfunc(order);
// sixthfunc(order);
seventhfunc(order);
// eighthfunc(order);
// ninethfunc(order);


    return 0;
}