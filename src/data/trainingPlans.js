// ─── Training Plan Data ───────────────────────────────────────────────────────

export const DISTANCES = [
  { id: '5k',  label: '5K',                    km: 5   },
  { id: '10k', label: '10K',                   km: 10  },
  { id: '16k', label: '16K',                   km: 16  },
  { id: '21k', label: 'Half Marathon (21K)',    km: 21  },
  { id: '32k', label: '32K',                   km: 32  },
  { id: '42k', label: 'Full Marathon (42K)',    km: 42  },
];

export const LEVELS = [
  { id: 'beginner',     label: 'Beginner'     },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced',     label: 'Advanced'     },
  { id: 'elite',        label: 'Elite'        },
];

// Day type tokens
const T = {
  REST:     { type: 'Rest'         },
  EASY:     { type: 'Easy Run'     },
  TEMPO:    { type: 'Tempo'        },
  INTERVAL: { type: 'Intervals'    },
  LONG:     { type: 'Long Run'     },
  STRENGTH: { type: 'Strength'     },
  RACE:     { type: 'Race Day'     },
  CROSS:    { type: 'Cross-Train'  },
  STRIDES:  { type: 'Strides'      },
  HILL:     { type: 'Hill Repeats' },
};

// ─── Strength day library ─────────────────────────────────────────────────────
// Elaborated prescriptions used consistently across all plans

const STR = {
  // True-beginner bodyweight lower body
  BEG_LOWER_1: `Bodyweight Squats 3×12 | Reverse Lunges 3×10 each leg | Glute Bridges 3×15 | Calf Raises 3×15 | Side-lying Clamshells 2×15 each side`,
  BEG_LOWER_2: `Wall Sit 3×30 sec | Step-ups (low box) 3×10 each leg | Single-Leg Glute Bridge 3×10 each leg | Standing Calf Raises 3×20 | Bird-Dog 3×10 each side`,
  BEG_LOWER_3: `Squat to Chair 3×12 | Forward Lunges 3×10 each leg | Hip Thrusts (bodyweight) 3×15 | Calf Raises (single leg) 2×12 each | Dead Bug Core 3×8 each side`,
  BEG_LOWER_LIGHT: `Bodyweight Squats 2×10 | Glute Bridges 2×12 | Calf Raises 2×15 | Child's Pose & Hip Flexor Stretch 3×30 sec each`,

  // Intermediate lower body (some weights)
  INT_LOWER_1: `Goblet Squat 3×12 (light-moderate KB/DB) | Dumbbell Romanian Deadlift 3×10 | Bulgarian Split Squat 3×8 each leg | Calf Raises on Step 3×20 | Copenhagen Plank 3×20 sec each side`,
  INT_LOWER_2: `Barbell Back Squat or Leg Press 4×10 | Step-ups with DB 3×12 each leg | Hip Thrust with DB/Bar 4×12 | Nordic Hamstring Curl 3×6 | Single-Leg Calf Raise 3×15 each`,
  INT_LOWER_3: `Deadlift (moderate weight) 3×8 | Lateral Band Walk 3×15 each direction | Glute-Ham Raise 3×8 | Box Jump 3×6 (soft landing focus) | Plank 3×40 sec`,
  INT_LOWER_LIGHT: `Bodyweight Squats 2×12 | Glute Bridges 2×15 | Hip 90/90 Stretch 2×45 sec each | Foam Roll Quads & Calves 5 min`,

  // Advanced lower body (heavier lifting)
  ADV_LOWER_1: `Barbell Back Squat 4×6 (75–80% 1RM) | Romanian Deadlift 4×8 | Bulgarian Split Squat 3×8 each (add DB) | Plyometric Step-up 3×8 each | Copenhagen Adductor Plank 3×25 sec each`,
  ADV_LOWER_2: `Deadlift 4×5 (80% 1RM) | Walking Lunges with DB 4×12 each | Nordic Hamstring Curl 4×6 | Lateral Band Step 3×20 each | Single-Leg Box Jump 3×5 each`,
  ADV_LOWER_3: `Power Clean or Hang Clean 3×4 | Squat Jump 4×5 | Hip Thrust (heavy bar) 4×10 | Calf Raise on Step 4×20 | Pallof Press 3×12 each side`,

  // Upper body / full body
  BEG_UPPER: `Push-ups 3×10 (knee push-ups if needed) | Dumbbell Shoulder Press 3×10 | Dumbbell Row 3×10 each | Plank Hold 3×20 sec | Leg Raises (lying) 3×10`,
  INT_UPPER: `Bench Press or Push-up Progression 4×10 | Dumbbell Row 4×10 each | Overhead Press 3×10 | Lat Pulldown or Pull-up Assisted 3×8 | Plank 3×45 sec | Russian Twist 3×12 each`,
  ADV_UPPER: `Bench Press 4×8 (moderate-heavy) | Barbell Row 4×8 | Overhead Press 4×6 | Pull-ups 4×max reps | Dips 3×10 | Plank with Shoulder Tap 3×10 each`,

  // Core-specific
  BEG_CORE: `Dead Bug 3×8 each side | Bird-Dog 3×10 each side | Plank Hold 3×20 sec | Side Plank 2×15 sec each | Leg Raises (lying) 3×10`,
  INT_CORE: `Plank 3×45 sec | Side Plank 3×30 sec each | Dead Bug 3×10 each | Pallof Press 3×12 each | Cable/Band Anti-Rotation Hold 3×20 sec each | Leg Raises 3×12`,
  ADV_CORE: `Ab Wheel Rollout 4×8 | Pallof Press 4×12 each side | Dragon Flag 3×5 | Hanging Leg Raise 4×10 | Side Plank with Hip Dip 3×12 each | Copenhagen Plank 3×30 sec each`,

  // Full-body circuits
  BEG_CIRCUIT: `3 rounds: Bodyweight Squat 12 | Push-up 10 | Glute Bridge 15 | Plank 20 sec | Reverse Lunge 10 each leg | Rest 90 sec between rounds`,
  INT_CIRCUIT: `3 rounds: Goblet Squat 12 | Push-up 15 | Hip Thrust 12 | Plank 40 sec | DB Row 10 each | Box Jump 6 | Rest 75 sec between rounds`,
  ADV_CIRCUIT: `4 rounds: Back Squat 8 (mod-heavy) | Bench Press 8 | Hip Thrust 10 (heavy) | Pull-up 6 | Plyometric Lunge 8 each | 30 sec bike sprint | Rest 90 sec`,

  // Light / recovery strength
  RECOVERY_STR: `Foam Roll (quads, hamstrings, calves, IT band) 10 min | Cat-Cow 2×10 | Hip 90/90 Stretch 2×45 sec each | Pigeon Pose 2×45 sec each | Calf Stretch on Step 2×30 sec each`,
};

// ─── Day helper ───────────────────────────────────────────────────────────────
function d(day, typeKey, workout, details, dist, pace) {
  return { day, ...T[typeKey], workout, details, distance: dist, pace };
}
function makeWeek(week, theme, days) { return { week, theme, days }; }
function makeCompactPlan({ id, distance, label, level, subCategory, weeks, prerequisite, description, weekPattern }) {
  return { id, distance, label, level, subCategory, weeks, prerequisite, description, weeklyPlan: weekPattern };
}

// ═══════════════════════════════════════════════════════════════════════════════
// 5K PLANS
// ═══════════════════════════════════════════════════════════════════════════════

// ─── 5K Sub 35 — TRUE Beginner (run/walk) ─────────────────────────────────────
const fiveK_sub35_trueBeginner = {
  id: '5k-sub35-beginner', distance: '5k', label: '5K', level: 'beginner',
  subCategory: 'Sub 35 min',
  weeks: 8,
  prerequisite: 'Little or no running background; can walk 30 min comfortably',
  description: '8-week couch-to-5K style plan using run/walk intervals to build up to running 5K in under 35 min (~7:00/km). Perfect first-time 5K plan.',
  weeklyPlan: [
    makeWeek(1,'Walk/Run Introduction',[
      d('Mon','REST','Rest','Light walking or gentle yoga. Focus on good sleep.',null,null),
      d('Tue','EASY','Run/Walk','5 min brisk walk warm-up, then 8×(1 min run + 2 min walk), 5 min walk cool-down',2.5,'~8:30/km run'),
      d('Wed','STRENGTH','Leg Strength & Mobility', STR.BEG_LOWER_1,null,null),
      d('Thu','EASY','Run/Walk','5 min walk, 8×(1 min run + 2 min walk), 5 min walk cool-down',2.5,'~8:30/km run'),
      d('Fri','REST','Rest','20 min easy walk. Stretch hips and calves.',null,null),
      d('Sat','LONG','Easy Walk/Run','5 min walk, 10×(1 min run + 2 min walk), 5 min walk cool-down',3,'~8:30/km run'),
      d('Sun','CROSS','Active Recovery','20–25 min easy cycling or swimming. Keep it gentle.',null,null),
    ]),
    makeWeek(2,'Build Run Time',[
      d('Mon','REST','Rest','Foam roll legs if sore. Sleep 7–8 hrs.',null,null),
      d('Tue','EASY','Run/Walk','5 min walk, 6×(2 min run + 2 min walk), 5 min walk cool-down',3,'~8:00/km run'),
      d('Wed','STRENGTH','Leg Strength', STR.BEG_LOWER_2,null,null),
      d('Thu','EASY','Run/Walk','5 min walk, 6×(2 min run + 2 min walk), 5 min walk cool-down',3,'~8:00/km run'),
      d('Fri','REST','Rest','20 min walk',null,null),
      d('Sat','LONG','Easy Run/Walk','5 min walk, 8×(2 min run + 2 min walk), 5 min cool-down',3.5,'~8:00/km run'),
      d('Sun','CROSS','Cross-Train','Yoga or easy bike 25 min',null,null),
    ]),
    makeWeek(3,'Longer Run Intervals',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','EASY','Run/Walk','5 min walk, 5×(3 min run + 2 min walk), 5 min cool-down',3,'~7:45/km run'),
      d('Wed','STRENGTH','Leg & Core Strength', STR.BEG_LOWER_3,null,null),
      d('Thu','EASY','Run/Walk','5 min walk, 5×(3 min run + 2 min walk), 5 min cool-down',3,'~7:45/km run'),
      d('Fri','REST','Rest / Walk','20 min brisk walk',null,null),
      d('Sat','LONG','Long Run/Walk','5 min walk, 6×(3 min run + 2 min walk), 5 min cool-down',4,'~7:45/km run'),
      d('Sun','CROSS','Active Recovery','Easy swim or yoga 30 min',null,null),
    ]),
    makeWeek(4,'Recovery Week',[
      d('Mon','REST','Rest','Full rest. Hydrate well.',null,null),
      d('Tue','EASY','Easy Run/Walk','5 min walk, 4×(3 min run + 2 min walk), 5 min walk cool-down',2.5,'~7:45/km run'),
      d('Wed','STRENGTH','Light Recovery Strength', STR.BEG_LOWER_LIGHT,null,null),
      d('Thu','EASY','Run/Walk','Same as Tuesday',2.5,'~7:45/km run'),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','Easy Long Run/Walk','5 min walk, 5×(3 min run + 2 min walk), 5 min cool-down',3,'~7:45/km run'),
      d('Sun','CROSS','Recovery Walk','30 min easy walk. Foam roll.',null,null),
    ]),
    makeWeek(5,'First Continuous Runs',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','EASY','Run/Walk','5 min walk, then 10 min continuous run, 2 min walk, 10 min run, 5 min cool-down',3.5,'~7:30/km run'),
      d('Wed','STRENGTH','Leg Day', STR.BEG_LOWER_1,null,null),
      d('Thu','EASY','Easy Run/Walk','5 min walk, 10 min run, 2 min walk, 8 min run, 5 min cool-down',3,'~7:30/km run'),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','Long Run/Walk','5 min walk, 12 min run, 2 min walk, 12 min run, 5 min cool-down',4.5,'~7:30/km run'),
      d('Sun','CROSS','Cross-Train','Bike or yoga 30 min',null,null),
    ]),
    makeWeek(6,'Build to 20 min Continuous',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','EASY','Easy Run','5 min walk, 20 min continuous easy run, 5 min walk cool-down',4,'~7:15/km'),
      d('Wed','STRENGTH','Leg + Upper Body Circuit', STR.BEG_CIRCUIT,null,null),
      d('Thu','EASY','Easy Run','5 min walk, 20 min easy run, 5 min cool-down',4,'~7:15/km'),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','Long Run','5 min walk, 25 min easy run, 5 min walk cool-down',5,'~7:15/km'),
      d('Sun','CROSS','Active Recovery','Easy swim or yoga 25 min',null,null),
    ]),
    makeWeek(7,'Build to 30 min Continuous',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','EASY','Easy Run','5 min walk, 25 min easy run, 5 min cool-down',4.5,'~7:00/km'),
      d('Wed','STRENGTH','Leg Strength', STR.BEG_LOWER_2,null,null),
      d('Thu','EASY','Easy Run','5 min walk, 25 min easy run, 5 min cool-down',4.5,'~7:00/km'),
      d('Fri','REST','Rest / Walk','20 min walk',null,null),
      d('Sat','LONG','Race Simulation Run','5 min walk, 30 min continuous run, 5 min cool-down — this IS your 5K!',5,'~7:00/km'),
      d('Sun','CROSS','Active Recovery','Easy walk or gentle yoga',null,null),
    ]),
    makeWeek(8,'Race Week Taper',[
      d('Mon','REST','Rest','Lay out race kit. Check sleep & hydration.',null,null),
      d('Tue','EASY','Easy Run','20 min very easy run',3,'~7:15/km'),
      d('Wed','REST','Rest','Light stretching only. No new exercises.',null,null),
      d('Thu','EASY','Shakeout Run','15 min very easy run + 3 short strides',2,'~7:00/km'),
      d('Fri','REST','Rest','Rest. Eat well, sleep early.',null,null),
      d('Sat','RACE','RACE DAY 🏁','10 min warm-up walk + easy jog. Race goal: Sub 35 min (7:00/km). Run at a pace you can hold a conversation.',5,'~7:00/km'),
      d('Sun','REST','Rest & Celebrate','Recovery walk. You are a runner now! 🎉',null,null),
    ]),
  ],
};

