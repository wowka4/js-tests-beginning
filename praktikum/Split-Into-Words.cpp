#include <iostream>
#include <set>
#include <string>
#include <vector>

using namespace std;


vector<string> SplitIntoWords(string text) {
    vector<string> words;
    string word;
    for (const char c : text) {
        if (c == ' ') {
            if (!word.empty()) {
                words.push_back(word);
                word.clear();
            }
        } else {
            word += c;
        }
    }
    if (!word.empty()) {
        words.push_back(word);
    }

    return words;
}


int main() {
    /* Считайте строку со стоп-словами */
    string stop_words;
    getline(cin, stop_words);
    // Считываем строку-запрос
    string query;
    getline(cin, query);
    vector<string>v = SplitIntoWords(stop_words);
    set<string>stop(v.begin(), v.end());

    // Выведите только те слова, которых нет среди стоп-слов
    for (string word : SplitIntoWords(query)) {
        if (!stop.count(word)) {
            cout << '[' << word << ']' << endl;
        }
    }
}