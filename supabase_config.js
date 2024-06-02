const { createClient } = supabase;

const supabaseUrl = 'https://cyjrkuryjgvnpmostupl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5anJrdXJ5amd2bnBtb3N0dXBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyOTc3MzcsImV4cCI6MjAzMjg3MzczN30.XAaWW7CxH1AJ_JHvGQRdbdOMDf5j0B2e04XRmXhRE_4';
const supabase = createClient(supabaseUrl, supabaseKey);


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
  
  
