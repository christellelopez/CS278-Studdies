// const { createClient } = supabase;

// const supabaseUrl = 'https://cyjrkuryjgvnpmostupl.supabase.co';
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://cyjrkuryjgvnpmostupl.supabase.co';
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// Fetch EXAMPLE
// async function fetchProfiles() {
//     let { data, error } = await supabase
//       .from('profiles')
//       .select('*');
  
//     if (error) {
//       console.error('Error fetching profiles:', error);
//     } else {
//       console.log('Profiles:', data);
//     }
//   }
  
//   fetchProfiles();



// Insert EXAMPLE
// async function insertProfile() {
//     const { data, error } = await supabase
//       .from('profiles')
//       .insert([
//         { username: 'new_user', email: 'new_user@example.com' }
//       ]);
  
//     if (error) {
//       console.error('Error inserting profile:', error);
//     } else {
//       console.log('Inserted profile:', data);
//     }
//   }
  
//   insertProfile();


//Update EXAMPLE
// async function updateProfile() {
//     const { data, error } = await supabase
//       .from('profiles')
//       .update({ username: 'updated_user' })
//       .eq('id', 1);
  
//     if (error) {
//       console.error('Error updating profile:', error);
//     } else {
//       console.log('Updated profile:', data);
//     }
//   }
  
//   updateProfile();
  
  

// Delete EXAMPLE
// async function deleteProfile() {
//     const { data, error } = await supabase
//       .from('profiles')
//       .delete()
//       .eq('id', 1);
  
//     if (error) {
//       console.error('Error deleting profile:', error);
//     } else {
//       console.log('Deleted profile:', data);
//     }
//   }
  
//   deleteProfile();
  
  
