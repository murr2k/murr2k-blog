---
title: "Part XIII: Open Questions"
chapter: 13
revision: "26"
date: 2025-12-01
summary: "Unsolved problems in PSK"
---

PSK does not claim completeness. Several areas remain undeveloped or unresolved:

Mathematical Formalization

The conceptual framework requires rigorous mathematical development. The equations presented are preliminary. Full derivation of standard results (Newtonian gravity, relativistic effects, quantum mechanical predictions) from PSK postulates remains to be completed.

Galaxy Rotation Curves: A Formation Signature, Not a Dynamical Puzzle

The standard approach to galaxy rotation curves asks: \"Given a static mass distribution, what orbital velocities should we observe?\" When observed velocities don't match Keplerian predictions, dark matter is invoked to provide the missing gravitational pull.

PSK reframes the question entirely. The flat rotation curve is not a puzzle requiring additional mass. It is a formation signature --- the expected outcome of how galaxies emerged from primordial contiguity.

**The Standard Framing (and its problem):**

Assume a galaxy is matter orbiting in a gravitational potential. Apply Newtonian dynamics: v² = GM(r)/r. For visible mass concentrated toward the center, velocity should fall off as v ∝ 1/√r at large radii. It doesn't. Outer stars orbit at the same velocity as inner stars. Conclusion: there must be invisible mass (dark matter halo) with M(r) ∝ r to produce flat curves.

**The PSK Reframing:**

Galaxies did not form by matter falling into a gravitational potential and settling into orbits. They emerged from the critical density transition approximately 4.6 billion years ago, when primordial contiguous plasma first achieved spatial separation.

At the critical threshold:

> • Matter that had been contiguous began to separate
>
> • Separation was not uniform --- it was chaotic, producing clumps (proto-galaxies) and voids
>
> • Each clump carried initial momentum, angular momentum, and internal velocity structure
>
> • These initial conditions were correlated because the matter had been contiguous --- neighboring regions had similar velocities
>
> • The system has been evolving under wake interactions ever since, but has not \"forgotten\" its initial conditions

**Why Flat Rotation Curves Are Expected:**

A spiral galaxy is not matter orbiting a central mass. It is matter that emerged already moving, with correlated initial velocities inherited from contiguity, still equilibrating 4.6 billion years later.

When matter separates from a contiguous state, the initial velocity field is not Keplerian. There is no central mass that everything \"falls toward.\" Instead, the entire structure expands and rotates together, with velocities determined by the separation dynamics --- possibly describable by Lagrangian fluid mechanics --- not by orbits in a pre-existing potential.

Over time, wake interactions (coalescence) modify this initial velocity field, pulling matter toward density concentrations. But the outer regions, where wake gradients are weakest, retain more of their initial velocity structure. The result: inner regions show steeper velocity gradients (stronger wake modification), outer regions show flat curves (initial conditions preserved).

**The Prediction:**

Flat rotation curves are not anomalous. They are the natural signature of galaxy formation from primordial contiguity. The question is not \"what force keeps outer stars moving so fast?\" but \"what initial conditions at separation, plus 4.6 billion years of wake-mediated evolution, produce what we observe today?\"

This predicts that rotation curve shapes should correlate with formation history --- galaxies that experienced more mergers or stronger wake interactions should show more Keplerian-like curves, while relatively undisturbed galaxies should show flatter curves. It also predicts that the Tully-Fisher relation (mass-velocity correlation) emerges from separation dynamics, not from dark matter halo properties.

**Mathematical Development Required:**

Formalizing this picture requires:

> 1\. A Lagrangian dynamics model for matter separating from contiguity at ρ_critical
>
> 2\. Initial velocity field correlations inherited from the contiguous state
>
> 3\. Evolution under wake interactions (coalescence) over 4.6 billion years
>
> 4\. Comparison of predicted rotation curves to observed data across galaxy types

This remains to be developed. But the conceptual reframing is clear: flat rotation curves are a formation signature, not evidence of missing mass. Dark matter is a solution to a problem that only exists if you assume galaxies are equilibrium systems in gravitational potentials. PSK suggests they are not --- they are still-evolving structures carrying the imprint of their emergence from primordial contiguity.

**Research Program:**

To move from conceptual framework to testable theory, the following research program is proposed:

**Phase 1: Formalize the Separation Model**

Develop a toy model of matter emerging from contiguous plasma at ρ_critical. Using Lagrangian or fluid mechanics frameworks, model clumps separating with density fluctuations seeding their formation. Generate initial velocity fields as output. Key questions: What distribution of velocities emerges? How are velocity correlations set by density gradients? Can plausible phase separation dynamics produce velocity fields that match observed proto-galactic structure?

**Phase 2: Model Wake-Mediated Evolution**

Taking the initial conditions from Phase 1, evolve the system under wake interactions. Model how coalescence (wake-gradient-following) alters trajectories over time. Define the coalescence field dynamically based on matter distribution. Include divergence as the persistent background. Track angular momentum redistribution through internal wake interactions. Key questions: How does the velocity field evolve over 4.6 billion years? Does the system stabilize, disperse, or collapse? What prevents net expansion without classical gravitational binding?

**Phase 3: Extract and Compare Rotation Curves**

From the evolved system at t = 4.6 Gyr, extract rotation curves: orbital velocity versus radius. Compare to observed rotation curves from real galaxies --- not just the Milky Way, but dwarf galaxies, giant ellipticals, and galaxies with varying formation histories. Key questions: Do the predicted curves match observations? Do they naturally produce flat outer regions and steeper inner regions? Does the model reproduce the Tully-Fisher relation? Where does it fail, and what does failure reveal about the framework?

