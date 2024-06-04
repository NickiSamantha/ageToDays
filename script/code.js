document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission behavior
    const birthdate = document.getElementById('birthdate').value;
    if (birthdate) {
        const days = calculateAgeInDays(new Date(birthdate));
        document.getElementById('result').textContent = `You are ${days} days old.`;
    }
});

function calculateAgeInDays(birthdate) {
    const today = new Date();
    const diffTime = Math.abs(today - birthdate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
}
