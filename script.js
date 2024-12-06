const problemNames = [
    "Diabetes (Type 2)", "Hypertension", "Heart Disease", "Alzheimer's Disease",
    "Cancer", "Asthma", "Chronic Kidney Disease", "Tuberculosis", "Hepatitis B", 
    "Stroke", "Influenza (Flu)", "Rheumatoid Arthritis", "Migraine", 
    "Pneumonia", "Allergies"
];

const symptoms = [
    ["Increased thirst", "Frequent urination", "Unexplained weight loss", "Fatigue", "Blurred vision", 
     "Slow-healing sores", "Frequent infections", "Tingling or numbness in hands/feet", 
     "Darkened skin around neck/armpits", "Increased hunger"],
    ["Mild headaches", "Dizziness", "Fatigue or confusion", "Shortness of breath", "Nosebleeds", 
     "Blurred vision", "Heart palpitations", "Sweating without cause", "Sleep disturbances", "Chest discomfort"],
    ["Chest pain or discomfort (angina)", "Shortness of breath", "Fatigue", "Dizziness or lightheadedness", 
     "Irregular heartbeat", "Nausea", "Pain in arms, neck, jaw, or back", "Sweating", 
     "Swollen legs/feet", "Persistent cough"],
    ["Memory lapses", "Difficulty finding words", "Trouble with daily tasks", "Confusion about time/place", 
     "Misplacing items", "Poor judgment", "Withdrawal from social activities", "Changes in mood/personality", 
     "Repeating questions/statements", "Losing track of conversations"],
    ["Unexplained weight loss", "Persistent fatigue", "Skin changes", "Unusual bleeding", 
     "Persistent cough", "Trouble swallowing", "Change in bowel habits", "Persistent pain", 
     "Fever or night sweats", "Swelling in lymph nodes"],
    ["Wheezing", "Shortness of breath", "Coughing", "Chest tightness", "Fatigue during exercise", 
     "Trouble sleeping", "Increased mucus production", "Feeling of panic", "Frequent infections", "Reduced ability to perform tasks"],
    ["Fatigue", "Swollen ankles/feet", "Frequent urination at night", "Foamy urine", 
     "Muscle cramps", "Poor appetite", "Nausea", "Dry, itchy skin", "Shortness of breath", 
     "Difficulty concentrating"],
    ["Persistent cough", "Fatigue", "Night sweats", "Low-grade fever", "Unexplained weight loss", 
     "Loss of appetite", "Chest pain", "Coughing up blood", "Chills", "Weakness"],
    ["Fatigue", "Loss of appetite", "Mild fever", "Nausea", "Vomiting", "Dark urine", 
     "Pale stools", "Joint pain", "Stomach discomfort", "Jaundice"],
    ["Sudden weakness in limbs", "Numbness on one side", "Slurred speech", "Dizziness", 
     "Severe headache", "Loss of balance", "Confusion", "Difficulty understanding speech", 
     "Sudden difficulty walking"],
    ["Fever", "Chills", "Muscle aches", "Fatigue", "Cough", "Sore throat", 
     "Runny or stuffy nose", "Headache", "Shortness of breath", "Nausea or vomiting"],
    ["Joint pain", "Swelling in joints", "Stiffness (especially in the morning)", "Fatigue", "Loss of appetite", 
     "Low-grade fever", "Reduced range of motion", "Warmth around affected joints", "Nodules under the skin", "General weakness"],
    ["Intense headache", "Nausea", "Vomiting", "Sensitivity to light", "Sensitivity to sound", 
     "Blurred vision", "Fatigue", "Dizziness", "Difficulty concentrating", "Aura (visual disturbances like flashing lights)"],
    ["Cough (may produce mucus)", "Fever", "Chills", "Difficulty breathing", "Chest pain", 
     "Fatigue", "Loss of appetite", "Nausea", "Rapid heartbeat", "Confusion"],
    ["Sneezing", "Runny or stuffy nose", "Watery eyes", "Itchy nose or throat", "Cough", 
     "Fatigue", "Skin rashes", "Swelling", "Wheezing", "Hives"]
];

