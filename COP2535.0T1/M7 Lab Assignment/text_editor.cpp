// Hannah Bauer
// COP2535.0T1
// (11/18/2024)
// M7 Lab Assignment | simple menu-driven program involving: handling user input, displaying text, and implementing basic editing functionalities like adding text, deleting text, and undoing actions using a stack

#include <iostream>
#include <stack>
#include <string>
#include <vector>

void addText(std::vector<std::string>& document, std::stack<std::string>& undoStack);

void undoLastAction(std::vector<std::string>& document, std::stack<std::string>& undoStack);

void displayDocument(const std::vector<std::string>& document);

void clearDocument(std::vector<std::string>& document, std::stack<std::string>& undoStack);

void showMenu();

int main() {

    int choice;

    std::vector<std::string> document;

    std::stack<std::string> undoStack;

    do {
        showMenu();
        
        std::cout << "\nEnter your choice: ";  // prompt the user for the input text
        
        std::cin >> choice;
        
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');

        switch (choice) {
            case 1:
                addText(document, undoStack);
                break;
            
            case 2:
                undoLastAction(document, undoStack);
                break;
            
            case 3:
                displayDocument(document);
                break;
            
            case 4:
                clearDocument(document, undoStack);
                break;
            
            case 5:
                std::cout << "Exiting program.\n";
                break;
            
            default:
                std::cout << "Invalid choice. Please try again.\n";
        }
    } 
    
    while (choice != 5);

    return 0;
}

void showMenu() {

    std::cout << "\n--------------------------------\n";
    std::cout << "\n  ------Text Editor Menu------  \n";
    std::cout << "\n--------------------------------\n";
    std::cout << "\n1. Add text\n";
    std::cout << "\n2. Undo last action\n";
    std::cout << "\n3. Display document\n";
    std::cout << "\n4. Clear document\n";
    std::cout << "\n5. Exit\n";
    std::cout << "\n--------------------------------\n";
}

void addText(std::vector<std::string>& document, std::stack<std::string>& undoStack) {
    
    std::string line;
    
    std::cout << "\nEnter text: ";                          // add the line of text to the document
    
    std::getline(std::cin, line);
    
    document.push_back(line);
    
    undoStack.push(line);
}

void undoLastAction(std::vector<std::string>& document, std::stack<std::string>& undoStack) {
    
    if (!document.empty() && !undoStack.empty()) {
        document.pop_back(); 
    
        undoStack.pop();                                    // undo the inputed text from the document
    
        std::cout << "\nLast action undone.\n";             // remove the last added line from both the document and the stack
    }
    
    else {
        std::cout << "\nNo actions to undo.\n";
    }
}

void displayDocument(const std::vector<std::string>& document) {
    
    std::cout << "\nCurrent Document:\n";
    
    if (document.empty()) {                                 // display the current content of the document
        std::cout << "\n(Document is empty)\n";
    }
    
    else {

        for (std::vector<std::string>::const_iterator it = document.begin(); it != document.end(); ++it) {
            std::cout << *it << "\t\n";
        }
    }
}

void clearDocument(std::vector<std::string>& document, std::stack<std::string>& undoStack) {
    
    std::string confirmation;                               // prompt the user for a confirmation (all data is deleted)
    
    std::cout << "\nAre you sure you want to clear the document? (yes/no): ";
    
    std::cin >> confirmation;                               // clear the entire document

    if (confirmation == "yes" || confirmation == "Yes" || confirmation == "YES") {
        
        document.clear();
        
        while (!undoStack.empty()) {
            undoStack.pop();
        }

        std::cout << "\nDocument cleared.\n";
    } 
    
    else if (confirmation == "no" || confirmation == "No" || confirmation == "NO") {
        std::cout << "\nClear operation canceled.\n";
    } 
    
    else {
        std::cout << "\nInvalid input. Clear operation canceled.\n";
    }
}