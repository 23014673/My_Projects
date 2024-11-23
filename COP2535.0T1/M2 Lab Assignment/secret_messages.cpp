// Hannah Bauer
// COP2535.0T1
// Chapter 8: Challenge #1 - Perfect Scores (9/8/2024) This program encodes and decodes secret messages.

#include <iostream>
#include <fstream>
#include <string>

using namespace std;

class CodeMaker {
private:
    int size;
    char codeChar[94];              // Array to hold the substitutions for the 94 printable ASCII chars

    int findIt(char[], int, char);  // Helper function to find the character's index

public:
    CodeMaker();            // Constructor
    string encode(string);  // Method to encode a string
    string decode(string);  // Method to decode a string
};

/***************************************************************************************************************
  CodeMaker::CodeMaker - the Constructor
            This method reads the substitution characters from a file and stores them in the codeChar array.
            It also sets the member variable size.
****************************************************************************************************************/

CodeMaker::CodeMaker() {
    size = 94;
    
    ifstream inputFile;
    inputFile.open("code.dat");                         // Open the file

    for (int ascii = 32; ascii < 127; ascii++) {
        inputFile >> codeChar[ascii - 32];              // Read in data
    }
    
    inputFile.close();                                  // Close the file
}

/***************************************************************************************************************
        This method encodes and returns a clear text string.
****************************************************************************************************************/

string CodeMaker::encode(string s) {
    int ascii;
    char newChar;
    string newString = "";                              // Will hold the encoded string

    for (unsigned pos = 0; pos < s.length(); pos++) {
                                                        // Get the original character's ASCII code
        ascii = s[pos];

                                                        // Get the new replacement character
        newChar = codeChar[ascii - 32];

                                                        // Concatenate it onto the end of the new string
        newString += newChar;
    }

    return newString;
}

/***************************************************************************************************************
    CodeMaker::decode
        This method converts an encoded string back to clear text and returns it.
****************************************************************************************************************/

string CodeMaker::decode(string s) {
    int index;
    char nextChar;
    char originalChar;
    string decodedText = "";

    for (unsigned pos = 0; pos < s.length(); pos++) {
                                                        // Logic to reverse the encoding process and find the original character.
        nextChar = s[pos];
        
                                                        // Reverse the substitution (find index in codeChar that matches nextChar)
        for (index = 0; index < size; index++) {
            if (codeChar[index] == nextChar) {
                originalChar = index + 32;
                break;
            }
        }

                                                        // Append the original character to the decoded string
        decodedText += originalChar;
    }

    return decodedText;
}

/***************************************************************************************************************
    CodeMaker::findIt
        This method performs a linear search on a character array looking for a value.
****************************************************************************************************************/

int CodeMaker::findIt(char A[], int size, char value) {
    int index = 0;
    int position = -1;
    bool found = false;

    while (index < size && !found) {
        if (A[index] == value) {
            found = true;
            position = index;                           // Record the value's subscript if found
        }
        index++;                                        // Go to the next element
    }
    
    return position;                                    // Return the position, or -1 if not found
}

int main() {                                            // The client program that uses the CodeMaker class.
    string originalText, secretCode, finalText;
    CodeMaker myCoder;

                                                        // Get text from the user
    cout << "Enter the message to be encoded: ";
    getline(cin, originalText);

                                                        // Encode the message
    secretCode = myCoder.encode(originalText);
    cout << "\nHere is the encoded message:\n" << secretCode << endl;

                                                        // Decode the message
    finalText = myCoder.decode(secretCode);
    cout << "\nHere is the decoded message:\n" << finalText << endl;

    return 0;
}