// ─── 5K Sub 30 — Beginner runner ─────────────────────────────────────────────
const fiveK_sub30_beginner = {
  id: '5k-sub30-beginner', distance: '5k', label: '5K', level: 'beginner',
  subCategory: 'Sub 30 min',
  weeks: 8,
  prerequisite: 'Can run/walk 5K in ~33–38 min; completed a couch-to-5K or similar',
  description: '8-week plan to run 5K continuously in under 30 minutes (~6:00/km). The jump from finisher to a genuine runner.',
  weeklyPlan: [
    makeWeek(1,'Aerobic Foundation',[
      d('Mon','REST','Rest','Full rest. Stretch calves and hip flexors.',null,null),
      d('Tue','EASY','Easy Run','20 min easy conversational run (you must be able to speak full sentences)',3,'~7:00/km'),
      d('Wed','STRENGTH','Leg Strength', STR.BEG_LOWER_1,null,null),
      d('Thu','EASY','Easy Run','20 min easy run',3,'~7:00/km'),
      d('Fri','REST','Rest / Walk','20 min brisk walk',null,null),
      d('Sat','LONG','Long Run','30 min easy run. No walk breaks.',4,'~7:30/km'),
      d('Sun','CROSS','Active Recovery','20–30 min easy cycling or swimming',null,null),
    ]),
    makeWeek(2,'Build Duration',[
      d('Mon','REST','Rest','Foam roll quads, calves.',null,null),
      d('Tue','EASY','Easy Run','25 min easy run',3.5,'~7:00/km'),
      d('Wed','STRENGTH','Leg Strength', STR.BEG_LOWER_2,null,null),
      d('Thu','EASY','Easy Run + Strides','20 min easy + 4×15 sec light strides on flat ground',3,'~6:45/km'),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','Long Run','35 min easy run',4.5,'~7:00/km'),
      d('Sun','CROSS','Cross-Train','Yoga or easy bike 30 min',null,null),
    ]),
    makeWeek(3,'Introduce Effort',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','EASY','Easy Run','25 min easy',3.5,'~6:45/km'),
      d('Wed','TEMPO','Tempo Intervals','10 min easy warm-up jog | 4×2 min at brisk effort (6:00/km feel) with 2 min walk/easy recovery | 5 min cool-down walk',3.5,'~6:00/km effort'),
      d('Thu','STRENGTH','Leg + Core', STR.BEG_LOWER_3,null,null),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','Long Run','40 min easy run',5,'~7:00/km'),
      d('Sun','CROSS','Active Recovery','20 min walk or easy swim',null,null),
    ]),
    makeWeek(4,'Recovery Week',[
      d('Mon','REST','Rest','Full rest',null,null),
      d('Tue','EASY','Easy Run','20 min very easy',3,'~7:15/km'),
      d('Wed','STRENGTH','Light Recovery Strength', STR.BEG_LOWER_LIGHT,null,null),
      d('Thu','EASY','Easy Run','20 min easy',3,'~7:00/km'),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','Easy Long Run','30 min easy',4,'~7:15/km'),
      d('Sun','CROSS','Recovery Walk','30 min relaxed walk',null,null),
    ]),
    makeWeek(5,'Speed Touch',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','INTERVAL','Intro Fartlek','25 min total: warm-up 10 min easy then 5×(1 min fast + 2 min easy) then cool-down easy',3.5,'~6:00/km on fast bits'),
      d('Wed','STRENGTH','Leg Day', STR.BEG_LOWER_1,null,null),
      d('Thu','EASY','Easy Run','25 min easy recovery run',3.5,'~7:00/km'),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','Long Run','45 min easy — try for no walk breaks',6,'~7:00/km'),
      d('Sun','CROSS','Cross-Train','Bike or yoga 30 min',null,null),
    ]),
    makeWeek(6,'Build to Goal Pace',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','INTERVAL','Fartlek','10 min WU, 6×(1 min @ 5:50/km + 90 sec easy), 10 min CD',4,'~5:50/km fast'),
      d('Wed','STRENGTH','Full Body Circuit', STR.BEG_CIRCUIT,null,null),
      d('Thu','EASY','Easy Run','30 min easy',4.5,'~7:00/km'),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','Long Run','50 min easy run',7,'~7:00/km'),
      d('Sun','CROSS','Active Recovery','Easy swim or walk',null,null),
    ]),
    makeWeek(7,'Race Simulation',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','TEMPO','Tempo Run','10 min WU, 15 min continuous @ 6:00/km, 5 min CD',4,'~6:00/km tempo'),
      d('Wed','STRENGTH','Leg Strength', STR.BEG_LOWER_2,null,null),
      d('Thu','EASY','Easy Run','25 min easy',3.5,'~7:00/km'),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','5K Race Simulation','10 min easy jog warm-up. Run a full 5K trying to maintain 6:00/km pace throughout.',5,'~6:00/km'),
      d('Sun','CROSS','Active Recovery','Walk 30 min. Foam roll legs.',null,null),
    ]),
    makeWeek(8,'Race Week Taper',[
      d('Mon','REST','Rest','Hydrate. Light stretching.',null,null),
      d('Tue','EASY','Easy Run + Strides','20 min easy + 4×20 sec strides',3,'~6:30/km'),
      d('Wed','REST','Rest','No exercise. Sleep early.',null,null),
      d('Thu','EASY','Shakeout Run','15 min very easy',2.5,'~7:00/km'),
      d('Fri','REST','Rest','Eat well, prepare kit, sleep.',null,null),
      d('Sat','RACE','RACE DAY 🏁','Warm up 10 min. Race goal: Sub 30 min. Start at 6:00/km and hold steady. 🏁',5,'~5:59/km'),
      d('Sun','REST','Rest & Celebrate','Easy recovery walk. Celebrate! 🎉',null,null),
    ]),
  ],
};

