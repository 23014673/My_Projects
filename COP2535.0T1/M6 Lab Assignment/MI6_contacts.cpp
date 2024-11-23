// Hannah Bauer
// COP2535.0T1
// (10/26/2024)
// M6 Lab Assignment |

#include <iostream>
#include <fstream>
#include <string>
#include <iomanip>
#include <sstream>

class Node {
public:
    std::string encryptedData;

    Node* next;

    Node(const std::string& data) : encryptedData(data), next(nullptr) {}
};

class LinkedList {

public:
    
    Node* head;

    LinkedList() : head(nullptr) {}

    // Function to add a new node at the end of the linked list
    void append(const std::string& data) {
        
        Node* newNode = new Node(data);
        
        if (!head) {
            head = newNode;
        } 
        
        else {
            Node* temp = head;
            
            while (temp->next) {
                temp = temp->next;
            }
            
            temp->next = newNode;
        }
    }

    void display() const {
        std::cout << "Encryption First Level\n";
        
        std::cout << "----------------------------------------\n";
        
        Node* temp = head;

        while (temp) {
            std::cout << temp->encryptedData << std::endl;

            temp = temp->next;
        }

        std::cout << "----------------------------------------\n";

        std::cout << "End of results.\n";
    }

    ~LinkedList() {
        Node* current = head;

        while (current) {
            Node* nextNode = current->next;
            
            delete current;
            
            current = nextNode;
        }
    }
};

// XOR encryption cipher function
std::string xorEncrypt(const std::string& input, const std::string& key) {
    
    std::ostringstream encryptedHex;
    
    size_t keyLength = key.length();
    
    for (size_t i = 0; i < input.length(); ++i) {
        char encryptedChar = input[i] ^ key[i % keyLength];
        
        encryptedHex << std::hex << std::setw(2) << std::setfill('0') << static_cast<int>(static_cast<unsigned char>(encryptedChar)) << " ";
    }

    return encryptedHex.str();
}

int main() {
    std::ifstream inputFile("MI6Contacts.txt");
    
    if (!inputFile) {
        std::cerr << "Error: Could not open the file! Please check and see if file is in the correct folder.\n";
        
        return 1;
    }

    const std::string key = "MI6Contact";
    
    LinkedList encryptedList;
    
    std::string line;

    while (std::getline(inputFile, line)) {
        std::string encryptedLine = xorEncrypt(line, key);      // Read each line from the MI6Contacts.txt and encrypt its contents
        
        encryptedList.append(encryptedLine);
    }

    inputFile.close();

    encryptedList.display();                                    // Display encrypted data in hexadecimal value format

    return 0;
}