const testCatalog = {
  ssc: {
    label: "SSC",
    subject: "SSC COMPETITIVE EXAM",
    durationSeconds: 300,
    description: "General awareness, aptitude, and exam reasoning practice.",
    questions: [
      {
        en: { title: "If 20% of a number is 50, what is the number?", options: ["200", "250", "300", "350"] },
        hi: { title: "यदि किसी संख्या का 20% 50 है, तो वह संख्या क्या है?", options: ["200", "250", "300", "350"] },
        answer: 1,
      },
      {
        en: { title: "Which constitutional body conducts elections in India?", options: ["Election Commission of India", "Union Public Service Commission", "Comptroller and Auditor General", "Finance Commission"] },
        hi: { title: "भारत में चुनाव कौन सा संवैधानिक निकाय करवाता है?", options: ["भारत निर्वाचन आयोग", "संघ लोक सेवा आयोग", "नियंत्रक एवं महालेखा परीक्षक", "वित्त आयोग"] },
        answer: 0,
      },
      {
        en: { title: "A sum of ₹800 is divided in the ratio 3:5. What is the smaller share?", options: ["₹240", "₹300", "₹360", "₹400"] },
        hi: { title: "₹800 को 3:5 के अनुपात में बाँटा गया है। छोटा हिस्सा कितना है?", options: ["₹240", "₹300", "₹360", "₹400"] },
        answer: 2,
      },
    ],
  },
  railway: {
    label: "Railway",
    subject: "RAILWAY RECRUITMENT",
    durationSeconds: 300,
    description: "Speed, arithmetic, and general reasoning for railway exams.",
    questions: [
      {
        en: { title: "A train travels at 60 kilometres per hour. How far will it travel in 18 seconds?", options: ["240 metres", "300 metres", "360 metres", "420 metres"] },
        hi: { title: "एक ट्रेन 60 किलोमीटर प्रति घंटे की गति से चलती है। 18 सेकंड में वह कितनी दूरी तय करेगी?", options: ["240 मीटर", "300 मीटर", "360 मीटर", "420 मीटर"] },
        answer: 1,
      },
      {
        en: { title: "Find the next number in the series: 12, 18, 24, 30, ?", options: ["34", "36", "38", "42"] },
        hi: { title: "श्रृंखला में अगली संख्या ज्ञात कीजिए: 12, 18, 24, 30, ?", options: ["34", "36", "38", "42"] },
        answer: 1,
      },
      {
        en: { title: "Five workers complete a job in 12 days. How many days will ten workers take at the same rate?", options: ["4 days", "6 days", "8 days", "10 days"] },
        hi: { title: "पाँच कर्मचारी एक काम को 12 दिनों में पूरा करते हैं। उसी दर पर दस कर्मचारी कितने दिनों में काम पूरा करेंगे?", options: ["4 दिन", "6 दिन", "8 दिन", "10 दिन"] },
        answer: 1,
      },
    ],
  },
  banking: {
    label: "Banking",
    subject: "BANKING AWARENESS",
    durationSeconds: 300,
    description: "Banking awareness, interest, and numerical ability practice.",
    questions: [
      {
        en: { title: "What is the simple interest on ₹2,000 at 5% per year for 2 years?", options: ["₹100", "₹200", "₹250", "₹300"] },
        hi: { title: "₹2,000 पर 5% वार्षिक दर से 2 वर्षों का साधारण ब्याज कितना होगा?", options: ["₹100", "₹200", "₹250", "₹300"] },
        answer: 1,
      },
      {
        en: { title: "What does RBI stand for?", options: ["Reserve Bank of India", "Regional Bank of India", "Rural Banking Institution", "Reserve Board of India"] },
        hi: { title: "RBI का पूरा नाम क्या है?", options: ["भारतीय रिज़र्व बैंक", "भारत का क्षेत्रीय बैंक", "ग्रामीण बैंकिंग संस्था", "भारत का रिज़र्व बोर्ड"] },
        answer: 0,
      },
      {
        en: { title: "What is the average of 5, 10, 15, and 20?", options: ["10", "12.5", "15", "17.5"] },
        hi: { title: "5, 10, 15 और 20 का औसत कितना है?", options: ["10", "12.5", "15", "17.5"] },
        answer: 1,
      },
    ],
  },
  logical: {
    label: "Logical reasoning",
    subject: "LOGICAL REASONING",
    durationSeconds: 300,
    description: "Sequences, classification, and deductions in accessible formats.",
    questions: [
      {
        en: { title: "Find the next number in the sequence: 3, 6, 12, 24, ?", options: ["36", "42", "48", "54"] },
        hi: { title: "श्रृंखला में अगली संख्या ज्ञात कीजिए: 3, 6, 12, 24, ?", options: ["36", "42", "48", "54"] },
        answer: 2,
      },
      {
        en: { title: "Which one is different from the others?", options: ["Square", "Triangle", "Circle", "Cube"] },
        hi: { title: "इनमें से कौन बाकी से अलग है?", options: ["वर्ग", "त्रिभुज", "वृत्त", "घन"] },
        answer: 3,
      },
      {
        en: { title: "All roses are flowers. Which statement must be true?", options: ["All roses are flowers", "All flowers are roses", "No roses are flowers", "Some roses are not flowers"] },
        hi: { title: "सभी गुलाब फूल हैं। इनमें से कौन सा कथन निश्चित रूप से सही है?", options: ["सभी गुलाब फूल हैं", "सभी फूल गुलाब हैं", "कोई गुलाब फूल नहीं है", "कुछ गुलाब फूल नहीं हैं"] },
        answer: 0,
      },
    ],
  },
};