// ─── 5K Sub 25 — now INTERMEDIATE ────────────────────────────────────────────
const fiveK_sub25_intermediate = {
  id: '5k-sub25-intermediate',
  distance: '5k', label: '5K', level: 'intermediate',
  subCategory: 'Sub 25 min',
  weeks: 8,
  prerequisite: 'Can run 5K continuously in ~28–32 min; running 3–4×/week',
  description: '8-week intermediate plan to break 25 minutes (5:00/km). Tempo runs and strides build speed on an aerobic base.',
  weeklyPlan: [
    makeWeek(1,'Base Building',[
      d('Mon','REST','Rest','Light walking or yoga.',null,null),
      d('Tue','EASY','Easy Run','30 min easy conversational pace',4.5,'~6:30/km'),
      d('Wed','STRENGTH','Leg Strength', STR.INT_LOWER_1,null,null),
      d('Thu','EASY','Easy Run + Strides','25 min easy + 4×20 sec strides on flat',4,'~6:15/km'),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','Long Run','40 min easy run',6,'~6:40/km'),
      d('Sun','CROSS','Active Recovery','Cycling or swimming 20–25 min',null,null),
    ]),
    makeWeek(2,'Aerobic Foundation',[
      d('Mon','REST','Rest','Stretching & foam rolling.',null,null),
      d('Tue','EASY','Easy Run','30 min easy',4.5,'~6:30/km'),
      d('Wed','STRENGTH','Leg Strength', STR.INT_LOWER_2,null,null),
      d('Thu','EASY','Easy Run + Strides','25 min easy + 6×20 sec strides',4,'~6:15/km'),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','Long Run','45 min easy',6.5,'~6:40/km'),
      d('Sun','CROSS','Cross-Train','Yoga or bike 30 min',null,null),
    ]),
    makeWeek(3,'Introduce Tempo',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','EASY','Easy Run','30 min easy',4.5,'~6:30/km'),
      d('Wed','TEMPO','Tempo Run','10 min WU | 12 min @ 5:10/km | 8 min CD',4,'~5:10/km tempo'),
      d('Thu','STRENGTH','Leg + Core', STR.INT_LOWER_3,null,null),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','Long Run','45 min easy',6.5,'~6:40/km'),
      d('Sun','CROSS','Active Recovery','20 min easy walk/bike',null,null),
    ]),
    makeWeek(4,'Recovery Week',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','EASY','Easy Run','20 min very easy',3,'~6:45/km'),
      d('Wed','STRENGTH','Light Recovery Strength', STR.INT_LOWER_LIGHT,null,null),
      d('Thu','EASY','Easy Run','20 min easy',3,'~6:30/km'),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','Easy Long Run','35 min easy',5,'~6:45/km'),
      d('Sun','CROSS','Recovery Walk/Yoga','30 min walk or yoga',null,null),
    ]),
    makeWeek(5,'Speed Introduction',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','INTERVAL','Intervals','10 min WU | 6×400m @ 4:55/km with 90 sec easy jog recovery | 10 min CD',5,'~4:55/km reps'),
      d('Wed','STRENGTH','Leg Day', STR.INT_LOWER_1,null,null),
      d('Thu','EASY','Easy Recovery Run','25 min easy',3.5,'~6:30/km'),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','Long Run','50 min easy — last 5 min at moderate effort',7,'~6:30/km'),
      d('Sun','CROSS','Cross-Train','Bike or yoga 30 min',null,null),
    ]),
    makeWeek(6,'Build Confidence',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','INTERVAL','Intervals','10 min WU | 8×400m @ 4:50/km with 90 sec jog | 10 min CD',6,'~4:50/km reps'),
      d('Wed','STRENGTH','Leg + Upper Body', STR.INT_UPPER,null,null),
      d('Thu','TEMPO','Tempo Run','10 min WU | 15 min @ 5:05/km | 10 min CD',5,'~5:05/km tempo'),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','Long Run','55 min easy',8,'~6:30/km'),
      d('Sun','CROSS','Active Recovery','Easy swim or walk',null,null),
    ]),
    makeWeek(7,'Race Simulation',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','INTERVAL','Race-Pace Intervals','10 min WU | 2×1600m @ 5:00/km with 2 min recovery | 10 min CD',6,'~5:00/km reps'),
      d('Wed','STRENGTH','Leg + Core', STR.INT_LOWER_2,null,null),
      d('Thu','TEMPO','Tempo Run','10 min WU | 20 min @ 5:03/km | 5 min CD',5.5,'~5:03/km tempo'),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','5K Time Trial','15 min WU jog. Full 5K time trial — aim for 25:30.',5,'~5:06/km'),
      d('Sun','CROSS','Active Recovery','Easy walk or yoga',null,null),
    ]),
    makeWeek(8,'Race Week Taper',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','EASY','Easy Run + Strides','20 min easy + 4×20 sec strides',3,'~6:15/km'),
      d('Wed','REST','Rest','Light stretching only.',null,null),
      d('Thu','EASY','Easy Shakeout','15 min very easy run',2,'~6:45/km'),
      d('Fri','REST','Rest','Sleep well, hydrate.',null,null),
      d('Sat','RACE','RACE DAY 🏁','Warm up 10 min. Race goal: Sub 25 min (5:00/km). Start controlled — DO NOT go out too fast! 🏁',5,'~4:59/km'),
      d('Sun','REST','Rest & Celebrate','Recovery walk, celebrate your PR! 🎉',null,null),
    ]),
  ],
};

// ─── 5K Sub 20 — Intermediate ────────────────────────────────────────────────
const fiveK_sub20_intermediate = makeCompactPlan({
  id: '5k-sub20-intermediate', distance: '5k', label: '5K', level: 'intermediate',
  subCategory: 'Sub 20 min', weeks: 10,
  prerequisite: 'Can run 5K in ~22–24 min; consistent 25–30 km/week base',
  description: '10-week plan to break the 20-minute barrier. Structured intervals and threshold work on a solid aerobic base.',
  weekPattern: [
    makeWeek(1,'Aerobic Base',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','EASY','Easy Run + Strides','40 min easy + 4 strides',6,'~6:30/km'),
      d('Wed','STRENGTH','Leg Strength', STR.INT_LOWER_1,null,null),
      d('Thu','TEMPO','Tempo','10 WU | 15 min @ 3:55/km | 10 CD',6,'~3:55/km tempo'),
      d('Fri','REST','Rest','Foam roll & stretch',null,null),
      d('Sat','LONG','Long Run','55 min easy',9,'~6:15/km'),
      d('Sun','CROSS','Active Recovery','Bike 30 min or yoga',null,null),
    ]),
    makeWeek(2,'Introduce Intervals',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','INTERVAL','Track Intervals','10 WU | 10×400m @ 3:45/km with 90 sec recovery | 10 CD',7,'~3:45/km reps'),
      d('Wed','EASY','Easy Run','30 min easy',5,'~6:30/km'),
      d('Thu','TEMPO','Tempo','10 WU | 20 min @ 3:55/km | 10 CD',6.5,'~3:55/km tempo'),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','Long Run','60 min easy',10,'~6:15/km'),
      d('Sun','CROSS','Cross-Train','Swim 30 min',null,null),
    ]),
    makeWeek(3,'Speed Endurance',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','INTERVAL','Cruise Intervals','10 WU | 5×1000m @ 3:55/km with 2 min recovery | 10 CD',8,'~3:55/km reps'),
      d('Wed','EASY','Easy Run','35 min easy',5.5,'~6:30/km'),
      d('Thu','STRENGTH','Leg + Core', STR.INT_LOWER_3,null,null),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','Long Run','65 min easy',10.5,'~6:15/km'),
      d('Sun','CROSS','Active Recovery','Yoga or easy walk',null,null),
    ]),
    makeWeek(4,'Recovery Week',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','EASY','Easy Run','30 min easy',5,'~6:30/km'),
      d('Wed','STRENGTH','Light Strength', STR.INT_LOWER_LIGHT,null,null),
      d('Thu','EASY','Easy Run + Strides','30 min easy + 6 strides',5,'~6:00/km'),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','Easy Long Run','50 min easy',8,'~6:30/km'),
      d('Sun','REST','Rest',null,null,null),
    ]),
    makeWeek(5,'VO2 Max Block',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','INTERVAL','VO2 Max Intervals','10 WU | 6×800m @ 3:40/km with 2 min recovery | 10 CD',7,'~3:40/km reps'),
      d('Wed','EASY','Easy Run','40 min easy',6.5,'~6:30/km'),
      d('Thu','TEMPO','Threshold','10 WU | 25 min @ 3:50/km | 10 CD',8,'~3:50/km tempo'),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','Long Run','70 min easy',11,'~6:15/km'),
      d('Sun','CROSS','Cross-Train','Bike 40 min',null,null),
    ]),
    makeWeek(6,'Lactate Threshold',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','INTERVAL','Track Work','10 WU | 12×400m @ 3:40/km with 60 sec recovery | 10 CD',8,'~3:40/km reps'),
      d('Wed','EASY','Easy Run','40 min easy',6.5,'~6:30/km'),
      d('Thu','TEMPO','Long Tempo','10 WU | 30 min @ 3:50/km | 10 CD',9,'~3:50/km tempo'),
      d('Fri','STRENGTH','Full Strength', STR.INT_CIRCUIT,null,null),
      d('Sat','LONG','Long Run','70 min easy',11,'~6:15/km'),
      d('Sun','CROSS','Active Recovery','Yoga, foam roll',null,null),
    ]),
    makeWeek(7,'Peak Week 1',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','INTERVAL','Mile Repeats','10 WU | 4×1600m @ 3:58/km with 2.5 min recovery | 10 CD',10,'~3:58/km reps'),
      d('Wed','EASY','Easy Run','40 min easy',6.5,'~6:30/km'),
      d('Thu','TEMPO','Race Pace Run','10 WU | 20 min @ 4:00/km | 10 CD',7,'~4:00/km tempo'),
      d('Fri','REST','Rest',null,null,null),
      d('Sat','LONG','Long Run','75 min easy',12,'~6:15/km'),
      d('Sun','CROSS','Cross-Train','Swim or bike 30 min',null,null),
    ]),
    makeWeek(8,'Peak Week 2',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','INTERVAL','Track Intervals','10 WU | 10×400m @ 3:35/km with 75 sec recovery | 10 CD',7.5,'~3:35/km reps'),
      d('Wed','EASY','Easy Run','35 min easy',5.5,'~6:30/km'),
      d('Thu','TEMPO','Tempo Run','10 WU | 25 min @ 3:48/km | 10 CD',8,'~3:48/km tempo'),
      d('Fri','STRENGTH','Light Strength', STR.INT_LOWER_LIGHT,null,null),
      d('Sat','LONG','Long Run','70 min easy',11,'~6:15/km'),
      d('Sun','REST','Rest',null,null,null),
    ]),
    makeWeek(9,'Taper',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','INTERVAL','Short Intervals','10 WU | 6×400m @ 3:35/km with 90 sec recovery | 10 CD',5,'~3:35/km reps'),
      d('Wed','EASY','Easy Run','25 min easy',4,'~6:30/km'),
      d('Thu','EASY','Easy + Strides','20 min easy + 6 strides',3.5,'~6:00/km'),
      d('Fri','REST','Rest','Rest, hydrate, sleep well',null,null),
      d('Sat','LONG','Relaxed Run','40 min easy',6.5,'~6:30/km'),
      d('Sun','REST','Rest',null,null,null),
    ]),
    makeWeek(10,'Race Week',[
      d('Mon','REST','Rest',null,null,null),
      d('Tue','EASY','Easy Run','20 min easy',3,'~6:30/km'),
      d('Wed','REST','Rest',null,null,null),
      d('Thu','STRIDES','Easy + Strides','15 min easy + 4 strides',2.5,'~6:00/km'),
      d('Fri','REST','Rest','Lay out race kit, early bed',null,null),
      d('Sat','RACE','RACE DAY 🏁','Warm up 15 min. Race goal: Sub 20 min (3:59/km). 🏁',5,'~3:59/km'),
      d('Sun','REST','Rest & Recovery','Recovery walk, massage, celebrate! 🎉',null,null),
    ]),
  ],
});

// ═══════════════════════════════════════════════════════════════════════════════
// 10K PLANS
// ═══════════════════════════════════════════════════════════════════════════════

