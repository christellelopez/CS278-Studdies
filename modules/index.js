import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function toggleDropdown() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 1000) {
        // If the width is greater than 1000 pixels, remove the .active class
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active');
    }
});

const loadFile = (event) => {
    const output = document.getElementById('profile-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = () => {
        URL.revokeObjectURL(output.src); // free memory
    };
    document.querySelector('.image-upload label').classList.add('image-uploaded');
};

document.addEventListener('DOMContentLoaded', async function () {
    const signupForm = document.querySelector('form#user-signup');
    const loginForm = document.querySelector('form#user-login');

    if (signupForm) {
        signupForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const first_name = document.getElementById('first_name').value;
            const last_name = document.getElementById('last_name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const { data, error } = await supabase
                    .from('Users')
                    .insert([
                        {
                            email: email,
                            password: password, 
                            first_name: first_name,
                            last_name: last_name
                        },
                    ]);

                if (error) throw error;

                console.log('User added:', data);
                alert('Signup successful! Please check your email to confirm your account.');
            } catch (error) {
                console.error('Error adding user:', error);
                alert('Error signing up: ' + error.message);
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const { data: users, error } = await supabase
                    .from('Users')
                    .select('email, password')
                    .eq('email', email)
                    .limit(1);

                if (error) throw error;

                if (users.length === 0) {
                    throw new Error('Invalid email or password');
                }

                const user = users[0];
                if (user.password === password) alert('Login successful!');
                console.log('Logged in user');

                window.location.href = 'homepage.html'; // change this to the desired page
            } catch (error) {
                console.error('Error logging in:', error);
                alert('Error logging in: ' + error.message);
            }
        });
    }
});
