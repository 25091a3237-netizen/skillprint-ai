// SkillPrint AI - Dynamic Skill Evidence Score (SES) Engine
// Implements mathematical scoring model for evidence-based capability verification
// All calculations are reactive, dynamic, and exclude unauthorised evidence items

window.SES_ENGINE = {
  // Compute overall candidate SES across authorized evidence
  computeCandidateSES: function(evidenceList, weights) {
    const authorized = (evidenceList || []).filter(item => item.isAuthorized !== false);
    
    if (authorized.length === 0) {
      return {
        sesScore: 0,
        diversity: 0,
        performance: 0,
        recency: 0,
        relevance: 0,
        authorizedCount: 0,
        totalCount: (evidenceList || []).length,
        level: "Unverified (Consent Required)",
        badgeClass: "sap-badge-red"
      };
    }

    // 1. Evidence Diversity (0 - 100): Coverage across 5 evidence categories
    // [Projects, Certifications, Assessments, Hackathons, Portfolio]
    const categories = new Set(authorized.map(e => e.category));
    const allCategoriesCount = 5;
    const diversity = Math.min(100, Math.round((categories.size / allCategoriesCount) * 100));

    // 2. Demonstrated Performance (0 - 100): Average verified score across evidence
    const avgPerf = authorized.reduce((acc, curr) => acc + (Number(curr.performanceScore) || 75), 0) / authorized.length;
    const performance = Math.min(100, Math.round(avgPerf));

    // 3. Recency (0 - 100): Decay function based on months elapsed
    // 0 months = 100, 3 months = 85, 6 months = 70, 12 months = 45
    const avgRecency = authorized.reduce((acc, curr) => {
      const months = Math.max(0, Number(curr.recencyMonths) || 0);
      const score = Math.max(20, Math.round(100 * Math.exp(-0.06 * months)));
      return acc + score;
    }, 0) / authorized.length;
    const recency = Math.min(100, Math.round(avgRecency));

    // 4. Role Relevance (0 - 100): Average relevance alignment score
    const avgRel = authorized.reduce((acc, curr) => acc + (Number(curr.relevanceScore) || 80), 0) / authorized.length;
    const relevance = Math.min(100, Math.round(avgRel));

    // Normalize weights to ensure they sum to 1.0 even if sliders are adjusted
    const wDiv = Number(weights.diversity) || 0.25;
    const wPerf = Number(weights.performance) || 0.35;
    const wRec = Number(weights.recency) || 0.20;
    const wRel = Number(weights.relevance) || 0.20;
    const totalW = (wDiv + wPerf + wRec + wRel) || 1.0;

    const weightedScore = (diversity * (wDiv / totalW)) +
                          (performance * (wPerf / totalW)) +
                          (recency * (wRec / totalW)) +
                          (relevance * (wRel / totalW));

    const finalSES = Math.min(100, Math.max(0, Math.round(weightedScore)));

    // Derive Proficiency Tier & Fiori badge color
    let level = "Foundational";
    let badgeClass = "sap-badge-orange";
    if (finalSES >= 85) {
      level = "Advanced Practitioner";
      badgeClass = "sap-badge-green";
    } else if (finalSES >= 70) {
      level = "Intermediate Practitioner";
      badgeClass = "sap-badge-blue";
    } else if (finalSES >= 50) {
      level = "Developing Practitioner";
      badgeClass = "sap-badge-teal";
    }

    return {
      sesScore: finalSES,
      diversity,
      performance,
      recency,
      relevance,
      authorizedCount: authorized.length,
      totalCount: (evidenceList || []).length,
      categoriesCount: categories.size,
      level,
      badgeClass
    };
  },

  // Compute Skill-specific SES score
  computeSkillSES: function(skillName, evidenceList, weights) {
    const authorized = (evidenceList || []).filter(item => {
      if (item.isAuthorized === false) return false;
      if (!item.skillsDemonstrated) return false;
      return item.skillsDemonstrated.some(s => s.toLowerCase() === skillName.toLowerCase());
    });

    if (authorized.length === 0) {
      return {
        sesScore: 0,
        evidenceCount: 0,
        proficiency: "Unverified",
        confidence: 0,
        roleRelevance: 0,
        badgeClass: "sap-badge-red"
      };
    }

    // Categories demonstrated for this specific skill
    const categories = new Set(authorized.map(e => e.category));
    const diversity = Math.min(100, Math.round((categories.size / 4) * 100)); // normalized out of 4 for individual skill
    const avgPerf = authorized.reduce((acc, curr) => acc + (Number(curr.performanceScore) || 75), 0) / authorized.length;
    const performance = Math.min(100, Math.round(avgPerf));

    const avgRecency = authorized.reduce((acc, curr) => {
      const months = Math.max(0, Number(curr.recencyMonths) || 0);
      return acc + Math.max(20, Math.round(100 * Math.exp(-0.06 * months)));
    }, 0) / authorized.length;
    const recency = Math.min(100, Math.round(avgRecency));

    const avgRel = authorized.reduce((acc, curr) => acc + (Number(curr.relevanceScore) || 80), 0) / authorized.length;
    const relevance = Math.min(100, Math.round(avgRel));

    const wDiv = Number(weights.diversity) || 0.25;
    const wPerf = Number(weights.performance) || 0.35;
    const wRec = Number(weights.recency) || 0.20;
    const wRel = Number(weights.relevance) || 0.20;
    const totalW = (wDiv + wPerf + wRec + wRel) || 1.0;

    const weightedScore = (diversity * (wDiv / totalW)) +
                          (performance * (wPerf / totalW)) +
                          (recency * (wRec / totalW)) +
                          (relevance * (wRel / totalW));

    const finalSES = Math.min(100, Math.max(0, Math.round(weightedScore)));
    
    // Confidence increases with evidence count and performance consistency
    const confidence = Math.min(98, Math.round(75 + (authorized.length * 4) + (performance * 0.1)));

    let proficiency = "Beginner";
    let badgeClass = "sap-badge-orange";
    if (finalSES >= 85 && authorized.length >= 2) {
      proficiency = "Advanced";
      badgeClass = "sap-badge-green";
    } else if (finalSES >= 68) {
      proficiency = "Intermediate";
      badgeClass = "sap-badge-blue";
    }

    return {
      sesScore: finalSES,
      diversity,
      performance,
      recency,
      relevance,
      evidenceCount: authorized.length,
      proficiency,
      confidence,
      roleRelevance: relevance,
      badgeClass
    };
  },

  // Calculate Match Score between candidate skills and target role
  calculateRoleMatch: function(candidateSkills, roleRequirements) {
    if (!roleRequirements || !roleRequirements.length) return 75;
    
    let weightedSum = 0;
    let totalWeight = 0;

    roleRequirements.forEach(req => {
      const match = candidateSkills.find(s => s.name.toLowerCase() === req.name.toLowerCase());
      const skillScore = match ? (match.sesScore || 80) : 35; // Default penalty for missing skill
      weightedSum += skillScore * req.weight;
      totalWeight += req.weight;
    });

    const matchPercent = Math.round(weightedSum / (totalWeight || 1));
    return Math.min(100, Math.max(10, matchPercent));
  }
};
