# ClearPath Accessible Exam Practice

ClearPath is an accessible exam-practice web app for candidates who use screen readers, keyboard navigation, high-contrast themes, text magnification, speech output, and voice input.

This project is intentionally dependency-free. It uses:

- HTML
- CSS
- Vanilla JavaScript
- Python's built-in HTTP server

No Node.js, npm, database, or Python package installation is required.

## 1. Install the prerequisites

Install these tools on your computer:

1. [Visual Studio Code](https://code.visualstudio.com/)
2. [Python 3](https://www.python.org/downloads/)

During Python installation on Windows, enable **Add Python to PATH**.

To confirm Python is installed, open a terminal and run:

```bash
python --version
```

If that command does not work:

- Windows: try `py --version`
- macOS/Linux: try `python3 --version`

## 2. Open the project in VS Code

1. Download or copy the complete project folder to your computer.
2. Open VS Code.
3. Select **File → Open Folder**.
4. Choose the folder containing:

```text
index.html
styles.css
auth-voice.css
app.js
server.py
favicon.svg
```

## 3. Start the project

Open the VS Code terminal using **Terminal → New Terminal**.

### Windows

```bash
python server.py
```

If `python` is not recognized:

```bash
py server.py
```

### macOS or Linux

```bash
python3 server.py
```

You should see:

```text
ClearPath running on port 5000
```

Keep this terminal open while using the app.

## 4. Open ClearPath in your browser

Open:

```text
http://localhost:5000
```

You can also use:

```text
http://127.0.0.1:5000
```

## 5. Sign in

The current project includes a front-end demonstration login.

### Quick demo

Select **Try the accessible demo**.

### Manual sign in

Enter:

- Any valid email address
- A password with at least 4 characters

After signing in, the candidate name is shown in both places:

- The dashboard greeting
- The profile area in the sidebar

The name is generated from the email address. For example:

```text
alex.nair@example.com
```

becomes:

```text
Good morning, Alex Nair.
```

## 6. Available tests and languages

The practice library contains only these tests:

- SSC
- Railway
- Banking
- Logical reasoning

Each test has different questions in:

- English
- Hindi

Inside a test, use the **Language** selector to switch between English and Hindi for the current question. The question and answer choices update immediately.

## 7. Voice sign-in and test automatic reading

On the login page:

1. Choose **English** or **हिन्दी** from **Voice language / आवाज़ की भाषा**.
2. Select the microphone button beside **Email address** and speak your email.
3. Select the microphone button beside **Password** and speak your password.
4. Select **Read sign-in instructions aloud** for spoken guidance.

Email speech can understand phrases such as:

```text
alex at example dot com
```

Voice typing uses the browser's Speech Recognition API. Chrome and Edge generally provide the best support. If voice typing is unavailable, type into the fields normally.

Inside a test, changing the **Language** selector also changes the speech language, answer confirmations, timer reminders, question reading, and result announcements.

1. Open **Practice library**.
2. Select **Start test**.
3. The current question and answer choices are read automatically.
4. Use `Tab` to move between answer choices.
5. Press `Space` or `Enter` to select an answer.
6. The next question opens automatically after the answer is selected.
7. Use **Read question aloud** to hear it again.
8. Use `Alt + R` to replay the question from the keyboard.

Speech output uses the browser's built-in Speech Synthesis API.

The voice assistant also includes time reminders at three minutes, two minutes, one minute, thirty seconds, and ten seconds remaining.

## 8. Test voice answers

1. Open a practice test.
2. Select **Answer by voice**.
3. Allow microphone access when the browser asks.
4. Say one of the following:

```text
Option A
Answer B
Second
4% decrease
```

The matching answer is selected automatically.

Voice input uses the browser's Speech Recognition API. Chrome and Edge generally provide the best support. If the browser does not support speech recognition, keyboard answer selection remains available.

## 9. Results and support

After the last question:

- The test closes automatically
- Accuracy is shown on the progress page
- The number of correct answers is shown
- The voice assistant reads the test result and accuracy aloud
- **Read result aloud** can replay the result

For support, call:

```text
7805027450
```

The login page also includes a **Read sign-in instructions aloud** control and automatically reads the sign-in instructions when it opens.

## 10. Stop the project

Return to the VS Code terminal running the server and press:

```text
Ctrl + C
```

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Accessible page structure, dashboard, login, settings, and practice test UI |
| `styles.css` | Main layout, responsive design, dashboard, and test styles |
| `auth-voice.css` | Login and voice-input styles |
| `app.js` | Login flow, dashboard candidate name, speech output, voice answer matching, timer, and interactions |
| `server.py` | Dependency-free local web server |
| `favicon.svg` | ClearPath browser icon |

## Important authentication note

The current login is a front-end prototype gate. It stores the signed-in candidate in browser storage and does not verify credentials on a server.

For production use, replace the demo login with a real authentication provider or backend such as Clerk, Replit Auth, or a custom secure API. Do not use the current prototype login to protect real examination data.