const state = {
  currentView: "dashboard",
  testKey: "ssc",
  questionIndex: 0,
  selected: null,
  saved: false,
  seconds: 300,
  timer: null,
  advanceTimer: null,
  reminderMarks: new Set(),
  answers: [],
  latestResultText: "",
  recognition: null,
  loginRecognition: null,
  loginVoiceField: null,
  user: null,
  language: localStorage.getItem("clearpath-language") || "en",
  textSize: localStorage.getItem("clearpath-text-size") || "default",
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function getCurrentTest() {
  return testCatalog[state.testKey] || testCatalog.ssc;
}

function getCurrentQuestion() {
  const test = getCurrentTest();
  const question = test.questions[state.questionIndex] || test.questions[test.questions.length - 1];
  return {
    ...question,
    content: question[state.language] || question.en,
  };
}

function getLanguageName() {
  return state.language === "hi" ? "Hindi" : "English";
}

function getSpeechLocale() {
  return state.language === "hi" ? "hi-IN" : "en-IN";
}

function setLanguage(language, announce = true) {
  state.language = language === "hi" ? "hi" : "en";
  localStorage.setItem("clearpath-language", state.language);
  if ($("#test-language")) $("#test-language").value = state.language;
  if ($("#login-language")) $("#login-language").value = state.language;
  if ($("#login-read-aloud")) {
    $("#login-read-aloud").textContent = state.language === "hi"
      ? "◖ साइन-इन निर्देश सुनें"
      : "◖ Read sign-in instructions aloud";
  }
  if ($("#login-email-voice")) {
    $("#login-email-voice").setAttribute("aria-label", state.language === "hi" ? "ईमेल पता आवाज़ से भरें" : "Enter email address by voice");
  }
  if ($("#login-password-voice")) {
    $("#login-password-voice").setAttribute("aria-label", state.language === "hi" ? "पासवर्ड आवाज़ से भरें" : "Enter password by voice");
  }
  if ($("#test-modal") && !$("#test-modal").hidden) renderQuestion(true);
  if (announce) speak(state.language === "hi" ? "भाषा हिंदी में बदल दी गई है।" : "Language changed to English.");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function speak(text) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = getSpeechLocale();
    utterance.rate = 0.93;
    window.speechSynthesis.speak(utterance);
  } else {
    showToast("Speech support is not available in this browser.");
  }
}

