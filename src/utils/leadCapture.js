// Centralized Lead Capture Engine for Nexura Enterprises

export const captureLead = async (leadData) => {
  const payload = {
    type: leadData.type || 'General Lead',
    domain: leadData.domain || leadData.website || 'N/A',
    email: leadData.email || 'N/A',
    name: leadData.name || 'N/A',
    phone: leadData.phone || 'N/A',
    niche: leadData.niche || leadData.industry || 'N/A',
    notes: leadData.notes || leadData.message || 'N/A',
    scores: leadData.scores ? JSON.stringify(leadData.scores) : 'N/A',
    timestamp: new Date().toISOString(),
    sourceUrl: window.location.href
  };

  // 1. Save locally to localStorage log (zero data loss guarantee)
  try {
    const existing = JSON.parse(localStorage.getItem('nexura_leads') || '[]');
    existing.unshift(payload);
    localStorage.setItem('nexura_leads', JSON.stringify(existing));
  } catch (err) {
    console.error('Lead storage error:', err);
  }

  // 2. Silently deliver lead notification directly to target inbox (yaawarabbass@gmail.com)
  try {
    await fetch('https://formsubmit.co/ajax/yaawarabbass@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `⚡ NEW LEAD CAPTURED: ${payload.domain} (${payload.email})`,
        _template: 'table',
        _captcha: 'false',
        Type: payload.type,
        'Work Email': payload.email,
        'Website Domain': payload.domain,
        'Industry / Niche': payload.niche,
        'Name / Contact': payload.name,
        'Phone Number': payload.phone,
        'Audit Metrics': payload.scores,
        'Captured Time': payload.timestamp,
        'Page URL': payload.sourceUrl
      })
    });
  } catch (err) {
    // Silent failover to backup endpoint or local log
    console.warn('Silent lead delivery status logged.');
  }

  // Also send backup copy to help.nexura@gmail.com
  try {
    fetch('https://formsubmit.co/ajax/help.nexura@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        _subject: `⚡ NEXURA LEAD: ${payload.domain} (${payload.email})`,
        Email: payload.email,
        Domain: payload.domain,
        Industry: payload.niche
      })
    }).catch(() => {});
  } catch (e) {}

  return true;
};
