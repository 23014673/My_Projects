// Hannah Bauer
// COP2535.0T1
// Project 1 Dropbox | Integer Values Calculator (9/2/2024)

#include <iostream>
#include <vector>

int main() {
    using std::vector;
    using std::cout;
    using std::cin;
    using std::endl;

    vector<int> integers;
    int num;

    const int MAX_INT = std::numeric_limits<int>::max();
    const int MIN_INT = std::numeric_limits<int>::min();

    cout << "Please enter the integer values you would like to calculate: (enter a non-integer to stop the calculation) " << endl;

    while (cin >> num) {
        integers.push_back(num);
    }

    int minValues = MAX_INT;        // the minimum value entered

    int maxValues = MIN_INT;        // the maximum value entered

    int evenValues = 0;             // the number of even numbers entered

    int oddValues = 0;              // the number of odd numbers entered

    int positiveValues = 0;         // the number of positive numbers entered

    int sumOfValues = 0;            // the sum of the values entered

    // CALCULATIONS FOR EACH DIFFERENT TYPE OF VALUE
    for (int n : integers) {
        if (n < minValues) minValues = n;  // minimum value

        if (n > maxValues) maxValues = n;  // maximum value 

        if (n % 2 == 0) evenValues++;      // even values

        else oddValues++;                  // odd values

        if (n > 0) positiveValues++;       // positive values

        sumOfValues += n;                  // sum of values
    }

    double average = static_cast<double>(sumOfValues) / integers.size();

    cout << "-------------------------------------------------" << endl;

    cout << "Number of total values entered: " << integers.size() << endl;
    cout << "-------------------------------------------------" << endl;

    cout << "Minimum value: " << minValues << endl;
    cout << "----------------------" << endl;
    cout << "Maximum valu: " << maxValues << endl;
    cout << "-------------------------------------------------" << endl;

    cout << "Number of even values entered: " << evenValues << endl;
    cout << "----------------------" << endl;
    cout << "Number of odd values entered: " << oddValues << endl;
    cout << "-------------------------------------------------" << endl;

    cout << "Number of positive values entered: " << positiveValues << endl;
    cout << "-------------------------------------------------" << endl;

    cout << "Sum of values: " << sumOfValues << endl;
    cout << "-------------------------------------------------" << endl;

    cout << "Average of values: " << average << endl;
    cout << "-------------------------------------------------" << endl;
    
    cout << "List of all values entered: ";
    
    for (int n : integers) {
        cout << n << ", ";
    }
    cout << endl;
    
    cout << "-------------------------------------------------" << endl;

    return 0;
}