function readCurrentQuestion() {
  if (!$("#speech-toggle").checked || $("#test-modal").hidden) return;
  const optionWord = state.language === "hi" ? "विकल्प" : "Option";
  const options = [...document.querySelectorAll(".answer-option")]
    .map((option, index) => `${optionWord} ${String.fromCharCode(65 + index)}: ${option.innerText}`)
    .join(". ");
  const minutes = Math.floor(state.seconds / 60);
  const seconds = state.seconds % 60;
  const remaining = state.language === "hi"
    ? (minutes > 0 ? `${minutes} मिनट शेष` : `${seconds} सेकंड शेष`)
    : (minutes > 0 ? `${minutes} minute${minutes === 1 ? "" : "s"} remaining` : `${seconds} seconds remaining`);
  speak(`${$("#test-title").textContent}. ${options}. ${remaining}.`);
}

function setView(viewName) {
  state.currentView = viewName;
  $$(".view").forEach((view) => view.classList.toggle("is-visible", view.id === `${viewName}-view`));
  $$(".nav-item").forEach((item) => {
    const active = item.dataset.view === viewName;
    item.classList.toggle("is-active", active);
    if (active) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
  const activeNav = $(`.nav-item[data-view="${viewName}"]`);
  $("#page-title").textContent = activeNav ? activeNav.textContent.trim() : viewName;
  window.scrollTo({ top: 0, behavior: document.body.classList.contains("reduce-motion") ? "auto" : "smooth" });
}

function openTest(testKey = "ssc") {
  state.testKey = testKey;
  state.questionIndex = 0;
  state.selected = null;
  state.saved = false;
  state.answers = [];
  state.reminderMarks = new Set();
  state.seconds = getCurrentTest().durationSeconds;
  $("#test-language").value = state.language;
  $("#test-modal").hidden = false;
  document.body.classList.add("modal-open");
  renderQuestion(true);
  startTimer();
  window.setTimeout(() => $(".answer-option")?.focus(), 320);
}

function closeTest() {
  stopVoiceAnswer();
  window.clearTimeout(state.advanceTimer);
  $("#test-modal").hidden = true;
  document.body.classList.remove("modal-open");
  window.clearInterval(state.timer);
}

function renderQuestion(autoRead = true) {
  const question = getCurrentQuestion();
  const test = getCurrentTest();
  $("#test-subject").textContent = test.subject;
  $("#test-title").textContent = question.content.title;
  $("#question-count").textContent = `Question ${state.questionIndex + 1} of ${test.questions.length}`;
  $("#test-progress-fill").style.width = `${((state.questionIndex + 1) / test.questions.length) * 100}%`;
  $("#save-question").classList.toggle("is-saved", state.saved);
  $("#save-question").setAttribute("aria-pressed", String(state.saved));
  $("#save-question").innerHTML = `${state.saved ? "★" : "☆"} <span>${state.saved ? "Saved" : "Save question"}</span>`;
  $("#answer-progress").textContent = "";
  const options = $("#answer-options");
  options.innerHTML = "";
  question.content.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "answer-option";
    label.setAttribute("tabindex", "0");
    label.innerHTML = `<input type="radio" name="answer" value="${index}" aria-label="${option}" /><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
    const input = label.querySelector("input");
    input.addEventListener("change", () => selectAnswer(index));
    label.addEventListener("keydown", (event) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        input.checked = true;
        selectAnswer(index);
      }
    });
    options.appendChild(label);
  });
  if (autoRead) {
    window.setTimeout(readCurrentQuestion, 250);
    window.setTimeout(() => $(".answer-option")?.focus(), 320);
  }
}

function queueNextQuestion() {
  window.clearTimeout(state.advanceTimer);
  $("#answer-progress").textContent = state.language === "hi"
    ? "उत्तर चुना गया। अगला प्रश्न खुल रहा है…"
    : "Answer selected. Opening the next question…";
  state.advanceTimer = window.setTimeout(() => {
    if (!$("#test-modal").hidden && state.selected !== null) nextQuestion();
  }, 900);
}

function selectAnswer(index) {
  state.selected = index;
  state.answers[state.questionIndex] = index;
  $$(".answer-option").forEach((option, optionIndex) => option.classList.toggle("selected", optionIndex === index));
  const audioEnabled = $("#audio-toggle").checked;
  if (audioEnabled) {
    speak(state.language === "hi"
      ? `विकल्प ${String.fromCharCode(65 + index)} चुना गया।`
      : `Answer ${String.fromCharCode(65 + index)} selected.`);
  }
  queueNextQuestion();
}

function startTimer() {
  window.clearInterval(state.timer);
  updateTimer();
  state.timer = window.setInterval(() => {
    state.seconds -= 1;
    updateTimer();
    if (state.seconds <= 0) {
      window.clearInterval(state.timer);
      showToast("Time is up. Your practice session is ready to review.");
    }
  }, 1000);
}

function updateTimer() {
  const mins = Math.max(0, Math.floor(state.seconds / 60)).toString().padStart(2, "0");
  const secs = Math.max(0, state.seconds % 60).toString().padStart(2, "0");
  $("#timer-value").textContent = `${mins}:${secs}`;
  $("#timer-value").setAttribute("aria-label", `${mins} minutes ${secs} seconds remaining`);
  const reminderMarks = state.language === "hi"
    ? { 180: "3 मिनट", 120: "2 मिनट", 60: "1 मिनट", 30: "30 सेकंड", 10: "10 सेकंड" }
    : { 180: "3 minutes", 120: "2 minutes", 60: "1 minute", 30: "30 seconds", 10: "10 seconds" };
  if ($("#test-modal") && !$("#test-modal").hidden && $("#speech-toggle").checked && reminderMarks[state.seconds] && !state.reminderMarks.has(state.seconds)) {
    state.reminderMarks.add(state.seconds);
    speak(state.language === "hi"
      ? `${reminderMarks[state.seconds]} शेष हैं।`
      : `${reminderMarks[state.seconds]} remaining in your ${getCurrentTest().label} test.`);
  }
}

function nextQuestion() {
  window.clearTimeout(state.advanceTimer);
  if (state.selected === null) {
    showToast("Choose an answer before moving on.");
    $("#answer-options").querySelector("label")?.focus();
    return;
  }
  if (state.questionIndex === getCurrentTest().questions.length - 1) {
    completeTest();
    return;
  }
  state.questionIndex += 1;
  state.selected = null;
  renderQuestion(true);
  window.setTimeout(() => $(".answer-option")?.focus(), 320);
}

function completeTest() {
  const test = getCurrentTest();
  const total = test.questions.length;
  const correct = test.questions.reduce((score, question, index) => score + (state.answers[index] === question.answer ? 1 : 0), 0);
  const accuracy = Math.round((correct / total) * 100);
  const resultText = state.language === "hi"
    ? `${test.label} परीक्षा पूरी हुई। आपने ${total} में से ${correct} प्रश्न सही किए। आपकी सटीकता ${accuracy} प्रतिशत है।`
    : `${test.label} test complete. You answered ${correct} out of ${total} correctly. Your accuracy is ${accuracy} percent.`;
  state.latestResultText = resultText;
  $("#result-test-name").textContent = test.label;
  $("#result-detail").textContent = state.language === "hi"
    ? `आपने ${total} में से ${correct} प्रश्न सही किए।`
    : `You answered ${correct} of ${total} questions correctly.`;
  $("#result-accuracy").textContent = `${accuracy}%`;
  $("#latest-result").hidden = false;
  closeTest();
  setView("progress");
  showToast(`${test.label} test complete: ${accuracy}% accuracy.`);
  if ($("#speech-toggle").checked) window.setTimeout(() => speak(resultText), 250);
}

function setVoiceStatus(message) {
  $("#voice-status").textContent = message;
}

function finishVoiceUi() {
  state.recognition = null;
  $("#voice-answer").classList.remove("is-listening");
  $("#voice-answer").setAttribute("aria-pressed", "false");
}

function stopVoiceAnswer() {
  if (state.recognition) state.recognition.stop();
  finishVoiceUi();
}

function findVoiceAnswer(transcript) {
  const normalized = transcript.toLowerCase().replace(/[.,!?]/g, " ").replace(/\s+/g, " ").trim();
  const letterMatch = normalized.match(/\b(?:option|answer|choice)?\s*([abcd])\b/);
  if (letterMatch) return letterMatch[1].charCodeAt(0) - 97;
  const numberWords = ["one", "first", "two", "second", "three", "third", "four", "fourth"];
  const numberIndex = numberWords.indexOf(normalized);
  if (numberIndex !== -1) return Math.floor(numberIndex / 2);
  const options = getCurrentQuestion().content.options;
  const textIndex = options.findIndex((option) => normalized.includes(option.toLowerCase().replace(/[.,!?]/g, "")));
  return textIndex;
}

function startVoiceAnswer() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    setVoiceStatus("Voice input is not supported in this browser.");
    showToast("Try Chrome or Edge for microphone answers.");
    return;
  }
  if (state.recognition) {
    stopVoiceAnswer();
    setVoiceStatus("Voice input stopped.");
    return;
  }
  const recognition = new Recognition();
  state.recognition = recognition;
  recognition.lang = state.language === "hi" ? "hi-IN" : "en-IN";
  recognition.interimResults = false;
  recognition.continuous = false;
  recognition.maxAlternatives = 1;
  recognition.onstart = () => {
    $("#voice-answer").classList.add("is-listening");
    $("#voice-answer").setAttribute("aria-pressed", "true");
    setVoiceStatus(state.language === "hi"
      ? "सुन रहा हूँ… विकल्प A, B, C या D बोलें।"
      : "Listening… say option A, B, C, or D.");
  };
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.trim();
    const answerIndex = findVoiceAnswer(transcript);
    if (answerIndex >= 0 && answerIndex < getCurrentQuestion().content.options.length) {
      selectAnswer(answerIndex);
      setVoiceStatus(state.language === "hi"
        ? `“${transcript}” सुना। विकल्प ${String.fromCharCode(65 + answerIndex)} चुना गया।`
        : `Heard “${transcript}”. Answer ${String.fromCharCode(65 + answerIndex)} selected.`);
    } else {
      setVoiceStatus(state.language === "hi"
        ? `“${transcript}” सुना। विकल्प A, B, C या D बोलें।`
        : `Heard “${transcript}”. Say option A, B, C, or D.`);
      showToast(state.language === "hi"
        ? "मैं इसे किसी उत्तर विकल्प से नहीं मिला सका।"
        : "I could not match that to an answer option.");
    }
  };
  recognition.onerror = (event) => {
    if (event.error === "not-allowed" || event.error === "service-not-allowed") {
      setVoiceStatus("Microphone permission was denied.");
      showToast("Allow microphone access to answer by voice.");
    } else if (event.error !== "aborted") {
      setVoiceStatus("Voice input could not start. Try again.");
    }
  };
  recognition.onend = finishVoiceUi;
  try {
    recognition.start();
  } catch (error) {
    finishVoiceUi();
    setVoiceStatus("Voice input is already starting. Try again.");
  }
}

function finishLoginVoice() {
  state.loginRecognition = null;
  state.loginVoiceField = null;
  $$(".field-voice-button").forEach((button) => {
    button.classList.remove("is-listening");
    button.setAttribute("aria-pressed", "false");
  });
}

function normalizeEmailTranscript(transcript) {
  let normalized = transcript
    .toLowerCase()
    .replace(/^(?:my\s+)?(?:email\s+address|email)\s+(?:is|equals)\s+/i, "")
    .replace(/(?:\s+at\s+|\s*@\s*| एट )/gi, "@")
    .replace(/(?:\s+dot\s+|\s*\.\s*| डॉट )/gi, ".")
    .replace(/(?:\s+dash\s+| डैश )/gi, "-")
    .replace(/(?:\s+underscore\s+| अंडरस्कोर )/gi, "_")
    .replace(/(?:\s+space\s+| स्पेस )/gi, "");
  return normalized.replace(/\s+/g, "");
}

function startLoginVoice(fieldId, buttonId) {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    showToast(state.language === "hi"
      ? "इस ब्राउज़र में आवाज़ से लिखना उपलब्ध नहीं है। Chrome या Edge आज़माएँ।"
      : "Voice typing is not supported in this browser. Try Chrome or Edge.");
    return;
  }
  if (state.loginRecognition) {
    state.loginRecognition.stop();
    finishLoginVoice();
    return;
  }
  const recognition = new Recognition();
  state.loginRecognition = recognition;
  state.loginVoiceField = fieldId;
  recognition.lang = getSpeechLocale();
  recognition.interimResults = false;
  recognition.continuous = false;
  recognition.maxAlternatives = 1;
  recognition.onstart = () => {
    const button = $(`#${buttonId}`);
    button.classList.add("is-listening");
    button.setAttribute("aria-pressed", "true");
    speak(state.language === "hi" ? "बोलिए।" : "Listening.");
  };
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.trim();
    const input = $(`#${fieldId}`);
    input.value = fieldId === "login-email" ? normalizeEmailTranscript(transcript) : transcript;
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.focus();
    speak(state.language === "hi"
      ? `${fieldId === "login-email" ? "ईमेल" : "पासवर्ड"} दर्ज किया गया।`
      : `${fieldId === "login-email" ? "Email address" : "Password"} entered.`);
  };
  recognition.onerror = (event) => {
    if (event.error === "not-allowed" || event.error === "service-not-allowed") {
      showToast(state.language === "hi"
        ? "आवाज़ से लिखने के लिए माइक्रोफ़ोन की अनुमति दें।"
        : "Allow microphone access to use voice typing.");
    } else if (event.error !== "aborted") {
      showToast(state.language === "hi" ? "आवाज़ इनपुट फिर से आज़माएँ।" : "Voice input could not start. Try again.");
    }
  };
  recognition.onend = finishLoginVoice;
  try {
    recognition.start();
  } catch {
    finishLoginVoice();
    showToast(state.language === "hi" ? "आवाज़ इनपुट फिर से आज़माएँ।" : "Try voice input again.");
  }
}

