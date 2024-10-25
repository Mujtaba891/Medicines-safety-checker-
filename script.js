 // Sample data for banned and non-banned medicines
const medicines = [
    { name: "Action 500", banned: true },
    { name: "Vicks", banned: false },
    { name: "Crocin", banned: false },
    { name: "Corex", banned: true },
    { name: "Nimesulide", banned: true },
    { name: "Analgin", banned: true },
    { name: "Fenacetin", banned: true },
    { name: "Oxyphenbutazone", banned: true },
    { name: "Propoxyphene", banned: true },
    { name: "Phenylpropanolamine (PPA)", banned: true },
    { name: "Fenspiride", banned: true },
    { name: "Hydroxyzin", banned: true },
    { name: "Codeine & Ibuprofen FDC", banned: true },
    { name: "Ephedrine", banned: true },
    { name: "Nitrofurazone", banned: true },
    { name: "Furazolidone", banned: true },
    { name: "Tetranidazole", banned: true },
    { name: "Norfloxacin + Tinidazole", banned: true },
    { name: "Metronidazole & Norfloxacin FDC", banned: true },
    { name: "Sparfloxacin", banned: true },
    { name: "Cisapride", banned: true },
    { name: "Grepafloxacin", banned: true },
    { name: "Quinidine & Chloroquine FDC", banned: true },
    { name: "Rifampicin & Isoniazid FDC", banned: true },
    { name: "Thiacetazone", banned: true },
    { name: "Isoniazid & Ethambutol FDC", banned: true },
    { name: "Vitamin B1, B6, B12 FDC", banned: true },
    { name: "Oxedrine Tartrate", banned: true },
    { name: "Vitamin E & Vitamin A FDC", banned: true },
    { name: "Cyproheptadine & Vitamins FDC", banned: true },
    { name: "Anabolic Steroid Supplements", banned: true },
    { name: "Cyproterone & Ethinyl Estradiol FDC", banned: true },
    { name: "Estrogen & Progesterone FDC", banned: true },
    { name: "Thioridazine with other antipsychotics FDC", banned: true },
    { name: "Dextropropoxyphene FDC", banned: true },
    { name: "Meftal Spas", banned: false },
    { name: "D-Cold", banned: true },
    { name: "Voveran SR", banned: false },
    { name: "Benadryl Cough Syrup", banned: false },
    { name: "Otrivin Nasal Spray", banned: false },
    { name: "Crocin Cold & Flu", banned: true },
    { name: "Rantac", banned: true },
    { name: "Fepanil", banned: false },
    { name: "Saridon", banned: true },
    { name: "Phensedyl", banned: true },
    { name: "D’Cold Total", banned: true },
    { name: "Dexorange Syrup", banned: true },
    { name: "Combiflam", banned: false },
    { name: "Nimulid", banned: true },
    { name: "Ciplox TZ", banned: true },
    { name: "Norflox-TZ", banned: true },
    { name: "Phenacetin", banned: true },
    { name: "Nialamide", banned: true },
    { name: "Methaqualone", banned: true },
    { name: "Methapyriline (and its salts)", banned: true },
    { name: "Practolol", banned: true },
    { name: "Penicillin skin/eye ointment", banned: true },
    { name: "Tetracycline/Oxytetracyline <br>/Demeclocycline liquid oral preparations", banned: true },
    { name: "Chloral hydrate", banned: true },
    { name: "Dover's powder and Dover's powder tablets I.P.", banned: true },
    { name: "Chloroform exceeding 0.5% w/w or v/v in pharmaceutical preparations", banned: true },
    { name: "Mepacrine HCl (Quinacrine and its salts)", banned: true },
    { name: "Fenfluramine", banned: true },
    { name: "Dexfenfluramine", banned: true },
    { name: "Terfenadine", banned: true },
    { name: "Astemizole", banned: true },
    { name: "Phenformin", banned: true },
    { name: "Rofecoxib", banned: true },
    { name: "Valdecoxib", banned: true },
    { name: "Rosiglitazone", banned: true },
    { name: "Nimesulide Formulations In Children Below The Age Of 12 years", banned: true },
    { name: "Cisapride", banned: true },
    { name: "Rimonabant", banned: true },
    { name: "Phenyl Propanolamine", banned: true },
    { name: "Human Placenta Extract in topical application for wound healing and injection for pelvic inflammatory diseases", banned: true },
    { name: "Sibutramine", banned: true },
    { name: "Buclizine", banned: true },
    { name: "Nimodipine", banned: true },
    { name: "Phenylbutazone", banned: true },
    { name: "Oxytetracycline", banned: true },
    { name: "Dextropropoxyphene", banned: true },
    { name: "Methandienone", banned: true },
    { name: "Phentermine", banned: true },
    { name: "Amyl Nitrite", banned: true },
    { name: "Chlorpropamide", banned: true },
    { name: "Tigecycline", banned: true },
    { name: "Hydroquinone", banned: true },
    { name: "Isotretinoin", banned: true },
    { name: "Ketanserin", banned: true },
    { name: "Levamisole", banned: true },
    { name: "Metamizole", banned: true },
    { name: "Nitrofurazone", banned: true },
    { name: "Phenacetin", banned: true },
    { name: "Pipradrol", banned: true },
    { name: "Rimonabant", banned: true },
    { name: "Thalidomide", banned: true },
    { name: "Ticrynafen", banned: true },
    { name: "Troglitazone", banned: true },
    { name: "Tolbutamide", banned: true },
    { name: "Ziprasidone", banned: true },
    { name: "Phenylpropanolamine", banned: true },
    { name: "Quinacrine", banned: true },
    { name: "Tegaserod", banned: true },
    { name: "Orlistat", banned: true },
    { name: "Nitrofurazone", banned: true },
    { name: "Furazolidone", banned: true },
    { name: "Gatifloxacin", banned: true },
    { name: "Quinacrine", banned: true },
    { name: "Methoxyflurane", banned: true },
    { name: "Pergolide", banned: true },
    { name: "Pemoline", banned: true },
    { name: "Tegaserod", banned: true },
    { name: "Pemoline", banned: true },
    { name: "Phenylpropanolamine", banned: true },
    { name: "Quinacrine", banned: true }
    // Add more medicines as necessary
];

