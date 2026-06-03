/**
 * questions.js
 * Computer Science Escape Room Game Questions
 * Designed for 7th Graders (Ages 12-13)
 */

const QUESTIONS = [
  // ==========================================
  // ROOM 1: BINARY BASEMENT (3 Questions)
  // ==========================================
  {
    room: 1,
    roomName: "Binary Basement",
    question: "The digital lock on the basement door requires a 4-bit combination. The manual says the passcode is the binary number 1101. What decimal number do you type into the keypad?",
    options: ["11", "13", "15", "9"],
    correct: 1,
    explanation: "1101 in binary represents (1 × 8) + (1 × 4) + (0 × 2) + (1 × 1) = 8 + 4 + 0 + 1 = 13.",
    timeLimit: 60
  },
  {
    room: 1,
    roomName: "Binary Basement",
    question: "An old computer screen flickers with a puzzle: 'If a single byte is made of 8 bits, what is the largest number this byte can hold to open the secret hatch?'",
    options: ["128", "256", "255", "1024"],
    correct: 2,
    explanation: "An 8-bit byte can hold 256 different combinations (0 to 255). The largest value it can represent is 255 (which is 11111111 in binary).",
    timeLimit: 60
  },
  {
    room: 1,
    roomName: "Binary Basement",
    question: "You find a mysterious 'Hacker Riddle' carved into the wall: 'I have no voice, but I speak volumes. I have no eyes, but I show you the world. I only know two states: On and Off, True and False, One and Zero. What am I at my core?'",
    options: ["A Light Switch", "A Transistor", "A Keyboard", "A Wi-Fi Router"],
    correct: 1,
    explanation: "Transistors are the fundamental building blocks of computers, acting as tiny electronic switches that process 1s and 0s.",
    timeLimit: 45
  },

  // ==========================================
  // ROOM 2: ALGORITHM ALLEY (4 Questions)
  // ==========================================
  {
    room: 2,
    roomName: "Algorithm Alley",
    question: "To escape down the alley, you must trace this code block:\n\nlet steps = 0;\nfor (let i = 0; i < 4; i++) {\n  if (i === 2) {\n    steps = steps + 5;\n  } else {\n    steps = steps + 1;\n  }\n}\n\nWhat is the final value of 'steps'?",
    options: ["4", "6", "8", "9"],
    correct: 2,
    explanation: "The loop runs 4 times for i = 0, 1, 2, 3. For i=0, 1, and 3, steps increases by 1 (+3 total). For i=2, steps increases by 5. So, 3 + 5 = 8.",
    timeLimit: 75
  },
  {
    room: 2,
    roomName: "Algorithm Alley",
    question: "A laser grid blocks your path! The bypass algorithm says: 'Set ENERGY to 10. While ENERGY is greater than 2, subtract 3 from ENERGY.' How many times will the loop subtract 3 before the grid shuts down?",
    options: ["3 times", "4 times", "2 times", "Loop runs forever"],
    correct: 0,
    explanation: "Start at 10. Loop 1: 10 - 3 = 7 (7 > 2, true). Loop 2: 7 - 3 = 4 (4 > 2, true). Loop 3: 4 - 3 = 1 (1 > 2, false). The loop stops, running exactly 3 times.",
    timeLimit: 60
  },
  {
    room: 2,
    roomName: "Algorithm Alley",
    question: "You need to sort a deck of keycards numbered [7, 2, 5, 1] from smallest to largest using Bubble Sort. After the very first complete pass through the cards, swapping adjacent pairs, what will the order of the deck look like?",
    options: ["1, 2, 5, 7", "2, 5, 1, 7", "2, 7, 5, 1", "7, 5, 2, 1"],
    correct: 1,
    explanation: "Bubble Sort pushes the largest number to the end on the first pass: [7,2,5,1] -> [2,7,5,1] -> [2,5,7,1] -> [2,5,1,7].",
    timeLimit: 90
  },
  {
    room: 2,
    roomName: "Algorithm Alley",
    question: "A robotic security guard challenges you: 'I am an efficient algorithm. I search for a secret number in a sorted list from 1 to 100 by splitting the remaining possibilities in half every single time. What is my name?'",
    options: ["Linear Search", "Random Search", "Split Search", "Binary Search"],
    correct: 3,
    explanation: "Binary Search works on sorted lists and divides the search interval in half each time, making it incredibly fast.",
    timeLimit: 45
  },

  // ==========================================
  // ROOM 3: NETWORK NEXUS (3 Questions)
  // ==========================================
  {
    room: 3,
    roomName: "Network Nexus",
    question: "To hack into the central server, you need to understand its address. Which of the following looks like a valid IPv4 address that routes data across the internet?",
    options: ["192.168.1.300", "http://google.com", "172.16.254.1", "256.0.0.1"],
    correct: 2,
    explanation: "IPv4 addresses consist of four numbers separated by periods, and each number must be between 0 and 255.",
    timeLimit: 60
  },
  {
    room: 3,
    roomName: "Network Nexus",
    question: "The final door is locked because the server cannot match 'escaperoom.com' to its actual computer IP address. What internet service is responsible for translating human-readable website names into machine IP addresses?",
    options: ["DNS (Domain Name System)", "HTTP (Hypertext Transfer Protocol)", "ISP (Internet Service Provider)", "URL (Uniform Resource Locator)"],
    correct: 0,
    explanation: "DNS acts like the phonebook of the Internet, translating domain names like 'escaperoom.com' into IP addresses so browsers can load resources.",
    timeLimit: 60
  },
  {
    room: 3,
    roomName: "Network Nexus",
    question: "You intercept a web packet labeled '404 Not Found'. What does this HTTP status code tell you about the server room you are trying to access?",
    options: ["The server is offline due to a power outage.", "Your request was successful and the room is open.", "The server cannot find the specific page or resource you requested.", "Your connection is encrypted and safe."],
    correct: 2,
    explanation: "An HTTP 404 error code explicitly means the server was reached, but the requested page or resource could not be found.",
    timeLimit: 60
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS };
} else {
  window.QUESTIONS = QUESTIONS;
}
