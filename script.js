// 🧑‍🏫 Teacher data
const teachers = {
  "teacher1": { password: "12345", subject: "CS" },
  "teacher2": { password: "54321", subject: "Psychology" }
};

// 🎓 Sample students per class
const studentsData = {
  "11A": ["Rohan", "Aditi", "Samar", "Tina"],
  "11B": ["Rishu", "Kavya", "Nikhil", "Diya"]
};

// 🧩 Login function
function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (teachers[user] && teachers[user].password === pass) {
    document.getElementById("loginSection").classList.add("hidden");
    document.getElementById("attendanceSection").classList.remove("hidden");
    document.getElementById("teacherName").innerText = user;
    alert("Login successful!");
  } else {
    alert("Invalid login. Try again.");
  }
}

// 👩‍🏫 Load students for selected class
function loadStudents() {
  const className = document.getElementById("classSelect").value;
  const students = studentsData[className];
  const container = document.getElementById("studentsList");

  if (!students) {
    container.innerHTML = "<p>No students found for this class.</p>";
    return;
  }

  container.innerHTML = students.map(s => `
    <div class="student-item">
      <label>
        <input type="checkbox" id="${s}" checked> ${s}
      </label>
    </div>
  `).join("");
}

// 💾 Save attendance (temporary local save)
function saveAttendance() {
  const students = document.querySelectorAll("#studentsList input[type='checkbox']");
  let data = [];
  students.forEach(s => {
    data.push({ name: s.id, present: s.checked });
  });

  localStorage.setItem("attendance", JSON.stringify(data));
  alert("Attendance saved locally ✅");
}

// 🚪 Logout
function logout() {
  document.getElementById("loginSection").classList.remove("hidden");
  document.getElementById("attendanceSection").classList.add("hidden");
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}