// Function to display all medicines
function displayMedicines(filteredList = medicines) {
    const medicineListDiv = document.getElementById('medicineList');
    medicineListDiv.innerHTML = ''; // Clear current list

    filteredList.forEach(medicine => {
        const div = document.createElement('div');
        div.className = 'medicine-item';
        div.innerHTML = `
            <span>${medicine.name}</span>
            <span class="${medicine.banned ? 'banned' : 'not-banned'}">
                ${medicine.banned ? 'Banned' : 'Not Banned'}
            </span>
        `;
        medicineListDiv.appendChild(div);
    });
}

// Function to filter medicines based on user input
function filterMedicines() {
    const searchQuery = document.getElementById('medicineSearch').value.toLowerCase();
    const filteredMedicines = medicines.filter(med => 
        med.name.toLowerCase().includes(searchQuery)
    );

    if (filteredMedicines.length === 0) {
        // If no match found, display a "Not Banned" message
        displayMedicines([{ name: searchQuery, banned: false }]);
    } else {
        displayMedicines(filteredMedicines);
    }
}

// Initial display of all medicines
displayMedicines();
// Display the popup

// Initialize the install prompt event
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the default mini-infobar from appearing on mobile
  e.preventDefault();
  
  // Save the event for later use
  deferredPrompt = e;
  
  // Display the popup when the event is ready
  showPopup();
});

// Function to display the popup
function showPopup() {
  document.getElementById('installPopup').style.display = 'block';
}

// Function to close the popup
function closePopup() {
  document.getElementById('installPopup').style.display = 'none';
}

// Click event for the install button
document.getElementById('installButton').addEventListener('click', () => {
  // Check if the deferredPrompt is available
  if (deferredPrompt) {
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user's response
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      
      // Clear the deferredPrompt after user's choice
      deferredPrompt = null;
    });
    
    // Close the popup
    closePopup();
  }
});