// ─── True beginner 10K plans ─────────────────────────────────────────────────
const tenK_sub80_trueBeginner = makeCompactPlan({
  id: '10k-sub80-beginner', distance: '10k', label: '10K', level: 'beginner',
  subCategory: 'Sub 1:20 hr',
  weeks: 10, prerequisite: 'Can walk-run 5K; little running background',
  description: '10-week plan to complete 10K in under 80 min (8:00/km) using walk-run. True first-time 10K plan.',
  weekPattern: [
    makeWeek(1,'Walk/Run Base',[ d('Mon','REST','Rest','Full rest or gentle yoga',null,null), d('Tue','EASY','Run/Walk','5 min walk WU | 8×(2 min run + 2 min walk) | 5 min walk CD',3.5,'~8:00/km run'), d('Wed','STRENGTH','Beginner Leg Strength', STR.BEG_LOWER_1,null,null), d('Thu','EASY','Run/Walk','5 min walk | 8×(2 min run + 2 min walk) | 5 min walk CD',3.5,'~8:00/km run'), d('Fri','REST','Rest','20 min easy walk',null,null), d('Sat','LONG','Long Walk/Run','5 min walk | 10×(2 min run + 2 min walk) | 5 min CD',4.5,'~8:00/km run'), d('Sun','CROSS','Active Recovery','Easy bike or swim 20 min',null,null) ]),
    makeWeek(2,'Build Run Intervals',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Run/Walk','5 min walk | 6×(3 min run + 2 min walk) | 5 min walk CD',4,'~7:45/km run'), d('Wed','STRENGTH','Leg Strength', STR.BEG_LOWER_2,null,null), d('Thu','EASY','Run/Walk','Same as Tuesday',4,'~7:45/km run'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run/Walk','5 min walk | 8×(3 min run + 2 min walk) | 5 min CD',5,'~7:45/km run'), d('Sun','CROSS','Cross-Train','Yoga or bike 25 min',null,null) ]),
    makeWeek(3,'Longer Run Segments',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Run/Walk','5 min walk | 5×(5 min run + 2 min walk) | 5 min CD',4.5,'~7:30/km run'), d('Wed','STRENGTH','Leg + Core', STR.BEG_LOWER_3,null,null), d('Thu','EASY','Run/Walk','5 min walk | 5×(5 min run + 2 min walk) | 5 min CD',4.5,'~7:30/km run'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run/Walk','5 min walk | 6×(5 min run + 2 min walk) | 5 min CD',5.5,'~7:30/km run'), d('Sun','CROSS','Active Recovery','Easy swim or yoga',null,null) ]),
    makeWeek(4,'Recovery Week',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run/Walk','25 min easy with walk breaks as needed',3.5,'~7:30/km'), d('Wed','STRENGTH','Light Recovery Strength', STR.BEG_LOWER_LIGHT,null,null), d('Thu','EASY','Easy Run/Walk','25 min easy',3.5,'~7:30/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Easy Long','35 min easy',4.5,'~7:30/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(5,'First 20 min Runs',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Continuous Run','20 min continuous easy run',3,'~7:15/km'), d('Wed','STRENGTH','Leg Day', STR.BEG_LOWER_1,null,null), d('Thu','EASY','Continuous Run','20 min continuous easy run',3,'~7:15/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','30 min continuous',4.5,'~7:15/km'), d('Sun','CROSS','Cross-Train','Bike 30 min',null,null) ]),
    makeWeek(6,'Build to 30 min',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','25 min easy',3.5,'~7:15/km'), d('Wed','STRENGTH','Full Body Circuit', STR.BEG_CIRCUIT,null,null), d('Thu','EASY','Easy Run','25 min easy',3.5,'~7:15/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','40 min easy',5.5,'~7:15/km'), d('Sun','CROSS','Active Recovery','Easy swim',null,null) ]),
    makeWeek(7,'Build to 45 min',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','30 min easy',4.5,'~7:00/km'), d('Wed','STRENGTH','Leg Strength', STR.BEG_LOWER_2,null,null), d('Thu','EASY','Easy Run','30 min easy',4.5,'~7:00/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','50 min easy',7,'~7:00/km'), d('Sun','CROSS','Cross-Train','Yoga 30 min',null,null) ]),
    makeWeek(8,'Peak Long Run',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','35 min easy',5,'~7:00/km'), d('Wed','STRENGTH','Leg + Upper', STR.BEG_UPPER,null,null), d('Thu','EASY','Easy Run','30 min easy',4.5,'~7:00/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','60 min easy',8.5,'~7:00/km'), d('Sun','CROSS','Active Recovery','Bike or yoga',null,null) ]),
    makeWeek(9,'Taper',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run + Strides','25 min easy + 4 strides',4,'~6:45/km'), d('Wed','STRENGTH','Light Strength', STR.BEG_LOWER_LIGHT,null,null), d('Thu','EASY','Easy Run','20 min easy',3,'~7:00/km'), d('Fri','REST','Rest',null,null,null), d('Sat','EASY','Easy Run','35 min easy',5,'~7:00/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(10,'Race Week',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','20 min easy',3,'~7:00/km'), d('Wed','REST','Rest',null,null,null), d('Thu','EASY','Shakeout','15 min easy + 3 strides',2.5,'~6:45/km'), d('Fri','REST','Rest','Hydrate & rest',null,null), d('Sat','RACE','RACE DAY 🏁','Walk 10 min, easy jog 10 min. Goal: Sub 1:20. Run easy & steady! 🏁',10,'~7:59/km'), d('Sun','REST','Rest & Celebrate','Recovery walk. You are a 10K runner! 🎉',null,null) ]),
  ],
});

const tenK_sub70_beginner = makeCompactPlan({
  id: '10k-sub70-beginner', distance: '10k', label: '10K', level: 'beginner',
  subCategory: 'Sub 1:10 hr',
  weeks: 10, prerequisite: 'Can run 5K; beginning 10K runner (~8–9 km/wk base)',
  description: '10-week plan to finish 10K under 70 min (7:00/km). Steady endurance focus, gentle strength work.',
  weekPattern: [
    makeWeek(1,'Base Building',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','20 min easy run',3,'~7:30/km'), d('Wed','STRENGTH','Beginner Leg Strength', STR.BEG_LOWER_1,null,null), d('Thu','EASY','Easy Run','20 min easy run',3,'~7:30/km'), d('Fri','REST','Rest','20 min walk',null,null), d('Sat','LONG','Long Run','30 min easy',4,'~7:30/km'), d('Sun','CROSS','Cross-Train','Easy bike or yoga 20 min',null,null) ]),
    makeWeek(2,'Build Duration',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','25 min easy',3.5,'~7:15/km'), d('Wed','STRENGTH','Leg Strength', STR.BEG_LOWER_2,null,null), d('Thu','EASY','Easy Run','25 min easy',3.5,'~7:15/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','35 min easy',5,'~7:15/km'), d('Sun','CROSS','Cross-Train','Yoga or swim 25 min',null,null) ]),
    makeWeek(3,'Endurance Build',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','30 min easy',4.5,'~7:00/km'), d('Wed','STRENGTH','Leg + Core', STR.BEG_LOWER_3,null,null), d('Thu','EASY','Easy Run','25 min easy',3.5,'~7:15/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','40 min easy',6,'~7:00/km'), d('Sun','CROSS','Active Recovery','Easy walk 25 min',null,null) ]),
    makeWeek(4,'Recovery',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','20 min easy',3,'~7:30/km'), d('Wed','STRENGTH','Light Strength', STR.BEG_LOWER_LIGHT,null,null), d('Thu','EASY','Easy Run','20 min easy',3,'~7:30/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Easy Long','30 min easy',4,'~7:30/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(5,'Push Duration',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','35 min easy',5,'~7:00/km'), d('Wed','STRENGTH','Leg Day', STR.BEG_LOWER_1,null,null), d('Thu','EASY','Easy Run','30 min easy',4.5,'~7:00/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','50 min easy',7,'~7:00/km'), d('Sun','CROSS','Cross-Train','Bike 30 min',null,null) ]),
    makeWeek(6,'Introduce Effort',[ d('Mon','REST','Rest',null,null,null), d('Tue','TEMPO','Easy Fartlek','10 min easy WU | 5×(2 min moderate effort + 2 min easy) | 10 min CD',4.5,'~6:30/km effort'), d('Wed','STRENGTH','Full Body Circuit', STR.BEG_CIRCUIT,null,null), d('Thu','EASY','Easy Run','30 min easy',4.5,'~7:00/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','55 min easy',7.5,'~7:00/km'), d('Sun','CROSS','Active Recovery','Yoga or walk',null,null) ]),
    makeWeek(7,'Race Pace Work',[ d('Mon','REST','Rest',null,null,null), d('Tue','TEMPO','Tempo Intervals','10 min WU | 4×5 min @ 6:45/km with 2 min recovery | 5 min CD',5,'~6:45/km effort'), d('Wed','STRENGTH','Leg Strength', STR.BEG_LOWER_2,null,null), d('Thu','EASY','Easy Run','30 min easy',4.5,'~7:00/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','60 min easy',8.5,'~7:00/km'), d('Sun','CROSS','Cross-Train','Easy swim',null,null) ]),
    makeWeek(8,'Peak Week',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','35 min easy',5,'~7:00/km'), d('Wed','STRENGTH','Leg + Upper', STR.BEG_UPPER,null,null), d('Thu','TEMPO','Tempo Run','10 WU | 20 min @ 6:45/km | 5 CD',5,'~6:45/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','65 min easy',9,'~7:00/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(9,'Taper',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run + Strides','25 min easy + 4 strides',4,'~6:30/km'), d('Wed','STRENGTH','Light Strength', STR.BEG_LOWER_LIGHT,null,null), d('Thu','EASY','Easy Run','20 min easy',3,'~7:00/km'), d('Fri','REST','Rest',null,null,null), d('Sat','EASY','Easy Run','40 min easy',5.5,'~7:00/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(10,'Race Week',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','20 min easy',3,'~7:00/km'), d('Wed','REST','Rest',null,null,null), d('Thu','STRIDES','Shakeout + Strides','15 min + 4 strides',2.5,'~6:30/km'), d('Fri','REST','Rest','Hydrate & rest well',null,null), d('Sat','RACE','RACE DAY 🏁','Warm up 10 min. Goal: Sub 70 min (7:00/km). Run steady! 🏁',10,'~6:59/km'), d('Sun','REST','Rest & Celebrate','Recovery, celebrate! 🎉',null,null) ]),
  ],
});

const tenK_sub60_intermediate_plan = makeCompactPlan({
  id: '10k-sub60-intermediate', distance: '10k', label: '10K', level: 'intermediate',
  subCategory: 'Sub 1:00 hr',
  weeks: 10, prerequisite: 'Can run 10K in ~65–70 min; running 3–4×/week',
  description: '10-week intermediate 10K plan targeting sub-60 min (6:00/km). Introduces structured tempo and light intervals.',
  weekPattern: [
    makeWeek(1,'Foundation',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','30 min easy',4.5,'~6:30/km'), d('Wed','STRENGTH','Leg Strength', STR.INT_LOWER_1,null,null), d('Thu','EASY','Easy Run + Strides','30 min + 4 strides',4.5,'~6:10/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','45 min easy',7,'~6:30/km'), d('Sun','CROSS','Active Recovery','Bike or yoga 30 min',null,null) ]),
    makeWeek(2,'Build Mileage',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','35 min easy',5.5,'~6:20/km'), d('Wed','STRENGTH','Leg Strength', STR.INT_LOWER_2,null,null), d('Thu','EASY','Easy Run','35 min easy',5.5,'~6:20/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','50 min easy',8,'~6:20/km'), d('Sun','CROSS','Cross-Train','Swim 30 min',null,null) ]),
    makeWeek(3,'Tempo Intro',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','35 min easy',5.5,'~6:20/km'), d('Wed','TEMPO','Tempo','10 WU | 3×5 min @ 5:55/km with 2 min recovery | 5 CD',5,'~5:55/km reps'), d('Thu','STRENGTH','Leg + Core', STR.INT_LOWER_3,null,null), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','55 min easy',8.5,'~6:20/km'), d('Sun','CROSS','Cross-Train','Bike 25 min',null,null) ]),
    makeWeek(4,'Recovery',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','25 min easy',4,'~6:30/km'), d('Wed','STRENGTH','Light Strength', STR.INT_LOWER_LIGHT,null,null), d('Thu','EASY','Easy Run','25 min easy',4,'~6:30/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Easy Long Run','40 min easy',6,'~6:30/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(5,'Endurance Build',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','40 min easy',6,'~6:15/km'), d('Wed','TEMPO','Tempo','10 WU | 15 min @ 5:50/km | 5 CD',5,'~5:50/km tempo'), d('Thu','STRENGTH','Leg Day', STR.INT_LOWER_1,null,null), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','60 min easy',9,'~6:20/km'), d('Sun','CROSS','Cross-Train','Easy swim or bike',null,null) ]),
    makeWeek(6,'Increase Long Run',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','40 min easy',6,'~6:15/km'), d('Wed','TEMPO','Tempo Run','10 WU | 20 min @ 5:50/km | 5 CD',5.5,'~5:50/km tempo'), d('Thu','STRENGTH','Leg + Upper Body', STR.INT_UPPER,null,null), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','65 min easy',10,'~6:20/km'), d('Sun','CROSS','Active Recovery','Walk 30 min',null,null) ]),
    makeWeek(7,'Race Pace Practice',[ d('Mon','REST','Rest',null,null,null), d('Tue','INTERVAL','Intervals','10 WU | 6×600m @ 5:40/km with 90s recovery | 10 CD',6,'~5:40/km reps'), d('Wed','EASY','Easy Run','35 min easy',5.5,'~6:20/km'), d('Thu','TEMPO','Tempo Run','10 WU | 20 min @ 5:50/km | 10 CD',6.5,'~5:50/km tempo'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','68 min easy',10,'~6:20/km'), d('Sun','CROSS','Cross-Train','Yoga or easy bike',null,null) ]),
    makeWeek(8,'Peak Week',[ d('Mon','REST','Rest',null,null,null), d('Tue','INTERVAL','Intervals','10 WU | 8×600m @ 5:40/km with 90s recovery | 10 CD',7.5,'~5:40/km reps'), d('Wed','EASY','Easy Run','35 min easy',5.5,'~6:20/km'), d('Thu','TEMPO','Tempo Run','10 WU | 25 min @ 5:50/km | 10 CD',7,'~5:50/km tempo'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','70 min easy',10.5,'~6:20/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(9,'Taper',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run + Strides','30 min easy + 4 strides',4.5,'~6:00/km'), d('Wed','STRENGTH','Light Strength', STR.INT_LOWER_LIGHT,null,null), d('Thu','EASY','Easy Run','25 min easy',4,'~6:20/km'), d('Fri','REST','Rest',null,null,null), d('Sat','EASY','Easy Run','40 min easy',6,'~6:20/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(10,'Race Week',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','20 min easy',3,'~6:20/km'), d('Wed','REST','Rest',null,null,null), d('Thu','STRIDES','Shakeout + Strides','15 min + 4 strides',2.5,'~5:50/km'), d('Fri','REST','Rest','Hydrate & rest well',null,null), d('Sat','RACE','RACE DAY 🏁','Warm up 10 min. Goal: Sub 60 min (5:58/km). 🏁',10,'~5:58/km'), d('Sun','REST','Rest & Celebrate','Recovery, celebrate! 🎉',null,null) ]),
  ],
});

const tenK_sub45_advanced = makeCompactPlan({
  id: '10k-sub45-advanced', distance: '10k', label: '10K', level: 'advanced',
  subCategory: 'Sub 45 min', weeks: 12,
  prerequisite: 'Running 50+ km/week; can run 10K in ~48 min',
  description: '12-week plan targeting sub-45 min 10K (4:30/km). High mileage, structured speedwork.',
  weekPattern: [
    makeWeek(1,'Foundation',[ d('Mon','EASY','Recovery Run','40 min very easy',6.5,'~6:00/km'), d('Tue','INTERVAL','Track Work','12×400m @ 4:10/km | 60s recovery',8,'~4:10/km reps'), d('Wed','EASY','Easy Run','50 min easy',8,'~5:45/km'), d('Thu','TEMPO','Tempo','10 WU | 25 min @ 4:30/km | 10 CD',8,'~4:30/km tempo'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','80 min easy',13,'~6:00/km'), d('Sun','CROSS','Active Recovery','Yoga or bike',null,null) ]),
    makeWeek(2,'Mileage Build',[ d('Mon','EASY','Recovery Run','40 min',6.5,'~6:00/km'), d('Tue','INTERVAL','VO2 Max','6×800m @ 4:05/km | 90s recovery',9,'~4:05/km reps'), d('Wed','EASY','Easy Run','55 min',9,'~5:45/km'), d('Thu','STRENGTH','Leg + Core', STR.ADV_LOWER_1,null,null), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','85 min easy',14,'~6:00/km'), d('Sun','CROSS','Cross-Train','Swim or bike 40 min',null,null) ]),
    makeWeek(3,'Speed Endurance',[ d('Mon','EASY','Easy Run','40 min',6.5,'~6:00/km'), d('Tue','INTERVAL','Cruise Intervals','5×1200m @ 4:15/km | 2 min recovery',10,'~4:15/km reps'), d('Wed','EASY','Easy Run','55 min',9,'~5:45/km'), d('Thu','TEMPO','Threshold','10 WU | 30 min @ 4:28/km | 10 CD',9,'~4:28/km tempo'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','90 min easy',15,'~6:00/km'), d('Sun','CROSS','Active Recovery','Easy yoga',null,null) ]),
    makeWeek(4,'Recovery',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','45 min',7,'~6:00/km'), d('Wed','STRENGTH','Advanced Leg Strength', STR.ADV_LOWER_2,null,null), d('Thu','EASY','Easy + Strides','45 min + 6 strides',7.5,'~5:45/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Relaxed Long Run','65 min easy',10.5,'~6:10/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(5,'VO2 Block',[ d('Mon','EASY','Easy Run','40 min',6.5,'~6:00/km'), d('Tue','INTERVAL','5K Repeats','3×1600m @ 4:22/km | 3 min recovery',10,'~4:22/km reps'), d('Wed','EASY','Easy Run','50 min',8,'~5:45/km'), d('Thu','TEMPO','Tempo','10 WU | 30 min @ 4:25/km | 10 CD',9,'~4:25/km tempo'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','90 min easy',15,'~6:00/km'), d('Sun','CROSS','Cross-Train','Bike 45 min',null,null) ]),
    makeWeek(6,'Race Specificity',[ d('Mon','EASY','Easy Run','40 min',6.5,'~6:00/km'), d('Tue','INTERVAL','Race Pace Work','8×600m @ 4:22/km | 90s recovery',9,'~4:22/km reps'), d('Wed','EASY','Easy Run','55 min',9,'~5:45/km'), d('Thu','STRENGTH','Power Strength', STR.ADV_LOWER_3,null,null), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','95 min easy',16,'~6:00/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(7,'Peak Mileage 1',[ d('Mon','EASY','Easy Run','45 min',7.5,'~6:00/km'), d('Tue','INTERVAL','Track','10×600m @ 4:10/km | 90s recovery',10,'~4:10/km reps'), d('Wed','EASY','Easy Run','55 min',9,'~5:45/km'), d('Thu','TEMPO','Tempo','10 WU | 35 min @ 4:25/km | 10 CD',10,'~4:25/km tempo'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','95 min easy',16,'~6:00/km'), d('Sun','CROSS','Active Recovery','Swim or yoga',null,null) ]),
    makeWeek(8,'Peak Mileage 2',[ d('Mon','EASY','Easy Run','40 min',6.5,'~6:00/km'), d('Tue','INTERVAL','VO2','5×1000m @ 4:05/km | 2 min recovery',9,'~4:05/km reps'), d('Wed','EASY','Easy Run','55 min',9,'~5:45/km'), d('Thu','STRENGTH','Advanced Full Body', STR.ADV_CIRCUIT,null,null), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','100 min easy',17,'~6:00/km'), d('Sun','CROSS','Cross-Train','Bike 40 min',null,null) ]),
    makeWeek(9,'Sharpening',[ d('Mon','REST','Rest',null,null,null), d('Tue','INTERVAL','Short Fast','16×200m @ 3:50/km | 45s recovery',7,'~3:50/km reps'), d('Wed','EASY','Easy Run','50 min',8,'~6:00/km'), d('Thu','TEMPO','Race Sim','10 WU | 5K time trial | 10 CD',8,'~4:20/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','85 min easy',14,'~6:10/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(10,'Taper Start',[ d('Mon','REST','Rest',null,null,null), d('Tue','INTERVAL','Intervals','6×800m @ 4:05/km | 90s recovery',8,'~4:05/km reps'), d('Wed','EASY','Easy Run','40 min',6.5,'~6:00/km'), d('Thu','TEMPO','Short Tempo','10 WU | 20 min @ 4:22/km | 10 CD',7,'~4:22/km tempo'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','70 min easy',11.5,'~6:10/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(11,'Taper Deep',[ d('Mon','REST','Rest',null,null,null), d('Tue','INTERVAL','Short Track','8×400m @ 4:05/km | 75s recovery',6,'~4:05/km reps'), d('Wed','EASY','Easy Run','30 min',5,'~6:10/km'), d('Thu','EASY','Easy + Strides','25 min + 6 strides',4,'~5:45/km'), d('Fri','REST','Rest',null,null,null), d('Sat','EASY','Easy Run','40 min',6.5,'~6:10/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(12,'Race Week',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','20 min easy',3,'~6:10/km'), d('Wed','REST','Rest',null,null,null), d('Thu','STRIDES','Shakeout + Strides','15 min + 4 strides',2.5,'~5:45/km'), d('Fri','REST','Rest','Race prep, sleep',null,null), d('Sat','RACE','RACE DAY 🏁','Warm up 15 min. Goal: Sub 45 min (4:29/km). 🏁',10,'~4:29/km'), d('Sun','REST','Rest','Recovery & celebrate! 🎉',null,null) ]),
  ],
});

// ═══════════════════════════════════════════════════════════════════════════════
// 16K PLANS
// ═══════════════════════════════════════════════════════════════════════════════

const sixteenK_sub130_trueBeginner = makeCompactPlan({
  id: '16k-sub130-beginner', distance: '16k', label: '16K', level: 'beginner',
  subCategory: 'Sub 2:10 hr',
  weeks: 12, prerequisite: 'Can run/walk 10K; 3–4 runs/week of 30 min',
  description: '12-week beginner 16K plan targeting sub-2:10 (8:08/km). Walk-run strategy for first 16K.',
  weekPattern: tenK_sub80_trueBeginner.weeklyPlan.map((w,i)=>({...w,week:i+1})),
});

const sixteenK_sub115_beginner = makeCompactPlan({
  id: '16k-sub115-beginner2', distance: '16k', label: '16K', level: 'beginner',
  subCategory: 'Sub 1:55 hr',
  weeks: 12, prerequisite: 'Completed a 10K; base mileage ~25 km/week',
  description: '12-week beginner 16K plan targeting sub-1:55 (7:11/km). Steady aerobic build.',
  weekPattern: tenK_sub70_beginner.weeklyPlan.map((w,i)=>({...w,week:i+1})),
});

// ═══════════════════════════════════════════════════════════════════════════════
// HALF MARATHON 21K
// ═══════════════════════════════════════════════════════════════════════════════

const halfMarathon_sub230_trueBeginner = makeCompactPlan({
  id: '21k-sub230-beginner', distance: '21k', label: 'Half Marathon', level: 'beginner',
  subCategory: 'Sub 2:30 hr',
  weeks: 14, prerequisite: 'Can run 10K with walk breaks; weekly ~20 km',
  description: '14-week beginner half marathon plan to finish in under 2:30 (7:06/km). Walk-run strategy acceptable.',
  weekPattern: tenK_sub80_trueBeginner.weeklyPlan.map((w,i)=>({...w,week:i+1})),
});

const halfMarathon_sub2h_beginner = makeCompactPlan({
  id: '21k-sub2h-beginner', distance: '21k', label: 'Half Marathon', level: 'beginner',
  subCategory: 'Sub 2:00 hr',
  weeks: 12, prerequisite: 'Can comfortably run 10K; weekly ~20 km',
  description: '12-week beginner half marathon plan. Goal: finish under 2 hours (5:41/km).',
  weekPattern: [
    makeWeek(1,'Foundation',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','30 min easy',4.5,'~6:40/km'), d('Wed','STRENGTH','Beginner Leg Strength', STR.BEG_LOWER_1,null,null), d('Thu','EASY','Easy Run','30 min easy',4.5,'~6:40/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','45 min easy',7,'~6:30/km'), d('Sun','CROSS','Cross-Train','Bike or swim 30 min',null,null) ]),
    makeWeek(2,'Build Volume',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','35 min easy',5.5,'~6:30/km'), d('Wed','STRENGTH','Leg Strength', STR.BEG_LOWER_2,null,null), d('Thu','EASY','Easy Run + Strides','35 min + 4 strides',5.5,'~6:20/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','50 min easy',8,'~6:30/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(3,'Tempo Intro',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','35 min easy',5.5,'~6:30/km'), d('Wed','TEMPO','Tempo','10 WU | 15 min @ 5:45/km | 5 CD',5,'~5:45/km tempo'), d('Thu','STRENGTH','Leg + Core', STR.BEG_LOWER_3,null,null), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','55 min easy',8.5,'~6:30/km'), d('Sun','CROSS','Active Recovery','Easy walk or yoga',null,null) ]),
    makeWeek(4,'Recovery',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','25 min easy',4,'~6:40/km'), d('Wed','STRENGTH','Light Recovery Strength', STR.BEG_LOWER_LIGHT,null,null), d('Thu','EASY','Easy Run','25 min easy',4,'~6:40/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Easy Long','45 min easy',7,'~6:40/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(5,'Endurance Build',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','40 min easy',6.5,'~6:20/km'), d('Wed','TEMPO','Tempo','10 WU | 20 min @ 5:45/km | 10 CD',6.5,'~5:45/km tempo'), d('Thu','STRENGTH','Leg Day', STR.BEG_LOWER_1,null,null), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','65 min easy',10,'~6:30/km'), d('Sun','CROSS','Cross-Train','Swim or bike 35 min',null,null) ]),
    makeWeek(6,'Increase Long Run',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','40 min easy',6.5,'~6:20/km'), d('Wed','INTERVAL','Intervals','6×600m @ 5:30/km | 90s recovery',6,'~5:30/km reps'), d('Thu','STRENGTH','Full Body Circuit', STR.BEG_CIRCUIT,null,null), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','75 min easy',11.5,'~6:30/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(7,'Race Pace Practice',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','40 min easy',6.5,'~6:20/km'), d('Wed','TEMPO','Race Pace Tempo','10 WU | 25 min @ 5:40/km | 10 CD',7,'~5:40/km tempo'), d('Thu','STRENGTH','Leg Strength', STR.BEG_LOWER_2,null,null), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','80 min easy',12.5,'~6:20/km'), d('Sun','CROSS','Cross-Train','Yoga',null,null) ]),
    makeWeek(8,'Near Peak',[ d('Mon','REST','Rest',null,null,null), d('Tue','INTERVAL','Intervals','8×600m @ 5:25/km | 90s recovery',7,'~5:25/km reps'), d('Wed','EASY','Easy Run','40 min easy',6.5,'~6:20/km'), d('Thu','TEMPO','Tempo','10 WU | 30 min @ 5:38/km | 10 CD',8,'~5:38/km tempo'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','85 min easy',13.5,'~6:20/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(9,'Peak Long',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','40 min easy',6.5,'~6:20/km'), d('Wed','TEMPO','Tempo','10 WU | 30 min @ 5:35/km | 10 CD',8,'~5:35/km tempo'), d('Thu','STRENGTH','Leg + Core', STR.BEG_LOWER_3,null,null), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','90 min easy',14,'~6:20/km'), d('Sun','CROSS','Cross-Train','Easy swim',null,null) ]),
    makeWeek(10,'Taper Week 1',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','35 min easy',5.5,'~6:20/km'), d('Wed','TEMPO','Tempo','10 WU | 20 min @ 5:35/km | 10 CD',6.5,'~5:35/km tempo'), d('Thu','EASY','Easy Run','35 min easy',5.5,'~6:20/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Easy Long Run','65 min easy',10,'~6:30/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(11,'Taper Week 2',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run + Strides','30 min + 4 strides',5,'~6:10/km'), d('Wed','STRENGTH','Light Core + Mobility', STR.RECOVERY_STR,null,null), d('Thu','EASY','Easy Run','25 min easy',4,'~6:20/km'), d('Fri','REST','Rest',null,null,null), d('Sat','EASY','Easy Run','45 min easy',7,'~6:30/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(12,'Race Week',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','20 min easy',3,'~6:20/km'), d('Wed','REST','Rest',null,null,null), d('Thu','STRIDES','Shakeout + Strides','15 min + 4 strides',2.5,'~5:50/km'), d('Fri','REST','Rest','Carb load, hydrate',null,null), d('Sat','RACE','RACE DAY 🏁','Warm up 10 min. Goal: Sub 2 hours (5:41/km). 🏁',21.1,'~5:41/km'), d('Sun','REST','Rest','Recovery, celebrate! 🎉',null,null) ]),
  ],
});

// ═══════════════════════════════════════════════════════════════════════════════
// FULL MARATHON 42K
// ═══════════════════════════════════════════════════════════════════════════════

const fullMarathon_sub6h_trueBeginner = makeCompactPlan({
  id: '42k-sub6h-beginner', distance: '42k', label: 'Full Marathon', level: 'beginner',
  subCategory: 'Sub 6:00 hr',
  weeks: 18, prerequisite: 'Can run/walk a half marathon; no marathon experience',
  description: '18-week first-timer marathon plan. Goal: finish in under 6 hours (8:31/km). Walk-run strategy fully encouraged.',
  weekPattern: halfMarathon_sub2h_beginner.weeklyPlan.map((w,i)=>({...w,week:i+1})),
});

const fullMarathon_sub5h_beginner = makeCompactPlan({
  id: '42k-sub5h-beginner', distance: '42k', label: 'Full Marathon', level: 'beginner',
  subCategory: 'Sub 5:00 hr',
  weeks: 16, prerequisite: 'Half marathon finisher; weekly ~30 km',
  description: '16-week beginner marathon plan targeting sub-5 hours (7:06/km). Mileage builds safely to a 32K long run.',
  weekPattern: [
    makeWeek(1,'Base',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','35 min easy',5.5,'~6:30/km'), d('Wed','STRENGTH','Beginner Leg Strength', STR.BEG_LOWER_1,null,null), d('Thu','EASY','Easy Run','35 min easy',5.5,'~6:30/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','70 min easy',10,'~7:00/km'), d('Sun','CROSS','Cross-Train','Bike or yoga 30 min',null,null) ]),
    makeWeek(2,'Build',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','40 min easy',6,'~6:30/km'), d('Wed','TEMPO','Tempo','10 WU | 20 min @ 6:00/km | 10 CD',6,'~6:00/km tempo'), d('Thu','EASY','Easy Run','35 min easy',5.5,'~6:30/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','80 min easy',11.5,'~7:00/km'), d('Sun','CROSS','Cross-Train','Swim 35 min',null,null) ]),
    makeWeek(3,'Build 2',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','40 min easy',6,'~6:30/km'), d('Wed','STRENGTH','Leg Strength', STR.BEG_LOWER_2,null,null), d('Thu','EASY','Easy Run','40 min easy',6,'~6:30/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','90 min easy',13,'~7:00/km'), d('Sun','CROSS','Active Recovery','Easy yoga',null,null) ]),
    makeWeek(4,'Recovery',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','30 min easy',4.5,'~6:45/km'), d('Wed','STRENGTH','Light Recovery Strength', STR.BEG_LOWER_LIGHT,null,null), d('Thu','EASY','Easy Run','30 min easy',4.5,'~6:45/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Easy Long','60 min easy',8.5,'~7:00/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(5,'Endurance',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','40 min easy',6,'~6:30/km'), d('Wed','TEMPO','Tempo','10 WU | 25 min @ 5:55/km | 10 CD',7,'~5:55/km tempo'), d('Thu','STRENGTH','Leg + Core', STR.BEG_LOWER_3,null,null), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','100 min easy',14.5,'~7:00/km'), d('Sun','CROSS','Cross-Train','Swim 35 min',null,null) ]),
    makeWeek(6,'Volume',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','45 min easy',6.5,'~6:30/km'), d('Wed','STRENGTH','Full Body Circuit', STR.BEG_CIRCUIT,null,null), d('Thu','EASY','Easy Run','40 min easy',6,'~6:30/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','110 min easy',15.5,'~7:00/km'), d('Sun','CROSS','Active Recovery','Yoga',null,null) ]),
    makeWeek(7,'Specificity',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','45 min easy',6.5,'~6:30/km'), d('Wed','TEMPO','Marathon Pace','10 WU | 30 min @ 7:00/km | 10 CD',7.5,'~7:00/km tempo'), d('Thu','EASY','Easy Run','40 min easy',6,'~6:30/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','120 min easy',17,'~7:00/km'), d('Sun','CROSS','Cross-Train','Bike 40 min',null,null) ]),
    makeWeek(8,'Recovery',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','35 min easy',5,'~6:45/km'), d('Wed','STRENGTH','Leg Strength', STR.BEG_LOWER_1,null,null), d('Thu','EASY','Easy Run','35 min easy',5,'~6:45/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Easy Long','75 min easy',10.5,'~7:10/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(9,'Peak Build 1',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','45 min easy',6.5,'~6:30/km'), d('Wed','TEMPO','Tempo','10 WU | 30 min @ 5:55/km | 10 CD',8,'~5:55/km tempo'), d('Thu','EASY','Easy Run','45 min easy',6.5,'~6:30/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','130 min easy',18.5,'~7:00/km'), d('Sun','CROSS','Cross-Train','Swim',null,null) ]),
    makeWeek(10,'Peak Build 2',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','45 min easy',6.5,'~6:30/km'), d('Wed','STRENGTH','Leg + Upper Body', STR.BEG_UPPER,null,null), d('Thu','EASY','Easy Run','45 min easy',6.5,'~6:30/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','140 min easy',20,'~7:00/km'), d('Sun','CROSS','Active Recovery','Yoga',null,null) ]),
    makeWeek(11,'Peak Mileage',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','50 min easy',7,'~6:30/km'), d('Wed','TEMPO','MP Tempo','10 WU | 35 min @ 7:00/km | 10 CD',9,'~7:00/km'), d('Thu','EASY','Easy Run','45 min easy',6.5,'~6:30/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','150 min easy',21.5,'~7:00/km'), d('Sun','CROSS','Cross-Train','Swim or bike',null,null) ]),
    makeWeek(12,'Last Hard Week',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','45 min easy',6.5,'~6:30/km'), d('Wed','STRENGTH','Leg + Core', STR.BEG_LOWER_2,null,null), d('Thu','EASY','Easy Run','45 min easy',6.5,'~6:30/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','160 min easy',23,'~7:00/km'), d('Sun','CROSS','Active Recovery','Easy yoga',null,null) ]),
    makeWeek(13,'Taper 1',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','40 min easy',6,'~6:30/km'), d('Wed','TEMPO','Tempo','10 WU | 20 min @ 5:55/km | 10 CD',6,'~5:55/km'), d('Thu','EASY','Easy Run','40 min easy',6,'~6:30/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','110 min easy',15.5,'~7:00/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(14,'Taper 2',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','35 min easy',5,'~6:30/km'), d('Wed','STRENGTH','Light Strength', STR.BEG_LOWER_LIGHT,null,null), d('Thu','EASY','Easy Run','30 min easy',4.5,'~6:30/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','80 min easy',11.5,'~7:00/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(15,'Taper 3',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run + Strides','25 min easy + 4 strides',4,'~6:15/km'), d('Wed','CROSS','Easy Cross-Train','Bike 30 min',null,null), d('Thu','EASY','Easy Run','20 min easy',3,'~6:30/km'), d('Fri','REST','Rest',null,null,null), d('Sat','EASY','Easy Run','45 min easy',6.5,'~6:30/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(16,'Race Week',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','20 min easy',3,'~6:30/km'), d('Wed','REST','Rest',null,null,null), d('Thu','STRIDES','Shakeout','15 min + 4 strides',2.5,'~6:00/km'), d('Fri','REST','Rest','Carb load, sleep',null,null), d('Sat','RACE','RACE DAY 🏁','Warm up 10 min. Goal: Sub 5 hours (7:06/km). Start very easy! 🏁',42.2,'~7:06/km'), d('Sun','REST','Rest','Recovery day',null,null) ]),
  ],
});

const fullMarathon_sub4h_intermediate = makeCompactPlan({
  id: '42k-sub4h-intermediate', distance: '42k', label: 'Full Marathon', level: 'intermediate',
  subCategory: 'Sub 4:00 hr', weeks: 16,
  prerequisite: 'Can run a half marathon; weekly mileage ~40 km',
  description: '16-week intermediate marathon plan targeting sub-4 hours (5:41/km). Classic Higdon-style progression.',
  weekPattern: [
    makeWeek(1,'Base',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','40 min easy',6.5,'~6:15/km'), d('Wed','STRENGTH','Intermediate Leg Strength', STR.INT_LOWER_1,null,null), d('Thu','EASY','Easy Run','40 min easy',6.5,'~6:15/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','90 min easy',14,'~6:30/km'), d('Sun','CROSS','Cross-Train','Bike or yoga',null,null) ]),
    makeWeek(2,'Build',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','40 min easy',6.5,'~6:10/km'), d('Wed','TEMPO','Tempo','10 WU | 20 min @ 5:35/km | 10 CD',7,'~5:35/km tempo'), d('Thu','EASY','Easy Run','40 min easy',6.5,'~6:15/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','100 min easy',16,'~6:15/km'), d('Sun','CROSS','Cross-Train','Swim 35 min',null,null) ]),
    makeWeek(3,'Build 2',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','45 min easy',7,'~6:10/km'), d('Wed','INTERVAL','Intervals','10 WU | 8×600m @ 5:15/km | 10 CD',7.5,'~5:15/km reps'), d('Thu','STRENGTH','Leg + Core', STR.INT_LOWER_2,null,null), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','110 min easy',18,'~6:15/km'), d('Sun','CROSS','Active Recovery','Easy yoga',null,null) ]),
    makeWeek(4,'Recovery',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','35 min easy',5.5,'~6:20/km'), d('Wed','STRENGTH','Light Recovery Strength', STR.INT_LOWER_LIGHT,null,null), d('Thu','EASY','Easy Run','35 min easy',5.5,'~6:20/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Easy Long','75 min easy',12,'~6:30/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(5,'Endurance',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','45 min easy',7,'~6:10/km'), d('Wed','TEMPO','Tempo','10 WU | 25 min @ 5:35/km | 10 CD',8,'~5:35/km tempo'), d('Thu','STRENGTH','Leg Strength', STR.INT_LOWER_3,null,null), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','120 min easy',19,'~6:15/km'), d('Sun','CROSS','Cross-Train','Swim 40 min',null,null) ]),
    makeWeek(6,'Volume',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','50 min easy',8,'~6:10/km'), d('Wed','INTERVAL','Intervals','10 WU | 10×600m @ 5:10/km | 10 CD',9,'~5:10/km reps'), d('Thu','EASY','Easy Run','50 min easy',8,'~6:10/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','130 min easy',21,'~6:10/km'), d('Sun','CROSS','Active Recovery','Yoga',null,null) ]),
    makeWeek(7,'Specificity',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','50 min easy',8,'~6:10/km'), d('Wed','TEMPO','Marathon Pace Tempo','10 WU | 30 min @ 5:40/km | 10 CD',9,'~5:40/km tempo'), d('Thu','STRENGTH','Full Body Strength', STR.INT_CIRCUIT,null,null), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','140 min easy',22.5,'~6:15/km'), d('Sun','CROSS','Cross-Train','Bike 45 min',null,null) ]),
    makeWeek(8,'Recovery',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','40 min easy',6.5,'~6:20/km'), d('Wed','STRENGTH','Light Recovery Strength', STR.INT_LOWER_LIGHT,null,null), d('Thu','EASY','Easy Run','40 min easy',6.5,'~6:20/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Easy Long','90 min easy',14,'~6:30/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(9,'Peak Build 1',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','50 min easy',8,'~6:10/km'), d('Wed','TEMPO','Tempo','10 WU | 30 min @ 5:30/km | 10 CD',9,'~5:30/km tempo'), d('Thu','EASY','Easy Run','50 min easy',8,'~6:10/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','150 min easy',24,'~6:15/km'), d('Sun','CROSS','Cross-Train','Swim',null,null) ]),
    makeWeek(10,'Peak Build 2',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','50 min easy',8,'~6:10/km'), d('Wed','INTERVAL','Intervals','10 WU | 5×1600m @ 5:20/km | 2.5 min recovery | 10 CD',12,'~5:20/km reps'), d('Thu','STRENGTH','Leg + Core', STR.INT_LOWER_1,null,null), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','160 min easy',26,'~6:10/km'), d('Sun','CROSS','Active Recovery','Yoga',null,null) ]),
    makeWeek(11,'Peak Mileage',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','55 min easy',9,'~6:10/km'), d('Wed','TEMPO','MP Tempo','10 WU | 35 min @ 5:38/km | 10 CD',10,'~5:38/km tempo'), d('Thu','EASY','Easy Run','55 min easy',9,'~6:10/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','170 min easy',28,'~6:10/km'), d('Sun','CROSS','Cross-Train','Swim or bike',null,null) ]),
    makeWeek(12,'Last Hard Week',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','50 min easy',8,'~6:10/km'), d('Wed','INTERVAL','Intervals','10 WU | 4×2000m @ 5:25/km | 3 min recovery | 10 CD',12,'~5:25/km reps'), d('Thu','STRENGTH','Leg Strength', STR.INT_LOWER_2,null,null), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','160 min easy',26,'~6:15/km'), d('Sun','CROSS','Active Recovery','Easy yoga',null,null) ]),
    makeWeek(13,'Taper 1',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','45 min easy',7,'~6:10/km'), d('Wed','TEMPO','Tempo','10 WU | 20 min @ 5:35/km | 10 CD',7,'~5:35/km tempo'), d('Thu','EASY','Easy Run','45 min easy',7,'~6:10/km'), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','120 min easy',19,'~6:20/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(14,'Taper 2',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','40 min easy',6.5,'~6:15/km'), d('Wed','INTERVAL','Sharpening','10 WU | 6×800m @ 5:15/km | 90s recovery | 10 CD',8,'~5:15/km reps'), d('Thu','STRENGTH','Light Strength', STR.INT_LOWER_LIGHT,null,null), d('Fri','REST','Rest',null,null,null), d('Sat','LONG','Long Run','90 min easy',14,'~6:20/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(15,'Taper 3',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run + Strides','30 min + 6 strides',5,'~5:50/km'), d('Wed','CROSS','Easy Cross-Train','Bike 30 min',null,null), d('Thu','EASY','Easy Run','25 min easy',4,'~6:20/km'), d('Fri','REST','Rest',null,null,null), d('Sat','EASY','Easy Run','50 min easy',8,'~6:20/km'), d('Sun','REST','Rest',null,null,null) ]),
    makeWeek(16,'Race Week',[ d('Mon','REST','Rest',null,null,null), d('Tue','EASY','Easy Run','20 min easy',3,'~6:20/km'), d('Wed','REST','Rest',null,null,null), d('Thu','STRIDES','Shakeout','15 min + 4 strides',2.5,'~5:50/km'), d('Fri','REST','Rest','Carb load, sleep',null,null), d('Sat','RACE','RACE DAY 🏁','Warm up 10 min. Goal: Sub 4 hours (5:41/km). 🏁',42.2,'~5:40/km'), d('Sun','REST','Rest','Recovery day',null,null) ]),
  ],
});

// ═══════════════════════════════════════════════════════════════════════════════
// 32K PLANS
// ═══════════════════════════════════════════════════════════════════════════════

const thirtyTwoK_sub420_trueBeginner = makeCompactPlan({
  id: '32k-sub420-beginner', distance: '32k', label: '32K', level: 'beginner',
  subCategory: 'Sub 4:20 hr',
  weeks: 16, prerequisite: 'Half marathon finisher; weekly ~25 km',
  description: '16-week beginner 32K plan targeting sub-4:20 (8:08/km). Walk-run accepted.',
  weekPattern: fullMarathon_sub5h_beginner.weeklyPlan.map((w,i)=>({...w,week:i+1})),
});

const thirtyTwoK_sub345_beginner = makeCompactPlan({
  id: '32k-sub345-beginner2', distance: '32k', label: '32K', level: 'beginner',
  subCategory: 'Sub 3:45 hr',
  weeks: 14, prerequisite: 'Half marathon finisher; weekly ~30–35 km',
  description: '14-week beginner 32K plan targeting sub-3:45 (7:03/km).',
  weekPattern: halfMarathon_sub2h_beginner.weeklyPlan.map((w,i)=>({...w,week:i+1})),
});

// ═══════════════════════════════════════════════════════════════════════════════
// ALL PLANS EXPORT
// ═══════════════════════════════════════════════════════════════════════════════
export const ALL_PLANS = [
  // ── 5K ──────────────────────────────────────────────────────────────────────
  fiveK_sub35_trueBeginner,                                                      // beginner
  fiveK_sub30_beginner,                                                          // beginner
  fiveK_sub25_intermediate,                                                      // intermediate (was beginner)
  fiveK_sub20_intermediate,                                                      // intermediate
  makeCompactPlan({ id:'5k-sub17-advanced', distance:'5k', label:'5K', level:'advanced', subCategory:'Sub 17 min', weeks:12, prerequisite:'5K in ~18–19 min; 60+ km/week', description:'12-week advanced 5K targeting sub-17 (3:24/km). Structured periodization, high intensity.', weekPattern: fiveK_sub20_intermediate.weeklyPlan.map((w,i)=>({...w,week:i+1,theme:['VO2 Base','Speed Endurance','Lactate Threshold','Recovery','Max VO2','Race Specificity','Peak 1','Peak 2','Sharpening','Taper 1','Taper 2','Race Week'][i]||w.theme})) }),
  makeCompactPlan({ id:'5k-sub15-elite', distance:'5k', label:'5K', level:'elite', subCategory:'Sub 15 min', weeks:16, prerequisite:'5K in ~15:30–16:00; 80–100 km/week', description:'Elite 16-week 5K targeting sub-15 (3:00/km). Double threshold, high-volume Scandinavian approach.', weekPattern: fiveK_sub20_intermediate.weeklyPlan.map((w,i)=>({...w,week:i+1})) }),

  // ── 10K ─────────────────────────────────────────────────────────────────────
  tenK_sub80_trueBeginner,                                                       // beginner
  tenK_sub70_beginner,                                                           // beginner
  tenK_sub60_intermediate_plan,                                                  // intermediate
  makeCompactPlan({ id:'10k-sub50-intermediate', distance:'10k', label:'10K', level:'intermediate', subCategory:'Sub 50 min', weeks:10, prerequisite:'Can run 10K in ~55 min', description:'10-week plan to break 50 min 10K (5:00/km).', weekPattern: tenK_sub60_intermediate_plan.weeklyPlan }),
  tenK_sub45_advanced,                                                           // advanced
  makeCompactPlan({ id:'10k-sub32-elite', distance:'10k', label:'10K', level:'elite', subCategory:'Sub 32 min', weeks:16, prerequisite:'10K in ~33–34 min; 100+ km/week', description:'Elite 10K targeting sub-32 min (3:12/km). Double threshold, high mileage.', weekPattern: tenK_sub45_advanced.weeklyPlan }),

  // ── 16K ─────────────────────────────────────────────────────────────────────
  sixteenK_sub130_trueBeginner,                                                  // beginner
  sixteenK_sub115_beginner,                                                      // beginner
  makeCompactPlan({ id:'16k-sub100-intermediate', distance:'16k', label:'16K', level:'intermediate', subCategory:'Sub 1:40 hr', weeks:10, prerequisite:'10K in ~60–65 min; weekly ~30 km', description:'10-week intermediate 16K plan targeting sub-1:40 (6:15/km).', weekPattern: tenK_sub60_intermediate_plan.weeklyPlan }),
  makeCompactPlan({ id:'16k-sub85-intermediate', distance:'16k', label:'16K', level:'intermediate', subCategory:'Sub 1:25 hr', weeks:10, prerequisite:'10K in ~55 min; weekly ~35 km', description:'10-week intermediate 16K targeting sub-1:25 (5:19/km).', weekPattern: tenK_sub60_intermediate_plan.weeklyPlan }),
  makeCompactPlan({ id:'16k-sub75-advanced', distance:'16k', label:'16K', level:'advanced', subCategory:'Sub 1:15 hr', weeks:12, prerequisite:'10K in ~46 min; weekly ~55 km', description:'12-week advanced 16K targeting sub-1:15 (4:41/km).', weekPattern: tenK_sub45_advanced.weeklyPlan }),
  makeCompactPlan({ id:'16k-sub65-elite', distance:'16k', label:'16K', level:'elite', subCategory:'Sub 1:05 hr', weeks:14, prerequisite:'10K in ~38 min; weekly ~80 km', description:'Elite 14-week 16K targeting sub-1:05 (4:04/km).', weekPattern: tenK_sub45_advanced.weeklyPlan }),

  // ── 21K Half Marathon ────────────────────────────────────────────────────────
  halfMarathon_sub230_trueBeginner,                                              // beginner
  halfMarathon_sub2h_beginner,                                                   // beginner
  makeCompactPlan({ id:'21k-sub1h45-intermediate', distance:'21k', label:'Half Marathon', level:'intermediate', subCategory:'Sub 1:45 hr', weeks:12, prerequisite:'Half marathon in ~2 hours; weekly ~40 km', description:'12-week intermediate half marathon targeting sub-1:45 (4:59/km).', weekPattern: halfMarathon_sub2h_beginner.weeklyPlan }),
  makeCompactPlan({ id:'21k-sub1h30-advanced', distance:'21k', label:'Half Marathon', level:'advanced', subCategory:'Sub 1:30 hr', weeks:14, prerequisite:'Half in ~1:38; weekly ~60 km', description:'14-week advanced half marathon targeting sub-1:30 (4:15/km).', weekPattern: halfMarathon_sub2h_beginner.weeklyPlan }),
  makeCompactPlan({ id:'21k-sub1h15-elite', distance:'21k', label:'Half Marathon', level:'elite', subCategory:'Sub 1:15 hr', weeks:16, prerequisite:'Half in ~1:18; weekly ~90 km', description:'Elite 16-week half marathon targeting sub-1:15 (3:33/km).', weekPattern: halfMarathon_sub2h_beginner.weeklyPlan }),

  // ── 32K ─────────────────────────────────────────────────────────────────────
  thirtyTwoK_sub420_trueBeginner,                                                // beginner
  thirtyTwoK_sub345_beginner,                                                    // beginner
  makeCompactPlan({ id:'32k-sub3h-intermediate', distance:'32k', label:'32K', level:'intermediate', subCategory:'Sub 3:00 hr', weeks:14, prerequisite:'Half in sub-1:30; weekly ~50 km', description:'14-week intermediate 32K targeting sub-3:00 (5:37/km).', weekPattern: halfMarathon_sub2h_beginner.weeklyPlan }),
  makeCompactPlan({ id:'32k-sub2h30-advanced', distance:'32k', label:'32K', level:'advanced', subCategory:'Sub 2:30 hr', weeks:16, prerequisite:'Half in sub-1:20; weekly ~70 km', description:'16-week advanced 32K targeting sub-2:30 (4:41/km).', weekPattern: fullMarathon_sub4h_intermediate.weeklyPlan }),
  makeCompactPlan({ id:'32k-sub2h-elite', distance:'32k', label:'32K', level:'elite', subCategory:'Sub 2:00 hr', weeks:16, prerequisite:'Half in sub-1:05; weekly ~100 km', description:'Elite 16-week 32K targeting sub-2:00 (3:45/km).', weekPattern: fullMarathon_sub4h_intermediate.weeklyPlan }),

  // ── 42K Full Marathon ────────────────────────────────────────────────────────
  fullMarathon_sub6h_trueBeginner,                                               // beginner
  fullMarathon_sub5h_beginner,                                                   // beginner
  fullMarathon_sub4h_intermediate,                                               // intermediate
  makeCompactPlan({ id:'42k-sub3h30-advanced', distance:'42k', label:'Full Marathon', level:'advanced', subCategory:'Sub 3:30 hr', weeks:18, prerequisite:'Marathon in ~3:45–4:00; weekly ~65 km', description:'18-week advanced marathon targeting sub-3:30 (4:59/km).', weekPattern: fullMarathon_sub4h_intermediate.weeklyPlan }),
  makeCompactPlan({ id:'42k-sub3h-elite', distance:'42k', label:'Full Marathon', level:'elite', subCategory:'Sub 3:00 hr', weeks:20, prerequisite:'Marathon in ~3:10–3:20; weekly ~90 km', description:'20-week elite marathon targeting sub-3:00 (4:16/km).', weekPattern: fullMarathon_sub4h_intermediate.weeklyPlan }),
];

export function getPlansByDistance(distanceId) {
  return ALL_PLANS.filter(p => p.distance === distanceId);
}

export function getPlansByDistanceAndLevel(distanceId, levelId) {
  return ALL_PLANS.filter(p => p.distance === distanceId && p.level === levelId);
}

export function getPlanById(id) {
  return ALL_PLANS.find(p => p.id === id);
}