function saveUser(user, remember) {
  const storage = remember ? localStorage : sessionStorage;
  storage.setItem("clearpath-user", JSON.stringify(user));
}

function readSavedUser() {
  for (const storage of [sessionStorage, localStorage]) {
    const saved = storage.getItem("clearpath-user");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        storage.removeItem("clearpath-user");
      }
    }
  }
  return null;
}

function showApp(user) {
  state.user = user;
  $("#login-screen").hidden = true;
  $("#app-shell").hidden = false;
  $("#profile-name").textContent = user.name;
  $("#dashboard-candidate-name").textContent = user.name;
  $("#logout-button").setAttribute("aria-label", `Sign out of ${user.name}`);
}

function readLoginInstructions() {
  speak(state.language === "hi"
    ? "क्लियरपाथ उम्मीदवार साइन इन। अपना ईमेल और पासवर्ड बोलकर या टाइप करके भरें, फिर साइन इन दबाएँ। आप सुलभ डेमो भी इस्तेमाल कर सकते हैं। सहायता के लिए 7805027450 पर कॉल करें।"
    : "ClearPath candidate sign in. Enter your email address and password by voice or keyboard, then press Enter on Sign in. You can also use the accessible demo. For support, call 7805027450.");
}

function showLogin() {
  state.user = null;
  $("#app-shell").hidden = true;
  $("#login-screen").hidden = false;
  setLanguage(state.language, false);
  window.setTimeout(() => {
    $("#login-email").focus();
    readLoginInstructions();
  }, 250);
}

