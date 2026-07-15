# COCOMO Estimates for Focus Master

The Constructive Cost Model (COCOMO) is an algorithmic software cost estimation model. This document presents the effort and schedule estimates for the **Focus Master** project using the three variants of the COCOMO model: Basic, Intermediate, and Detailed.

## Project Size Estimation

The project consists of HTML, CSS, JavaScript, and configuration files. 
- **Estimated Lines of Code (LOC):** ~440 lines
- **Kilo Lines of Code (KLOC):** 0.44

Given the small size, simple requirements, and small team size, this project falls strictly under the **Organic** development mode.

---

## 1. Basic COCOMO

The Basic COCOMO model estimates software development effort (and cost) as a function of program size expressed in estimated lines of code.

**Organic Mode Formulas:**
- **Effort (E):** `E = a * (KLOC)^b` (Person-Months)
- **Development Time (Tdev):** `Tdev = c * (E)^d` (Months)
- **Average Staffing (S):** `S = E / Tdev` (Persons)

**Constants for Organic Mode:** 
`a = 2.4`, `b = 1.05`, `c = 2.5`, `d = 0.38`

**Calculation:**
- `E = 2.4 * (0.44)^1.05 ≈ 1.03` Person-Months
- `Tdev = 2.5 * (1.03)^0.38 ≈ 2.53` Months
- `Staff = 1.03 / 2.53 ≈ 0.40` Persons (Part-time developer)

---

## 2. Intermediate COCOMO

The Intermediate COCOMO model computes software development effort as a function of program size and a set of "cost drivers" that include subjective assessments of product, hardware, personnel, and project attributes.

**Organic Mode Formulas:**
- **Effort (E):** `E = a * (KLOC)^b * EAF` (Person-Months)
- **Development Time (Tdev):** `Tdev = c * (E)^d` (Months)

**Constants for Organic Mode:**
`a = 3.2`, `b = 1.05`

**Effort Adjustment Factor (EAF):**
Assuming nominal values for all 15 cost drivers (e.g., product complexity, programmer capability, tool usage), the EAF evaluates to `1.0`.

**Calculation:**
- `E = 3.2 * (0.44)^1.05 * 1.0 ≈ 1.37` Person-Months
- `Tdev = 2.5 * (1.37)^0.38 ≈ 2.81` Months
- `Staff = 1.37 / 2.81 ≈ 0.49` Persons

---

## 3. Detailed COCOMO

The Detailed COCOMO model incorporates all characteristics of the intermediate version with an assessment of the cost driver's impact on each step of the software engineering process. It breaks the project down into phases: Requirements, Product Design, Detailed Design, Code/Unit Test, and Integration/Test.

For an Organic project, the typical phase effort distribution is roughly:
- **Product Design:** 16%
- **Detailed Design:** 26%
- **Code & Unit Test:** 42%
- **Integration & Test:** 16%

Using the Intermediate Effort (E = 1.37 Person-Months) and Phase multipliers adjusted for specific cost drivers (assuming nominal):

**Phase Effort Breakdown (in Person-Months):**
- **Product Design:** `1.37 * 0.16 = 0.22 PM`
- **Detailed Design:** `1.37 * 0.26 = 0.36 PM`
- **Code & Unit Test:** `1.37 * 0.42 = 0.57 PM`
- **Integration & Test:** `1.37 * 0.16 = 0.22 PM`

**Phase Schedule Breakdown (in Months):**
Using Tdev = 2.81 Months, the schedule distributes approximately as:
- **Product Design:** `2.81 * 0.19 = 0.53 Months`
- **Programming (Detailed Design + Code):** `2.81 * 0.63 = 1.77 Months`
- **Integration & Test:** `2.81 * 0.18 = 0.51 Months`


---

## 4. Cost Estimation in USD (3 Flavors)

To translate the estimated effort (Person-Months) into actual financial cost in USD, we multiply the Effort by an average Monthly Developer Burdened Rate. Below are three different "flavors" of pricing scenarios based on typical market rates.

*(Calculations are based on the Intermediate/Detailed effort estimate of **1.37 Person-Months**)*

### Flavor 1: Budget / Freelance Rate
Assuming you hire an independent freelancer or a developer in a lower-cost region.
- **Estimated Monthly Rate:** $5,000 / Month
- **Total Estimated Cost:** 1.37 PM * $5,000 = **$6,850**

### Flavor 2: Nominal / Mid-Level Agency
Assuming you hire a standard mid-level developer or a boutique development agency in the US/EU.
- **Estimated Monthly Rate:** $10,000 / Month
- **Total Estimated Cost:** 1.37 PM * $10,000 = **$13,700**

### Flavor 3: Premium / Enterprise Firm
Assuming you hire a premium enterprise-grade software development firm with high overhead.
- **Estimated Monthly Rate:** $20,000 / Month
- **Total Estimated Cost:** 1.37 PM * $20,000 = **$27,400**

*(If using the **Basic COCOMO** estimate of 1.03 PM, the costs would be exactly $5,150, $10,300, and $20,600 respectively).*
