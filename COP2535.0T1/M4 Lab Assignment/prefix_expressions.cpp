// Hannah Bauer
// COP2535.0T1
// M4 Lab Assignment (10/13/2024)
// This program evaluates writing and evaluating recursive functions with infix and prefix expressions

#include <iostream>
#include <string>
#include <stdlib.h>
#include <sstream>
using namespace std;

int prefixExpr(istream &exprStream); // Prototype

int main() {
    string input;
    cout << "Enter prefix expressions to evaluate.\n"
         << "Press enter after each expression.\n"
         << "and press enter on a blank line to quit.\n\n";
    cout << "Enter a prefix expression to evaluate: ";
    
    getline(cin, input);
    while (input.size() != 0) {
        istringstream exprStream(input);                        // Convert string to istringstream
        cout << prefixExpr(exprStream) << endl;                 // Evaluate the prefix expression
        cout << "Enter a prefix expression to evaluate: ";      // Get next line of input
        getline(cin, input);
    }

    return 0;
}

/**************************************************************************
 * Takes an istream that contains a single prefix expression p
 * and returns the integer value of p
 *************************************************************************/
int prefixExpr(istream &exprStream) {
    char ch = exprStream.peek();      // Peek at first non-space character in prefix expression
    while (isspace(ch)) {
        ch = exprStream.get();        // Read the space character
        ch = exprStream.peek();       // Peek again
    }

    if (isdigit(ch)) {
        int number;                   // The prefix expression is a single number
        exprStream >> number;
        return number;
    } else {
        // The prefix expression is an operator followed
        // by two prefix expressions: Compute values of
        // the prefix expressions

        // Read the operator
        ch = exprStream.get();

        // Recursively evaluate the two subexpressions
        int valuel = prefixExpr(exprStream);
        int value2 = prefixExpr(exprStream);

        // Apply the operator
        switch (ch) {
            case '+': return valuel + value2;
            case '-': return valuel - value2;
            case '*': return valuel * value2;
            case '/': return valuel / value2;
            default: 
                cout << "Bad input expression";
                exit(1);
        }
    }
}