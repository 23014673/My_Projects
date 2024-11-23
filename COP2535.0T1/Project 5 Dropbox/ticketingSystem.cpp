// Hannah Bauer
// COP2535.0T1
// (11/12/2024)
// Project 5 Dropbox | read ticket data from an input file named tickets.txt and populate the doubly linked list currently defined in the ticketSystem.cpp file

#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
#include <limits>

struct Ticket {
    int ticketID, priority;

    std::string name, status, description, location;
    
    Ticket *next, *prev;

    Ticket(int id, const std::string& tName, const std::string& tStatus, const std::string& tDescription, const std::string& tLocation, int tPriority)
        : ticketID(id), name(tName), status(tStatus), description(tDescription), location(tLocation), priority(tPriority), next(nullptr), prev(nullptr) {}
};

class TicketList {

public:
    Ticket* head;

    TicketList() : head(nullptr) {}

    // add a new ticket by appending the new ticket to the end of the linked list.
    void addTicket(int id, const std::string& name, const std::string& status, const std::string& description, const std::string& location, int priority) {
        
        Ticket* newTicket = new Ticket(id, name, status, description, location, priority);
        
        if (!head) head = newTicket;
        
        else {
            Ticket* temp = head;
        
            while (temp->next) temp = temp->next;
        
            temp->next = newTicket; newTicket->prev = temp;
        }
    }

    // display tickets from input file tickets.txt
    void displayAllTickets() const {

        if (!head) { 
            std::cout << "\nError: Could not open the file listing.txt! Please check and see if file is in the correct folder.\n"; 
            
            return; 
        }

        for (Ticket* current = head; current; current = current->next) {
            std::cout << "\n---------------------------------\n"
                      << "Ticket ID: " << current->ticketID << "\n"
                      << "\tName: " << current->name << "\n"
                      << "Status: " << current->status << "\n"
                      << "\tDescription: " << current->description << "\n"
                      << "Loccation: " << current->location << "\n"
                      << "\tPriority: " << current->priority << "\n"
                      << "---------------------------------\n";
        }
    }

    // write the entry to an output file, ticketErrors.txt and skip adding it to the linked list if a ticket entry contains errors
    void loadTicketsFromFile(const std::string& filename) {
        
        std::ifstream infile(filename);
        
        std::ofstream errorfile("ticketErrors.txt");
        
        std::string line, name, status, description, location;
        
        int id, priority;

        while (std::getline(infile, line)) {
            std::istringstream iss(line);
            
            if (!(iss >> id >> name >> status >> priority) 
                || !std::getline(infile, description) 
                || !std::getline(infile, location)
                || !validateTicket(id, name, status, location, priority)) {
            
                errorfile << "\tTicket Error:  " << line << "\n";
            } 
            
            else addTicket(id, name, status, description, location, priority);
        }
    }

    // validate each ticket entry in the file for completeness and correct data types
    bool validateTicket(int id, const std::string& name, 
                                const std::string& status, 
                                const std::string& location, int priority) const {

        return id > 0 && !name.empty() && !status.empty() && !location.empty() && priority >= 1 && priority <= 3;
    }

    // search a ticket by its ticketID 
    Ticket* findTicketByID(int id) const {
        for (Ticket* current = head; current; current = current->next)

            if (current->ticketID == id) return current;

        return nullptr;
    }

    // update an existing ticket 
    void updateTicket() {

        int id, choice;
        
        std::cout << "Enter Ticket ID to update: ";
        
        std::cin >> id;
        
        Ticket* ticket = findTicketByID(id);
        
        if (!ticket) { 
            std::cout << "\tTicket Error: Ticket not found.\n"; 
        
            return; 
        }

        std::cout << "\t1. Status\n";
        std::cout << "\t2. Priority\n";
        std::cout << "\t3. Description\n";
        std::cout << "\t\tEnter choice: ";
        
        std::cin >> choice; std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
        
        if (choice == 1) std::cout << "New Ticket Status: ", std::getline(std::cin, ticket->status);
        
        else if (choice == 2) {
            std::cout << "New Ticket Priority (1-3): ";
        
            std::cin >> ticket->priority;
        
            if (ticket->priority < 1 || ticket->priority > 3) std::cout << "\tTicket Error: Invalid priority.\n";
        } 
        
        else if (choice == 3) std::cout << "New Ticket Description: ", std::getline(std::cin, ticket->description);
        
        else std::cout << "\tTicket Error: Invalid choice.\n";
    }

