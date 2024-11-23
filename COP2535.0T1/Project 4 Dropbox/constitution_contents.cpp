// Hannah Bauer
// COP2535.0T1
// (10/26/2024)
// Project 4 Dropbox | Program that will read in the contents of the input file constitution.txt found in the current directory.

#include <iostream>
#include <fstream>
#include <map>
#include <string>
#include <iomanip>

int main() {

    std::ifstream inputFile("constitution.txt"); // read in the contents of the input file constitution.txt
    
    if (!inputFile) {
        std::cerr << "Error: Coulld not open the file constitution.txt! Please check and see if file is in the correct folder." << std::endl;
    
        return 1;
    }

    std::map<std::string, int> wordFrequency;           // create a map to store individual words

    std::string word;

    while (inputFile >> word) {                         // read words from constitution.txt
        ++wordFrequency[word];
    }

    inputFile.close();

    std::ofstream outputFile("listing.txt");            // create a second file named listing.txt for writing results
    
    if (!outputFile) {
        std::cerr << "Error: Coulld not open the file listing.txt! Please check and see if file is in the correct folder." << std::endl;
        
        return 1;
    }

    std::cout << "\n----------Word Frequency List----------\n";
    std::cout << "*Word*                          *Frequency*\n";
    std::cout << "-----------------------------------------\n";

    for (const auto &entry : wordFrequency) {                   // write to file listing.txt

        std::cout << std::left << std::setw(20) << entry.first << std::setw(10) << entry.second << "\n";

        outputFile << std::left << std::setw(20) << entry.first << std::setw(10) << entry.second << "\n";
    }

    outputFile.close();                                         // close the files

    std::cout << "-----------------------------------------\n";

    return 0;
}