**Simulation Goals:**

A computational simulation implementing this research program would:

> 1\. Initialize with contiguous or nearly-contiguous matter distribution
>
> 2\. Apply separation dynamics at the critical density threshold
>
> 3\. Evolve under wake-mediated coalescence and background divergence
>
> 4\. Output rotation curves at various time steps
>
> 5\. Compare quantitatively to observed galactic data

Even a toy version of this simulation would represent a significant advance, transforming PSK from an interpretive framework into a quantitatively testable theory. Success would validate the formation-signature hypothesis; failure would reveal where the framework requires modification or must be abandoned.

**Critical Mathematical Gaps:**

The research program outlined above requires mathematical development that this treatise does not yet provide. Three gaps are critical:

**1. The initial velocity field.** PSK claims that matter emerged from contiguity with correlated velocities. But what distribution of velocities? Derived from what dynamics? A plausible Lagrangian model of phase separation at ρ_critical should produce a specific velocity field as output --- not as assumption. Until this derivation exists, \"correlated initial velocities\" remains assertion rather than prediction. Even a toy model showing that reasonable phase-separation dynamics produce galaxy-like velocity structure would substantially strengthen the framework.

**2. The coalescence field.** PSK describes wake-mediated coalescence reshaping the velocity field over time. But how exactly? How does the coalescence effect scale with distance? How do wakes from multiple masses superimpose --- linearly or nonlinearly? Is there a closed-form expression for the coalescence acceleration at a point, given the surrounding matter distribution? Without answers to these questions, \"wake interactions\" is a metaphor, not a mechanism. The coalescence field must be defined mathematically before evolution can be modeled.

**3. Dimensional consistency.** The treatise speaks of densification rate c, divergence, coalescence, and wake gradients --- but rarely with units, constants, or dimensionally consistent equations. A complete theory requires expressions where quantities can be computed: acceleration in m/s², energy in joules, forces that balance. The conceptual vocabulary must be translated into the language of calculable physics. This translation is not yet complete.

These gaps are not hidden or minimized. They represent the frontier between conceptual framework and quantitative theory. Readers with expertise in Lagrangian dynamics, fluid mechanics, or gravitational physics may find productive ground here. The framework is offered not as a finished theory but as a starting point --- a set of postulates and interpretations that, if correct, should yield to mathematical formalization.

The test is clear: derive the velocity field, define the coalescence mathematics, build the simulation, extract rotation curves, and compare to observations. If the curves match without dark matter, PSK will have earned serious consideration. If they do not, the framework will require revision or abandonment. Either outcome advances understanding.

The Uncertainty Principle

PSK has not yet developed an interpretation of Heisenberg uncertainty. It may emerge as a geometric constraint on simultaneous state-sharing relationships, but this remains speculative.

Parity Violation

The weak force violates parity symmetry---it distinguishes left from right handedness. If PSK's densification is truly isotropic, where does this handedness originate? This may be relational (emerging from the geometric relationship between decaying nucleus and measurement apparatus) rather than fundamental, but the question is unresolved.

Neutrino Flavors

Standard physics identifies three neutrino types (electron, muon, tau) that oscillate between flavors. If neutrinos are mapping errors in volumetric equilibrium, why would there be exactly three types? This may connect to three-dimensionality of space or three aspects of the equilibrium, but the connection is speculative.

The Hubble Constant from First Principles

PSK suggests H should be derivable from c and the geometry of densification, perhaps through the CMB temperature. This derivation has not been achieved. If successful, it would eliminate H as an independent empirical parameter.

Quantitative Gravitomagnetic Predictions

Part III addresses frame dragging and gravitational waves conceptually: wakes inherit the motion characteristics of the matter creating them. What remains is quantitative verification. Can PSK reproduce the precise frame-dragging measurements from Gravity Probe B? Can it predict gravitational wave frequencies and amplitudes matching LIGO observations? The framework is established; the mathematical derivations connecting wake dynamics to specific observables remain to be developed.

Lagrangian Dynamics of Primordial Separation

How did primordial contiguous matter differentiate into discrete structures at the density threshold? This question is now central to PSK's explanation of galaxy dynamics.

When matter separated from contiguity at ρ_critical, the separation was not uniform. Density fluctuations in the primordial plasma --- present from the eternal past, not created by inflation --- seeded the formation of clumps and voids. But unlike standard cosmology, where these fluctuations grow via gravitational collapse, PSK sees structure emerging via separation dynamics.

A Lagrangian fluid dynamics framework may describe this process: contiguous matter separating into discrete parcels, each carrying momentum, angular momentum, and internal velocity structure inherited from the contiguous state. The key insight is that neighboring parcels have correlated velocities because they were recently contiguous. This correlation produces the coherent rotation of proto-galaxies --- not from later gravitational capture, but from shared origin.

This framework would explain:

> • Why galaxies rotate coherently (inherited from contiguous state)
>
> • Why rotation curves are flat (initial velocity field, not equilibrium orbits)
>
> • Why the cosmic web has filaments and voids (separation geometry)
>
> • Why galaxy properties correlate with environment (shared formation history)

Developing this Lagrangian model is perhaps the most important open problem in PSK. It connects galaxy rotation curves, cosmic structure, and the nature of the critical density transition into a unified dynamical picture.

Quantitative Nuclear Physics

Can PSK reproduce the precise binding energies of nuclei, the mass ratios of particles, and the coupling constants from geometric first principles? Can \"color charge\" and gluon exchange be translated into density-field geometry? Does PSK predict asymptotic freedom? These questions require substantial mathematical development.