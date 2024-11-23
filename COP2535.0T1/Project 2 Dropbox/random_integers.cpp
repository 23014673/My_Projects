// Hannah Bauer
// COP2535.0T1
// Project 2 Dropbox | Integer Values From Text File (9/12/2024)

#include <iostream>
#include <fstream> // Allows file to be read
#include <vector>

using std::vector;
using std::ifstream; // Allows file to be read + searched for specifics
using std::cout;
using std::endl;

// Function that uses the bubble sort algorithm to sort one of the arrays in ascending order
int bubbleSort(vector<int>& array) {

    int numbersExchanged = 0;

    // keeps count of the number of exchanges it makes
    for (int index = 0; index < array.size() - 1; index++) {

        for (int compareIndex = 0; compareIndex < array.size() - index - 1; compareIndex++) {

            if (array[compareIndex] > array[compareIndex + 1]) {

                int store = array[compareIndex];
                
                array[compareIndex] = array[compareIndex + 1];
                
                array[compareIndex + 1] = store;
                
                numbersExchanged++;
            }
        }
    }
    return numbersExchanged;
}

// Function that uses the selection sort algorithm to sort the other array
int selectionSort(vector<int>& array) {

    int numbersExchanged = 0;
    
    // keeps count of the number of exchanges it makes
    for (int index = 0; index < array.size() - 1; index++) {
        int minimumIndex = index;

        for (int currentIndex = index + 1; currentIndex < array.size(); currentIndex++) {

            if (array[currentIndex] < array[minimumIndex]) minimumIndex = currentIndex;
        }

        if (minimumIndex != index) {

            int store = array[index];

            array[index] = array[minimumIndex];

            array[minimumIndex] = store;

            numbersExchanged++;
        }
    }
    return numbersExchanged;
}

// Function that uses the linear search program to locate the value 869
int linearSearch(const vector<int>& array, int randomValue) {

    // keeps a count of the number of comparisons it makes until it finds the value
    for (int index = 0, countsComparisons = 0; index < array.size(); countsComparisons++, index++)
        if (array[index] == randomValue) return countsComparisons;
    
    return array.size();
}

// Function that uses the binary search algorithm to locate the same value
int binarySearch(const vector<int>& array, int targetValue) {

    int countsComparisons = 0;
    int lowValue = 0;
    int highValue = array.size() - 1;

    //keeps count of the numbers of comparisons it makes
    while (lowValue <= highValue) {

        countsComparisons++;

        int middleIndex = lowValue + (highValue - lowValue) / 2;

        if (array[middleIndex] == targetValue) return countsComparisons;

        else if (array[middleIndex] < targetValue) lowValue = middleIndex + 1;

        else {
             highValue = middleIndex - 1;
        }
    }

    return countsComparisons;
}


int main() {
    vector<int> array1, array2;
    int randomFileValue;

    ifstream inputFile("random.txt");

    while (inputFile >> randomFileValue) array1.push_back(randomFileValue), array2.push_back(randomFileValue);
    inputFile.close();

    cout << "-------------------------------------------------------------" << endl;
    cout << "\t---------Integer Values From Text File---------" << endl;
    cout << "-------------------------------------------------------------" << endl;

    cout << "\tBubble Sort Exchange: \t\t" << bubbleSort(array1) << endl;
    cout << "-------------------------------------------------------------" << endl;

    cout << "\tSelection Sort Exchange: \t" << selectionSort(array2) << endl;
    cout << "-------------------------------------------------------------" << endl;

    cout << "\tLinear Search Comparison: \t" << linearSearch(array1, 869) << endl;
    cout << "-------------------------------------------------------------" << endl;

    cout << "\tBinary Search Comparison: \t" << binarySearch(array1, 869) << endl;
    cout << "-------------------------------------------------------------" << endl;

    return 0;
}