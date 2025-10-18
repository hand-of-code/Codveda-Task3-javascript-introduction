// ===== DROPDOWN FUNCTIONALITY =====
function toggleDropdown() {
    const dropdown = document.getElementById('myDropdown');
    dropdown.classList.toggle('active');
}

function selectOption(option) {
    const selectedDiv = document.getElementById('selectedOption');
    selectedDiv.innerHTML = `<strong>Selected:</strong> ${option}`;
    selectedDiv.style.display = 'block';
    
    const dropdown = document.getElementById('myDropdown');
    dropdown.classList.remove('active');
}

// Close dropdown if clicked outside
window.onclick = function(e) {
    if (!e.target.matches('.dropdown-btn') && !e.target.matches('.dropdown-btn *')) {
        const dropdown = document.getElementById('myDropdown');
        if (dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
        }
    }
}

// ===== COUNTER WITH EVENT LISTENERS =====
let count = 0;
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

function updateCounter() {
    counterDisplay.textContent = count;
}

incrementBtn.addEventListener('click', function() {
    count++;
    updateCounter();
});

decrementBtn.addEventListener('click', function() {
    count--;
    updateCounter();
});

resetBtn.addEventListener('click', function() {
    count = 0;
    updateCounter();
});

// ===== MODAL FUNCTIONALITY =====
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// ===== FORM VALIDATION =====
const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const age = document.getElementById('age');
const successMessage = document.getElementById('successMessage');

// Validation functions
function validateUsername() {
    const usernameError = document.getElementById('usernameError');
    if (username.value.trim().length < 3) {
        usernameError.classList.add('show');
        username.style.borderColor = '#e74c3c';
        return false;
    } else {
        usernameError.classList.remove('show');
        username.style.borderColor = '#28a745';
        return true;
    }
}

function validateEmail() {
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.classList.add('show');
        email.style.borderColor = '#e74c3c';
        return false;
    } else {
        emailError.classList.remove('show');
        email.style.borderColor = '#28a745';
        return true;
    }
}

function validateAge() {
    const ageError = document.getElementById('ageError');
    const ageValue = parseInt(age.value);
    if (isNaN(ageValue) || ageValue < 18 || ageValue > 100) {
        ageError.classList.add('show');
        age.style.borderColor = '#e74c3c';
        return false;
    } else {
        ageError.classList.remove('show');
        age.style.borderColor = '#28a745';
        return true;
    }
}

// Real-time validation
username.addEventListener('blur', validateUsername);
email.addEventListener('blur', validateEmail);
age.addEventListener('blur', validateAge);

// Form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isAgeValid = validateAge();

    if (isUsernameValid && isEmailValid && isAgeValid) {
        successMessage.classList.add('show');
        
        setTimeout(function() {
            form.reset();
            successMessage.classList.remove('show');
            username.style.borderColor = '#ddd';
            email.style.borderColor = '#ddd';
            age.style.borderColor = '#ddd';
        }, 3000);
    }
});
