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
                question: "Name the receptor the Corona virus (SARS-CoV-2) uses to enter the host cell",
                options: ["Spike protein", "ACE-2", "Capsule", "RNA"],
                correctAnswer: "ACE-2",
                explanation: "The Spike protein on the surface of SARS-CoV-2 binds to the ACE-2 (Angiotensin-converting enzyme 2) receptor found on the surface of many human cells, facilitating viral entry."
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
                question: "In fluorescence microscopy, what process prepares a fluorophore to emit light?",
                options: ["Photon scattering", "Electron excitation by light absorption", "Molecular vibration", "Energy transfer through heat"],
                correctAnswer: "Electron excitation by light absorption",
                explanation: "In fluorescence microscopy, a fluorophore absorbs light energy (photon), exciting an electron to a higher energy state. The subsequent return to the ground state results in the emission of light (fluorescence)."
            },
            {
                question: "What range of wavelengths is typically used in near-infrared (NIR) spectroscopy?",
                options: ["400 nm to 700 nm", "700 nm to 2500 nm", "100 nm to 400 nm", "2500 nm to 5000 nm"],
                correctAnswer: "700 nm to 2500 nm",
                explanation: "Near-infrared spectroscopy operates in the wavelength range of approximately 700 nm to 2500 nm, bridging the gap between visible light and mid-infrared, useful for analyzing molecular overtones and combinations."
            },
            {
                question: "In optical coherence tomography (OCT), what property of light enables depth-resolved imaging?",
                options: ["Amplitude", "Coherence", "Frequency", "Dispersion"],
                correctAnswer: "Coherence",
                explanation: "OCT uses low-coherence interferometry. The coherence property of light allows interference patterns to form only when light paths are matched within the coherence length, enabling precise measurement of time-of-flight differences from reflections at various tissue depths."
            },
            {
                question: "Which molecule in biological tissues is the primary target for light absorption in near-infrared photothermal therapy?",
                options: ["Lipids", "Proteins", "Water", "Carbohydrates"],
                correctAnswer: "Water",
                explanation: "In the near-infrared range used for photothermal therapy (often within the 'biological windows'), water is a significant absorber, contributing to the heating effects. Exogenous agents are also often used, but water is a key endogenous absorber."
            },
            {
                question: "Which molecular motion is most effectively detected by Raman spectroscopy but less so by IR spectroscopy?",
                options: ["Asymmetric bending", "Symmetric stretching of non-polar bonds", "Twisting", "Wagging"],
                correctAnswer: "Symmetric stretching of non-polar bonds",
                explanation: "Raman spectroscopy detects vibrations that cause a change in molecular polarizability. Symmetric stretches of non-polar bonds (like C=C or N=N) often have strong Raman signals but weak or no IR absorption (which requires a change in dipole moment)."
            },
            {
                question: "What term describes the scattered light in Raman spectroscopy that has a lower frequency than the incident light?",
                options: ["Rayleigh scattering", "Stokes scattering", "Anti-Stokes scattering", "Elastic scattering"],
                correctAnswer: "Stokes scattering",
                explanation: "Stokes scattering occurs when the scattered photon loses energy to the molecule (exciting a vibrational state), resulting in a lower frequency (longer wavelength) than the incident light."
            },
            {
                question: "What is the primary purpose of using two-photon microscopy in biological imaging?",
                options: ["To increase light scattering", "To image deeper tissue layers with reduced phototoxicity", "To enhance surface imaging", "To measure molecular vibrations"],
                correctAnswer: "To image deeper tissue layers with reduced phototoxicity",
                explanation: "Two-photon microscopy uses lower-energy (longer wavelength) near-infrared photons, which penetrate deeper into scattering tissues and cause less phototoxicity because excitation is confined to the focal volume."
            },
            {
                question: "What is the main source of contrast in photoacoustic imaging?",
                options: ["Light reflection", "Thermal expansion due to light absorption", "Fluorescence emission", "Molecular polarizability"],
                correctAnswer: "Thermal expansion due to light absorption",
                explanation: "Photoacoustic imaging relies on detecting ultrasound waves generated by the rapid thermal expansion of tissue components following absorption of pulsed laser light. Contrast depends on optical absorption."
            },
            {
                question: "Which optical technique is most effective for imaging cellular structures at nanometer resolution?",
                options: ["Confocal microscopy", "Super-resolution fluorescence microscopy", "UV-Vis spectroscopy", "Infrared microscopy"],
                correctAnswer: "Super-resolution fluorescence microscopy",
                explanation: "Super-resolution fluorescence microscopy techniques (like PALM, STORM, STED) overcome the diffraction limit of light (around 200-250 nm), achieving resolutions down to tens of nanometers."
            },
            {
                question: "What is a key limitation of fluorescence spectroscopy when analyzing complex biological samples?",
                options: ["High interference from water absorption", "Inability to detect non-polar molecules", "Autofluorescence from endogenous molecules", "Low penetration depth of infrared light"],
                correctAnswer: "Autofluorescence from endogenous molecules",
                explanation: "Autofluorescence from naturally occurring molecules (like NADH, FAD, collagen, elastin) in biological samples can overlap with the signal from fluorescent probes, reducing signal-to-noise ratio and complicating analysis."
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
                question: "Which type of microscopy uses a special condenser to block direct light and allow only scattered light to form the image?",
                options: ["Bright-field microscopy", "Dark-field microscopy", "Phase-contrast microscopy", "Differential interference contrast microscopy"],
                correctAnswer: "Dark-field microscopy",
                explanation: "Dark-field microscopy employs a condenser with an opaque stop that blocks the central illuminating rays, so only light scattered or diffracted by the specimen enters the objective, making the specimen appear bright against a dark background."
            },
            {
                question: "In dark-field microscopy, how do highly refractive structures in a specimen appear?",
                options: ["Invisible", "Dark with a halo", "Bright against a dark background", "Color-shifted"],
                correctAnswer: "Bright against a dark background",
                explanation: "Structures that scatter or refract light significantly (often due to high refractive index differences) will appear bright against the dark background in dark-field microscopy because they redirect light into the objective."
            },
            {
                question: "Which FRET-based probe is widely utilized in RT-PCR assays for detecting SARS-CoV-2?",
                options: ["SYBR Green", "Scorpion probe", "TaqMan probe", "Molecular Beacon"],
                correctAnswer: "TaqMan probe",
                explanation: "TaqMan probes are hydrolysis probes commonly used in real-time PCR (RT-PCR). They have a fluorophore and a quencher. During PCR amplification, the polymerase's exonuclease activity cleaves the probe, separating the fluorophore from the quencher and generating a signal. This relies on FRET in the intact probe."
            },
            {
                question: "What characteristic of light does optical coherence tomography (OCT) exploit to resolve axial distances in tissue?",
                options: ["Intensity", "Coherence", "Refraction", "Absorption"],
                correctAnswer: "Coherence",
                explanation: "OCT utilizes the low coherence (specifically, short coherence length) of its light source. Interference occurs only when the path lengths of light reflected from the sample and the reference mirror match within this coherence length, providing axial resolution."
            },
            {
                question: "Which microscopy technique relies on electrons passing through a thin specimen to produce an image?",
                options: ["Scanning Electron Microscopy (SEM)", "Transmission Electron Microscopy (TEM)", "Confocal Microscopy", "Scanning Tunneling Microscopy (STM)"],
                correctAnswer: "Transmission Electron Microscopy (TEM)",
                explanation: "TEM forms an image by transmitting a beam of electrons through an ultrathin specimen. Interactions between the electrons and the specimen (scattering, diffraction) create contrast in the resulting image."
            },
            {
                question: "Which imaging method is most commonly employed to observe Green Fluorescent Protein (GFP) in live cells?",
                options: ["Bright-field microscopy", "Fluorescence microscopy", "Electron microscopy", "Infrared spectroscopy"],
                correctAnswer: "Fluorescence microscopy",
                explanation: "Fluorescence microscopy uses specific excitation wavelengths to cause GFP (and its variants) to fluoresce at their characteristic emission wavelengths, allowing visualization of tagged proteins or structures within living cells."
            },
            {
                question: "What type of wave is utilized in diagnostic ultrasound imaging?",
                options: ["Electromagnetic wave", "Longitudinal wave", "Transverse wave", "Surface wave"],
                correctAnswer: "Longitudinal wave",
                explanation: "Diagnostic ultrasound uses high-frequency sound waves, which are longitudinal waves (compressions and rarefactions) that propagate through the tissue."
            },
            {
                question: "Which technique is primarily used to determine the elemental composition of a sample in conjunction with electron microscopy?",
                options: ["Energy Dispersive X-ray Spectroscopy (EDS)", "Fourier Transform Infrared Spectroscopy (FTIR)", "Raman Spectroscopy", "Nuclear Magnetic Resonance (NMR)"],
                correctAnswer: "Energy Dispersive X-ray Spectroscopy (EDS)",
                explanation: "EDS (also known as EDX) is often integrated with SEM or TEM. The electron beam excites atoms in the sample, causing them to emit characteristic X-rays whose energies correspond to specific elements, allowing elemental analysis."
            },
            {
                question: "What condition is essential for Fluorescence Resonance Energy Transfer (FRET) to take place?",
                options: ["The donor and acceptor fluorophores must be identical", "The emission spectrum of the donor must overlap with the acceptor's excitation spectrum", "The donor and acceptor must be separated by more than 100 nm", "The acceptor must emit light at a shorter wavelength than the donor"],
                correctAnswer: "The emission spectrum of the donor must overlap with the acceptor's excitation spectrum",
                explanation: "Effective FRET requires several conditions: close proximity (typically 1-10 nm), favorable dipole orientation, and significant spectral overlap between the donor's emission spectrum and the acceptor's absorption (excitation) spectrum."
            },
            {
                question: "What is the approximate penetration depth of optical coherence tomography (OCT) in biological tissues?",
                options: ["A few millimeters", "A few centimeters", "A few decimeters", "A few meters"],
                correctAnswer: "A few millimeters",
                explanation: "The penetration depth of OCT in most biological tissues is typically limited to 1-3 millimeters due to light scattering and absorption, making it suitable for imaging superficial structures like the retina, skin, and mucous membranes."
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
   }
    // --- End of Weeks Data ---
];