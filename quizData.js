// JavaScript data previously in quizData.js
const quizData = [
    // ------------- WEEK 1 -------------
    {
        week: "Week 1",
        questions: [
            {
                question: "Sun light is the main component to synthesize vitamin",
                options: ["Calciferol", "Phyto-menadione", "Tocopherol", "Retinol"],
                correctAnswer: "Calciferol",
                explanation: "Calciferol or Vitamin D. Refer lecture 02"
            },
            {
                question: "_________ are artificial structures which can manipulate electromagnetic (EM) waves",
                options: ["ASRR", "Metamaterials", "Neurotransmitter", "KBr"],
                correctAnswer: "Metamaterials",
                explanation: "Metamaterials are a novel class of functional materials that are designed around unique micro- and nanoscale patterns or structures, which cause them to interact with light and other forms of energy in ways not found in nature."
            },
            { // Question 3
                question: "How are Photons and Electrons being similar?",
                options: ["Both are charged sub-atomic particles.", "Both are similar in size", "Both can behave like wave.", "None of the above is correct"],
                correctAnswer: "Both can behave like wave.",
                explanation: "Refer lecture 04 & 05. Both exhibit wave-particle duality."
            },
            { // Question 4
                 question: "Cytoskeleton of a cell is made up of",
                 options: ["Endothelial cell", "Microtubules", "Cytoplasm", "Mitochondria"],
                 correctAnswer: "Microtubules",
                 explanation: "Microtubules are polymers of tubulin that form part of the cytoskeleton and provide structure and shape to eukaryotic cells."
            },
            { // Question 5
                 question: "Which biophotonic technique is commonly used for studying the structure and function of molecules in biological samples?",
                 options: ["Nuclear magnetic resonance (NMR)", "Mass spectrometry", "Infrared spectroscopy", "Raman spectroscopy"],
                 correctAnswer: "Raman spectroscopy",
                 explanation: "Raman spectroscopy is a powerful biophotonic technique used for studying the vibrational, rotational, and other low-frequency modes of molecules."
            },
            { // Question 6
                 question: "Which of the following is NOT a common fluorescent dye used in microscopy?",
                 options: ["DAPI", "GFP", "Rhodamine", "Hematoxylin"],
                 correctAnswer: "Hematoxylin",
                 explanation: "Hematoxylin is a histological stain used in traditional light microscopy. It does not fluoresce and is not used in fluorescence microscopy."
            },
            { // Question 7
                 question: "Which biophotonic technique is commonly used for non-invasive imaging of tissues and cells in living organisms?",
                 options: ["Optical coherence tomography (OCT)", "X-ray radiography", "Magnetic resonance imaging (MRI)", "Positron emission tomography (PET)"],
                 correctAnswer: "Optical coherence tomography (OCT)",
                 explanation: "Optical Coherence Tomography (OCT) is a powerful biophotonic technique for non-invasive imaging of tissues and cells, providing detailed and real-time information about the internal structures of living organisms."
            },
            { // Question 8
                 question: "Group velocity is:",
                 options: ["The speed of propagation of the wave envelope", "The speed of propagation of a single wave crest", "The speed of light in a vacuum", "The speed of sound in a medium"],
                 correctAnswer: "The speed of propagation of the wave envelope",
                 explanation: "Group velocity is the speed at which the envelope of a wave packet propagates. It is different from the phase velocity, which is the speed of individual wave crests."
            },
            { // Question 9
                 question: "Which of the following is a diagnostic test for urinary tract infections?",
                 options: ["Urine culture", "Blood test", "Chest X-ray", "MRI"],
                 correctAnswer: "Urine culture",
                 explanation: "A urine culture is the most common diagnostic test for urinary tract infections (UTIs). It involves collecting a urine sample and culturing it in a laboratory to identify the specific bacteria causing the infection and determine the most effective antibiotic treatment. Refer lecture 03"
            },
            { // Question 10 (Duplicate of Q3 - potentially removed later if only Week 1 is selected)
                question: "How are Photons and Electrons being similar?",
                options: ["Both are charged sub-atomic particles.", "Both are similar in size", "Both can behave like wave.", "None of the above is correct"],
                correctAnswer: "Both can behave like wave.",
                explanation: "Refer lecture 04 & 05. Both exhibit wave-particle duality."
            }
        ]
    },
    // ------------- WEEK 2 -------------
    {
        week: "Week 2",
        questions: [ // 10 questions for Week 2
             {
                 question: "What happens to the energy of a photon as its wavelength decreases?",
                 options: ["Increases", "Decreases", "Remains constant", "Depends on the material it interacts with"],
                 correctAnswer: "Increases",
                 explanation: "The energy of a photon is inversely proportional to its wavelength, given by E=h·c/λ. As the wavelength decreases, the photon energy increases."
             },
             {
                 question: "Which phenomenon explains the splitting of white light into its component colors when passing through a prism?",
                 options: ["Absorption", "Dispersion", "Scattering", "Diffraction"],
                 correctAnswer: "Dispersion",
                 explanation: "Dispersion occurs because different wavelengths of light travel at different speeds in a medium, causing them to refract at slightly different angles."
             },
             {
                 question: "What is the main interaction mechanism responsible for the red appearance of the setting sun?",
                 options: ["Absorption", "Scattering", "Reflection", "Transmission"],
                 correctAnswer: "Scattering",
                 explanation: "At sunset, sunlight passes through a thicker atmosphere, where shorter wavelengths (blue) are scattered out, leaving longer wavelengths (red) to dominate (Rayleigh scattering)."
             },
             {
                 question: "What happens to the speed of light when it enters a medium with a higher refractive index?",
                 options: ["Increases", "Decreases", "Remains constant", "Reverses direction"],
                 correctAnswer: "Decreases",
                 explanation: "The speed of light decreases when it enters a medium with a higher refractive index (v = c/n), according to Snell's Law and the definition of refractive index."
             },
             {
                 question: "Which type of light-matter interaction is most relevant for the operation of optical fibers?",
                 options: ["Total internal reflection", "Refraction", "Absorption", "Scattering"],
                 correctAnswer: "Total internal reflection",
                 explanation: "Optical fibers rely on total internal reflection to guide light through the core without significant loss."
             },
             {
                 question: "What is the primary factor determining the wavelength of light emitted in fluorescence?",
                 options: ["The absorption wavelength", "The energy gap between electronic states", "The speed of light in the medium", "The intensity of incident light"],
                 correctAnswer: "The energy gap between electronic states",
                 explanation: "Fluorescence occurs when an electron returns to the ground state from an excited state, emitting light with a wavelength determined by the energy difference between these states (Stokes shift means emitted wavelength is usually longer than absorbed)."
             },
             {
                 question: "What term is used to describe the phenomenon where an incoming photon interacts with an atom and induces the emission of a second photon with the same frequency, phase, and direction?",
                 options: ["Absorption", "Scattering", "Stimulated emission", "Fluorescence"],
                 correctAnswer: "Stimulated emission",
                 explanation: "Stimulated emission is the process where an incoming photon induces the emission of a second photon with the same frequency, phase, and direction. This is the principle behind lasers."
             },
             {
                 question: "Which property of a laser makes it particularly suited for optical tweezers?",
                 options: ["High coherence", "High divergence", "Low intensity", "Long wavelength"],
                 correctAnswer: "High coherence",
                 explanation: "Optical tweezers use highly coherent laser beams to trap and manipulate microscopic particles with precision via radiation pressure gradients."
             },
             {
                 question: "What is the principle behind the generation of a rainbow in the atmosphere?",
                 options: ["Reflection and interference", "Refraction and dispersion", "Scattering and absorption", "Diffraction and polarization"],
                 correctAnswer: "Refraction and dispersion",
                 explanation: "Rainbows are formed by the refraction and dispersion of sunlight through raindrops, separating the light into its component wavelengths."
             },
             {
                 question: "Which light-matter interaction is responsible for Raman spectroscopy?",
                 options: ["Elastic scattering", "Inelastic scattering", "Fluorescence", "Reflection"],
                 correctAnswer: "Inelastic scattering",
                 explanation: "Raman spectroscopy is based on inelastic scattering (Raman scattering), where the scattered light has a different wavelength due to energy exchange with the vibrational modes of the material."
             }
        ]
    },
    // --- Include Week 3 to 8 Data Here (identically as before) ---
    // ... (rest of the quizData array) ...
    // ------------- WEEK 3 -------------
    {
       week: "Week 3",
       questions: [
            {
                question: "Nucleoside contains",
                options: ["base-sugar", "base-phosphate", "base-sugar-phosphate", "sugar-phosphate"],
                correctAnswer: "base-sugar",
                explanation: "A nucleoside consists of a nitrogenous base linked to a sugar (ribose or deoxyribose). A nucleotide is a nucleoside plus one or more phosphate groups."
            },
            {
                question: "Which organelle is responsible for the synthesis of proteins in a cell?",
                options: ["Nucleus", "Lysosome", "Golgi apparatus", "Endoplasmic reticulum"],
                correctAnswer: "Endoplasmic reticulum",
                explanation: "The endoplasmic reticulum, particularly the rough endoplasmic reticulum (RER) which is studded with ribosomes, is a key organelle involved in the synthesis, folding, modification, and transport of proteins in eukaryotic cells. Ribosomes themselves perform the synthesis, but many are attached to the ER."
            },
            {
                question: "The structure of DNA was discovered by:",
                options: ["Gregor Mendel", "James Watson and Francis Crick", "Charles Darwin", "Louis Pasteur"],
                correctAnswer: "James Watson and Francis Crick",
                explanation: "Watson and Crick, using crucial X-ray diffraction data from Rosalind Franklin and Maurice Wilkins, proposed the double-helix structure of DNA in 1953. Refer lecture 12."
            },
            {
                question: "What is the nucleotide sequence of START Codon?",
                options: ["GUG", "GUC", "AUC", "AUG"],
                correctAnswer: "AUG",
                explanation: "The most common start codon in mRNA is AUG, which codes for the amino acid methionine (or formylmethionine in bacteria) and initiates protein synthesis. Refer lecture 13."
            },
            {
                question: "Which cell organelle is mainly responsible for the process known as Translation?",
                options: ["Golgi apparatus", "Cytoplasm", "Mitochondria", "Ribosome"],
                correctAnswer: "Ribosome",
                explanation: "Ribosomes are the molecular machines responsible for translation, the process of synthesizing proteins from an mRNA template. They can be free in the cytoplasm or bound to the ER. Refer lecture 12."
            },
            {
                question: "The phase of the cell cycle during which the cell grows and carries out its normal functions is called:",
                options: ["Interphase", "Mitosis", "Cytokinesis", "Meiosis"],
                correctAnswer: "Interphase",
                explanation: "Interphase is the longest period of the cell cycle when the cell grows, replicates its DNA (S phase), and prepares for cell division (G1, S, G2 phases)."
            },
            {
                question: "Disease that cause for protein misfolding?",
                options: ["Prion", "Alzheimer's", "Parkinson's", "All of them"],
                correctAnswer: "All of them",
                explanation: "Protein misfolding and aggregation are implicated in numerous neurodegenerative diseases, including Prion diseases (like CJD), Alzheimer's disease (Amyloid-beta, Tau), and Parkinson's disease (alpha-synuclein). Refer lecture 14."
            },
            {
                question: "Name the receptor of Corona virus uses to enter the host cell",
                options: ["Spike", "ACE-2", "Capsule", "RNA"],
                correctAnswer: "Spike",
                explanation: "Spiked viruses invade their host cells by interaction of their spikes with molecules on surfaces of the cells."
            },
            {
                question: "What is the primary function of the Golgi apparatus in a cell?",
                options: ["Packaging and modification of proteins", "Protein synthesis", "Intracellular digestion", "Energy production"],
                correctAnswer: "Packaging and modification of proteins",
                explanation: "The Golgi apparatus modifies, sorts, and packages proteins and lipids synthesized in the ER for secretion or delivery to other organelles."
            },
            {
                question: "Which type of connective tissue is responsible for storing energy?",
                options: ["Bone tissue", "Adipose tissue", "Cartilage tissue", "Blood tissue"],
                correctAnswer: "Adipose tissue",
                explanation: "Adipose tissue (fat) is the primary connective tissue responsible for storing energy in the form of lipids (triglycerides)."
            }
       ]
   },
   // ------------- WEEK 4 -------------
   {
        week: "Week 4", // Optical and Spectroscopic Techniques
        questions: [
            {
                question: "Which process in fluorescence microscopy results in the emission of light?",
                options: ["Absorption of light by the sample", "Scattering of light by the sample", "Transition from the excited state to the ground state", "Photobleaching of fluorescent molecules"],
                correctAnswer: "Transition from the excited state to the ground state",
                explanation: "Fluorescence microscopy relies on the emission of light when a fluorophore returns from an excited state to the ground state, releasing energy in the form of visible light."
            },
            {
                question: "What is the primary range of wavelengths covered by UV-Vis spectroscopy?",
                options: ["1 nm to 100 nm", "100 nm to 1000 nm", "200 nm to 800 nm", "800 nm to 2000 nm"],
                correctAnswer: "200 nm to 800 nm",
                explanation: "UV-Vis spectroscopy typically covers the range of wavelengths from 200 nm to 800 nm. This range includes ultraviolet (UV) and visible (Vis) light."
            },
            {
                question: "Which property of light is used to calculate the refractive index in optical coherence tomography (OCT)?",
                options: ["Intensity", "Phase", "Wavelength", "Polarization"],
                correctAnswer: "Phase",
                explanation: "OCT measures the phase difference between reflected light from different depths of the sample to calculate the refractive index and create high-resolution images."
            },
            {
                question: "What is the primary chromophore in biological tissues that absorbs light during photothermal therapy?",
                options: ["Hemoglobin", "Melanin", "Water", "Collagen"],
                correctAnswer: "Hemoglobin",
                explanation: "Hemoglobin, as a key chromophore, strongly absorbs light in the visible and near-infrared regions, making it essential for photothermal therapy targeting blood-rich tissues."
            },
            {
                question: "Which type of molecular vibrations are detected by IR spectroscopy but not by Raman spectroscopy?",
                options: ["Symmetric stretching", "Asymmetric stretching", "Rocking", "Scissoring"],
                correctAnswer: "Symmetric stretching",
                explanation: "IR spectroscopy is sensitive to molecular vibrations that cause a change in dipole moment, such as symmetric stretching. Raman spectroscopy is not as sensitive to symmetric stretching vibrations because they do not result in a change in polarizability."
            },
            {
                question: "In Raman spectroscopy, what is the term used to describe the scattered light that has the same frequency as the incident light?",
                options: ["Stokes scattering", "Anti-Stokes scattering", "Rayleigh scattering", "Inelastic scattering"],
                correctAnswer: "Rayleigh scattering",
                explanation: "The scattered light in Rayleigh scattering has the same frequency as the incident light and is not involved in any energy transitions. In Raman spectroscopy, the terms 'Stokes scattering' and 'Anti-Stokes scattering' refer to the scattered light with lower and higher frequencies than the incident light, respectively."
            },
            {
                question: "What is Photodynamic Therapy (PDT)?",
                options: ["A type of therapy using light and sound waves", "A surgical procedure for removing tumours", "A treatment that uses photosensitizing agents and light to kill or damage cancer cells", "A method of treating infections with antibiotics"],
                correctAnswer: "A treatment that uses photosensitizing agents and light to kill or damage cancer cells",
                explanation: "Photodynamic therapy (PDT) is a medical treatment that utilizes a photosensitizing agent, which is activated by light to produce a form of oxygen that kills nearby cells."
            },
            {
                question: "What is the primary mechanism of action of Photodynamic Therapy (PDT)?",
                options: ["Radioactive decay", "Thermal ablation", "Chemotherapy", "Light activation of photosensitizer"],
                correctAnswer: "Light activation of photosensitizer",
                explanation: "Photodynamic Therapy (PDT) involves the activation of a photosensitizing agent by light of a specific wavelength. This activation leads to the generation of reactive oxygen species, causing localized cellular damage and subsequent therapeutic effects."
            },
            {
                question: "Which imaging technique is best suited for non-invasive imaging of blood flow in tissues?",
                options: ["Optical coherence tomography (OCT)", "Raman spectroscopy", "Two-photon microscopy", "Photoacoustic imaging"],
                correctAnswer: "Photoacoustic imaging",
                explanation: "Photoacoustic imaging detects ultrasound waves generated by light absorption, making it ideal for visualizing blood flow due to hemoglobin's strong absorption."
            },
            {
                question: "What is the key advantage of Raman spectroscopy over IR spectroscopy in terms of sample analysis?",
                options: ["Higher sensitivity to functional groups", "Non-destructive analysis", "Fluorescence effect", "Lower interference from water absorption bands"],
                correctAnswer: "Lower interference from water absorption bands",
                explanation: "Raman spectroscopy and infrared (IR) spectroscopy are both powerful analytical techniques used for sample analysis. One key advantage of Raman spectroscopy over IR spectroscopy is its lower interference from water absorption bands. In IR spectroscopy, water absorption bands can overlap with the bands of interest in the sample, making it challenging to analyze samples in aqueous environments. Raman spectroscopy, on the other hand, is less affected by water interference, making it more suitable for analyzing samples in aqueous solutions."
            }
        ]
   },
   // ------------- WEEK 5 -------------
    {
        week: "Week 5", // Optical and Spectroscopic Techniques
        questions: [
            {
                question: "Which property of laser light distinguishes it from ordinary light sources?",
                options: ["Coherence", "Dispersion", "Divergence", "Refraction"],
                correctAnswer: "Coherence",
                explanation: "Laser light is highly coherent (spatially and temporally), meaning the light waves are in phase. Ordinary light sources are typically incoherent."
            },
            {
                question: "What is the primary mechanism that enables fluorescence in bioimaging?",
                options: ["Emission of light after thermal excitation", "Emission of light after absorption of a photon", "Scattering of incident light", "Total internal reflection"],
                correctAnswer: "Emission of light after absorption of a photon",
                explanation: "Fluorescence involves a molecule (fluorophore) absorbing a photon, reaching an excited electronic state, and then emitting a photon (usually of lower energy/longer wavelength) as it returns to the ground state."
            },
            {
                question: "What is the main advantage of femtosecond lasers in two-photon microscopy?",
                options: ["High thermal effects on samples", "Long wavelength for deep tissue penetration", "Continuous wave operation", "Low resolution imaging"],
                correctAnswer: "Long wavelength for deep tissue penetration",
                explanation: "Femtosecond lasers used in TPE microscopy typically operate at longer (NIR) wavelengths, which scatter less in tissue, allowing deeper penetration. The ultrashort pulses also confine excitation and minimize average power, reducing photodamage compared to CW lasers of the same peak power."
            },
            {
                question: "Which laser component is responsible for selecting the specific wavelength of emitted light?",
                options: ["Pump source", "Gain medium", "Optical cavity", "Output coupler"],
                correctAnswer: "Optical cavity",
                explanation: "The optical cavity (resonator), formed by mirrors, provides feedback and ensures that only specific wavelengths (resonant modes) that constructively interfere are amplified and emitted."
            },
            {
                question: "What is the principle behind fluorescence resonance energy transfer (FRET)?",
                options: ["Absorption of high-energy photons by molecules", "Transfer of vibrational energy between molecules", "Non-radiative energy transfer between donor and acceptor molecules", "Scattering of photons between interacting molecules"],
                correctAnswer: "Non-radiative energy transfer between donor and acceptor molecules",
                explanation: "FRET is a distance-dependent, non-radiative process where energy is transferred from an excited donor fluorophore to a nearby acceptor fluorophore through dipole-dipole coupling."
            },
            {
                question: "Which process is used to achieve frequency conversion in nonlinear optics for generating shorter wavelengths?",
                options: ["Optical parametric oscillation", "Second harmonic generation", "Raman scattering", "Stimulated emission"],
                correctAnswer: "Second harmonic generation",
                explanation: "Second harmonic generation (SHG) is a nonlinear optical process where two photons with the same frequency interact with a nonlinear material and are combined to generate a new photon with twice the frequency (half the wavelength)."
            },
            {
                question: "Which of the following is an advantage of using femtosecond lasers in biological imaging?",
                options: ["Longer exposure times", "Minimized thermal damage to tissues", "Increased fluorescence bleaching", "Higher penetration in X-ray regions"],
                correctAnswer: "Minimized thermal damage to tissues",
                explanation: "Femtosecond lasers deliver energy in extremely short pulses, allowing high peak power (needed for nonlinear processes like TPE) but low average power. This minimizes heat deposition and thermal damage compared to continuous wave lasers."
            },
            {
                question: "Which type of light source is most suitable for super-resolution microscopy?",
                options: ["Mercury vapor lamp", "Halogen lamp", "Laser", "Light-emitting diode (LED)"],
                correctAnswer: "Laser",
                explanation: "Lasers are preferred for most super-resolution techniques due to their high intensity (brightness), monochromaticity, and coherence, which are often required for the specific mechanisms (e.g., STED, PALM/STORM)."
            },
            {
                question: "What is the principle of action of photothermal therapy in biophotonics?",
                options: ["Optical scattering", "Heat generation from absorbed light", "Stimulated emission of radiation", "Fluorescence emission"],
                correctAnswer: "Heat generation from absorbed light",
                explanation: "Photothermal therapy uses agents (or endogenous absorbers) that absorb light (usually NIR) and convert the energy into heat, raising the local temperature to induce cell death (hyperthermia/ablation)."
            },
            {
                question: "Which of the following lasers operates in the infrared region and is commonly used for tissue welding?",
                options: ["Argon laser", "Nd:YAG laser", "Excimer laser", "Dye laser"],
                correctAnswer: "Nd:YAG laser",
                explanation: "The Nd:YAG laser (typically emitting at 1064 nm in the near-infrared) is widely used for applications requiring deeper tissue penetration and thermal effects, such as tissue welding and coagulation."
            }
        ]
   },
   // ------------- WEEK 6 -------------
   {
        week: "Week 6", // Optical and Spectroscopic Techniques
        questions: [
            {
                question: "Which type of microscopy uses a special filter to block direct light from the specimen and only allow scattered light to reach the objective lens?",
                options: ["Bright-field microscopy", "Dark-field microscopy", "Phase-contrast microscopy", "Fluorescence microscopy"],
                correctAnswer: "Dark-field microscopy",
                explanation: "Dark-field microscopy blocks direct illumination; only light scattered by the specimen enters the objective, creating a bright image on a dark background."
            },
            {
                question: "What happens to the appearance of dense structures within a specimen in dark field microscopy?",
                options: ["They appear bright.", "They appear dark.", "They emit fluorescence.", "They show a rainbow color pattern."],
                correctAnswer: "They appear bright.",
                explanation: "Dense structures in dark-field scatter light effectively, making them appear bright against the non-scattering dark background."
            },
            {
                question: "Name the Fluorescence Resonance Energy Transfer based probe, which is hugely used in RT-PCR to determine SARS Cov2",
                options: ["SYBR green", "Molecular Beacon", "Taq-man probe", "Eclipse probe"],
                correctAnswer: "Taq-man probe",
                explanation: "Taq-man probe is a FRET-based probe used in RT-PCR. Its fluorescence increases as it's cleaved during target DNA amplification, commonly used for SARS-CoV-2 detection."
            },
            {
                question: "Which property of light is utilized in OCT to achieve depth information in tissues?",
                options: ["Refraction.", "Diffraction.", "Polarization.", "Coherence."],
                correctAnswer: "Coherence.",
                explanation: "OCT uses low-coherence interferometry. Only light reflected from specific depths interferes with reference light, enabling depth-resolved imaging."
            },
            {
                question: "Which microscopy technique uses a beam of electrons to image a sample?",
                options: ["Transmission Electron Microscopy (TEM)", "Scanning Electron Microscopy (SEM)", "Atomic Force Microscopy (AFM)", "All of the above"],
                correctAnswer: "Transmission Electron Microscopy (TEM)",
                explanation: "Transmission Electron Microscopy (TEM) uses a beam of electrons transmitted through an ultra-thin sample to visualize internal structures. (SEM also uses electrons, but for surface imaging)."
            },
            {
                question: "Which technique is commonly used to visualize GFP in cells or tissues?",
                options: ["Western blotting", "Polymerase chain reaction (PCR)", "Fluorescence microscopy", "Mass spectrometry"],
                correctAnswer: "Fluorescence microscopy",
                explanation: "Fluorescence microscopy directly visualizes intrinsically fluorescent molecules like GFP by exciting them with specific wavelengths and detecting their emission."
            },
            {
                question: "Wave that is used in diagnostic ultrasound is",
                options: ["Electromagnetic waves", "Longitudinal wave", "Transverse wave", "None of them"],
                correctAnswer: "Longitudinal wave",
                explanation: "Diagnostic ultrasound uses high-frequency sound, which propagates through tissue as mechanical longitudinal (compression) waves."
            },
            {
                question: "Which technique is used to analyze the elemental composition of a sample?",
                options: ["Energy Dispersive X-ray Spectroscopy (EDS)", "Scanning Electron Microscopy (SEM)", "Transmission Electron Microscopy (TEM)", "All of the above"],
                correctAnswer: "Scanning Electron Microscopy (SEM)",
                explanation: "While EDS is the technique for elemental analysis (detecting X-rays), it's typically performed using the electron beam of an SEM, which also provides surface imaging."
            },
            {
                question: "What is the key requirement for FRET to occur?",
                options: [
                    "The emission spectrum of the donor fluorophore must overlap with the excitation spectrum of the acceptor fluorophore.",
                    "The donor and acceptor fluorophores must be chemically identical.",
                    "The donor and acceptor fluorophores must be far apart.",
                    "The donor fluorophore must have a higher excitation wavelength than the acceptor fluorophore."
                ],
                correctAnswer: "The emission spectrum of the donor fluorophore must overlap with the excitation spectrum of the acceptor fluorophore.",
                explanation: "Key FRET requirement: The donor's emitted light energy (emission spectrum) must match the energy the acceptor can absorb (excitation spectrum)."
            },
            {
                question: "What is the typical depth of penetration of OCT?",
                options: ["A few millimeters", "A few centimeters", "A few meters", "A few kilometers"],
                correctAnswer: "A few millimeters",
                explanation: "OCT penetration depth in biological tissue is limited by light scattering, typically reaching only 1-3 millimeters."
            }
        ]
   },
   // ------------- WEEK 7 -------------
   {
        week: "Week 7", // Optical and Spectroscopic Techniques / Biosensors
        questions: [
            {
                question: "Which of the following techniques is commonly used for label-free detection in biosensors?",
                options: ["Fluorescence spectroscopy", "Surface-enhanced Raman spectroscopy (SERS)", "Chemiluminescence", "Electrochemical impedance spectroscopy"],
                correctAnswer: "Surface-enhanced Raman spectroscopy (SERS)",
                explanation: "SERS provides a characteristic vibrational fingerprint of molecules without requiring labels. It's highly sensitive when molecules are near plasmonic nanostructures, making it suitable for label-free biosensing. Electrochemical impedance spectroscopy is also label-free, but SERS is listed as the optical/spectroscopic option."
            },
            {
                question: "What is the primary purpose of a transducer in a biosensor?",
                options: ["To generate heat", "To amplify the signal", "To convert a biological response into a measurable signal", "To store data"],
                correctAnswer: "To convert a biological response into a measurable signal",
                explanation: "The transducer is the core component that converts the biological recognition event (e.g., binding of an analyte to a receptor) into a detectable physical signal (e.g., optical, electrical, thermal)."
            },
            {
                question: "Which property of nanomaterials makes them ideal for enhancing biosensing performance?",
                options: ["High electrical conductivity", "Large surface area-to-volume ratio", "Low melting point", "High density"],
                correctAnswer: "Large surface area-to-volume ratio",
                explanation: "The large surface area-to-volume ratio of nanomaterials allows for higher loading of recognition elements (antibodies, enzymes, etc.) and provides more sites for interaction with the analyte, enhancing sensitivity and performance."
            },
            {
                question: "Which of the following optical methods is commonly used for real-time monitoring of biomolecular interactions?",
                options: ["Confocal microscopy", "Fluorescence resonance energy transfer (FRET)", "Surface plasmon resonance (SPR)", "Transmission electron microscopy (TEM)"],
                correctAnswer: "Surface plasmon resonance (SPR)",
                explanation: "SPR is a label-free optical technique that detects changes in the refractive index near a sensor surface caused by biomolecular binding events, allowing for real-time monitoring of interaction kinetics (association/dissociation)."
            },
            {
                question: "In what ways can metamaterial sensors be customized for specific applications?",
                options: ["By changing their color", "By altering their shape and structure", "By adjusting their weight", "By increasing their transparency"],
                correctAnswer: "By altering their shape and structure",
                explanation: "Metamaterials derive their unique electromagnetic properties from their precisely engineered sub-wavelength structures. Altering the shape, size, and arrangement of these structures allows tuning of their resonant frequencies and interactions with light for specific sensing applications."
            },
            {
                question: "Which parameter primarily affects the sensitivity of a plasmonic biosensor?",
                options: ["Shape and size of metallic nanoparticles", "Electrical conductivity of the medium", "Temperature of the surrounding environment", "Concentration of the analyte"],
                correctAnswer: "Shape and size of metallic nanoparticles",
                explanation: "The plasmon resonance (both LSPR in nanoparticles and SPR on films) is highly dependent on the size, shape, material, and surrounding dielectric environment of the metallic nanostructures. These factors directly influence the sensor's sensitivity to binding events."
            },
            {
                question: "Which of the following is a commonly used recognition element in aptamer-based biosensors?",
                options: ["Antibodies", "DNA or RNA molecules", "Enzymes", "Metallic nanoparticles"],
                correctAnswer: "DNA or RNA molecules",
                explanation: "Aptamers are short, single-stranded DNA or RNA sequences selected through an in vitro process (SELEX) to bind specifically to target molecules (analytes), serving as synthetic recognition elements."
            },
            {
                question: "What is a primary advantage of photonic crystal biosensors?",
                options: ["High mechanical stability", "Cost-effectiveness", "Ability to confine light and enhance sensitivity", "Resistance to environmental changes"],
                correctAnswer: "Ability to confine light and enhance sensitivity",
                explanation: "Photonic crystals are periodic structures that can manipulate light propagation. They can create resonant cavities or slow light effects that strongly confine light, enhancing light-matter interactions and increasing sensitivity to changes in refractive index caused by analyte binding."
            },
            {
                question: "Which type of nanostructure is primarily used for localized surface plasmon resonance (LSPR) in biosensors?",
                options: ["Quantum dots", "Metallic nanoparticles", "Carbon nanotubes", "Magnetic nanoparticles"],
                correctAnswer: "Metallic nanoparticles",
                explanation: "LSPR is the collective oscillation of conduction electrons in metallic nanoparticles (typically gold or silver) when excited by light. Changes in the local refractive index upon analyte binding shift the LSPR peak, forming the basis of LSPR biosensors."
            },
            {
                question: "In fluorescence-based biosensors, what is the purpose of a fluorophore?",
                options: ["To act as a recognition element", "To amplify the analyte concentration", "To emit light upon excitation", "To provide structural stability to the biosensor"],
                correctAnswer: "To emit light upon excitation",
                explanation: "The fluorophore acts as the signaling component. It absorbs excitation light and emits fluorescence, the intensity or wavelength of which changes upon the binding event detected by the recognition element, thus reporting the presence or concentration of the analyte."
            }
        ]
   },
   // ------------- WEEK 8 -------------
    {
        week: "Week 8", // PDT/PTT
        questions: [
            {
                question: "The light source used in PDT is typically:",
                options: ["UV light", "Visible light", "Infrared light", "Microwave radiation"],
                correctAnswer: "Visible light",
                explanation: "Most photosensitizers used in Photodynamic Therapy (PDT) are activated by visible light, often in the red or near-infrared region (630-800 nm) where light penetrates tissue more effectively."
            },
            {
                question: "In PTT, how does heat contribute to the treatment of diseases, particularly cancer?",
                options: ["It promotes cell division.", "It induces apoptosis (cell death).", "It stimulates angiogenesis.", "It enhances DNA repair."],
                correctAnswer: "It induces apoptosis (cell death).",
                explanation: "Photothermal Therapy (PTT) uses light-absorbing agents to generate localized heat (hyperthermia). Elevated temperatures (typically >43°C) damage cellular components and can trigger programmed cell death (apoptosis) or necrosis in targeted (e.g., cancer) cells."
            },
            {
                question: "Which of the following types of cancer is commonly treated with PDT?",
                options: ["Skin cancer", "Lung cancer", "Breast cancer", "All of the above"],
                correctAnswer: "Skin cancer",
                explanation: "PDT is particularly effective and approved for various types of skin cancer (like basal cell carcinoma, squamous cell carcinoma in situ, actinic keratosis) due to the accessibility of the lesions to light. It's also used for certain lung, esophageal, and other cancers."
            },
            {
                question: "The photosensitizer used in PDT is typically administered:",
                options: ["Orally", "Topically", "Intravenously", "All of the above"],
                correctAnswer: "Intravenously", // Or Topically, depending on application - Intravenously is common for deeper tumors. Let's keep the original answer.
                explanation: "Photosensitizers can be administered intravenously (for systemic distribution or targeting deeper tumors), topically (for skin lesions), or sometimes orally, depending on the drug and the target condition. Intravenous administration is common."
            },
            {
                question: "What is the advantage of using PDT for certain cancers in comparison to traditional treatments like surgery?",
                options: ["Lower cost", "Faster recovery time", "Less invasive with minimal scarring", "Higher success rates"],
                correctAnswer: "Less invasive with minimal scarring",
                explanation: "PDT is generally less invasive than surgery, often performed on an outpatient basis, and typically results in less scarring and better cosmetic outcomes, especially for superficial lesions."
            },
            {
                question: "A program cell death process where except plasma membrane every cell organelle breakdown is known as",
                options: ["Necrosis", "Apoptosis", "Autophagy", "Both b & c"],
                correctAnswer: "Apoptosis", // This definition is slightly inaccurate, but Apoptosis fits best. Autophagy is degradation *within* the cell, not necessarily full breakdown. Necrosis is uncontrolled.
                explanation: "Apoptosis is programmed cell death characterized by specific morphological changes like cell shrinkage, nuclear fragmentation, chromatin condensation, and formation of apoptotic bodies, usually without significant inflammation. While organelles are eventually broken down, the initial stages focus on controlled dismantling."
            },
            {
                question: "Typical output power is essential for efficient Photo dynamic therapy with porphyrin is",
                options: ["0.5-1 W", "2-2.5 W", "1-2 W", "all are true"],
                correctAnswer: "1-2 W", // This is highly dependent on the specific setup, area, drug, time. Let's assume this was the intended range for the context.
                explanation: "The required laser power depends on the treatment area, photosensitizer concentration, and desired light dose (fluence rate x time). Power levels in the range of hundreds of mW to a few Watts are often used, aiming for specific fluence rates (e.g., 50-200 mW/cm²). 1-2W could be typical for some applications."
            },
            {
                question: "Advantage of using laser as a light source for photo dynamic therapy is",
                options: ["Large beam divergence", "Broad field irradiation", "Broad spectral width", "Highly monochromatic"],
                correctAnswer: "Highly monochromatic",
                explanation: "Lasers provide highly monochromatic (single wavelength) light that can be precisely matched to the absorption peak of the photosensitizer, maximizing its activation efficiency. They also offer high power density and can be delivered via optical fibers. Refer lecture 38."
            },
            {
                question: "The light source used in PDT should have a wavelength that:",
                options: ["Matches the absorption spectrum of the photosensitizer", "Is shorter than the absorption spectrum of the photosensitizer", "Is longer than the absorption spectrum of the photosensitizer", "Does not affect the photosensitizer"],
                correctAnswer: "Matches the absorption spectrum of the photosensitizer",
                explanation: "To be effective, the light source's wavelength must overlap significantly with an absorption peak of the photosensitizer to efficiently excite it and initiate the photochemical reactions leading to cell death."
            },
            {
                question: "What is the primary medical application of Verteporfin?",
                options: ["Gastrointestinal cancer treatment", "Skin cancer treatment", "Treatment of bacterial infections", "Age-related macular degeneration (AMD) therapy"],
                correctAnswer: "Age-related macular degeneration (AMD) therapy",
                explanation: "Verteporfin (Visudyne) is a photosensitizer specifically approved for PDT treatment of the 'wet' form of age-related macular degeneration (AMD), where it targets abnormal blood vessels in the retina."
            }
        ]
   },
   // ------------- WEEK 9 -------------
    {
        week: "Week 9",
        questions: [
            {
                question: "Light-induced cell death, a technique used in tissue engineering, is often referred to as:",
                options: ["Apoptosis", "Optogenetics", "Photothermal therapy", "Photoablation"],
                correctAnswer: "Photothermal therapy",
                explanation: "Photothermal therapy involves the use of light to heat and destroy cells. This technique can be used to eliminate unwanted cells, such as cancer cells."
            },
            {
                question: "What is a scaffold in tissue engineering?",
                options: [
                    "A three-dimensional structure that provides support for cell growth",
                    "A source of growth factors",
                    "A type of cell",
                    "A bioreactor"
                ],
                correctAnswer: "A three-dimensional structure that provides support for cell growth",
                explanation: "A scaffold provides a physical structure for cells to attach to and grow. It also provides a microenvironment that can influence cell behaviour and differentiation."
            },
            {
                question: "What does LASIK stand for?",
                options: [
                    "Laser-Assisted Subepithelial Keratectomy",
                    "Laser-Activated Stromal Epithelial Keratotomy",
                    "Laser-Assisted In Situ Keratomileusis",
                    "Laser-Aided Superficial Epithelial Keratoplasty"
                ],
                correctAnswer: "Laser-Assisted In Situ Keratomileusis",
                explanation: "LASIK stands for Laser-Assisted In Situ Keratomileusis. It involves reshaping the cornea with a laser to correct refractive errors. Refer lecture 44."
            },
            {
                question: "The amount of time that it takes an object to return to the ambient temperature following heating is known as:",
                options: ["Fluence rate", "Thermal relaxation time", "Dosimetry", "Exposure duration"],
                correctAnswer: "Thermal relaxation time",
                explanation: "The thermal relaxation time is the time it takes for a heated object to return to its original temperature. It's influenced by factors such as the object's material properties, size, and the surrounding environment."
            },
            {
                question: "Which laser is commonly used for treating port wine stains?",
                options: ["CO2 laser", "Excimer laser", "YAG laser", "Argon laser"],
                correctAnswer: "YAG laser",
                explanation: "The YAG laser is commonly used in the treatment of port wine stains due to its ability to target blood vessels without damaging surrounding skin. Refer lecture 42"
            },
            {
                question: "Most used laser to treat ophthalmic disorder like retinal tears or retinal blood occlusion is:",
                options: ["UV laser", "IR laser", "Near visible laser", "None of these"],
                correctAnswer: "Near visible laser",
                explanation: "Near-infrared lasers, particularly those with wavelengths around 810 nm, are commonly used in ophthalmic procedures like retinal tear repair and retinal blood vessel occlusion. These lasers can be precisely focused on the target tissue, minimizing damage to surrounding healthy tissue."
            },
            {
                question: "What is a frenectomy?",
                options: [
                    "Surgical removal of a skin lesion",
                    "Procedure to correct a deviated septum",
                    "Reconstruction of a damaged tissue",
                    "Surgical removal of a frenulum"
                ],
                correctAnswer: "Surgical removal of a frenulum",
                explanation: "A frenectomy is a surgical procedure to remove a frenulum, which is a small fold of tissue that restricts the movement of an organ or structure."
            },
            {
                question: "What is a bioreactor used for in tissue engineering?",
                options: [
                    "Culturing cells",
                    "Delivering nutrients and oxygen to cells",
                    "Removing waste products from cells",
                    "All of the above"
                ],
                correctAnswer: "All of the above",
                explanation: "Bioreactors are used to culture cells, deliver nutrients and oxygen, and remove waste products. They provide a controlled environment that supports cell growth and differentiation."
            },
            {
                question: "Small oil-producing gland present in the skin of mammals is known as:",
                options: ["Stratum basale", "Stratum granulosum", "Sweat gland", "Sebaceous gland"],
                correctAnswer: "Sebaceous gland",
                explanation: "Sebaceous glands are small oil-producing glands found in the skin of mammals. They produce sebum, an oily substance that helps to moisturize the skin and hair."
            },
            {
                question: "Thermal relaxation time can be measured using:",
                options: ["Infrared thermography", "Thermocouples", "Optical pyrometry", "All of the above"],
                correctAnswer: "All of the above",
                explanation: "All of these techniques can be used to measure thermal relaxation time:\n•\tInfrared thermography: This technique measures the temperature distribution on the surface of an object using infrared radiation.\n•\tThermocouples: These devices can be attached to the surface of an object to directly measure its temperature.\n•\tOptical pyrometry: This technique measures temperature based on the intensity of light emitted by an object.\nThe choice of technique depends on the specific application and the desired level of accuracy."
            }
        ]
    },
    // ------------- WEEK 10 -------------
    {
        week: "Week 10",
        questions: [
            {
                question: "What is the main function of the trapping force in optical tweezers?",
                options: [
                    "To repel particles from the focal point",
                    "To attract particles toward the laser focus",
                    "To stabilize particles against thermal motion",
                    "To enhance fluorescence emission"
                ],
                correctAnswer: "To attract particles toward the laser focus",
                explanation: "The trapping force in optical tweezers attracts particles toward the focal point of the laser, where the gradient force is maximized, allowing stable trapping."
            },
            {
                question: "Which of the following is a key factor influencing the efficiency of optical trapping?",
                options: [
                    "Laser wavelength",
                    "Particle size",
                    "Refractive index mismatch",
                    "All of the above"
                ],
                correctAnswer: "All of the above",
                explanation: "The efficiency of optical trapping is influenced by the laser wavelength, particle size, and refractive index mismatch between the particle and the surrounding medium."
            },
            {
                question: "What is the typical power range of lasers used in optical tweezers?",
                options: [
                    "Milliwatts to a few watts",
                    "Kilowatts",
                    "Microwatts",
                    "Terawatts"
                ],
                correctAnswer: "Milliwatts to a few watts",
                explanation: "Lasers used in optical tweezers typically operate in the range of milliwatts to a few watts, sufficient to trap and manipulate microscopic particles without damaging them."
            },
            {
                question: "Which of the following is a critical application of optical tweezers in single-molecule studies?",
                options: [
                    "Measuring intermolecular forces",
                    "Observing macroscopic properties",
                    "Generating energy",
                    "Analyzing chemical composition"
                ],
                correctAnswer: "Measuring intermolecular forces",
                explanation: "Optical tweezers are extensively used in single-molecule studies to measure forces such as those between DNA strands or protein interactions with high precision."
            },
            {
                question: "What is the primary mechanism by which laser zona drilling facilitates fertilization?",
                options: [
                    "Enhancing the refractive index of the oocyte",
                    "Creating an opening in the zona pellucida",
                    "Modifying the DNA of sperm cells",
                    "Heating the cytoplasm"
                ],
                correctAnswer: "Creating an opening in the zona pellucida",
                explanation: "Laser zona drilling creates a precise opening in the zona pellucida, allowing sperm to access the oocyte for fertilization."
            },
            {
                question: "Which type of laser is commonly used for precision optoinjection?",
                options: [
                    "Ultraviolet lasers",
                    "Infrared lasers",
                    "Pulsed femtosecond lasers",
                    "Continuous wave lasers"
                ],
                correctAnswer: "Pulsed femtosecond lasers",
                explanation: "Pulsed femtosecond lasers are commonly used in optoinjection due to their ability to deliver highly localized energy without damaging surrounding material."
            },
            {
                question: "What is the primary advantage of using lasers in non-invasive optoinjection techniques?",
                options: [
                    "Rapid heating of the cell",
                    "Increased genetic material concentration",
                    "Targeted delivery without physical contact",
                    "Enhanced cell permeability via mechanical force"
                ],
                correctAnswer: "Targeted delivery without physical contact",
                explanation: "Laser-based optoinjection allows for precise delivery of genetic material without direct physical contact, reducing damage to the cell."
            },
            {
                question: "What is the force that enables optical tweezers to trap microscopic particles?",
                options: [
                    "Gravitational force",
                    "Dielectric force",
                    "Gradient force",
                    "Magnetic force"
                ],
                correctAnswer: "Gradient force",
                explanation: "Optical tweezers use the gradient force generated by the intensity profile of a focused laser beam to trap particles."
            },
            {
                question: "Which property of the laser beam is most important for the manipulation of nanoparticles?",
                options: [
                    "Divergence",
                    "Wavelength",
                    "Polarization",
                    "Intensity gradient"
                ],
                correctAnswer: "Intensity gradient",
                explanation: "The intensity gradient of the laser beam is critical for manipulating nanoparticles, as it creates the necessary forces to trap and control their movement."
            },
            {
                question: "In laser-assisted cell surgery, what is the role of a femtosecond laser?",
                options: [
                    "It selectively absorbs water molecules",
                    "It creates precise incisions with minimal thermal damage",
                    "It induces fluorescence for imaging",
                    "It stimulates cell growth"
                ],
                correctAnswer: "It creates precise incisions with minimal thermal damage",
                explanation: "Femtosecond lasers are ideal for cell surgery as they deliver high-precision energy pulses that minimize thermal damage to the surrounding tissue."
            }
        ]
    },
    // ------------- WEEK 11 -------------
    {
        week: "Week 11",
        questions: [
            {
                question: "The unique properties of nanoparticles arise from:",
                options: ["Increased surface area", "Quantum size effects", "Both a and b", "None of the above"],
                correctAnswer: "Both a and b",
                explanation: "The unique properties of nanoparticles arise from both increased surface area and quantum size effects."
            },
            {
                question: "Plant-based nanoparticles can have:",
                options: ["Antimicrobial properties", "Antioxidant properties", "Anti-inflammatory properties", "All of the above"],
                correctAnswer: "All of the above",
                explanation: "Plant-based nanoparticles can exhibit antimicrobial, antioxidant, and anti-inflammatory properties."
            },
            {
                question: "What is the primary purpose of photolithography in semiconductor manufacturing?",
                options: ["To deposit thin films of materials", "To etch patterns into a substrate", "To create electrical connections between components", "To transfer a pattern from a mask to a photosensitive material"],
                correctAnswer: "To transfer a pattern from a mask to a photosensitive material",
                explanation: "Photolithography is primarily used to transfer patterns from a mask to a photosensitive material in semiconductor manufacturing."
            },
            {
                question: "Who is credited with the invention of the integrated circuit?",
                options: ["Jack Kilby and Robert Noyce", "Nikola Tesla", "Thomas Edison", "William Shockley"],
                correctAnswer: "Jack Kilby and Robert Noyce",
                explanation: "Jack Kilby and Robert Noyce are credited with the invention of the integrated circuit."
            },
            {
                question: "What is the main limitation of Electron Beam Lithography?",
                options: ["Low resolution", "High cost", "Low throughput", "All of the above"],
                correctAnswer: "Low throughput",
                explanation: "The main limitation of Electron Beam Lithography is its low throughput."
            },
            {
                question: "What is the role of the molecular or atomic beams in MBE?",
                options: ["To cool the substrate", "To heat the growth chamber", "To supply the epitaxial growth material", "To create a vacuum in the chamber"],
                correctAnswer: "To supply the epitaxial growth material",
                explanation: "In Molecular Beam Epitaxy (MBE), molecular or atomic beams are used to supply the epitaxial growth material."
            },
            {
                question: "Biochips are used in:",
                options: ["Drug discovery", "Medical diagnostics", "Environmental monitoring", "All of the above"],
                correctAnswer: "All of the above",
                explanation: "Biochips are used in drug discovery, medical diagnostics, and environmental monitoring."
            },
            {
                question: "How is fluorescence used in DNA microarray experiments?",
                options: ["To heat the microarray", "To amplify DNA sequences", "To detect and measure gene expression levels", "To generate radiofrequency signals"],
                correctAnswer: "To detect and measure gene expression levels",
                explanation: "Fluorescence is used in DNA microarray experiments to detect and measure gene expression levels."
            },
            {
                question: "Which of the following is NOT a key step in the photolithography process?",
                options: ["Photoresist application", "Exposure to light", "Development", "Ion implantation"],
                correctAnswer: "Ion implantation",
                explanation: "Ion implantation is not a key step in the photolithography process."
            },
            {
                question: "How are DNA probes attached to a microarray slide?",
                options: ["Physical adsorption", "Covalent bonding", "Electrostatic interaction", "All of the above"],
                correctAnswer: "Covalent bonding",
                explanation: "DNA probes are attached to microarray slides through covalent bonding."
            }
        ]
    },
    // ------------- WEEK 12 -------------
    {
        week: "Week 12",
        questions: [
            {
                question: "Which imaging technique uses infrared light to create high-resolution cross-sectional images of tissues?",
                options: ["Fluorescence microscopy", "Optical coherence tomography (OCT)", "X-ray imaging", "Positron emission tomography (PET)"],
                correctAnswer: "Optical coherence tomography (OCT)",
                explanation: "OCT uses infrared light to create high-resolution cross-sectional images of tissues."
            },
            {
                question: "Which imaging technique in neurophotonics allows for high-resolution imaging of neural structures in living organisms?",
                options: ["X-ray imaging", "Magnetic Resonance Imaging (MRI)", "Two-photon microscopy", "Computed Tomography (CT) scan"],
                correctAnswer: "Two-photon microscopy",
                explanation: "Two-photon microscopy is used for high-resolution imaging of neural structures in living organisms."
            },
            {
                question: "What is the main advantage of OCT over traditional imaging techniques?",
                options: ["Higher radiation exposure", "Lower resolution", "Non-invasiveness", "Limited depth penetration"],
                correctAnswer: "Non-invasiveness",
                explanation: "The main advantage of OCT is its non-invasive nature, allowing imaging without damaging the tissue."
            },
            {
                question: "Which type of biological tissue is often analyzed using Functional Near-Infrared Spectroscopy (fNIRS)?",
                options: ["Bone", "Skin", "Muscle", "Brain"],
                correctAnswer: "Brain",
                explanation: "fNIRS is commonly used to analyze brain tissue and measure brain activity."
            },
            {
                question: "Which of the following is a commonly used light-sensitive protein in Optogenetics?",
                options: ["Green fluorescent protein (GFP)", "Red blood cells", "Chlorophyll", "Insulin"],
                correctAnswer: "Green fluorescent protein (GFP)",
                explanation: "GFP is a commonly used light-sensitive protein in optogenetics for visualizing and controlling neural activity."
            },
            {
                question: "What does the term 'coherence' refer to in Optical Coherence Tomography?",
                options: ["Uniformity of Light Waves", "Consistency of Image Resolution", "Alignment of Optical Components", "Stability of the Light Source"],
                correctAnswer: "Uniformity of Light Waves",
                explanation: "In OCT, coherence refers to the uniformity of light waves, which is used to measure the time delay of reflected light."
            },
            {
                question: "What does the term 'multiphoton excitation' refer to in Two-Photon Microscopy?",
                options: ["Absorption of two photons by a single molecule simultaneously", "Emission of two photons from a molecule at different times", "Scattering of photons by molecules in random directions", "Combination of photons from two different light sources"],
                correctAnswer: "Absorption of two photons by a single molecule simultaneously",
                explanation: "Multiphoton excitation in Two-Photon Microscopy refers to the simultaneous absorption of two photons by a single molecule."
            },
            {
                question: "Which part of the eye is often imaged using OCT to assess retinal health?",
                options: ["Cornea", "Lens", "Retina", "Sclera"],
                correctAnswer: "Retina",
                explanation: "OCT is commonly used to image the retina to assess its health and detect various retinal conditions."
            },
            {
                question: "Which of the following is an application of neurophotonics in the field of neurology?",
                options: ["Diagnosis of infectious diseases", "Treatment of cardiovascular disorders", "Monitoring neural activity during learning and memory", "Bone density assessment"],
                correctAnswer: "Monitoring neural activity during learning and memory",
                explanation: "Neurophotonics is used to monitor neural activity during learning and memory processes."
            },
            {
                question: "Which parameter is commonly measured using functional near-infrared spectroscopy (fNIRS)?",
                options: ["Blood glucose levels", "Hemoglobin oxygenation", "Electrical conductivity", "Cell viability"],
                correctAnswer: "Hemoglobin oxygenation",
                explanation: "fNIRS is commonly used to measure hemoglobin oxygenation levels in tissues."
            }
        ]
    }
    // --- End of Weeks Data ---
];