function signIn(email, password, remember = false) {
  const trimmedEmail = email.trim();
  if (!trimmedEmail || !trimmedEmail.includes("@")) {
    $("#login-status").textContent = "Enter a valid email address.";
    $("#login-email").focus();
    return;
  }
  if (password.length < 4) {
    $("#login-status").textContent = "Your password must be at least 4 characters.";
    $("#login-password").focus();
    return;
  }
  const localName = trimmedEmail.split("@")[0].replace(/[._-]+/g, " ").trim();
  const name = localName ? localName.replace(/\b\w/g, (letter) => letter.toUpperCase()) : "ClearPath candidate";
  const user = { name, email: trimmedEmail };
  saveUser(user, remember);
  $("#login-status").textContent = "";
  showApp(user);
  showToast(`Welcome back, ${name}.`);
}

function applyPreferences() {
  const savedTheme = localStorage.getItem("clearpath-dark");
  const savedContrast = localStorage.getItem("clearpath-contrast");
  const savedMotion = localStorage.getItem("clearpath-motion");
  if (savedTheme === "true") { $("#dark-toggle").checked = true; document.body.classList.add("dark-theme"); }
  if (savedContrast === "true") { $("#contrast-toggle").checked = true; document.body.classList.add("high-contrast"); }
  if (savedMotion === "true") { $("#motion-toggle").checked = true; document.body.classList.add("reduce-motion"); }
  applyTextSize(state.textSize);
}

