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

    const form = document.querySelector('form');
    form.addEventListener('submit', async function (event) {
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
            return data;
            window.location.href = 'profile.html';
          } catch (error) {
            console.error('Error adding user:', error);
            return null;
          }
    });
});
