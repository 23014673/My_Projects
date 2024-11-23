// Hannah Bauer
// COP2535.0T1
// Chapter 8: Challenge #1 - Perfect Scores (8/28/2024)

#include <iostream>
using namespace std;

// Function prototype for counting how many perfect scores were entered
int countPerfect(int scores[], int count);

int main() {
    const int max_scores_counted = 20;

    int scores[max_scores_counted];

    int number_of_scores = 0;

    int score;

    // Start calculation using the user input of each test score number
    cout << "This is a test score calculator. You can enter up to 20 test scores between 0 and 100. Enter 999 to stop the calculation:\n";
    
    while (number_of_scores < max_scores_counted) {

        cout << "Please enter your test score number " << number_of_scores + 1 << ": ";
        
        cin >> score;

        if (score == 999) { // Check if the input is the end number (999)
            break;

        } else if (score >= 0 && score <= 100) { // Check if the input is a valid number
            scores[number_of_scores++] = score;

        } else {
            cout << "You entered an invalid test score - Please enter a number between 0 - 100:\n"; // This will display if the user inputs an invalid number
        }
    }

    // Count and report the number of perfect scores that the user entered
    int perfectScores = countPerfect(scores, number_of_scores);

    cout << "Number of perfect test scores that you have entered (100): " << perfectScores << endl;

    return 0;
}

// Function to report how many perfect scores were entered (i.e., scores of 100), using a value-returning countPerfect function to help it
int countPerfect(int scores[], int count) { 

    int count_perfect_scores = 0;

    for (int i = 0; i < count; i++) {  // Actual calculation

        if (scores[i] == 100) {
            count_perfect_scores++;
        }
    }

    return count_perfect_scores;
}