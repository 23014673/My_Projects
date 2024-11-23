// Hannah Bauer
// COP2535.0T1
// (11/20/2024)
// Project 6 Dropbox | design and implement a job scheduling system using stacks and queues + simulate adding, processing, and undoing job requests

#include <iostream>
#include <queue>
#include <stack>
#include <string>

struct Job {
    
    int id;

    std::string name;
    
    std::string description;
    
    int priority;

    void display() const {
        std::cout << "ID: " << id << ", Name: " << name << ", Priority: " << priority << "\n";
    }
};

void addJob(std::queue<Job>&);

void processJob(std::queue<Job>&, std::stack<Job>&);

void undoJob(std::queue<Job>&, std::stack<Job>&);                   // Undo Job (LIFO)

void displayJobQueue(const std::queue<Job>&);                       // Job Queue (FIFO)

int main() {

    std::queue<Job> jobQueue;
    
    std::stack<Job> undoStack;
    
    int choice;

    do {
        // Display menu
        std::cout << "\n--------------------------------\n";
        std::cout << "\n--------Job Scheduler Menu------\n";
        std::cout << "\n--------------------------------\n";
        std::cout << "\t1. Add job\n"
                  << "\t2. Process job\n"
                  << "\t3. Undo job\n"
                  << "\t4. Display job queue\n"
                  << "\t5. Exit\n";
        std::cout << "\n--------------------------------\n";
        std::cout << "\tEnter your choice: ";

        std::cin >> choice;

        switch (choice) {
            case 1: addJob(jobQueue); break;
            
            case 2: processJob(jobQueue, undoStack); break;
            
            case 3: undoJob(jobQueue, undoStack); break;
            
            case 4: displayJobQueue(jobQueue); break;
            
            case 5: std::cout << "\n\tExiting the program. Goodbye!"; break;
            
            default: std::cout << "\nInvalid choice. Please try again.\n";
        }
    } 
    
    while (choice != 5);

    return 0;
}

void addJob(std::queue<Job>& jobQueue) {                    // added to a queue and processed in the order they are received (FIFO)
    
    Job job;
    
    std::cout << "\n\tJob ID: ";
    
    std::cin >> job.id;
    
    std::cin.ignore();
    
    std::cout << "\tJob Name: ";
    
    std::getline(std::cin, job.name);
    
    std::cout << "\tJob Description: ";
    
    std::getline(std::cin, job.description);
    
    std::cout << "\tJob Priority (1-10): ";
    
    std::cin >> job.priority;

    jobQueue.push(job);

    std::cout << "\n--------------------------------\n";
    
    std::cout << "\n\tJob added: " << job.name << "\n";
}

void processJob(std::queue<Job>& jobQueue, std::stack<Job>& undoStack) {            // processed by ID, name, and priority
    
    if (jobQueue.empty()) {
        
        std::cout << "\nUh oh! No jobs to process.\n";
        
        return;
    }

    Job job = jobQueue.front();
    
    jobQueue.pop();
    
    undoStack.push(job);

    std::cout << "\nProcessed job: " << job.name << "\n";
}

void undoJob(std::queue<Job>& jobQueue, std::stack<Job>& undoStack) {               // when a job is processed, it can be undone using a stack
    
    if (undoStack.empty()) {
        
        std::cout << "\nUh oh! No jobs to undo.\n";
    
        return;
    }

    Job job = undoStack.top();
    
    undoStack.pop();
    
    jobQueue.push(job);

    std::cout << "\nUndone job: " << job.name << "\n";
}

void displayJobQueue(const std::queue<Job>& jobQueue) {
    
    if (jobQueue.empty()) {
    
        std::cout << "\nUh oh! Job queue is empty.\n";
    
        return;
    }

    std::queue<Job> temp = jobQueue;
    
    std::cout << "\nJob Queue:\n";
    
    while (!temp.empty()) {
    
        temp.front().display();
    
        temp.pop();
    }