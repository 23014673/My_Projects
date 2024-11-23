// Hannah Bauer
// COP2535.0T1
// (10/20/2024)
// M5 Lab Assignment | program that will read in the input file mobydick.txt found in the current directory and will display a list of all the unique words found in the file using a set

#include <iostream>
#include <fstream>
#include <set>
#include <string>
#include <sstream>
#include <algorithm>

int main() {
    std::ifstream inputFile("mobydick.txt");
    std::set<std::string> uniqueWords;
    std::string word;

    if (!inputFile.is_open()) {
        std::cerr << "Error: Coulld not open the file! Please check and see if file is in the correct folder." << std::endl;
        return 1;
    }

    while (inputFile >> word) {
        word.erase(std::remove_if(word.begin(), word.end(), ::ispunct), word.end());

        std::transform(word.begin(), word.end(), word.begin(), ::tolower);

        if (!word.empty()) {
            uniqueWords.insert(word);
        }
    }

    inputFile.close();

    std::cout << "----------------------------------------" << std::endl;
    std::cout << "Unique Words in Moby Dick:" << std::endl;
    std::cout << "----------------------------------------\n" << std::endl;

    for (const auto& uniqueWord : uniqueWords) {
        std::cout << uniqueWord << "\n--------------" << std::endl;
    }

    std::cout << "----------------------------------------\n" << std::endl;

    return 0;
}