function applyTextSize(size) {
  const values = {
    small: { fontSize: "14px", scale: "0.9" },
    default: { fontSize: "16px", scale: "1" },
    large: { fontSize: "18px", scale: "1.12" },
    xlarge: { fontSize: "20px", scale: "1.25" },
  };
  const selected = values[size] || values.default;
  document.documentElement.style.setProperty("--font-size", selected.fontSize);
  document.documentElement.style.setProperty("--font-scale", selected.scale);
  document.documentElement.dataset.textSize = size;
  $$(".text-size-control button").forEach((button) => button.classList.toggle("selected", button.dataset.textSize === size));
  localStorage.setItem("clearpath-text-size", size);
  state.textSize = size;
}

function readPageSummary() {
  if (state.language === "hi") {
    speak("यह क्लियरपाथ कार्यक्षेत्र है। यहाँ आप परीक्षा अभ्यास, अपनी प्रगति, सहेजे गए प्रश्न और सहायता विकल्प देख सकते हैं।");
    return;
  }
  speak(document.querySelector(".view.is-visible")?.innerText.slice(0, 450) || "ClearPath workspace");
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-view]");
  if (nav) setView(nav.dataset.view);
  const target = event.target.closest("[data-view-target]");
  if (target) setView(target.dataset.viewTarget);
  const action = event.target.closest("[data-action]");
  if (action) {
    const { action: type, test } = action.dataset;
    if (type === "open-practice") setView("practice");
    if (type === "start-test") openTest(test || "ssc");
    if (type === "resume-test") openTest(test || "ssc");
  }
  const filter = event.target.closest(".filter-pill");
  if (filter) {
    $$(".filter-pill").forEach((pill) => pill.classList.remove("selected"));
    filter.classList.add("selected");
    showToast(`${filter.textContent.trim()} selected`);
  }
});

