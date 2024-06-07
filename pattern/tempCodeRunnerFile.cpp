void pattern9() {
    cout << endl;
    cout << "You are going to see alphabetical square pattern: -" << endl;

    int side, i, j;
    char ch = 'A';
    cout << endl;
    cout << "Enter the side of square:";
    cout << endl;
    cin >> side;
    cout << endl;
    
    for(i = 1; i <= side; i++) {
        for(j = 1; j <= side; j++) {
            cout << ch << " ";
        }
        cout << endl;
        ch++;
    }
   
    cout << endl;
}