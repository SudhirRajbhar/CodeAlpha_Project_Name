function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
  
    if (birthdate > today) {
      document.getElementById('result').innerText = "Please enter a valid birthdate.";
      return;
    }
  
    const diff = today - birthdate;
    const ageDate = new Date(diff);
   
    const year = ageDate.getUTCFullYear() - 1970;
    const month = ageDate.getUTCMonth();
    const day = ageDate.getUTCDate() - 1;
  
    const result = `You are ${year} years, ${month} months, and ${day} days old.`;
    document.getElementById('result').innerText = result;
  }
  