    // sort tickets by different fields
    void sortTickets(const std::string& criterion) {
        
        if (!head || !head->next) return;
        
        bool swapped;
        
        do {
            swapped = false;
        
            for (Ticket* current = head; current->next; current = current->next) {
        
                bool condition = (criterion == "priority" && current->priority > current->next->priority) ||
                                 (criterion == "status" && current->status > current->next->status) ||
                                 (criterion == "name" && current->name > current->next->name) ||
                                 (criterion == "location" && current->location > current->next->location);
        
                if (condition) {
                    std::swap(current->ticketID, current->next->ticketID);

                    std::swap(current->priority, current->next->priority);
                    
                    std::swap(current->name, current->next->name);
                    
                    std::swap(current->status, current->next->status);
                    
                    std::swap(current->description, current->next->description);
                    
                    std::swap(current->location, current->next->location);
                    
                    swapped = true;
                }
            }
        } 
        
        while (swapped);
    }
};

void displayMainMenu() {
    std::cout << "\n---------------------------------\n";
    std::cout << "\n1. Display all tickets\n";
    std::cout << "2. Add a new ticket\n";
    std::cout << "3. Update an existing ticket\n";
    std::cout << "4. Sort tickets\n";
    std::cout << "5. Exit\n";
    std::cout << "\n---------------------------------\n";
    std::cout << "\tEnter your choice: ";
}

void sortMenu(TicketList& ticketList) {
    int sortChoice;
    
    std::cout << "\n---------------------------------\n";
    std::cout << "\nSort tickets by: \n";
    std::cout << "\t1. Priority\n";
    std::cout << "\t2. Status\n";
    std::cout << "\t3. Name\n";
    std::cout << "\t4. Location\n";
    std::cout << "\n---------------------------------\n";
    std::cout << "\t\tEnter your choice: ";
    
    std::cin >> sortChoice;

    std::string criteria[] = {"priority", "status", "name", "location"};
    
    if (sortChoice >= 1 && sortChoice <= 4) {
        ticketList.sortTickets(criteria[sortChoice - 1]);
    
        std::cout << "\nTickets sorted by " << criteria[sortChoice - 1] << ":\n";
    
        ticketList.displayAllTickets();
    } 
    
    else std::cout << "\n";
}

//add a new ticket by appending the new ticket to the end of the linked list
void addNewTicket(TicketList& ticketList) {
    int id, priority;
    
    std::string name, status, description, location;

    std::cout << "\n---------------------------------\n";
    
    std::cout << "Ticket ID: "; std::cin >> id; std::cin.ignore();
    
    std::cout << "Name (alphabetically): "; std::getline(std::cin, name);
    
    std::cout << "Status (alphabetical order: closed, in_progress, open): "; std::getline(std::cin, status);
    
    std::cout << "Priority 1-3 (1 is highest, 3 is lowest): "; std::cin >> priority; std::cin.ignore();
    
    std::cout << "Description: "; std::getline(std::cin, description);
    
    std::cout << "Location (alphabetically): "; std::getline(std::cin, location);

    if (ticketList.validateTicket(id, name, status, location, priority))

        ticketList.addTicket(id, name, status, description, location, priority);
    
    else std::cout << "\nError: Could not open the file listing.txt! Please check and see if file is in the correct folder.\n";
}

int main() {

    TicketList ticketList;
    
    ticketList.loadTicketsFromFile("tickets.txt");      // read ticket data from an input file named tickets.txt
    
    int choice;
    
    do {
        displayMainMenu();
        
        std::cin >> choice;
        
        if (choice == 1) ticketList.displayAllTickets();
        
        else if (choice == 2) addNewTicket(ticketList);
        
        else if (choice == 3) ticketList.updateTicket();
        
        else if (choice == 4) sortMenu(ticketList);
        
        else if (choice == 5) std::cout << "\n\tExiting the program. Goodbye!";
    } 
    
    while (choice != 5);
    
    return 0;
}