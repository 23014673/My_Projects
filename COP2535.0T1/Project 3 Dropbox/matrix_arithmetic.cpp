// Hannah Bauer
// COP2535.0T1
// Project 3 Dropbox | Matrix Dimensions (10/1/2024)

#include <iostream>
#include <fstream>              // Allows file to be read
#include <cstdlib>              // Allows exit() function
using namespace std;

int** allocateMatrix(int rows, int cols);                                           // Dynamically allocates memory for a matrix of size rows x columns using pointers.
 
void deallocateMatrix(int** matrix, int rows);                                      // Frees the dynamically allocated memory for a matrix.

void readMatrixFromFile(ifstream& file, int** matrix, int rows, int cols);          // Reads matrix values from the input file and stores them in a dynamically allocated matrix.

void addMatrices(int** matrixA, int** matrixB, int** result, int rows, int cols);   // Performs matrix addition, storing the result in the result matrix

void printMatrixResults(int** matrix, int rows, int cols);                          // Implement a function to print the result matrix.


int main() {
    ifstream file("matrix.txt");

    if (!file) 
    {
        cerr << "Error: Coulld not open the file! Please check and see if file is in the correct folder." << endl;
        return 1;
    }

    int rows, cols;

    file >> rows >> cols;

    if (rows <= 0 || cols <= 0) 
    {
        cerr << "Error: Matrix dimensions must be positive integers!" << endl;     // Checks if file dimensions are valid
        return 1;
    }

    int** matrixA =     allocateMatrix(rows, cols);                                 // Dynamically allocate memory for the matrices using pointers (use the new keyword)

    int** matrixB =     allocateMatrix(rows, cols);

    int** fileResult =  allocateMatrix(rows, cols);

    
    readMatrixFromFile(file, matrixA, rows, cols);                          // Implement a function to read matrix values from the input file.

    readMatrixFromFile(file, matrixB, rows, cols);

    addMatrices(matrixA, matrixB, fileResult, rows, cols);                  /* Implement a matrix addition function that: Takes two matrices and their dimensions 
                                                                            as input, Returns the result in a third matrix, and accesses matrix elements using pointer arithmetic */

    
    cout << "\n----------Matrix Arithmetic-------------\n" << endl;         //Displays the results in the order of instructions 
    cout << "----------------------------------------" << endl;
    
    cout << "Reading Matrix A:\n" << endl;
    printMatrixResults(matrixA, rows, cols);
    cout << "-----------------------" << endl;
    
    cout << "Reading Matrix B:\n" << endl;
    printMatrixResults(matrixB, rows, cols);
    cout << "-----------------------" << endl;
    
    cout << "Resultant Matrix after addition: (Matrix A + Matrix B):\n" << endl;
    printMatrixResults(fileResult, rows, cols);
    cout << "-----------------------" << endl;
    
    cout << "End of Results" << endl;
    cout << "----------------------------------------\n" << endl;

    
    deallocateMatrix(matrixA, rows);                                         // Properly deallocate memory after usage using the delete keyword
    
    deallocateMatrix(matrixB, rows);
    
    deallocateMatrix(fileResult, rows);

    file.close();

    return 0;
}

int** allocateMatrix(int rows, int cols) {
    int** matrix = new int*[rows];

    for (int index = 0; index < rows; ++index) 
    {
        matrix[index] = new int[cols];
    }

    return matrix;
}

void deallocateMatrix(int** matrix, int rows) {
    for (int index = 0; index < rows; ++index)
    {
        delete[] matrix[index];
    }
    
    delete[] matrix;
}

void readMatrixFromFile(ifstream& file, int** matrix, int rows, int cols) {
    for (int index = 0; index < rows; ++index)
    {
        for (int loopIndex = 0; loopIndex < cols; ++loopIndex) 
        {
            file >> *(*(matrix + index) + loopIndex);
        }
    }
}

void addMatrices(int** matrixA, int** matrixB, int** result, int rows, int cols) {
    for (int index = 0; index < rows; ++index) 
    {
        for (int loopIndex = 0; loopIndex < cols; ++loopIndex) 
        {
            *(*(result + index) + loopIndex) = *(*(matrixA + index) + loopIndex) + *(*(matrixB + index) + loopIndex);
        }
    }
}

void printMatrixResults(int** matrix, int rows, int cols) {
    for (int index = 0; index < rows; ++index) 
    {
        for (int loopIndex = 0; loopIndex < cols; ++loopIndex) 
        {
            cout << *(*(matrix + index) + loopIndex) << " ";
        }

        cout << endl;
    }
}