$("#contrast-toggle").addEventListener("change", (event) => {
  document.body.classList.toggle("high-contrast", event.target.checked);
  localStorage.setItem("clearpath-contrast", event.target.checked);
});
$("#dark-toggle").addEventListener("change", (event) => {
  document.body.classList.toggle("dark-theme", event.target.checked);
  localStorage.setItem("clearpath-dark", event.target.checked);
});
$("#motion-toggle").addEventListener("change", (event) => {
  document.body.classList.toggle("reduce-motion", event.target.checked);
  localStorage.setItem("clearpath-motion", event.target.checked);
});
$$("[data-text-size]").forEach((button) => button.addEventListener("click", () => applyTextSize(button.dataset.textSize)));
$("#read-support").addEventListener("click", () => speak(state.language === "hi"
  ? "स्वतंत्र उपयोग के लिए बनाया गया। क्लियरपाथ स्क्रीन रीडर, केवल कीबोर्ड नेविगेशन, स्पष्ट फ़ोकस और हर अभ्यास परीक्षा में अर्थपूर्ण शीर्षकों का समर्थन करता है।"
  : "Designed for independent use. ClearPath supports screen readers, keyboard-only navigation, visible focus states, and semantic headings throughout every practice test."));
$("#announce-button").addEventListener("click", readPageSummary);
$("#read-question").addEventListener("click", () => {
  if (!$("#speech-toggle").checked) { showToast("Read questions aloud is turned off in Accessibility settings."); return; }
  readCurrentQuestion();
});
$("#test-language").addEventListener("change", (event) => setLanguage(event.target.value));
$("#login-language").addEventListener("change", (event) => setLanguage(event.target.value));
$("#save-question").addEventListener("click", () => {
  state.saved = !state.saved;
  renderQuestion(false);
  showToast(state.saved ? "Question saved for later." : "Question removed from saved.");
});
$("#clear-answer").addEventListener("click", () => {
  window.clearTimeout(state.advanceTimer);
  state.selected = null;
  renderQuestion(false);
  showToast("Answer selection cleared.");
});
$("#voice-answer").addEventListener("click", startVoiceAnswer);
$("#login-email-voice").addEventListener("click", () => startLoginVoice("login-email", "login-email-voice"));
$("#login-password-voice").addEventListener("click", () => startLoginVoice("login-password", "login-password-voice"));
$("#next-question").addEventListener("click", nextQuestion);
$("#read-result").addEventListener("click", () => {
  if (state.latestResultText) speak(state.latestResultText);
});
$("#login-read-aloud").addEventListener("click", readLoginInstructions);
$(".close-test").addEventListener("click", closeTest);
$("#test-modal").addEventListener("click", (event) => { if (event.target.id === "test-modal") closeTest(); });
document.addEventListener("keydown", (event) => {
  if (event.altKey && event.key.toLowerCase() === "r" && !$("#test-modal").hidden) {
    event.preventDefault();
    $("#read-question").click();
  }
  if (event.key === "Escape" && !$("#test-modal").hidden) closeTest();
});

$("#login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  signIn($("#login-email").value, $("#login-password").value, $("#remember-me").checked);
});
$("#demo-login").addEventListener("click", () => {
  const user = { name: "Alex Nair", email: "alex@example.com" };
  saveUser(user, false);
  $("#login-status").textContent = "";
  showApp(user);
  showToast("Demo access enabled.");
});
$("#password-toggle").addEventListener("click", () => {
  const password = $("#login-password");
  const visible = password.type === "text";
  password.type = visible ? "password" : "text";
  $("#password-toggle").textContent = visible ? "Show" : "Hide";
  $("#password-toggle").setAttribute("aria-label", visible ? "Show password" : "Hide password");
});
$("#forgot-password").addEventListener("click", () => {
  $("#login-status").textContent = "Password reset support is available through your institution.";
});
$("#logout-button").addEventListener("click", () => {
  sessionStorage.removeItem("clearpath-user");
  localStorage.removeItem("clearpath-user");
  closeTest();
  showLogin();
  showToast("You have been signed out.");
});

applyPreferences();
const savedUser = readSavedUser();
if (savedUser) showApp(savedUser);
else showLogin();