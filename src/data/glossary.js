// ─── Running Glossary ─────────────────────────────────────────────────────────
// Comprehensive terms used in running training plans and athletics

export const GLOSSARY_TERMS = [
  // ── Paces & Effort ──────────────────────────────────────────────────────────
  {
    term: "Easy Pace",
    category: "Pace",
    definition: "A conversational pace where you can speak full sentences without gasping. Typically 60–70% of maximum heart rate. Forms the bulk (80%) of all training volume. Builds aerobic base without accumulated fatigue.",
    example: "For a runner with a 5K personal best of 25 min (~5:00/km), easy pace would be approximately 6:15–7:00/km."
  },
  {
    term: "Tempo Pace (Lactate Threshold)",
    category: "Pace",
    definition: "A 'comfortably hard' pace you could sustain for roughly 45–60 minutes in a race. Corresponds to lactate threshold — the speed at which lactic acid begins to accumulate faster than it can be cleared. Scientifically the most effective pace for improving running economy and VO₂max.",
    example: "For a 5K runner at 25 min, tempo pace is approximately 5:10–5:20/km. You can speak a few words but not full sentences."
  },
  {
    term: "Race Pace",
    category: "Pace",
    definition: "The target average pace per kilometer for a specific goal race. Training at race pace builds neuromuscular patterns specific to the race effort and conditions the body to handle that particular metabolic stress.",
    example: "For sub-50 min 10K, race pace is 5:00/km."
  },
  {
    term: "Recovery Pace",
    category: "Pace",
    definition: "Very easy jogging, slower than easy pace. Used between hard interval repetitions or as a recovery run the day after a hard session. The goal is active recovery — clearing metabolic waste without adding stress.",
    example: "30–60 seconds per kilometre slower than easy pace."
  },
  {
    term: "Stride Pace",
    category: "Pace",
    definition: "Short bursts at faster-than-race pace (approximately 5K pace or slightly faster), typically 15–30 seconds in duration with full recovery between. Not sprinting — controlled and relaxed. Used to activate the neuromuscular system before key workouts or as leg-openers.",
    example: "6 × 20 sec at 5K pace with 60 sec walk recovery after an easy run."
  },
  // ── Training Types ───────────────────────────────────────────────────────────
  {
    term: "Long Run",
    category: "Training Type",
    definition: "The cornerstone of endurance training. Performed weekly at easy pace, building duration and distance progressively. Develops mitochondrial density, fat oxidation, capillarisation, glycogen storage capacity, and mental toughness.",
    example: "For a marathon runner: Saturday long run building from 16 km to 32 km over 18 weeks."
  },
  {
    term: "Interval Training",
    category: "Training Type",
    definition: "Repeated bouts of high-intensity running (at 5K pace or faster) separated by recovery periods. Intervals stress the aerobic system near its maximum capacity (VO₂max), improving cardiac stroke volume, oxygen delivery, and running economy. Classic session types: 400m, 800m, 1000m or 1600m repeats.",
    example: "10 × 400m at 5K pace with 90-second jog recovery."
  },
  {
    term: "Tempo Run",
    category: "Training Type",
    definition: "A sustained continuous run at lactate threshold pace. Trains the body to run faster before lactate accumulates. A 20–40 minute tempo run is a highly effective training stimulus. Also called a 'threshold run.'",
    example: "10 min warm-up → 25 min at threshold pace → 10 min cool-down."
  },
  {
    term: "Fartlek",
    category: "Training Type",
    definition: "Swedish for 'speed play.' Unstructured intervals mixed into an easy run — surges of varying pace and duration based on feel, landmarks, or random bursts. Excellent for beginners to introduce faster running without rigid structure.",
    example: "30 min run with 5 surges of 1–3 min at 5K effort whenever you feel ready."
  },
  {
    term: "Hill Repeats",
    category: "Training Type",
    definition: "Short, intense uphill sprints (6–10% grade, 30 sec–2 min) with easy downhill jog recovery. Builds leg strength, power, and running economy. Effective substitute for track intervals. Reduces impact forces compared to flat intervals.",
    example: "8 × 60 sec uphill at hard effort with slow jog back down."
  },
  {
    term: "Cross-Training",
    category: "Training Type",
    definition: "Non-running aerobic exercise that maintains cardiovascular fitness while reducing impact load. Common forms include cycling, swimming, aqua jogging, elliptical, and rowing. Used on recovery days, during injury, or as supplemental aerobic volume.",
    example: "40 min cycling on the day after a long run."
  },
  {
    term: "Active Recovery",
    category: "Training Type",
    definition: "Very low-intensity movement (easy walk, light yoga, gentle swimming) designed to promote blood circulation and reduce muscle soreness without adding training stress. Preferred over complete inactivity on non-running days.",
    example: "30 min easy walk the day after a race."
  },
  {
    term: "Strides",
    category: "Training Type",
    definition: "Controlled accelerations of 20–30 seconds starting at easy pace, building to roughly 5K effort, then decelerating. Full recovery between each. Used to activate the neuromuscular system without fatiguing the body. Not sprints.",
    example: "4–6 strides at the end of an easy run, each 20 sec on flat ground."
  },
  // ── Race Strategy ────────────────────────────────────────────────────────────
  {
    term: "Negative Split",
    category: "Race Strategy",
    definition: "Running the second half of a race faster than the first half. The most effective race strategy for distance running. Requires restraint in the first half — running 5–10 seconds per km slower than goal pace initially.",
    example: "In a 10K with a goal of 50 min: first 5K in 25:30, second 5K in 24:30."
  },
  {
    term: "Positive Split",
    category: "Race Strategy",
    definition: "Running the first half of a race faster than the second half. Generally results in suboptimal performance due to early glycogen depletion and lactate accumulation. Often happens when runners go out too fast.",
    example: "Going out at 4:40/km when goal is 5:00/km, then fading to 5:20/km in the second half."
  },
  {
    term: "Even Splits",
    category: "Race Strategy",
    definition: "Maintaining a consistent pace per kilometre throughout the race. Requires precise pacing and good race experience. Often combined with a slight negative split.",
    example: "Hitting every kilometre of a 10K within 5 seconds of goal pace."
  },
  {
    term: "Taper",
    category: "Race Strategy",
    definition: "A planned reduction in training volume (and partly intensity) in the weeks before a goal race. Allows the body to recover, repair, and 'supercompensate' — storing more glycogen, repairing muscles, sharpening neuromuscular patterns. The body feels slightly heavy during taper (normal) before feeling fresh at race day.",
    example: "3-week marathon taper: Week 1 reduce by 20%, Week 2 by 40%, Week 3 (race week) by 60%."
  },
  {
    term: "Bonking / Hitting the Wall",
    category: "Race Strategy",
    definition: "The sudden severe fatigue experienced when muscle glycogen stores are depleted — typically around km 30–35 in a marathon. The body shifts to fat as primary fuel, which produces energy more slowly. Proper fueling (carbohydrate gels/drinks every 30–45 min) and pacing prevents bonking.",
    example: "Feeling like legs are made of concrete at mile 20 of a marathon."
  },
  // ── Physiological Terms ───────────────────────────────────────────────────────
  {
    term: "VO₂max",
    category: "Physiology",
    definition: "Maximum rate of oxygen consumption (mL/kg/min). The gold standard measure of aerobic capacity. Elite runners have VO₂max of 70–85+; recreational runners typically 40–55. Improved by interval training at 90–100% max heart rate (VO₂max pace = roughly 3K race pace).",
    example: "A VO₂max of 50 mL/kg/min in a recreational male runner is a solid aerobic base."
  },
  {
    term: "Lactate Threshold (LT)",
    category: "Physiology",
    definition: "The exercise intensity at which blood lactate levels begin to rise exponentially — roughly 85–90% of max heart rate. Running training at or slightly below LT is the most powerful stimulus for improving endurance performance. Tempo runs target this zone.",
    example: "LT corresponds to roughly 10K race pace for trained runners."
  },
  {
    term: "Running Economy",
    category: "Physiology",
    definition: "How efficiently you use oxygen at a given pace. A runner with better economy uses less oxygen to run at the same speed. Improved by strength training, form drills, plyometrics, and accumulated easy miles. Equally important as VO₂max in determining race performance.",
    example: "Two runners with identical VO₂max — the one with better running economy will race faster."
  },
  {
    term: "Glycogen",
    category: "Physiology",
    definition: "The storage form of carbohydrate in muscles and liver. The primary fuel source for running above easy pace. Muscles store approximately 1500–2000 kcal of glycogen — enough for roughly 30–35 km at marathon pace. Carbohydrate loading before a marathon maximises glycogen stores.",
    example: "Taking energy gels every 45 min during a marathon replenishes glycogen to delay fatigue."
  },
  {
    term: "Aerobic Base",
    category: "Physiology",
    definition: "The foundation of endurance training — the accumulated cardiovascular, muscular, and metabolic adaptations from consistent easy-pace running over months and years. A larger aerobic base allows for greater tolerance of higher training loads and faster recovery.",
    example: "A runner who has been consistently running 40 km/week for 2 years has a stronger aerobic base than someone who just started."
  },
  {
    term: "Heart Rate Zones",
    category: "Physiology",
    definition: "Training zones defined by percentage of maximum heart rate (MHR). Zone 1 (50–60% MHR): recovery. Zone 2 (60–70%): easy aerobic — the majority of running should be here. Zone 3 (70–80%): moderate — tempo zone. Zone 4 (80–90%): threshold. Zone 5 (90–100%): VO₂max/sprint.",
    example: "Easy runs should keep heart rate in Zone 2. Most recreational runners run too fast (Zone 3–4) on easy days, limiting aerobic development."
  },
  {
    term: "Periodization",
    category: "Physiology",
    definition: "The systematic organisation of training into phases (base, build, peak, taper) with planned variations in volume, intensity, and focus over weeks and months. Prevents overtraining, ensures peak fitness at race day.",
    example: "16-week marathon plan: Weeks 1–6 base, Weeks 7–12 build, Weeks 13–14 peak, Weeks 15–16 taper."
  },
  // ── Workout Terms ─────────────────────────────────────────────────────────────
  {
    term: "Warm-Up (WU)",
    category: "Workout",
    definition: "Easy running at the start of a workout to gradually increase heart rate, body temperature, blood flow to muscles, and joint lubrication. Essential before any quality session (tempo, intervals, race). Typically 10–15 minutes of easy jogging.",
    example: "10 min easy jog before starting 6 × 400m intervals."
  },
  {
    term: "Cool-Down (CD)",
    category: "Workout",
    definition: "Easy running at the end of a workout to gradually lower heart rate and begin metabolic waste clearance. Reduces risk of blood pooling in the legs. Typically 10–15 minutes of easy jogging followed by static stretching.",
    example: "10 min easy jog + 10 min stretching after a tempo run."
  },
  {
    term: "Repetition (Rep)",
    category: "Workout",
    definition: "A single effort within an interval session. For track intervals: one 400m at goal pace. For strength training: one complete movement of an exercise.",
    example: "In '8 × 400m' — each individual 400m is one repetition."
  },
  {
    term: "Set",
    category: "Workout",
    definition: "A group of consecutive repetitions performed without significant rest. In strength training: 3 sets of 12 reps means performing 12 reps, resting, then repeating twice more.",
    example: "3 sets × 15 reps of calf raises: perform 15 reps, rest 60–90 sec, repeat twice more."
  },
  {
    term: "Recovery Interval",
    category: "Workout",
    definition: "The rest period between interval repetitions. Can be passive (standing/walking) for short, fast intervals (200–400m) or active (easy jogging) for longer intervals (800m+). The ratio of work to rest determines the training stimulus.",
    example: "After each 400m at 5K pace, jog easy for 90 seconds before the next rep."
  },
  {
    term: "Progressive Run",
    category: "Workout",
    definition: "A run that starts at easy pace and progressively gets faster, ending at tempo or race pace. Teaches the body to run fast while fatigued. Excellent half-marathon and marathon prep.",
    example: "10K run: first 4K easy, middle 4K moderate, last 2K at tempo pace."
  },
  // ── Volume & Mileage ──────────────────────────────────────────────────────────
  {
    term: "Weekly Volume / Mileage",
    category: "Volume",
    definition: "The total distance run in a training week. The most important factor in determining aerobic fitness development. Increasing too quickly causes injury. The 10% Rule: don't increase weekly mileage by more than 10% from one week to the next.",
    example: "Week 1: 30 km → Week 2: 33 km (10% increase) → Week 3: 36 km."
  },
  {
    term: "Peak Week",
    category: "Volume",
    definition: "The highest mileage week of a training plan, typically 2–3 weeks before race day, before the taper begins. Represents the highest training stress and adaptation demand of the cycle.",
    example: "In a 16-week marathon plan, Week 13 might be the peak week at 80 km before a 3-week taper."
  },
  {
    term: "Recovery Week (Down Week)",
    category: "Volume",
    definition: "A planned week with reduced mileage (typically 20–30% less than previous week) inserted every 3–4 weeks to allow adaptation and prevent accumulated fatigue from becoming overtraining. The body actually gets fitter during recovery weeks.",
    example: "Weeks 1–3: 40, 43, 47 km → Week 4 (recovery): 35 km → Week 5: 48 km."
  },
  {
    term: "10% Rule",
    category: "Volume",
    definition: "The foundational injury-prevention guideline in running: never increase weekly mileage by more than 10% in a single week. Applies to both total distance and long run distance. Stress fractures, ITBS, and shin splints are commonly caused by violating this rule.",
    example: "Currently running 30 km/week → max next week is 33 km."
  },
  // ── Equipment & Gear ─────────────────────────────────────────────────────────
  {
    term: "Cadence (Steps Per Minute)",
    category: "Form & Equipment",
    definition: "The number of foot strikes per minute. Most elite runners run at 170–185 spm. Lower cadence (155–165) often associated with overstriding and increased injury risk. Increasing cadence by 5–10% can reduce impact forces and improve running economy.",
    example: "If you currently run at 160 spm, target 168–170 spm. Use a metronome app or cadence-specific playlist."
  },
  {
    term: "Heel Strike / Midfoot Strike / Forefoot Strike",
    category: "Form & Equipment",
    definition: "Where the foot lands first during running. Heel striking means landing on the heel ahead of the centre of mass — associated with overstriding. Midfoot (ball under or behind CM) and forefoot landing are generally more efficient for faster running. Landing under your centre of mass is more important than foot strike type.",
    example: "For easy running, heel striking is acceptable if foot lands under body. For faster paces, a midfoot strike is typically more efficient."
  },
  {
    term: "Pronation / Supination",
    category: "Form & Equipment",
    definition: "Pronation is the inward rolling of the foot after landing — normal and necessary for shock absorption. Overpronation (excessive inward roll) can stress knees and shins. Supination (outward roll) is less common. Neutral, stability, or motion-control shoes address different pronation levels.",
    example: "A wet footprint showing the full foot outline indicates flat feet and likely overpronation."
  },
  {
    term: "Drop (Heel-to-Toe Drop)",
    category: "Form & Equipment",
    definition: "The difference in stack height between the heel and forefoot of a running shoe, measured in millimetres. High drop (10–14mm): more cushioning under heel, easier on Achilles. Low drop (0–6mm): promotes more natural forefoot/midfoot mechanics but stresses Achilles more. Transition gradually.",
    example: "Traditional training shoes: 10–12mm drop. Minimalist shoes: 0–4mm drop."
  },
  {
    term: "Shoe Stack Height",
    category: "Form & Equipment",
    definition: "The total thickness of cushioning material under the foot. Super-shoes (carbon-fibre plate + thick foam, e.g., Nike Vaporfly, Adidas Adizero Adios Pro) have 30–40mm stack. Research shows 4% or more improvement in running economy. Now ubiquitous at elite level.",
    example: "The Nike Vaporfly has a stack height of ~40mm with a full-length carbon fibre plate."
  },
  // ── Nutrition & Fueling ───────────────────────────────────────────────────────
  {
    term: "Carbohydrate Loading (Carb Loading)",
    category: "Nutrition",
    definition: "Increasing carbohydrate intake (8–12g/kg body weight/day) in the 2–3 days before a marathon or half marathon to maximise muscle glycogen stores. Combined with reduced training (taper). Most beneficial for races lasting >90 minutes.",
    example: "75 kg runner: 600–900g carbohydrates/day for 2 days before a marathon (pasta, rice, bread, fruit)."
  },
  {
    term: "Gel / Energy Gel",
    category: "Nutrition",
    definition: "Concentrated carbohydrate (20–25g) in gel form, consumed during races or long runs. Typically taken every 30–45 minutes during runs >75 minutes to maintain blood glucose. Must be taken with water, not a sports drink (osmolality issue).",
    example: "Take a gel at 45 min, 90 min, and 2:15 during a marathon."
  },
  {
    term: "Electrolytes",
    category: "Nutrition",
    definition: "Minerals (sodium, potassium, magnesium, chloride) lost in sweat. Essential for muscle contraction and fluid balance. Lost in significant amounts during long runs in hot conditions. Sports drinks or electrolyte tablets replace these. Hyponatremia (low sodium from over-hydration) is a serious marathon risk.",
    example: "Salty sweat (white residue on skin after running) indicates high sodium loss — prioritise electrolyte replacement."
  },
  {
    term: "Hydration Strategy",
    category: "Nutrition",
    definition: "The plan for fluid intake before, during, and after running. Pre-run: 500ml water 2 hrs before. During: 150–250ml every 15–20 min. Post-run: 1.5L per kg body weight lost. Avoid over-hydration (hyponatremia) by not drinking excessively beyond thirst.",
    example: "In a marathon, drink 150–200ml at every water station (approximately every 5 km) rather than gulping large amounts."
  },
  // ── Form & Drills ─────────────────────────────────────────────────────────────
  {
    term: "A-Skip / A-March",
    category: "Form & Drills",
    definition: "Running drill where you march with high knee drive and a pawing-back foot action. Reinforces hip flexion/extension mechanics and proper foot landing under the body. Fundamental drill in warm-up routines for runners.",
    example: "Perform A-skips for 30m before interval training."
  },
  {
    term: "B-Skip",
    category: "Form & Drills",
    definition: "An extension of the A-skip where the elevated knee kicks forward before the foot sweeps back down. Activates hamstrings through their full range of motion and improves stride mechanics.",
    example: "Perform B-skips for 30m as part of a pre-workout dynamic warm-up."
  },
  {
    term: "Anterior Pelvic Tilt",
    category: "Form & Drills",
    definition: "When the front of the pelvis tips down and the back tips up during running — often from tight hip flexors and weak glutes/core. Increases lumbar extension, causing back pain, and reduces glute activation, increasing injury risk.",
    example: "A visible lower back arch and protruding belly button during running indicates anterior pelvic tilt."
  },
  {
    term: "Overstriding",
    category: "Form & Drills",
    definition: "Landing with the foot significantly ahead of the body's centre of mass. Creates a braking force that slows you down and dramatically increases impact loading on the knee and hip. Corrected by increasing cadence and shortening stride.",
    example: "A heel landing 50cm in front of the hips is overstriding. Ideal landing is close to under the hips."
  },
  {
    term: "Running Economy",
    category: "Form & Drills",
    definition: "How efficiently you use oxygen at a given speed. Improved by strength training, plyometrics, form drills, and high-mileage aerobic training. A 5% improvement in running economy can translate to 5 minutes off marathon time.",
    example: "Elite Kenyan runners typically have exceptional running economy due to decades of high-mileage training."
  },
  // ── Common Acronyms ────────────────────────────────────────────────────────────
  {
    term: "RICE / POLICE / PEACE & LOVE",
    category: "Injury & Recovery",
    definition: "First aid acronyms for injury management. RICE (Rest, Ice, Compression, Elevation) — classic protocol. POLICE (Protection, Optimal Loading, Ice, Compression, Elevation) — updated, emphasises graded loading. PEACE & LOVE (Protect, Elevate, Avoid anti-inflammatories, Compress, Educate / Load, Optimise, Vascularisation, Exercise) — current evidence-based approach.",
    example: "After an ankle sprain: PEACE in the first few days, then LOVE to promote tissue healing and strength."
  },
  {
    term: "RPE (Rate of Perceived Exertion)",
    category: "Training",
    definition: "A subjective 1–10 scale of exercise intensity. RPE 1–3: very easy. RPE 4–5: easy to moderate (conversational run). RPE 6–7: tempo/comfortably hard. RPE 8–9: hard/race effort. RPE 10: maximal sprint. Useful when HR data is unavailable.",
    example: "Easy runs: RPE 4–5. Tempo: RPE 6–7. Intervals at 5K pace: RPE 8."
  },
  {
    term: "PR / PB (Personal Record / Personal Best)",
    category: "Race",
    definition: "Your fastest ever time for a specific distance. Also written as PB (Personal Best) — same meaning.",
    example: "My 5K PB is 22:34, and my marathon PR is 3:41:20."
  },
  {
    term: "DNS / DNF / DFL",
    category: "Race",
    definition: "DNS: Did Not Start (registered but didn't race). DNF: Did Not Finish (started but withdrew). DFL: Dead F***ing Last — worn as a badge of honour by endurance runners who finished despite being last. Finishing is the victory.",
    example: "A DNF from injury is better than a permanent injury from continuing."
  },
  {
    term: "BQ (Boston Qualifier)",
    category: "Race",
    definition: "The minimum qualifying time required to enter the Boston Marathon. Varies by age group and gender. As of recent years, being at the BQ standard is not sufficient — runners must be at least 5+ minutes under their BQ to have a high chance of acceptance due to oversubscription.",
    example: "For a male runner aged 35–39, the BQ standard is 3:00:00. To get accepted, aim for 2:54:00."
  },
];

export const GLOSSARY_CATEGORIES = [
  "All",
  "Pace",
  "Training Type",
  "Race Strategy",
  "Physiology",
  "Workout",
  "Volume",
  "Form & Equipment",
  "Form & Drills",
  "Nutrition",
  "Injury & Recovery",
  "Training",
  "Race",
];