const treatments = [
    "Lifestyle changes (diet, exercise, weight loss), Insulin therapy, Oral hypoglycemic drugs.",
    "Reduced salt intake, healthy diet, Regular physical activity, Antihypertensive medications.",
    "Lifestyle modifications, Medications to control cholesterol and blood pressure, Surgery (e.g., bypass).",
    "Cognitive therapy and supportive care, Medications to slow progression, Regular mental stimulation.",
    "Surgery, chemotherapy, immunotherapy, radiation therapy, targeted therapy.",
    "Avoid allergens and triggers, Use of inhalers, Long-term corticosteroids for severe cases.",
    "Control blood pressure and blood sugar, Dietary management, Dialysis in severe cases.",
    "Long-term antibiotic therapy, Combination drug therapy, Vaccination (BCG).",
    "Antiviral medications for chronic cases, Supportive care for acute infection, Regular monitoring of liver function.",
    "Emergency thrombolysis for ischemic stroke, Physiotherapy for rehabilitation, Control of risk factors.",
    "Antiviral medications for severe cases, Symptomatic treatment (rest, hydration), Annual flu vaccination.",
    "Physical therapy and joint exercises, Immunosuppressive drugs, Pain management.",
    "Avoidance of triggers, Pain relief and anti-nausea drugs, Preventive medications for frequent attacks.",
    "Antibiotics for bacterial cases, Supportive care (hydration, oxygen therapy), Vaccination for prevention (PCV).",
    "Avoid allergens, Use of antihistamines, Immunotherapy for long-term relief."
];

const tablets = [
    "Metformin (Glucophage), Sulfonylureas (Glibenclamide), DPP-4 Inhibitors (Sitagliptin).",
    "Losartan (Cozaar), Amlodipine (Norvasc), Hydrochlorothiazide (Esidrix).",
    "Atorvastatin (Lipitor), Aspirin (Ecosprin), Beta-blockers (Metoprolol).",
    "Donepezil (Aricept), Memantine (Ebixa), Rivastigmine (Exelon).",
    "Imatinib (Glivec - leukemia), Tamoxifen (Nolvadex - breast cancer), Capecitabine (Xeloda - colorectal cancer).",
    "Montelukast (Singulair), Theophylline (Uniphyllin), Prednisolone (short-term corticosteroid).",
    "Sevelamer (Renvela), Calcium Acetate (Phoslo), Erythropoietin (Recormon - anemia).",
    "Isoniazid (INH), Rifampin (Rimactane), Ethambutol (Myambutol).",
    "Tenofovir (Viread), Entecavir (Baraclude), Lamivudine (Zeffix).",
    "Clopidogrel (Plavix), Aspirin (low-dose), Atorvastatin (Lipitor).",
    "Oseltamivir (Tamiflu), Paracetamol (Panadol), Antihistamines (Loratadine).",
    "Methotrexate (Trexall), Sulfasalazine (Salazopyrin), Ibuprofen (Brufen).",
    "Sumatriptan (Imigran), Propranolol (Inderal), Naproxen (Synflex).",
    "Azithromycin (Zithromax), Levofloxacin (Levaquin), Amoxicillin/Clavulanate (Augmentin).",
    "Loratadine (Claritin), Cetirizine (Zyrtec), Montelukast (Singulair)."
];

const symptomsContainer = document.getElementById("symptoms-container");
const resultText = document.getElementById("result-text");
const analyzeButton = document.getElementById("analyze-button");
const resetButton = document.getElementById("reset-button");

// Populate symptoms dynamically
symptoms.flat().forEach((symptom, index) => {
    const symptomItem = document.createElement("div");
    symptomItem.classList.add("symptom-item");
    symptomItem.innerHTML = `
        <input type="checkbox" id="symptom-${index}" value="${symptom}">
        <label for="symptom-${index}">${symptom}</label>
    `;
    symptomsContainer.appendChild(symptomItem);
});

// Analyze symptoms and find the best match
analyzeButton.addEventListener("click", () => {
    const selectedSymptoms = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(input => input.value.toLowerCase());
    
    let maxMatches = 0;
    let bestMatchIndex = -1;

    symptoms.forEach((problemSymptoms, index) => {
        const matches = problemSymptoms.filter(symptom => selectedSymptoms.includes(symptom.toLowerCase())).length;
        if (matches > maxMatches) {
            maxMatches = matches;
            bestMatchIndex = index;
        }
    });

    if (maxMatches > 0) {
        resultText.innerHTML = `
            <span><strong>Diagnosis:</strong> ${problemNames[bestMatchIndex]} (${maxMatches} matches).</span>
            <span><strong>Treatment:</strong> ${treatments[bestMatchIndex]}</span>
            <span><strong>Tablets:</strong> ${tablets[bestMatchIndex]}</span>
        `;
    } else {
        resultText.innerText = "No specific problem was detected based on your symptoms.";
    }
    
});

// Reset symptoms and result
resetButton.addEventListener("click", () => {
    document.querySelectorAll('.symptom-item input').forEach(input => input.checked = false);
    resultText.innerText = "Your result will appear here after analysis.";
});
