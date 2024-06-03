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

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    console.log('Supabase client:', supabase);

    if (typeof supabase.from === 'function') {
        console.log("'from' method is available in the Supabase client.");
    } else {
        console.error("'from' method is not available in the Supabase client.");
    }

    async function fetchProfiles() {
        let { data, error } = await supabase
            .from('profiles')
            .select('*');
        
        if (error) {
            console.error('Error fetching profiles:', error);
        } else {
            console.log('Profiles:', data);
        }
        }
        
    fetchProfiles();
});

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    console.log('Supabase client:', supabase);

    const form = document.querySelector('form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const first_name = document.getElementById('first_name').value;
        const last_name = document.getElementById('last_name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            // Step 1: Sign up the user
            console.log("here")
            const { user, error: signUpError } = await supabase.auth.signUp({
                email: email,
                password: password
            });
            if (signUpError) {
                throw signUpError;
            }

            // Step 2: Update the user's profile
            const { error: profileError } = await supabase.from('profiles').upsert({
                email: user.email,
                first_name: first_name,
                last_name: last_name
            });signUpError

            if (profileError) {
                throw profileError;
            }

            alert('Signup successful! Please check your email to confirm your account.');
        } catch (error) {
            console.error('Error signing up:', error.message);
            alert('Error signing up: ' + error.message);
        }
    });
});
